import { useState } from 'react'
import BlogModal from './BlogModal'
import GuideModal from './GuideModal'
import ImageWithFallback from './ImageWithFallback'
import { useApp } from '../contexts/AppContext'
import { DESTINATIONS, FOODS, BLOG_POSTS, FOOD_TOUR_POSTS } from '../data/content'
import { ArrowRight, Clock, MapPin } from 'lucide-react'

export function DestinationsSection() {
  const { t, lang } = useApp()
  return (
    <section id="destinations-section" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label">🗺️ {lang === 'en' ? 'Explore' : 'Khám phá'}</div>
          <h2 className="section-title">{t.destinations.title}</h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 480, margin: '0 auto' }}>{t.destinations.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {DESTINATIONS.map((dest, i) => (
            <div key={dest.id} style={{
              borderRadius: 20, overflow: 'hidden',
              position: 'relative', cursor: 'pointer',
              height: 400,
              boxShadow: 'var(--shadow)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
            >
              <ImageWithFallback src={dest.photo} alt={dest.name} fallbackEmoji={dest.id==='hanoi'?'🏛️':dest.id==='danang'?'🏖️':'🌆'} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 24px 28px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: i === 0 ? '2rem' : '1.5rem', color: 'white', marginBottom: 6 }}>
                  {lang === 'en' ? dest.name : dest.nameVi}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginBottom: 12, fontStyle: 'italic' }}>
                  {lang === 'en' ? dest.tagline : dest.taglineVi}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {(lang === 'en' ? dest.highlights : dest.highlightsVi).slice(0, 3).map((h, j) => (
                    <span key={j} style={{
                      background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      color: 'white', borderRadius: 50, padding: '3px 10px', fontSize: '0.75rem',
                    }}>{h}</span>
                  ))}
                </div>
                <button onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: 'var(--gold)', color: 'white', border: 'none',
                  borderRadius: 50, padding: '8px 18px', fontWeight: 600,
                  fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}>
                  {t.destinations.explore} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FoodSection() {
  const { t, lang } = useApp()
  return (
    <section id="food-section" style={{ padding: '100px 0', background: '#F5F0E8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label">🍜 {lang === 'en' ? 'Local Flavors' : 'Hương vị địa phương'}</div>
          <h2 className="section-title">{t.food.title}</h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 480, margin: '0 auto' }}>{t.food.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {FOODS.map(food => (
            <div key={food.id} style={{
              background: 'white', borderRadius: 16, overflow: 'hidden',
              boxShadow: 'var(--shadow)', transition: 'transform 0.2s',
              border: '1px solid #EDE8E0',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}
            >
              <div style={{ height: 180, overflow: 'hidden' }}>
                <ImageWithFallback src={food.photo} alt={food.name} fallbackEmoji='🍜' style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--green)' }}>
                    {lang === 'en' ? food.name : food.nameVi}
                  </h3>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 3, color: 'var(--text-light)', fontSize: '0.78rem' }}>
                    <MapPin size={11} /> {lang === 'en' ? food.origin : food.originVi}
                  </span>
                </div>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 10 }}>
                  {lang === 'en' ? food.desc : food.descVi}
                </p>
                <div style={{ fontWeight: 600, color: 'var(--gold)', fontSize: '0.88rem' }}>{food.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogSection() {
  const { t, lang } = useApp()
  const [selectedPost, setSelectedPost] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const allPosts = [...BLOG_POSTS, ...FOOD_TOUR_POSTS]
  const filters = lang === 'vi'
    ? [{ key: 'all', label: 'Tất cả' }, { key: 'Hanoi', label: 'Hà Nội' }, { key: 'Ho Chi Minh City', label: 'Hồ Chí Minh' }, { key: 'Da Nang', label: 'Đà Nẵng' }]
    : [{ key: 'all', label: 'All' }, { key: 'Hanoi', label: 'Hanoi' }, { key: 'Ho Chi Minh City', label: 'Ho Chi Minh' }, { key: 'Da Nang', label: 'Da Nang' }]
  const filtered = activeFilter === 'all' ? allPosts : allPosts.filter(p => p.city === activeFilter)

  return (
    <>
    <section id="blog-section" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="section-label">📖 {lang === 'en' ? 'Stories' : 'Câu chuyện'}</div>
          <h2 className="section-title">{t.blog.title}</h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: 480, margin: '0 auto 28px' }}>{t.blog.subtitle}</p>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)} style={{
                padding: '7px 20px', borderRadius: 50, border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.85rem',
                background: activeFilter === f.key ? 'var(--green)' : 'white',
                color: activeFilter === f.key ? 'white' : 'var(--text-mid)',
                border: activeFilter === f.key ? 'none' : '1.5px solid #DDD',
                transition: 'all 0.2s',
              }}>{f.label}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {filtered.map(post => (
            <article key={post.id} onClick={() => setSelectedPost(post)} style={{
              background: 'white', borderRadius: 20, overflow: 'hidden',
              boxShadow: 'var(--shadow)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
              border: '1px solid #EDE8E0',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
            >
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <ImageWithFallback src={post.photo} alt={post.title} fallbackEmoji="📖" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                  <span style={{ background: 'var(--green)', color: 'white', borderRadius: 50, padding: '3px 10px', fontSize: '0.72rem', fontWeight: 600 }}>
                    {lang === 'vi' ? post.cityVi : post.city}
                  </span>
                  {post.tag && (
                    <span style={{ background: 'var(--gold)', color: 'white', borderRadius: 50, padding: '3px 10px', fontSize: '0.72rem', fontWeight: 600 }}>
                      {lang === 'vi' ? (post.tagVi || post.tag) : post.tag}
                    </span>
                  )}
                </div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.75rem' }}>{post.date}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: 3 }}>
                    ⏱ {lang === 'vi' ? post.readTimeVi : post.readTime}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: 8 }}>
                  {lang === 'vi' ? post.titleVi : post.title}
                </h3>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: 12 }}>
                  {lang === 'vi' ? post.excerptVi : post.excerpt}
                </p>
                {post.spots && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {post.spots.slice(0,2).map((s,i) => (
                      <span key={i} style={{ background: 'var(--cream-dark)', borderRadius: 50, padding: '2px 8px', fontSize: '0.72rem', color: 'var(--text-mid)' }}>
                        📍 {s.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  )
}

export function AboutSection() {
  const { t, lang } = useApp()
  return (
    <section id="about-section" style={{ padding: '100px 0', background: 'var(--green)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
              {lang === 'en' ? 'Our Story' : 'Câu chuyện của chúng tôi'}
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: 24, lineHeight: 1.2 }}>
              {t.about.title}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 16 }}>{t.about.p1}</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 32 }}>{t.about.p2}</p>
            <button onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })} className="btn-gold">
              {lang === 'en' ? 'Plan Your Trip' : 'Lên kế hoạch ngay'} <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { title: t.about.vision, text: t.about.visionText, icon: '🔭' },
              { title: t.about.mission, text: t.about.missionText, icon: '🚀' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 16, padding: '24px 28px',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--gold-light)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
