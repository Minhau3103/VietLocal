import ImageWithFallback from './ImageWithFallback'
import { useState } from 'react'
import { Star, MapPin, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { useApp } from '../contexts/AppContext'
import { GUIDES } from '../data/content'

export default function GuidesSection() {
  const { t, lang, user, setShowLogin, setShowPayment, setCurrentPlan } = useApp()
  const [expanded, setExpanded] = useState(null)

  const bookGuide = (guide) => {
    if (!user) { setShowLogin(true); return }
    setCurrentPlan({ guideId: guide.id, guideName: guide.name, plan: `Booking guide: ${guide.name}` })
    setShowPayment(true)
  }

  return (
    <section id="guides-section" style={{ padding: '100px 0', background: '#F5F0E8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label">👋 {lang === 'en' ? 'Your Local Experts' : 'Chuyên gia địa phương'}</div>
          <h2 className="section-title">{t.guides.title}</h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 480, margin: '0 auto' }}>{t.guides.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {GUIDES.map(guide => (
            <div key={guide.id} style={{
              background: 'white', borderRadius: 20,
              overflow: 'hidden', boxShadow: 'var(--shadow)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              border: '1px solid #EDE8E0',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <ImageWithFallback src={guide.photo} alt={guide.name} fallbackEmoji='👤' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 12, left: 12,
                  background: 'rgba(0,0,0,0.6)', borderRadius: 50,
                  padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <Star size={12} fill="var(--gold)" color="var(--gold)" />
                  <span style={{ color: 'white', fontSize: '0.78rem', fontWeight: 600 }}>{guide.rating}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>({guide.reviews})</span>
                </div>
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'var(--gold)', color: 'white',
                  borderRadius: 50, padding: '4px 10px', fontSize: '0.75rem', fontWeight: 700,
                }}>{guide.lang}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 20px 8px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--green)', marginBottom: 4 }}>
                  {lang === 'en' ? guide.name : guide.nameVi}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-light)', fontSize: '0.82rem', marginBottom: 10 }}>
                  <MapPin size={13} />
                  {t.guides.available}: {(lang === 'en' ? guide.cities : guide.citiesVi).join(', ')}
                </div>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: 10 }}>
                  {lang === 'en' ? guide.desc : guide.descVi}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                  <span style={{ background: 'var(--cream-dark)', borderRadius: 50, padding: '3px 10px', fontSize: '0.78rem', color: 'var(--text-mid)' }}>
                    ✨ {lang === 'en' ? guide.style : guide.styleVi}
                  </span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--green)', fontSize: '0.95rem', marginBottom: 14 }}>
                  {guide.price}
                </div>

                {/* Reviews toggle */}
                <button onClick={() => setExpanded(expanded === guide.id ? null : guide.id)} style={{
                  background: 'none', color: 'var(--text-mid)', border: 'none',
                  fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 4,
                  cursor: 'pointer', marginBottom: expanded === guide.id ? 12 : 16, padding: 0,
                }}>
                  <MessageCircle size={13} />
                  {lang === 'en' ? 'Reviews' : 'Đánh giá'}
                  {expanded === guide.id ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>

                {expanded === guide.id && (
                  <div style={{ marginBottom: 16 }}>
                    {guide.reviewList.map((r, i) => (
                      <div key={i} style={{
                        background: 'var(--cream)', borderRadius: 10, padding: '10px 12px', marginBottom: 8,
                        fontSize: '0.82rem',
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{r.user}</span>
                          <div className="stars">{Array(r.rating).fill('★').join('')}</div>
                        </div>
                        <p style={{ color: 'var(--text-mid)', lineHeight: 1.5 }}>{r.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <button onClick={() => bookGuide(guide)} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 16 }}>
                  {t.guides.book}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
