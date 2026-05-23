import { useState } from 'react'
import { Search, MapPin, Sparkles } from 'lucide-react'
import { useApp } from '../contexts/AppContext'

const POPULAR = [
  { en: 'Hanoi Old Quarter', vi: 'Phố cổ Hà Nội' },
  { en: 'Da Nang Beach', vi: 'Biển Đà Nẵng' },
  { en: 'Saigon Food Tour', vi: 'Food tour Sài Gòn' },
  { en: 'Mekong Delta', vi: 'Đồng bằng sông Cửu Long' },
]

export default function Hero() {
  const { t, lang } = useApp()
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) {
      document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })
      // Pre-fill the AI form destination
      window.__heroQuery = query
      window.dispatchEvent(new CustomEvent('heroSearch', { detail: query }))
    }
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, var(--green) 0%, #0D2E24 40%, #1A3A2C 70%, var(--green-mid) 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 80,
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating orbs */}
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,151,58,0.12) 0%, transparent 70%)',
        top: -100, right: -100, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(74,155,130,0.15) 0%, transparent 70%)',
        bottom: -80, left: -80, pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: 860 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(200,151,58,0.15)', border: '1px solid rgba(200,151,58,0.4)',
          borderRadius: 50, padding: '6px 16px', marginBottom: 28,
          animation: 'fadeUp 0.6s ease',
        }}>
          <Sparkles size={14} color="var(--gold)" />
          <span style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em' }}>
            {t.hero.badge}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
          color: 'white',
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: 20,
          animation: 'fadeUp 0.6s 0.1s ease both',
        }}>
          {lang === 'en' ? (
            <>Discover Vietnam<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Like a Local</em></>
          ) : (
            <>Khám phá Việt Nam<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Như người địa phương</em></>
          )}
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.75)',
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          maxWidth: 600, margin: '0 auto 40px',
          lineHeight: 1.7,
          animation: 'fadeUp 0.6s 0.2s ease both',
        }}>{t.hero.subtitle}</p>

        {/* ── MAIN SEARCH BAR (GetYourGuide style) ── */}
        <div style={{
          background: 'white',
          borderRadius: 20,
          padding: '8px 8px 8px 20px',
          display: 'flex', alignItems: 'center', gap: 12,
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          maxWidth: 700, margin: '0 auto 24px',
          animation: 'fadeUp 0.6s 0.3s ease both',
        }}>
          <MapPin size={20} color="var(--green-light)" style={{ flexShrink: 0 }} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            placeholder={t.hero.placeholder}
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: '1rem', color: 'var(--text-dark)',
              fontFamily: 'var(--font-body)',
            }}
          />
          <button onClick={handleSearch} style={{
            background: 'var(--green)',
            color: 'white',
            border: 'none',
            borderRadius: 14,
            padding: '14px 28px',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8,
            whiteSpace: 'nowrap',
            transition: 'background 0.2s',
            fontFamily: 'var(--font-body)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--green-mid)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
          >
            <Search size={17} />
            {t.hero.search}
          </button>
        </div>

        {/* Popular tags */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8,
          animation: 'fadeUp 0.6s 0.4s ease both',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', alignSelf: 'center' }}>
            {t.hero.popular}
          </span>
          {POPULAR.map((p, i) => (
            <button key={i} onClick={() => { setQuery(p[lang]); }} style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
              borderRadius: 50, padding: '5px 14px',
              fontSize: '0.83rem', cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
            >{p[lang]}</button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '18px 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { num: '4+', label: lang === 'en' ? 'Local Guides' : 'Hướng dẫn viên' },
            { num: '3', label: lang === 'en' ? 'Top Destinations' : 'Điểm đến hàng đầu' },
            { num: '500+', label: lang === 'en' ? 'Happy Travelers' : 'Khách hài lòng' },
            { num: '4.9★', label: lang === 'en' ? 'Average Rating' : 'Đánh giá trung bình' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600 }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
