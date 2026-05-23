import { X, Star, MapPin, MessageCircle, CheckCircle } from 'lucide-react'
import { useApp } from '../contexts/AppContext'

export default function GuideModal({ guide, onClose }) {
  const { lang, user, setShowLogin, setShowPayment, setCurrentPlan } = useApp()
  if (!guide) return null

  const name        = lang === 'vi' ? guide.nameVi       : guide.name
  const desc        = lang === 'vi' ? guide.descVi       : guide.desc
  const bio         = lang === 'vi' ? guide.bioVi        : guide.bio
  const style       = lang === 'vi' ? guide.styleVi      : guide.style
  const cities      = lang === 'vi' ? guide.citiesVi     : guide.cities
  const specialties = lang === 'vi' ? guide.specialtiesVi : guide.specialties
  const license     = lang === 'vi' ? guide.licenseVi    : guide.license

  const handleBook = () => {
    if (!user) { setShowLogin(true); return }
    setCurrentPlan({ guideId: guide.id, guideName: guide.name, destination: cities[0] })
    setShowPayment(true)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ alignItems: 'flex-start', overflowY: 'auto', padding: '40px 20px' }}>
      <div style={{
        background: 'white', borderRadius: 24, width: '100%', maxWidth: 600,
        overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
        animation: 'fadeUp 0.3s ease',
      }} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)', padding: '28px 28px 24px', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}>
            <X size={16}/>
          </button>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <img src={guide.photo} alt={name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid rgba(255,255,255,0.4)' }} />
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'white', marginBottom: 4 }}>{name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem' }}>
                <Star size={13} fill="var(--gold-light)" color="var(--gold-light)"/>
                <strong style={{ color: 'white' }}>{guide.rating}</strong>
                <span>({guide.reviews} {lang==='vi'?'đánh giá':'reviews'})</span>
                <span>·</span>
                <span>{guide.lang}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', marginTop: 4 }}>
                <MapPin size={11}/> {cities.join(', ')}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px' }}>
          {/* Bio */}
          <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 20 }}>{bio}</p>

          {/* Specialties */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-dark)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {lang==='vi'?'Chuyên môn':'Specialties'}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {specialties?.map((s,i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#EEF7F3', color: 'var(--green)', borderRadius: 50, padding: '4px 12px', fontSize: '0.8rem', fontWeight: 500 }}>
                  <CheckCircle size={11}/> {s}
                </span>
              ))}
            </div>
          </div>

          {/* Style + License */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div style={{ background: 'var(--cream)', borderRadius: 12, padding: '14px 16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 4 }}>
                {lang==='vi'?'Phong cách':'Style'}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)' }}>{style}</div>
            </div>
            <div style={{ background: 'var(--cream)', borderRadius: 12, padding: '14px 16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: 4 }}>
                {lang==='vi'?'Bằng cấp':'License'}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-dark)' }}>{license}</div>
            </div>
          </div>

          {/* Reviews */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-dark)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 6 }}>
              <MessageCircle size={13}/> {lang==='vi'?'Đánh giá':'Reviews'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {guide.reviewList.map((r,i) => (
                <div key={i} style={{ background: 'var(--cream)', borderRadius: 12, padding: '12px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-dark)' }}>{r.user}</span>
                    <span style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>{Array(r.rating).fill('★').join('')}</span>
                  </div>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.84rem', lineHeight: 1.6 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #EDE8E0', paddingTop: 20 }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', textTransform: 'uppercase', fontWeight: 600 }}>{lang==='vi'?'Giá từ':'Starting from'}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--green)' }}>{guide.price}</div>
            </div>
            <button onClick={handleBook} className="btn-gold" style={{ padding: '12px 28px' }}>
              {lang==='vi'?'Đặt hướng dẫn viên này':'Book This Guide'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
