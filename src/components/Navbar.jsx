import { useState, useEffect } from 'react'
import { useApp } from '../contexts/AppContext'
import { Menu, X, Globe, ChevronDown, User, LogOut, BookOpen } from 'lucide-react'

export default function Navbar() {
  const { t, lang, switchLang, user, logout, setShowLogin, setShowRegister } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userDropdown, setUserDropdown] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #E8E0D4' : 'none',
      transition: 'all 0.3s ease',
      padding: scrolled ? '10px 0' : '18px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => scrollTo('hero')}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem'
          }}>V</div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem',
            color: scrolled ? 'var(--green)' : 'white',
            letterSpacing: '0.02em',
            // Thêm đổ bóng mờ cho Logo khi chưa cuộn trang để tránh mất màu
            textShadow: scrolled ? 'none' : '0 1px 5px rgba(0,0,0,0.5)',
          }}>VietLocal</span>
        </div>

        {/* Desktop Nav - Left */}
        {/* Tăng khoảng cách gap lên 16 giúp các cụm nút giãn cách đều mắt */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="desktop-nav">
          {[
            { key: 'home', id: 'hero' },
            { key: 'ai', id: 'ai-section' },
            { key: 'guides', id: 'guides-section' },
          ].map(item => (
            <button key={item.key} onClick={() => scrollTo(item.id)} style={{
              background: 'none', border: 'none', padding: '8px 16px', borderRadius: 8,
              color: scrolled ? 'var(--text-mid)' : 'rgba(255,255,255,0.9)',
              fontWeight: 500, fontSize: '0.88rem',
              transition: 'all 0.2s', cursor: 'pointer',
              // Thêm đổ bóng mờ chống hòa màu nền cho chữ trắng
              textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.6)',
            }}
            onMouseEnter={e => e.currentTarget.style.color = scrolled ? 'var(--green)' : 'white'}
            onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--text-mid)' : 'rgba(255,255,255,0.9)'}
            >{t.nav[item.key]}</button>
          ))}
        </div>

        {/* Desktop Nav - Right */}
        {/* Đồng bộ khoảng cách gap và thứ tự nút About đứng sau cùng */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="desktop-nav">
          {[
            { key: 'destinations', id: 'destinations-section' },
            { key: 'food', id: 'food-section' },
            { key: 'blog', id: 'blog-section' },
            { key: 'about', id: 'about-section' },
          ].map(item => (
            <button key={item.key} onClick={() => scrollTo(item.id)} style={{
              background: 'none', border: 'none', padding: '8px 16px', borderRadius: 8,
              color: scrolled ? 'var(--text-mid)' : 'rgba(255,255,255,0.9)',
              fontWeight: 500, fontSize: '0.88rem', transition: 'all 0.2s', cursor: 'pointer',
              // Thêm đổ bóng mờ chống hòa màu nền cho chữ trắng
              textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.6)',
            }}
            onMouseEnter={e => e.currentTarget.style.color = scrolled ? 'var(--green)' : 'white'}
            onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--text-mid)' : 'rgba(255,255,255,0.9)'}
            >{t.nav[item.key]}</button>
          ))}

          {/* Lang toggle */}
          <button onClick={() => switchLang(lang === 'en' ? 'vi' : 'en')} style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: scrolled ? 'var(--cream-dark)' : 'rgba(255,255,255,0.15)',
            border: 'none', borderRadius: 8, padding: '7px 12px',
            color: scrolled ? 'var(--text-mid)' : 'white',
            fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s',
            boxShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.2)',
          }}>
            <Globe size={14} />
            {lang === 'en' ? 'VI' : 'EN'}
          </button>

          {/* Auth */}
          {user ? (
            <div style={{ position: 'relative' }}>
              <button onClick={() => setUserDropdown(!userDropdown)} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: 'var(--green)', color: 'white',
                border: 'none', borderRadius: 50, padding: '8px 16px',
                fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
              }}>
                <User size={15} />
                {user.name.split(' ').pop()}
                <ChevronDown size={13} />
              </button>
              {userDropdown && (
                <div style={{
                  position: 'absolute', top: '110%', right: 0, minWidth: 180,
                  background: 'white', borderRadius: 12, boxShadow: 'var(--shadow-lg)',
                  border: '1px solid #EEE', overflow: 'hidden', zIndex: 999,
                }}>
                  <button onClick={() => { setUserDropdown(false); scrollTo('ai-section') }} style={{
                    width: '100%', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8,
                    background: 'none', color: 'var(--text-dark)', fontSize: '0.88rem', textAlign: 'left',
                    borderBottom: '1px solid #F5F5F5', border: 'none', cursor: 'pointer',
                  }}>
                    <BookOpen size={14} /> {t.nav.myBookings}
                  </button>
                  <button onClick={() => { setUserDropdown(false); logout() }} style={{
                    width: '100%', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8,
                    background: 'none', color: '#E05555', fontSize: '0.88rem', textAlign: 'left',
                    border: 'none', cursor: 'pointer',
                  }}>
                    <LogOut size={14} /> {t.nav.logout}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={() => setShowLogin(true)} style={{
                background: 'none', border: `1.5px solid ${scrolled ? 'var(--green)' : 'rgba(255,255,255,0.7)'}`,
                color: scrolled ? 'var(--green)' : 'white',
                padding: '7px 16px', borderRadius: 50, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
                textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.4)',
              }}>{t.nav.login}</button>
              <button onClick={() => setShowRegister(true)} className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                {t.nav.register}
              </button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', color: scrolled ? 'var(--green)' : 'white', padding: 6,
          display: 'none', cursor: 'pointer'
        }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'white', borderTop: '1px solid #EEE',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {[
            { key: 'home', id: 'hero' }, { key: 'ai', id: 'ai-section' },
            { key: 'guides', id: 'guides-section' }, { key: 'destinations', id: 'destinations-section' },
            { key: 'food', id: 'food-section' }, { key: 'blog', id: 'blog-section' },
            { key: 'about', id: 'about-section' },
          ].map(item => (
            <button key={item.key} onClick={() => scrollTo(item.id)} style={{
              background: 'none', padding: '10px 0', color: 'var(--text-dark)',
              fontWeight: 500, fontSize: '1rem', textAlign: 'left', border: 'none', borderBottom: '1px solid #F5F5F5',
              cursor: 'pointer'
            }}>{t.nav[item.key]}</button>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            {!user ? (
              <>
                <button onClick={() => { setShowLogin(true); setMenuOpen(false) }} className="btn-outline" style={{ flex: 1, padding: '10px' }}>{t.nav.login}</button>
                <button onClick={() => { setShowRegister(true); setMenuOpen(false) }} className="btn-primary" style={{ flex: 1, padding: '10px' }}>{t.nav.register}</button>
              </>
            ) : (
              <button onClick={() => { logout(); setMenuOpen(false) }} className="btn-outline" style={{ flex: 1, padding: '10px' }}>{t.nav.logout}</button>
            )}
            <button onClick={() => switchLang(lang === 'en' ? 'vi' : 'en')} style={{
              background: 'var(--cream-dark)', border: 'none', borderRadius: 8, padding: '10px 16px',
              fontWeight: 700, color: 'var(--green)', cursor: 'pointer',
            }}>{lang === 'en' ? 'VI' : 'EN'}</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}