import { X, Clock, MapPin, ArrowLeft } from 'lucide-react'
import { useApp } from '../contexts/AppContext'

function renderContent(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^## (.+)$/gm, '<h3 style="font-family:var(--font-display);font-size:1.4rem;color:var(--green);margin:28px 0 10px">$1</h3>')
    .replace(/^- (.+)$/gm, '<li style="margin:6px 0">$1</li>')
    .replace(/(<li.*?<\/li>\n?)+/gs, s => `<ul style="padding-left:20px;margin:10px 0">${s}</ul>`)
    .replace(/📍 ([^\n]+)/g, '<div style="display:inline-flex;align-items:center;gap:6px;background:var(--cream-dark);padding:4px 12px;border-radius:50px;font-size:0.82rem;color:var(--green);margin:4px 0"><span>📍</span>$1</div>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
}

export default function BlogModal({ post, onClose }) {
  const { lang } = useApp()
  if (!post) return null

  const title   = lang === 'vi' ? post.titleVi   : post.title
  const content = lang === 'vi' ? post.contentVi : post.content
  const city    = lang === 'vi' ? post.cityVi    : post.city
  const rt      = lang === 'vi' ? post.readTimeVi : post.readTime

  return (
    <div className="modal-overlay" onClick={onClose} style={{ alignItems: 'flex-start', overflowY: 'auto', padding: '40px 20px' }}>
      <div style={{
        background: 'white', borderRadius: 24, width: '100%', maxWidth: 720,
        overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
        animation: 'fadeUp 0.3s ease',
      }} onClick={e => e.stopPropagation()}>

        {/* Hero image */}
        <div style={{ position: 'relative', height: 280 }}>
          <img src={post.photo} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(0,0,0,0.4)', border: 'none', borderRadius: '50%',
            width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', cursor: 'pointer',
          }}><X size={18}/></button>
          <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <span style={{ background: 'var(--green)', color: 'white', borderRadius: 50, padding: '3px 12px', fontSize: '0.75rem', fontWeight: 600 }}>{city}</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: 50, padding: '3px 12px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock size={11}/> {rt}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: 'white', lineHeight: 1.3 }}>{title}</h2>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '32px 36px 40px', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-dark)' }}>
          <div dangerouslySetInnerHTML={{ __html: renderContent(content || post.excerpt || post.excerptVi) }} />
        </div>

        {/* Spots section */}
        {post.spots && post.spots.length > 0 && (
          <div style={{ padding: '0 36px 36px' }}>
            <div style={{ background: 'var(--cream)', borderRadius: 16, padding: '20px 24px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
                📍 {lang === 'vi' ? 'Địa điểm gợi ý' : 'Recommended Spots'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {post.spots.map((s, i) => {
                  const addr = lang === 'vi' ? s.addressVi : s.address
                  const mapUrl = 'https://maps.google.com/?q=' + encodeURIComponent(s.name + ' ' + addr)
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-dark)' }}>{s.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 2 }}>{addr}</div>
                      </div>
                      <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4, flexShrink: 0,
                        background: 'var(--green)', color: 'white', padding: '4px 12px',
                        borderRadius: 50, fontSize: '0.72rem', textDecoration: 'none', fontWeight: 700,
                      }}>🗺 Maps ↗</a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
