import { useApp } from '../contexts/AppContext'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { t, lang } = useApp()
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: 'var(--text-dark)', color: 'rgba(255,255,255,0.8)', padding: '64px 0 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem' }}>V</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.4rem', color: 'white' }}>VietLocal</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: 20, maxWidth: 280 }}>
              {lang === 'en' ? 'AI-powered travel planning + local guides for authentic Vietnam experiences.' : 'Lập kế hoạch du lịch bằng AI + hướng dẫn viên địa phương cho trải nghiệm Việt Nam chân thực.'}
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Facebook size={18} />, label: 'Facebook' },
                { icon: <Youtube size={18} />, label: 'TikTok' },
              ].map((s, i) => (
                <a key={i} href="#" aria-label={s.label} style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--green-light)'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16, letterSpacing: '0.05em' }}>
              {lang === 'en' ? 'Navigate' : 'Điều hướng'}
            </h4>
            {[
              { label: lang === 'en' ? 'Home' : 'Trang chủ', id: 'hero' },
              { label: lang === 'en' ? 'AI Planning' : 'AI Planning', id: 'ai-section' },
              { label: lang === 'en' ? 'Destinations' : 'Điểm đến', id: 'destinations-section' },
              { label: lang === 'en' ? 'Cuisine' : 'Ẩm thực', id: 'food-section' },
              { label: 'Blog', id: 'blog-section' },
            ].map((item, i) => (
              <button key={i} onClick={() => scrollTo(item.id)} style={{
                display: 'block', background: 'none', color: 'rgba(255,255,255,0.6)',
                padding: '5px 0', fontSize: '0.88rem', cursor: 'pointer', width: '100%', textAlign: 'left',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{item.label}</button>
            ))}
          </div>

          {/* Policies */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16 }}>
              {lang === 'en' ? 'Legal' : 'Chính sách'}
            </h4>
            {[t.footer.terms, t.footer.policy, t.footer.payment,
              lang === 'en' ? 'About Us' : 'Về chúng tôi'].map((item, i) => (
              <a key={i} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', padding: '5px 0', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >{item}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 16 }}>{t.footer.contact}</h4>
            {[
              { icon: <MapPin size={14} />, text: t.footer.address },
              { icon: <Phone size={14} />, text: t.footer.phone },
              { icon: <Mail size={14} />, text: t.footer.email },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12, color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                <span style={{ flexShrink: 0, marginTop: 3, color: 'var(--green-light)' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            © 2025 VietLocal. {lang === 'en' ? 'All rights reserved.' : 'Bảo lưu mọi quyền.'}
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            {lang === 'en' ? 'Made with ❤️ in Vietnam' : 'Làm với ❤️ tại Việt Nam'}
          </p>
        </div>
      </div>
    </footer>
  )
}
