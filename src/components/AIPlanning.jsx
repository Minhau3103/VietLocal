import { useState, useEffect, useRef } from 'react'
import { Sparkles, MapPin, Clock, Heart, User, Calendar, DollarSign, Send, CheckCircle, ArrowLeft, Bot, CornerDownLeft, MessageSquare, ChevronDown } from 'lucide-react'
import { useApp } from '../contexts/AppContext'

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
          content: `You are VietLocal AI — an expert Vietnam travel planner.
Create EXTREMELY DETAILED, personalized travel itineraries.

OUTPUT FORMAT RULES:
- Use ## for day headings, ### for Morning/Afternoon/Evening
- Use bullet points (- ) for activities, NOT markdown tables
- Each activity: "- **7:00 AM** – Activity description"
- Every place: add next line with 📍 Full address, City
- Hotels: include booking.com link. Restaurants: include maps.google.com link (format: https://maps.google.com/?q=Place+Name+City)
- NEVER use goo.gl or maps.app.goo.gl short links
- Use **bold** for names and prices
- Separate days with ---

END OF EVERY PLAN — add this section:

---
## 👨‍💼 Hướng dẫn viên phù hợp cho chuyến đi của bạn

> VietLocal kết nối bạn với hướng dẫn viên địa phương được chọn lọc kỹ càng.

ONLY use these exact 4 names (never invent new ones):
- Hanoi: [Nguyen Linh Na](#guides-section) 499k/ngày ⭐4.9 · [Tran Minh Quan (Alex)](#guides-section) 299k/ngày ⭐4.8
- Ho Chi Minh City: [Nguyen Linh Na](#guides-section) 499k/ngày ⭐4.9 · [Nguyen Vu Lam (Kevin)](#guides-section) 199k/nửa ngày ⭐4.7
- Da Nang: [Le Hoang Nam](#guides-section) 350k/ngày ⭐4.9 · [Nguyen Linh Na](#guides-section) 499k/ngày ⭐4.9

Pick only 1-2 most relevant. Click name to view profile and book on VietLocal!
---

Respond in the SAME LANGUAGE the user writes in.`
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

function makeMapLink(place) {
  return 'https://maps.google.com/?q=' + encodeURIComponent(place.trim())
}

function renderMarkdown(text) {
  // Kill bad short links
  text = text.replace(/https?:\/\/maps\.app\.goo\.gl\/[^\s<"\n]*/g, '')
  text = text.replace(/https?:\/\/goo\.gl\/maps\/[^\s<"\n]*/g, '')

  // Tables
  text = text.replace(/(\|[^\n]+\|\n\|[-| :]+\|\n)((?:\|[^\n]+\|\n?)+)/g, function(_, header, body) {
    var heads = header.split('\n')[0].replace(/^\||\\|$/g, '').split('|').map(function(c){return c.trim()})
    var rows = body.trim().split('\n').filter(function(r){return r.includes('|')}).map(function(r){
      return r.replace(/^\||\\|$/g, '').split('|').map(function(c){return c.trim()})
    })
    var ths = heads.map(function(h){return '<th style="padding:10px 14px;background:var(--green);color:white;font-weight:600;font-size:0.82rem;text-align:left">'+h+'</th>'}).join('')
    var trs = rows.map(function(cols){
      return '<tr>'+cols.map(function(c,i){return '<td style="padding:9px 14px;border-bottom:1px solid #EDE8E0;font-size:0.85rem'+(i===0?';font-weight:500':'')+'">'+c+'</td>'}).join('')+'</tr>'
    }).join('')
    return '<div style="overflow-x:auto;margin:16px 0;border-radius:12px;border:1px solid #EDE8E0;overflow:hidden"><table style="width:100%;border-collapse:collapse"><thead><tr>'+ths+'</tr></thead><tbody>'+trs+'</tbody></table></div>\n'
  })

  // Headings
  text = text.replace(/^#### (.+)$/gm, '<h5 style="color:var(--green);margin:12px 0 4px;font-size:0.95rem;font-weight:700">$1</h5>')
  text = text.replace(/^### (.+)$/gm, '<h4 style="color:var(--green);margin:18px 0 6px;font-family:var(--font-display);font-size:1.15rem">$1</h4>')
  text = text.replace(/^## (.+)$/gm, '<h3 style="color:var(--green);margin:22px 0 8px;font-family:var(--font-display);font-size:1.35rem;border-bottom:2px solid var(--cream-dark);padding-bottom:6px">$1</h3>')
  text = text.replace(/^# (.+)$/gm, '<h2 style="color:var(--green);margin:0 0 16px;font-family:var(--font-display);font-size:1.55rem">$1</h2>')

  // Inline
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  text = text.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>')
  text = text.replace(/`([^`]+)`/g, '<code style="background:#F0EBE0;padding:2px 7px;border-radius:5px;font-size:0.84em">$1</code>')

  // HR
  text = text.replace(/^---+$/gm, '<hr style="border:none;border-top:2px solid var(--cream-dark);margin:24px 0"/>')

  // Blockquote
  text = text.replace(/^> (.+)$/gm, '<blockquote style="border-left:3px solid var(--green-light);padding:8px 16px;margin:8px 0;color:var(--text-mid);font-style:italic">$1</blockquote>')

  // Lists
  text = text.replace(/^[-*] (.+)$/gm, '<li style="margin:5px 0;line-height:1.7">$1</li>')
  text = text.replace(/^\d+\. (.+)$/gm, '<li style="margin:5px 0;line-height:1.7">$1</li>')
  text = text.replace(/(<li[^>]*>[\s\S]*?<\/li>\n?)+/g, function(s){ return '<ul style="padding-left:20px;margin:8px 0">'+s+'</ul>' })

  // Internal anchor links → gold button
  text = text.replace(/\[([^\]]+)\]\(#([^)]+)\)/g, function(_, label, anchor){
    return '<a href="#'+anchor+'" onclick="event.preventDefault();document.getElementById(\''+anchor+'\')&&document.getElementById(\''+anchor+'\').scrollIntoView({behavior:\'smooth\'})" style="display:inline-flex;align-items:center;gap:4px;background:var(--gold);color:white;padding:3px 12px;border-radius:50px;font-size:0.8em;text-decoration:none;font-weight:700;vertical-align:middle;margin:0 2px">👤 '+label+' →</a>'
  })

  // External links
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--green);text-decoration:underline;font-weight:600">$1 ↗</a>')

  // Bare URLs (not in href already)
  text = text.replace(/(?<![="'>])(https?:\/\/[^\s<")\n]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" style="color:var(--green-light);font-size:0.82em;text-decoration:underline;word-break:break-all">$1 ↗</a>')

  // 📍 address → Maps button
  text = text.replace(/📍([^<\n]{4,120})/g, function(_, addr){
    var clean = addr.replace(/<[^>]+>/g, '').trim()
    var url = makeMapLink(clean)
    return '📍 <span style="color:var(--text-mid)">'+addr+'</span> <a href="'+url+'" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:3px;background:var(--green);color:white;padding:2px 10px;border-radius:50px;font-size:0.72em;text-decoration:none;font-weight:700;white-space:nowrap">🗺 Maps ↗</a>'
  })

  // Paragraphs
  text = text.replace(/\n\n/g, '</p><p style="margin:10px 0;line-height:1.8">')
  text = '<p style="margin:0;line-height:1.8">'+text+'</p>'
  text = text.replace(/\n/g, '<br/>')
  return text
}

const SUGGESTIONS = {
  en: ['Best hotels under 500k VND 🏨','Top street food spots 🍜','How to get around by Grab 🛵','Hidden gems only locals know 💎','Budget breakdown 💰','Best time to visit ☀️','Day trips nearby 🗺️','Safety tips ⚠️'],
  vi: ['Khách sạn tốt dưới 500k 🏨','Quán ăn đường phố ngon 🍜','Đi lại bằng Grab 🛵','Địa điểm ít người biết 💎','Chi tiết ngân sách 💰','Thời điểm đẹp nhất 🌤️','Đi trong ngày gần đó 🗺️','Mẹo an toàn ⚠️']
}

export default function AIPlanning() {
  const { t, lang, setShowPayment, setCurrentPlan, showToast, user, setShowLogin } = useApp()
  const [phase, setPhase] = useState('form')
  const [form, setForm] = useState({ destination:'', duration:'', interests:'', guideReq:'', guideTime:'', budget:'', freeNote:'' })
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

  const handleSubmitForm = async () => {
    if (!form.destination || !form.duration) {
      showToast(lang === 'en' ? '⚠️ Please fill in destination and duration.' : '⚠️ Vui lòng nhập điểm đến và thời gian.')
      return
    }
    setPhase('chat')
    setLoading(true)
    const prompt = lang === 'vi'
      ? `Lên kế hoạch du lịch chi tiết:\n📍 Điểm đến: ${form.destination}\n⏱ Thời gian: ${form.duration}\n❤️ Sở thích: ${form.interests || 'tham quan & ẩm thực địa phương'}\n👤 Guide: ${form.guideReq || 'hướng dẫn viên thân thiện'}\n📅 Cần guide: ${form.guideTime || 'cả ngày'}\n💰 Ngân sách: ${form.budget || 'trung bình 1-2 triệu VNĐ/ngày'}${form.freeNote ? '\n✏️ Ghi chú: ' + form.freeNote : ''}\n\nTạo lịch trình CỰC KỲ CHI TIẾT từng giờ. Bao gồm tên khách sạn, nhà hàng thật với địa chỉ và link maps.google.com cụ thể.`
      : `Create detailed travel itinerary:\n📍 Destination: ${form.destination}\n⏱ Duration: ${form.duration}\n❤️ Interests: ${form.interests || 'sightseeing and local food'}\n👤 Guide: ${form.guideReq || 'friendly local guide'}\n📅 Guide duration: ${form.guideTime || 'full day'}\n💰 Budget: ${form.budget || 'moderate 1-2M VND/day'}${form.freeNote ? '\n✏️ Notes: ' + form.freeNote : ''}\n\nCreate VERY DETAILED hour-by-hour itinerary with real hotel names, restaurants, specific addresses and maps.google.com links.`

    const userMsg = { role:'user', text:prompt, display: lang==='vi' ? `📍 Lên kế hoạch: ${form.destination} – ${form.duration}${form.freeNote?' • "'+form.freeNote+'"':''}` : `📍 Planning: ${form.destination} – ${form.duration}${form.freeNote?' • "'+form.freeNote+'"':''}`, time:new Date() }
    setMessages([userMsg])
    try {
      const reply = await callOpenRouter([{ role:'user', text:prompt }])
      setMessages([userMsg, { role:'assistant', text:reply, time:new Date() }])
    } catch(err) {
      const msg = err.message === 'NO_KEY'
        ? (lang==='vi' ? '⚠️ Chưa có OpenRouter API key. Mở file `.env` và thêm:\n`VITE_OPENROUTER_API_KEY=sk-or-v1-...`\n\nLấy key miễn phí tại https://openrouter.ai/keys' : '⚠️ No OpenRouter API key. Open `.env` and add:\n`VITE_OPENROUTER_API_KEY=sk-or-v1-...`\n\nGet free key at https://openrouter.ai/keys')
        : `⚠️ Error: ${err.message}`
      setMessages([userMsg, { role:'assistant', text:msg, time:new Date() }])
    }
    setLoading(false)
  }

  const handleSend = async (overrideText) => {
    const text = overrideText || input.trim()
    if (!text || loading) return
    const userMsg = { role:'user', text, display:text, time:new Date() }
    const newHistory = [...messages, userMsg]
    setMessages(newHistory)
    setInput('')
    setLoading(true)
    inputRef.current?.focus()
    try {
      const reply = await callOpenRouter(newHistory)
      setMessages(prev => [...prev, { role:'assistant', text:reply, time:new Date() }])
    } catch(err) {
      setMessages(prev => [...prev, { role:'assistant', text:`⚠️ Error: ${err.message}`, time:new Date() }])
    }
    setLoading(false)
  }

  const handleBook = () => {
    if (!user) { setShowLogin(true); return }
    setCurrentPlan({ ...form, plan: messages.filter(m=>m.role==='assistant').pop()?.text })
    setShowPayment(true)
  }

  const handleReset = () => { setPhase('form'); setMessages([]); setInput('') }

  const suggestions = lang === 'vi' ? SUGGESTIONS.vi : SUGGESTIONS.en
  const visibleSuggestions = showAllSuggestions ? suggestions : suggestions.slice(0, 4)

  const formFields = [
    { key:'destination', label:t.ai.destination, ph:t.ai.destinationPh, icon:<MapPin size={15}/>, col:2 },
    { key:'duration',    label:t.ai.duration,    ph:t.ai.durationPh,    icon:<Clock size={15}/>,       col:1 },
    { key:'budget',      label:t.ai.budget,      ph:t.ai.budgetPh,      icon:<DollarSign size={15}/>,  col:1 },
    { key:'interests',   label:t.ai.interests,   ph:t.ai.interestsPh,   icon:<Heart size={15}/>,       col:2 },
    { key:'guideReq',    label:t.ai.guideReq,    ph:t.ai.guideReqPh,    icon:<User size={15}/>,        col:1 },
    { key:'guideTime',   label:t.ai.guideTime,   ph:t.ai.guideTimePh,   icon:<Calendar size={15}/>,   col:1 },
  ]

  return (
    <section id="ai-section" style={{ padding:'100px 0', background:'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <div className="section-label">✨ AI-Powered</div>
          <h2 className="section-title">{t.ai.title}</h2>
          <p style={{ color:'var(--text-mid)', maxWidth:520, margin:'0 auto' }}>{t.ai.subtitle}</p>
        </div>

        {phase === 'form' && (
          <div style={{ maxWidth:740, margin:'0 auto' }}>
            <div style={{ background:'white', borderRadius:24, padding:'40px 44px', boxShadow:'0 8px 40px rgba(0,0,0,0.08)', border:'1px solid #EDE8E0' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
                {formFields.map(f => (
                  <div key={f.key} style={{ gridColumn:`span ${f.col}` }}>
                    <label className="form-label" style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <span style={{ color:'var(--green-light)' }}>{f.icon}</span>{f.label}
                    </label>
                    <input className="form-input" value={form[f.key]} onChange={e=>setF(f.key,e.target.value)} placeholder={f.ph} onKeyDown={e=>e.key==='Enter'&&handleSubmitForm()} />
                  </div>
                ))}
                <div style={{ gridColumn:'span 2' }}>
                  <label className="form-label" style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ color:'var(--green-light)' }}><MessageSquare size={15}/></span>
                    {lang==='vi' ? 'Mô tả thêm về chuyến đi mơ ước của bạn' : 'Describe your dream trip (anything else you want)'}
                  </label>
                  <textarea className="form-input" value={form.freeNote} onChange={e=>setF('freeNote',e.target.value)}
                    placeholder={lang==='vi' ? 'VD: Tôi muốn có 1 ngày chỉ ngồi cà phê và đọc sách, thích ăn đồ chay, đi cùng bạn gái...' : 'E.g. I want one slow morning for coffee, prefer vegetarian food, traveling with girlfriend...'}
                    rows={3} style={{ resize:'vertical', lineHeight:1.6 }} />
                </div>
              </div>
              <button onClick={handleSubmitForm} style={{ width:'100%', marginTop:28, background:'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)', color:'white', border:'none', borderRadius:14, padding:'17px', fontWeight:700, fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:10, fontFamily:'var(--font-body)' }}>
                <Sparkles size={18}/> {t.ai.generate}
              </button>
              <p style={{ textAlign:'center', marginTop:14, fontSize:'0.78rem', color:'var(--text-light)' }}>
                🤖 Powered by OpenRouter · Gemini 2.0 Flash · {lang==='vi'?'Kế hoạch chi tiết đến từng giờ':'Hour-by-hour detailed plans'}
              </p>
            </div>

            <div style={{ marginTop:56, textAlign:'center' }}>
              <div className="section-label" style={{ marginBottom:28 }}>{t.steps.title}</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
                {[
                  {num:'01',emoji:'✏️',title:t.steps.s1t,desc:t.steps.s1d},
                  {num:'02',emoji:'🤖',title:t.steps.s2t,desc:t.steps.s2d},
                  {num:'03',emoji:'💬',title:lang==='vi'?'Trò chuyện & Tinh chỉnh':'Chat & Refine',desc:lang==='vi'?'Hỏi thêm và điều chỉnh kế hoạch thoải mái.':'Ask follow-ups and adjust freely.'},
                  {num:'04',emoji:'✅',title:t.steps.s4t,desc:t.steps.s4d},
                ].map((s,i) => (
                  <div key={i} style={{ background:'white', borderRadius:16, padding:'24px 18px', border:'1px solid #EDE8E0', position:'relative', overflow:'hidden' }}>
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

        {phase === 'chat' && (
          <div style={{ maxWidth:860, margin:'0 auto' }}>
            <div style={{ background:'white', borderRadius:24, boxShadow:'0 8px 40px rgba(0,0,0,0.08)', border:'1px solid #EDE8E0', overflow:'hidden', display:'flex', flexDirection:'column', height:680 }}>

              {/* Header */}
              <div style={{ background:'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 }}>
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
                  <button onClick={handleReset} style={{ background:'rgba(255,255,255,0.15)', border:'none', borderRadius:8, padding:'6px 12px', color:'white', fontSize:'0.75rem', cursor:'pointer', display:'flex', alignItems:'center', gap:4, fontFamily:'var(--font-body)' }}>
                    <ArrowLeft size={12}/> {lang==='vi'?'Kế hoạch mới':'New plan'}
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex:1, overflowY:'auto', padding:'20px 24px 8px', display:'flex', flexDirection:'column', gap:18 }}>
                {messages.map((msg,i) => (
                  <div key={i} style={{ display:'flex', flexDirection:msg.role==='user'?'row-reverse':'row', gap:10, alignItems:'flex-start' }}>
                    <div style={{ width:30, height:30, borderRadius:'50%', flexShrink:0, background:msg.role==='assistant'?'var(--green)':'var(--gold)', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
                      {msg.role==='assistant' ? <Bot size={14}/> : <span style={{fontSize:'0.7rem'}}>👤</span>}
                    </div>
                    <div style={{ maxWidth:msg.role==='assistant'?'88%':'72%', background:msg.role==='assistant'?'#F7F4EE':'var(--green)', color:msg.role==='assistant'?'var(--text-dark)':'white', borderRadius:msg.role==='assistant'?'4px 18px 18px 18px':'18px 4px 18px 18px', padding:'13px 17px', fontSize:'0.875rem', lineHeight:1.75 }}>
                      {msg.role==='assistant'
                        ? <div dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}/>
                        : <span>{msg.display||msg.text}</span>
                      }
                      <div style={{ fontSize:'0.68rem', marginTop:5, opacity:0.45, textAlign:'right' }}>
                        {msg.time?.toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit'})}
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                    <div style={{ width:30, height:30, borderRadius:'50%', background:'var(--green)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                      <Bot size={14} color="white"/>
                    </div>
                    <div style={{ background:'#F7F4EE', borderRadius:'4px 18px 18px 18px', padding:'14px 20px', display:'flex', gap:5, alignItems:'center' }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width:7, height:7, borderRadius:'50%', background:'var(--green-light)', animation:'pulse 1.2s ease infinite', animationDelay:`${i*0.2}s` }}/>
                      ))}
                      <span style={{ marginLeft:8, fontSize:'0.78rem', color:'var(--text-light)' }}>
                        {lang==='vi'?'AI đang lên kế hoạch chi tiết...':'AI is crafting your detailed plan...'}
                      </span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef}/>
              </div>

              {/* Suggestions */}
              {messages.length >= 2 && !loading && (
                <div style={{ padding:'8px 16px 4px', flexShrink:0 }}>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                    {visibleSuggestions.map((s,i) => (
                      <button key={i} onClick={() => handleSend(s)} style={{ background:'var(--cream)', border:'1px solid #DDD8CC', borderRadius:50, padding:'5px 13px', fontSize:'0.76rem', cursor:'pointer', color:'var(--text-mid)', fontFamily:'var(--font-body)', whiteSpace:'nowrap', transition:'all 0.15s' }}
                        onMouseEnter={e=>{e.currentTarget.style.background='var(--green)';e.currentTarget.style.color='white';e.currentTarget.style.borderColor='var(--green)'}}
                        onMouseLeave={e=>{e.currentTarget.style.background='var(--cream)';e.currentTarget.style.color='var(--text-mid)';e.currentTarget.style.borderColor='#DDD8CC'}}
                      >{s}</button>
                    ))}
                    <button onClick={() => setShowAllSuggestions(!showAllSuggestions)} style={{ background:'none', border:'1px dashed #CCC', borderRadius:50, padding:'5px 12px', fontSize:'0.76rem', cursor:'pointer', color:'var(--text-light)', fontFamily:'var(--font-body)', display:'flex', alignItems:'center', gap:3 }}>
                      <ChevronDown size={11} style={{ transform:showAllSuggestions?'rotate(180deg)':'', transition:'transform 0.2s' }}/>
                      {showAllSuggestions?(lang==='vi'?'Ẩn bớt':'Less'):(lang==='vi'?'Xem thêm':'More')}
                    </button>
                  </div>
                </div>
              )}

              {/* Book button */}
              {messages.filter(m=>m.role==='assistant').length >= 1 && !loading && (
                <div style={{ padding:'4px 16px 4px', display:'flex', justifyContent:'flex-end', flexShrink:0 }}>
                  <button onClick={handleBook} style={{ background:'var(--gold)', color:'white', border:'none', borderRadius:50, padding:'8px 20px', fontWeight:700, fontSize:'0.82rem', cursor:'pointer', display:'flex', alignItems:'center', gap:6, fontFamily:'var(--font-body)' }}
                    onMouseEnter={e=>e.currentTarget.style.opacity='0.85'}
                    onMouseLeave={e=>e.currentTarget.style.opacity='1'}
                  >
                    <CheckCircle size={14}/> {t.ai.bookNow}
                  </button>
                </div>
              )}

              {/* Input */}
              <div style={{ padding:'10px 14px 14px', borderTop:'1px solid #EDE8E0', flexShrink:0 }}>
                <div style={{ display:'flex', gap:8 }}>
                  <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)}
                    onKeyDown={e=>e.key==='Enter'&&!e.shiftKey&&handleSend()}
                    placeholder={lang==='vi'?'Hỏi thêm: điều chỉnh kế hoạch, nhà hàng, khách sạn, đi lại...':'Ask anything: adjust plan, restaurants, hotels, transport...'}
                    style={{ flex:1, padding:'11px 16px', border:'1.5px solid #E0D8CC', borderRadius:12, fontSize:'0.875rem', fontFamily:'var(--font-body)', outline:'none', background:'var(--cream)', transition:'border-color 0.2s' }}
                    onFocus={e=>e.currentTarget.style.borderColor='var(--green-light)'}
                    onBlur={e=>e.currentTarget.style.borderColor='#E0D8CC'}
                  />
                  <button onClick={()=>handleSend()} disabled={loading||!input.trim()} style={{ width:44, height:44, borderRadius:12, flexShrink:0, background:loading||!input.trim()?'#D0CBC2':'var(--green)', border:'none', color:'white', cursor:loading||!input.trim()?'not-allowed':'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Send size={16}/>
                  </button>
                </div>
                <div style={{ textAlign:'center', marginTop:6, fontSize:'0.7rem', color:'var(--text-light)' }}>
                  <CornerDownLeft size={9} style={{ display:'inline', marginRight:2 }}/> Enter {lang==='vi'?'để gửi':'to send'} · Powered by OpenRouter
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
