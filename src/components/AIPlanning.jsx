import { useState, useEffect, useRef } from 'react'
import {
  Sparkles, MapPin, Clock, Heart, User, Calendar,
  DollarSign, Send, CheckCircle, ArrowLeft, Bot,
  CornerDownLeft, MessageSquare, ChevronDown
} from 'lucide-react'
import { useApp } from '../contexts/AppContext'

// ── OpenRouter API ──────────────────────────────────────────────────────────
async function callOpenRouter(messages) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
  if (!apiKey || apiKey.includes('your_')) throw new Error('NO_KEY')

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'VietLocal Travel Planner',
    },
    body: JSON.stringify({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: `You are VietLocal AI — an expert Vietnam travel planner and local guide assistant.
Your job is to create EXTREMELY DETAILED, personalized travel itineraries for Vietnam.

ALWAYS include in your plans:
- Hour-by-hour schedule for each day
- Specific hotel recommendations with real addresses and booking links (booking.com, agoda.com)
- Specific restaurant names with real addresses and Google Maps links
  Format EXACTLY like this for every place:
  📍 [Full address, City]
  🔗 Google Maps: https://www.google.com/maps/search/?api=1&query=Place+Name+City+Vietnam
  🔗 Website: https://booking.com or official site (for hotels)
- Specific attraction names with addresses and Google Maps links
- Exact transportation details (Grab, xe om, bus routes, prices)
- Real price estimates in VND for every activity, meal, hotel
- Weather tips, best time to visit each spot
- Local tips only locals would know
- Safety tips and common scams to avoid

FORMAT your response with clear sections using emojis.
For every specific place (hotel, restaurant, attraction), ALWAYS include:
  📍 Address
  🔗 Link (Google Maps or official website)
  💰 Price estimate

Respond in the SAME LANGUAGE the user writes in (Vietnamese or English).
After the plan, invite them to ask follow-up questions.`
        },
        ...messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.text }))
      ],
      temperature: 0.8,
      max_tokens: 4000,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${res.status}`)
  }
  const data = await res.json()
  return data.choices?.[0]?.message?.content || ''
}

// ── Markdown renderer ───────────────────────────────────────────────────────
// Convert any raw address/place text into clickable Google Maps link
function makeMapLink(place) {
  const query = encodeURIComponent(place.trim())
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

function renderMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code style="background:#F0EBE0;padding:2px 6px;border-radius:4px;font-size:0.85em">$1</code>')
    .replace(/^#### (.+)$/gm, '<h5 style="color:var(--green);margin:12px 0 4px;font-size:0.95rem;font-weight:700">$1</h5>')
    .replace(/^### (.+)$/gm, '<h4 style="color:var(--green);margin:16px 0 6px;font-family:var(--font-display);font-size:1.1rem">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 style="color:var(--green);margin:20px 0 8px;font-family:var(--font-display);font-size:1.3rem">$1</h3>')
    .replace(/^# (.+)$/gm, '<h2 style="color:var(--green);margin:0 0 16px;font-family:var(--font-display);font-size:1.5rem">$1</h2>')
    .replace(/^- (.+)$/gm, '<li style="margin:5px 0;padding-left:4px;line-height:1.6">$1</li>')
    .replace(/(<li.*?<\/li>\n?)+/gs, s => `<ul style="padding-left:18px;margin:8px 0">${s}</ul>`)
    // Fix broken maps.google.com URLs → proper search URL
    .replace(/https?:\/\/maps\.google\.com\/\?q=([^\s)"<\n]+)/g,
      (_, q) => `https://www.google.com/maps/search/?api=1&query=${q}`)
    // Render [text](url) markdown links
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--green);text-decoration:underline;font-weight:600">$1 ↗</a>')
    // Auto-link bare https:// URLs
    .replace(/(?<!href=\"|">)(https?:\/\/[^\s<"\n]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" style="color:var(--green-light);font-size:0.82em;text-decoration:underline;word-break:break-all">$1 ↗</a>')
    // 📍 lines → green Maps button
    .replace(/📍([^<\n]{4,100})/g, (_, addr) => {
      const clean = addr.replace(/<[^>]+>/g, '').trim()
      const url = makeMapLink(clean)
      return `📍<span style="color:var(--text-mid)">${addr}</span><a href="${url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:3px;background:var(--green);color:white;padding:2px 10px;border-radius:50px;font-size:0.72em;text-decoration:none;font-weight:700;vertical-align:middle;margin-left:6px;white-space:nowrap">🗺 Xem bản đồ ↗</a>`
    })
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
}

// ── Quick suggestion chips ──────────────────────────────────────────────────
const SUGGESTIONS = {
  en: [
    'Best hotels under 500k VND 🏨',
    'Top street food spots 🍜',
    'How to get around by Grab 🛵',
    'Hidden gems only locals know 💎',
    'Budget breakdown for the trip 💰',
    'Best time to visit each place ☀️',
    'Day trip options nearby 🗺️',
    'Safety tips & scams to avoid ⚠️',
  ],
  vi: [
    'Khách sạn tốt dưới 500k VNĐ 🏨',
    'Quán ăn đường phố ngon nhất 🍜',
    'Đi lại bằng Grab thế nào 🛵',
    'Địa điểm ít người biết 💎',
    'Chi tiết ngân sách cả chuyến 💰',
    'Thời điểm đẹp nhất để đến 🌤️',
    'Địa điểm đi trong ngày gần đó 🗺️',
    'Mẹo an toàn & tránh bị lừa ⚠️',
  ]
}

// ── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function AIPlanning() {
  const { t, lang, setShowPayment, setCurrentPlan, showToast, user, setShowLogin } = useApp()

  const [phase, setPhase] = useState('form') // 'form' | 'chat'
  const [form, setForm] = useState({
    destination: '',
    duration: '',
    interests: '',
    guideReq: '',
    guideTime: '',
    budget: '',
    freeNote: '', // ← ô miêu tả tự do
  })

  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showAllSuggestions, setShowAllSuggestions] = useState(false)
  const chatEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const handler = (e) => setForm(f => ({ ...f, destination: e.detail }))
    window.addEventListener('heroSearch', handler)
    return () => window.removeEventListener('heroSearch', handler)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const setF = (k, v) => setForm(f => ({ ...f, [k]: v }))

  // ── Generate first plan ─────────────────────────────────────────────────
  const handleSubmitForm = async () => {
    if (!form.destination || !form.duration) {
      showToast(lang === 'en' ? '⚠️ Please fill in destination and duration.' : '⚠️ Vui lòng nhập điểm đến và thời gian.')
      return
    }
    setPhase('chat')
    setLoading(true)

    const prompt = lang === 'vi'
      ? `Tôi muốn lên kế hoạch du lịch chi tiết với thông tin sau:

📍 Điểm đến: ${form.destination}
⏱ Thời gian: ${form.duration}
❤️ Sở thích & ẩm thực: ${form.interests || 'tham quan và ẩm thực địa phương'}
👤 Yêu cầu hướng dẫn viên: ${form.guideReq || 'hướng dẫn viên thân thiện nói tiếng Anh'}
📅 Thời gian cần guide: ${form.guideTime || 'cả ngày'}
💰 Ngân sách: ${form.budget || 'trung bình 1-2 triệu VNĐ/ngày'}
${form.freeNote ? `\n✏️ Ghi chú thêm: ${form.freeNote}` : ''}

Hãy tạo lịch trình CỰC KỲ CHI TIẾT từng giờ cho tôi. Bao gồm tên khách sạn thật, nhà hàng thật, địa chỉ cụ thể và link Google Maps cho từng địa điểm.`
      : `Please create an EXTREMELY DETAILED travel itinerary for me:

📍 Destination: ${form.destination}
⏱ Duration: ${form.duration}
❤️ Interests & food: ${form.interests || 'sightseeing and local food'}
👤 Guide requirements: ${form.guideReq || 'friendly English-speaking local guide'}
📅 Guide duration: ${form.guideTime || 'full day'}
💰 Budget: ${form.budget || 'moderate 1-2 million VND/day'}
${form.freeNote ? `\n✏️ Special notes: ${form.freeNote}` : ''}

Create a VERY DETAILED hour-by-hour itinerary. Include real hotel names, real restaurants, specific addresses and Google Maps links for every single place.`

    const userMsg = { role: 'user', text: prompt, display: lang === 'vi'
      ? `📍 Lên kế hoạch: ${form.destination} – ${form.duration}${form.freeNote ? ` • "${form.freeNote}"` : ''}`
      : `📍 Planning: ${form.destination} – ${form.duration}${form.freeNote ? ` • "${form.freeNote}"` : ''}`,
      time: new Date() }

    setMessages([userMsg])

    try {
      const reply = await callOpenRouter([{ role: 'user', text: prompt }])
      setMessages([userMsg, { role: 'assistant', text: reply, time: new Date() }])
    } catch (err) {
      const errMsg = err.message === 'NO_KEY'
        ? (lang === 'vi'
            ? '⚠️ Chưa có OpenRouter API key. Mở file `.env` và thêm:\n\n`VITE_OPENROUTER_API_KEY=sk-or-v1-...`\n\nLấy key miễn phí tại: https://openrouter.ai/keys'
            : '⚠️ No OpenRouter API key found. Open `.env` and add:\n\n`VITE_OPENROUTER_API_KEY=sk-or-v1-...`\n\nGet a free key at: https://openrouter.ai/keys')
        : (lang === 'vi'
            ? `⚠️ Lỗi kết nối AI: ${err.message}\n\nVui lòng kiểm tra API key và thử lại.`
            : `⚠️ AI connection error: ${err.message}\n\nPlease check your API key and try again.`)
      setMessages([userMsg, { role: 'assistant', text: errMsg, time: new Date() }])
    }
    setLoading(false)
  }

  // ── Follow-up chat ──────────────────────────────────────────────────────
  const handleSend = async (overrideText) => {
    const text = overrideText || input.trim()
    if (!text || loading) return
    const userMsg = { role: 'user', text, display: text, time: new Date() }
    const newHistory = [...messages, userMsg]
    setMessages(newHistory)
    setInput('')
    setLoading(true)
    inputRef.current?.focus()

    try {
      const reply = await callOpenRouter(newHistory)
      setMessages(prev => [...prev, { role: 'assistant', text: reply, time: new Date() }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: lang === 'vi'
          ? `⚠️ Lỗi kết nối: ${err.message}`
          : `⚠️ Connection error: ${err.message}`,
        time: new Date()
      }])
    }
    setLoading(false)
  }

  const handleBook = () => {
    if (!user) { setShowLogin(true); return }
    const lastPlan = messages.filter(m => m.role === 'assistant').pop()
    setCurrentPlan({ ...form, plan: lastPlan?.text })
    setShowPayment(true)
  }

  const handleReset = () => { setPhase('form'); setMessages([]); setInput('') }

  const suggestions = (lang === 'vi' ? SUGGESTIONS.vi : SUGGESTIONS.en)
  const visibleSuggestions = showAllSuggestions ? suggestions : suggestions.slice(0, 4)

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section id="ai-section" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label">✨ AI-Powered</div>
          <h2 className="section-title">{t.ai.title}</h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 520, margin: '0 auto' }}>{t.ai.subtitle}</p>
        </div>

        {/* ── PHASE 1: FORM ───────────────────────────────────────────── */}
        {phase === 'form' && (
          <div style={{ maxWidth: 740, margin: '0 auto' }}>
            <div style={{
              background: 'white', borderRadius: 24, padding: '40px 44px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #EDE8E0',
            }}>
              {/* Grid fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { key: 'destination', label: t.ai.destination, ph: t.ai.destinationPh, icon: <MapPin size={15}/>, col: 2 },
                  { key: 'duration',    label: t.ai.duration,    ph: t.ai.durationPh,    icon: <Clock size={15}/>,   col: 1 },
                  { key: 'budget',      label: t.ai.budget,      ph: t.ai.budgetPh,      icon: <DollarSign size={15}/>, col: 1 },
                  { key: 'interests',   label: t.ai.interests,   ph: t.ai.interestsPh,   icon: <Heart size={15}/>,   col: 2 },
                  { key: 'guideReq',    label: t.ai.guideReq,    ph: t.ai.guideReqPh,    icon: <User size={15}/>,    col: 1 },
                  { key: 'guideTime',   label: t.ai.guideTime,   ph: t.ai.guideTimePh,   icon: <Calendar size={15}/>, col: 1 },
                ].map(f => (
                  <div key={f.key} style={{ gridColumn: `span ${f.col}` }}>
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--green-light)' }}>{f.icon}</span>{f.label}
                    </label>
                    <input
                      className="form-input"
                      value={form[f.key]}
                      onChange={e => setF(f.key, e.target.value)}
                      placeholder={f.ph}
                      onKeyDown={e => e.key === 'Enter' && handleSubmitForm()}
                    />
                  </div>
                ))}

                {/* Ô miêu tả tự do - span full width, ở cuối */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: 'var(--green-light)' }}><MessageSquare size={15}/></span>
                    {lang === 'vi' ? 'Mô tả thêm về chuyến đi mơ ước của bạn' : 'Describe your dream trip (anything else you want)'}
                  </label>
                  <textarea
                    className="form-input"
                    value={form.freeNote}
                    onChange={e => setF('freeNote', e.target.value)}
                    placeholder={lang === 'vi'
                      ? 'VD: Tôi muốn có 1 ngày chỉ ngồi cà phê và đọc sách, không muốn đi quá nhiều nơi. Thích ăn đồ chay. Đi cùng bạn gái nên muốn có những chỗ lãng mạn...'
                      : 'E.g. I want one slow morning just for coffee and people-watching. Prefer vegetarian food. Traveling with my girlfriend so romantic spots would be great...'}
                    rows={3}
                    style={{ resize: 'vertical', lineHeight: 1.6 }}
                  />
                </div>
              </div>

              <button onClick={handleSubmitForm} style={{
                width: '100%', marginTop: 28,
                background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
                color: 'white', border: 'none', borderRadius: 14,
                padding: '17px', fontWeight: 700, fontSize: '1rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10, fontFamily: 'var(--font-body)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity='0.92'; e.currentTarget.style.transform='translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='' }}
              >
                <Sparkles size={18}/> {t.ai.generate}
              </button>

              <p style={{ textAlign:'center', marginTop:14, fontSize:'0.78rem', color:'var(--text-light)' }}>
                {lang === 'vi'
                  ? '🤖 Powered by OpenRouter · Gemini 2.0 Flash · Kế hoạch chi tiết đến từng giờ'
                  : '🤖 Powered by OpenRouter · Gemini 2.0 Flash · Hour-by-hour detailed plans'}
              </p>
            </div>

            {/* How it works */}
            <div style={{ marginTop: 56, textAlign: 'center' }}>
              <div className="section-label" style={{ marginBottom: 28 }}>{t.steps.title}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
                {[
                  { num:'01', emoji:'✏️', title: t.steps.s1t, desc: t.steps.s1d },
                  { num:'02', emoji:'🤖', title: t.steps.s2t, desc: t.steps.s2d },
                  { num:'03', emoji:'💬', title: lang==='vi'?'Trò chuyện & Tinh chỉnh':'Chat & Refine',
                    desc: lang==='vi'?'Hỏi thêm, điều chỉnh kế hoạch thoải mái.':'Ask follow-ups and adjust freely.' },
                  { num:'04', emoji:'✅', title: t.steps.s4t, desc: t.steps.s4d },
                ].map((s,i) => (
                  <div key={i} style={{
                    background:'white', borderRadius:16, padding:'24px 18px',
                    border:'1px solid #EDE8E0', position:'relative', overflow:'hidden',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-3px)'}
                  onMouseLeave={e => e.currentTarget.style.transform=''}
                  >
                    <div style={{ fontSize:28, marginBottom:10 }}>{s.emoji}</div>
                    <div style={{ position:'absolute', top:8, right:12, fontFamily:'var(--font-display)', fontSize:'2.5rem', color:'var(--cream-dark)', fontWeight:700, lineHeight:1 }}>{s.num}</div>
                    <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', color:'var(--green)', marginBottom:6 }}>{s.title}</h3>
                    <p style={{ color:'var(--text-light)', fontSize:'0.8rem', lineHeight:1.5 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── PHASE 2: CHAT ───────────────────────────────────────────── */}
        {phase === 'chat' && (
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{
              background: 'white', borderRadius: 24,
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #EDE8E0',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              height: 680,
            }}>

              {/* Chat header */}
              <div style={{
                background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
                padding: '14px 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:36, height:36, borderRadius:'50%', background:'rgba(255,255,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Bot size={18} color="white"/>
                  </div>
                  <div>
                    <div style={{ color:'white', fontWeight:700, fontSize:'0.9rem' }}>VietLocal AI</div>
                    <div style={{ color:'rgba(255,255,255,0.7)', fontSize:'0.72rem', display:'flex', alignItems:'center', gap:4 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background:'#4ADE80', display:'inline-block' }}/>
                      OpenRouter · Gemini 2.0 Flash
                    </div>
                  </div>
                </div>
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <div style={{ background:'rgba(255,255,255,0.15)', borderRadius:50, padding:'4px 12px', fontSize:'0.75rem', color:'rgba(255,255,255,0.9)', display:'flex', alignItems:'center', gap:5 }}>
                    <MapPin size={10}/> {form.destination} · {form.duration}
                  </div>
                  <button onClick={handleReset} style={{
                    background:'rgba(255,255,255,0.15)', border:'none', borderRadius:8,
                    padding:'6px 12px', color:'white', fontSize:'0.75rem',
                    cursor:'pointer', display:'flex', alignItems:'center', gap:4,
                    fontFamily:'var(--font-body)',
                  }}>
                    <ArrowLeft size={12}/> {lang==='vi'?'Kế hoạch mới':'New plan'}
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex:1, overflowY:'auto', padding:'20px 24px 8px', display:'flex', flexDirection:'column', gap:18 }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{ display:'flex', flexDirection: msg.role==='user'?'row-reverse':'row', gap:10, alignItems:'flex-start' }}>
                    {/* Avatar */}
                    <div style={{
                      width:30, height:30, borderRadius:'50%', flexShrink:0,
                      background: msg.role==='assistant' ? 'var(--green)' : 'var(--gold)',
                      display:'flex', alignItems:'center', justifyContent:'center', color:'white',
                    }}>
                      {msg.role==='assistant' ? <Bot size={14}/> : <span style={{fontSize:'0.7rem'}}>👤</span>}
                    </div>

                    {/* Bubble */}
                    <div style={{
                      maxWidth: msg.role==='assistant' ? '88%' : '72%',
                      background: msg.role==='assistant' ? '#F7F4EE' : 'var(--green)',
                      color: msg.role==='assistant' ? 'var(--text-dark)' : 'white',
                      borderRadius: msg.role==='assistant' ? '4px 18px 18px 18px' : '18px 4px 18px 18px',
                      padding: '13px 17px',
                      fontSize: '0.875rem', lineHeight: 1.75,
                    }}>
                      {msg.role === 'assistant'
                        ? <div dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}/>
                        : <span>{msg.display || msg.text}</span>
                      }
                      <div style={{ fontSize:'0.68rem', marginTop:5, opacity:0.45, textAlign:'right' }}>
                        {msg.time?.toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                    <div style={{ width:30, height:30, borderRadius:'50%', background:'var(--green)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <Bot size={14} color="white"/>
                    </div>
                    <div style={{ background:'#F7F4EE', borderRadius:'4px 18px 18px 18px', padding:'14px 20px', display:'flex', gap:5, alignItems:'center' }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{
                          width:7, height:7, borderRadius:'50%', background:'var(--green-light)',
                          animation:'pulse 1.2s ease infinite', animationDelay:`${i*0.2}s`,
                        }}/>
                      ))}
                      <span style={{ marginLeft:8, fontSize:'0.78rem', color:'var(--text-light)' }}>
                        {lang==='vi' ? 'AI đang lên kế hoạch chi tiết...' : 'AI is crafting your detailed plan...'}
                      </span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef}/>
              </div>

              {/* Quick suggestions */}
              {messages.length >= 2 && !loading && (
                <div style={{ padding:'8px 16px 4px', flexShrink:0 }}>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {visibleSuggestions.map((s,i) => (
                      <button key={i} onClick={() => handleSend(s)} style={{
                        background:'var(--cream)', border:'1px solid #DDD8CC',
                        borderRadius:50, padding:'5px 13px',
                        fontSize:'0.76rem', cursor:'pointer', color:'var(--text-mid)',
                        transition:'all 0.15s', fontFamily:'var(--font-body)',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background='var(--green)'; e.currentTarget.style.color='white'; e.currentTarget.style.borderColor='var(--green)' }}
                      onMouseLeave={e => { e.currentTarget.style.background='var(--cream)'; e.currentTarget.style.color='var(--text-mid)'; e.currentTarget.style.borderColor='#DDD8CC' }}
                      >{s}</button>
                    ))}
                    <button onClick={() => setShowAllSuggestions(!showAllSuggestions)} style={{
                      background:'none', border:'1px dashed #CCC', borderRadius:50,
                      padding:'5px 12px', fontSize:'0.76rem', cursor:'pointer',
                      color:'var(--text-light)', fontFamily:'var(--font-body)',
                      display:'flex', alignItems:'center', gap:3,
                    }}>
                      <ChevronDown size={11} style={{ transform: showAllSuggestions?'rotate(180deg)':'', transition:'transform 0.2s' }}/>
                      {showAllSuggestions ? (lang==='vi'?'Ẩn bớt':'Less') : (lang==='vi'?'Xem thêm':'More')}
                    </button>
                  </div>
                </div>
              )}

              {/* Book button */}
              {messages.filter(m=>m.role==='assistant').length >= 1 && !loading && (
                <div style={{ padding:'4px 16px 4px', display:'flex', justifyContent:'flex-end', flexShrink:0 }}>
                  <button onClick={handleBook} style={{
                    background:'var(--gold)', color:'white', border:'none',
                    borderRadius:50, padding:'8px 20px', fontWeight:700,
                    fontSize:'0.82rem', cursor:'pointer',
                    display:'flex', alignItems:'center', gap:6,
                    fontFamily:'var(--font-body)', transition:'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity='0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity='1'}
                  >
                    <CheckCircle size={14}/> {t.ai.bookNow}
                  </button>
                </div>
              )}

              {/* Input bar */}
              <div style={{ padding:'10px 14px 14px', borderTop:'1px solid #EDE8E0', flexShrink:0 }}>
                <div style={{ display:'flex', gap:8 }}>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key==='Enter' && !e.shiftKey && handleSend()}
                    placeholder={lang==='vi'
                      ? 'Hỏi thêm: điều chỉnh kế hoạch, gợi ý nhà hàng, khách sạn, đi lại...'
                      : 'Ask anything: adjust plan, suggest restaurants, hotels, transport...'}
                    style={{
                      flex:1, padding:'11px 16px',
                      border:'1.5px solid #E0D8CC', borderRadius:12,
                      fontSize:'0.875rem', fontFamily:'var(--font-body)',
                      outline:'none', background:'var(--cream)',
                      transition:'border-color 0.2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor='var(--green-light)'}
                    onBlur={e => e.currentTarget.style.borderColor='#E0D8CC'}
                  />
                  <button onClick={() => handleSend()} disabled={loading || !input.trim()} style={{
                    width:44, height:44, borderRadius:12, flexShrink:0,
                    background: loading || !input.trim() ? '#D0CBC2' : 'var(--green)',
                    border:'none', color:'white',
                    cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'background 0.2s',
                  }}>
                    <Send size={16}/>
                  </button>
                </div>
                <div style={{ textAlign:'center', marginTop:6, fontSize:'0.7rem', color:'var(--text-light)' }}>
                  <CornerDownLeft size={9} style={{ display:'inline', marginRight:2 }}/>
                  Enter {lang==='vi'?'để gửi':'to send'} · {lang==='vi'?'Powered by OpenRouter':'Powered by OpenRouter'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
