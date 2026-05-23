import { useState } from 'react'
import { X, Eye, EyeOff } from 'lucide-react'
import { useApp } from '../contexts/AppContext'

export function LoginModal() {
  const { t, lang, setShowLogin, setShowRegister, login } = useApp()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')
    if (!email || !password) { setError(lang === 'en' ? 'Please fill in all fields.' : 'Vui lòng điền đầy đủ thông tin.'); return }
    setLoading(true)
    // Simulate auth (replace with real backend)
    await new Promise(r => setTimeout(r, 800))
    const users = JSON.parse(localStorage.getItem('vietlocal_users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)
    if (found) {
      login({ name: found.name, email: found.email, id: found.id })
    } else {
      setError(lang === 'en' ? 'Invalid email or password.' : 'Email hoặc mật khẩu không đúng.')
    }
    setLoading(false)
  }

  const handleGoogle = () => {
    // Simulate Google auth
    login({ name: 'Google User', email: 'user@gmail.com', id: Date.now() })
  }

  return (
    <div className="modal-overlay" onClick={() => setShowLogin(false)}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button onClick={() => setShowLogin(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', color: 'var(--text-light)', padding: 4 }}>
          <X size={20} />
        </button>

        <div style={{ marginBottom: 28, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--green)', marginBottom: 4 }}>
            {t.auth.loginTitle}
          </div>
          <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>VietLocal – Travel Like a Local</p>
        </div>

        {/* Google */}
        <button onClick={handleGoogle} style={{
          width: '100%', padding: '12px', marginBottom: 20,
          border: '1.5px solid #DDD', borderRadius: 10,
          background: 'white', cursor: 'pointer', fontFamily: 'var(--font-body)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-dark)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#F8F8F8'}
        onMouseLeave={e => e.currentTarget.style.background = 'white'}
        >
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.6 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 6.9 29.5 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.5-.4-3.9z"/><path fill="#FF3D00" d="M6.3 15.1l6.6 4.8C14.6 16.7 19 14 24 14c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 8.9 29.5 7 24 7 16.3 7 9.7 11.1 6.3 15.1z"/><path fill="#4CAF50" d="M24 43c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.1 34.4 26.7 35 24 35c-5.2 0-9.5-3.4-11.2-8H6.5C9.8 36.5 16.3 43 24 43z"/><path fill="#1976D2" d="M43.6 22.1H42V22H24v8h11.3c-.9 2.5-2.5 4.7-4.7 6.3l6.2 5.2C40.5 38.6 44 33.3 44 27c0-1.6-.1-3.1-.4-4.9z"/></svg>
          {t.auth.googleBtn}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: '#EEE' }} />
          <span style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>{t.auth.or}</span>
          <div style={{ flex: 1, height: 1, background: '#EEE' }} />
        </div>

        {error && <div style={{ background: '#FEF0F0', border: '1px solid #FCC', borderRadius: 8, padding: '10px 14px', color: '#CC3333', fontSize: '0.85rem', marginBottom: 16 }}>{error}</div>}

        <div className="form-group">
          <label className="form-label">{t.auth.email}</label>
          <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" onKeyDown={e => e.key === 'Enter' && handleLogin()} />
        </div>
        <div className="form-group" style={{ position: 'relative' }}>
          <label className="form-label">{t.auth.password}</label>
          <input className="form-input" type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" onKeyDown={e => e.key === 'Enter' && handleLogin()} style={{ paddingRight: 44 }} />
          <button onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 14, top: 34, background: 'none', color: 'var(--text-light)' }}>
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <button onClick={handleLogin} disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem', marginTop: 4 }}>
          {loading ? <><span className="spinner" /> {lang === 'en' ? 'Logging in...' : 'Đang đăng nhập...'}</> : t.auth.loginBtn}
        </button>

        <p style={{ textAlign: 'center', marginTop: 18, color: 'var(--text-mid)', fontSize: '0.88rem' }}>
          {t.auth.noAccount}{' '}
          <button onClick={() => { setShowLogin(false); setShowRegister(true) }} style={{ background: 'none', color: 'var(--green)', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            {t.auth.signUp}
          </button>
        </p>
      </div>
    </div>
  )
}

export function RegisterModal() {
  const { t, lang, setShowLogin, setShowRegister, login } = useApp()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = async () => {
    setError('')
    if (!name || !email || !password) { setError(lang === 'en' ? 'Please fill in all fields.' : 'Vui lòng điền đầy đủ thông tin.'); return }
    if (password.length < 6) { setError(lang === 'en' ? 'Password must be at least 6 characters.' : 'Mật khẩu phải ít nhất 6 ký tự.'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    const users = JSON.parse(localStorage.getItem('vietlocal_users') || '[]')
    if (users.find(u => u.email === email)) {
      setError(lang === 'en' ? 'Email already registered.' : 'Email đã được đăng ký.'); setLoading(false); return
    }
    const newUser = { id: Date.now(), name, email, password }
    users.push(newUser)
    localStorage.setItem('vietlocal_users', JSON.stringify(users))
    login({ name, email, id: newUser.id })
    setShowRegister(false)
    setLoading(false)
  }

  return (
    <div className="modal-overlay" onClick={() => setShowRegister(false)}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button onClick={() => setShowRegister(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', color: 'var(--text-light)', padding: 4 }}>
          <X size={20} />
        </button>
        <div style={{ marginBottom: 28, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--green)', marginBottom: 4 }}>{t.auth.registerTitle}</div>
          <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>VietLocal – Travel Like a Local</p>
        </div>

        {error && <div style={{ background: '#FEF0F0', border: '1px solid #FCC', borderRadius: 8, padding: '10px 14px', color: '#CC3333', fontSize: '0.85rem', marginBottom: 16 }}>{error}</div>}

        <div className="form-group">
          <label className="form-label">{t.auth.name}</label>
          <input className="form-input" value={name} onChange={e => setName(e.target.value)} placeholder={lang === 'en' ? 'Your full name' : 'Họ và tên của bạn'} />
        </div>
        <div className="form-group">
          <label className="form-label">{t.auth.email}</label>
          <input className="form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" />
        </div>
        <div className="form-group" style={{ position: 'relative' }}>
          <label className="form-label">{t.auth.password}</label>
          <input className="form-input" type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 6 characters" style={{ paddingRight: 44 }} />
          <button onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 14, top: 34, background: 'none', color: 'var(--text-light)' }}>
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <button onClick={handleRegister} disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}>
          {loading ? <><span className="spinner" /> {lang === 'en' ? 'Creating account...' : 'Đang tạo tài khoản...'}</> : t.auth.registerBtn}
        </button>
        <p style={{ textAlign: 'center', marginTop: 18, color: 'var(--text-mid)', fontSize: '0.88rem' }}>
          {t.auth.hasAccount}{' '}
          <button onClick={() => { setShowRegister(false); setShowLogin(true) }} style={{ background: 'none', color: 'var(--green)', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            {t.auth.signIn}
          </button>
        </p>
      </div>
    </div>
  )
}
