// Renders an img; on error shows a themed gradient placeholder
export default function ImageWithFallback({ src, alt, style, fallbackEmoji = '🏙️' }) {
  const handleError = (e) => {
    e.currentTarget.style.display = 'none'
    e.currentTarget.nextSibling.style.display = 'flex'
  }
  return (
    <>
      <img src={src} alt={alt} style={style} onError={handleError} />
      <div style={{
        ...style,
        display: 'none',
        background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
        alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 8,
      }}>
        <span style={{ fontSize: 48 }}>{fallbackEmoji}</span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>{alt}</span>
      </div>
    </>
  )
}
