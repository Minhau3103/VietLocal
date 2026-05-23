import { useState } from 'react'
import { X, CheckCircle, CreditCard } from 'lucide-react'
import { useApp } from '../contexts/AppContext'

const QR_PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(`
<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="160" height="160" fill="white"/>
  <rect x="10" y="10" width="40" height="40" fill="none" stroke="#1A4A3C" stroke-width="4"/>
  <rect x="20" y="20" width="20" height="20" fill="#1A4A3C"/>
  <rect x="110" y="10" width="40" height="40" fill="none" stroke="#1A4A3C" stroke-width="4"/>
  <rect x="120" y="20" width="20" height="20" fill="#1A4A3C"/>
  <rect x="10" y="110" width="40" height="40" fill="none" stroke="#1A4A3C" stroke-width="4"/>
  <rect x="20" y="120" width="20" height="20" fill="#1A4A3C"/>
  <text x="80" y="88" font-size="10" text-anchor="middle" fill="#1A4A3C" font-family="sans-serif">VietLocal</text>
  <text x="80" y="100" font-size="8" text-anchor="middle" fill="#666" font-family="sans-serif">Scan to pay</text>
</svg>`)

export default function PaymentModal() {
  const { t, lang, setShowPayment, currentPlan, showToast, user } = useApp()
  const [method, setMethod] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePay = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSuccess(true)
    // Save booking
    const bookings = JSON.parse(localStorage.getItem('vietlocal_bookings') || '[]')
    bookings.push({ id: Date.now(), userId: user?.id, plan: currentPlan, method: t.payment.methods[method], date: new Date().toISOString() })
    localStorage.setItem('vietlocal_bookings', JSON.stringify(bookings))
    setTimeout(() => { setSuccess(false); setShowPayment(false) }, 3000)
  }

  if (success) return (
    <div className="modal-overlay">
      <div className="modal-box" style={{ textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle size={36} color="#4CAF50" />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--green)', marginBottom: 12 }}>
          {lang === 'en' ? '🎉 Trip Scheduled Successfully!' : '🎉 Đã lên lịch thành công!'}
        </h3>
        <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 10 }}>
          {lang === 'en'
            ? 'Your trip has been confirmed. Please check your email for full trip details and guide contact info.'
            : 'Chuyến đi của bạn đã được xác nhận. Vui lòng kiểm tra email để xem thông tin chi tiết và liên hệ hướng dẫn viên.'}
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#F0F8F5', border: '1.5px solid var(--green)',
          borderRadius: 50, padding: '8px 20px',
          color: 'var(--green)', fontWeight: 600, fontSize: '0.9rem',
        }}>
          📧 {lang === 'en' ? 'Check your email now' : 'Kiểm tra email của bạn'}
        </div>
      </div>
    </div>
  )

  return (
    <div className="modal-overlay" onClick={() => setShowPayment(false)}>
      <div className="modal-box" style={{ maxWidth: 500 }} onClick={e => e.stopPropagation()}>
        <button onClick={() => setShowPayment(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', color: 'var(--text-light)' }}>
          <X size={20} />
        </button>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--green)', marginBottom: 24 }}>
          {t.payment.title}
        </h3>

        {/* Booking summary */}
        <div style={{ background: 'var(--cream)', borderRadius: 12, padding: '16px 20px', marginBottom: 24 }}>
          <div style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: 10, fontSize: '0.9rem' }}>{t.payment.summary}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: 6 }}>
            <span>{lang === 'en' ? 'Destination' : 'Điểm đến'}</span>
            <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{currentPlan?.destination || 'Vietnam Tour'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: 6 }}>
            <span>{lang === 'en' ? 'Duration' : 'Thời gian'}</span>
            <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>{currentPlan?.duration || '3 days'}</span>
          </div>
          <div style={{ borderTop: '1px solid #DDD8CC', marginTop: 10, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-dark)' }}>{t.payment.total}</span>
            <span style={{ fontWeight: 700, color: 'var(--green)', fontSize: '1rem' }}>499,000 VNĐ</span>
          </div>
        </div>

        {/* Payment methods */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '0.9rem', color: 'var(--text-dark)' }}>
            <CreditCard size={15} style={{ display: 'inline', marginRight: 6 }} />
            {t.payment.method}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {t.payment.methods.map((m, i) => (
              <label key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', borderRadius: 10,
                border: `1.5px solid ${method === i ? 'var(--green)' : '#E0D8CC'}`,
                background: method === i ? '#F0F8F5' : 'white',
                cursor: 'pointer', transition: 'all 0.15s',
              }}>
                <input type="radio" checked={method === i} onChange={() => setMethod(i)} style={{ accentColor: 'var(--green)' }} />
                <span style={{ fontSize: '0.88rem', fontWeight: method === i ? 600 : 400, color: method === i ? 'var(--green)' : 'var(--text-dark)' }}>{m}</span>
              </label>
            ))}
          </div>
        </div>

        {/* QR for e-wallets */}
        {method >= 1 && method <= 3 && (
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <img src={QR_PLACEHOLDER} alt="QR Code" style={{ width: 120, height: 120, margin: '0 auto', borderRadius: 8, border: '1px solid #EEE' }} />
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: 8 }}>
              {lang === 'en' ? 'Scan QR to pay' : 'Quét mã QR để thanh toán'}
            </p>
          </div>
        )}

        <button onClick={handlePay} disabled={loading} className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: '1rem' }}>
          {loading ? <><span className="spinner" /> {lang === 'en' ? 'Processing...' : 'Đang xử lý...'}</> : t.payment.confirm}
        </button>
      </div>
    </div>
  )
}
