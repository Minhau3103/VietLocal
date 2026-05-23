import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const translations = {
  en: {
    nav: {
      home: 'Home', ai: 'AI Planning', guides: 'Tour Guides',
      about: 'About VietLocal', destinations: 'Destinations',
      food: 'Cuisine', blog: 'Blog', login: 'Login', register: 'Register', logout: 'Logout',
      myBookings: 'My Bookings'
    },
    hero: {
      badge: 'AI-Powered Travel Planning',
      title: 'Discover Vietnam Like a Local',
      subtitle: 'Tell us where you want to go — our AI will build a personalized itinerary and connect you with the perfect local guide.',
      placeholder: 'Where do you want to explore in Vietnam?',
      search: 'Plan My Trip',
      popular: 'Popular:',
    },
    ai: {
      title: 'Plan Your Perfect Trip with AI',
      subtitle: 'Fill in your preferences and our AI will create a personalized itinerary just for you.',
      destination: 'Destination', destinationPh: 'e.g. Hanoi, Da Nang, Ho Chi Minh City...',
      duration: 'Trip Duration', durationPh: 'e.g. 3 days, 1 week...',
      interests: 'Interests & Food Preferences', interestsPh: 'e.g. history, street food, photography, beaches...',
      guideReq: 'Guide Requirements', guideReqPh: 'e.g. English-speaking, female, experienced in food tours...',
      guideTime: 'Guide Duration Needed', guideTimePh: 'e.g. full day, half day, 2 days...',
      budget: 'Budget (VND)', budgetPh: 'e.g. 500,000 – 2,000,000 VND/day',
      generate: 'Generate My Itinerary',
      generating: 'Creating your plan...',
      planTitle: 'Your Personalized Itinerary',
      confirmPlan: 'Confirm This Plan',
      adjustPlan: 'Adjust Plan',
      bookNow: 'Book Now & Pay',
    },
    guides: {
      title: 'Meet Your Local Guides',
      subtitle: 'Handpicked professionals who know their cities inside out.',
      available: 'Available in',
      book: 'Book This Guide',
    },
    destinations: {
      title: 'Hot Destinations',
      subtitle: 'Three cities, three completely different vibes.',
      explore: 'Explore',
    },
    food: {
      title: 'Must-Try Cuisine',
      subtitle: 'From iconic street food to hidden local gems.',
    },
    about: {
      title: 'About VietLocal',
      p1: 'Every journey begins with a simple desire: to explore a new destination in a way that feels personal and meaningful.',
      p2: 'VietLocal was created to make every journey easier, more personalized, and more connected to local experiences. Through AI-powered planning and real local guides, we help you travel like a true local.',
      vision: 'Vision', visionText: "Vietnam's leading local experience travel platform, where technology and human connection come together.",
      mission: 'Mission', missionText: 'Deliver personalized travel experiences through AI and connect travelers with local guides and communities.',
    },
    steps: {
      title: 'How It Works',
      s1t: 'Tell the AI', s1d: 'Share your destination, duration, interests and budget.',
      s2t: 'Get Your Plan', s2d: 'AI generates a full personalized itinerary in seconds.',
      s3t: 'Choose a Guide', s3d: 'Pick the perfect local guide to accompany your journey.',
      s4t: 'Book & Pay', s4d: 'Confirm your booking and pay securely online.',
    },
    auth: {
      loginTitle: 'Welcome Back', registerTitle: 'Join VietLocal',
      email: 'Email', password: 'Password', name: 'Full Name',
      loginBtn: 'Login', registerBtn: 'Create Account',
      noAccount: "Don't have an account?", hasAccount: 'Already have an account?',
      signUp: 'Sign up', signIn: 'Sign in',
      or: 'or',
      googleBtn: 'Continue with Google',
    },
    payment: {
      title: 'Complete Your Booking',
      summary: 'Booking Summary',
      total: 'Total',
      method: 'Payment Method',
      methods: ['Bank Transfer', 'MoMo', 'ZaloPay', 'VNPay', 'Visa/Mastercard'],
      confirm: 'Confirm & Pay',
      success: 'Booking Confirmed! 🎉',
      successMsg: 'Your itinerary and guide have been booked. Check your email for details.',
    },
    blog: { title: 'Travel Stories', subtitle: 'Genuine stories from the road.', readMore: 'Read more' },
    footer: { contact: 'Contact', address: '15 D5 Street, Thanh My Tay Ward, Ho Chi Minh City', phone: '(+84) Hotline', email: 'VietLocal@gmail.com', follow: 'Follow Us', terms: 'Terms', policy: 'Privacy Policy', payment: 'Payment' },
  },
  vi: {
    nav: {
      home: 'Trang chủ', ai: 'AI Planning', guides: 'Hướng dẫn viên',
      about: 'Về VietLocal', destinations: 'Điểm đến',
      food: 'Ẩm thực', blog: 'Blog', login: 'Đăng nhập', register: 'Đăng ký', logout: 'Đăng xuất',
      myBookings: 'Đặt chỗ của tôi'
    },
    hero: {
      badge: 'Lập kế hoạch du lịch bằng AI',
      title: 'Khám phá Việt Nam như người địa phương',
      subtitle: 'Cho chúng tôi biết bạn muốn đi đâu — AI sẽ tạo lịch trình cá nhân hóa và kết nối bạn với hướng dẫn viên địa phương phù hợp nhất.',
      placeholder: 'Bạn muốn khám phá đâu ở Việt Nam?',
      search: 'Lên kế hoạch ngay',
      popular: 'Phổ biến:',
    },
    ai: {
      title: 'Lên kế hoạch chuyến đi hoàn hảo với AI',
      subtitle: 'Điền thông tin của bạn và AI sẽ tạo lịch trình cá nhân hóa chỉ dành cho bạn.',
      destination: 'Điểm đến', destinationPh: 'VD: Hà Nội, Đà Nẵng, Hồ Chí Minh...',
      duration: 'Thời gian chuyến đi', durationPh: 'VD: 3 ngày, 1 tuần...',
      interests: 'Sở thích & Ẩm thực', interestsPh: 'VD: lịch sử, ẩm thực đường phố, chụp ảnh, bãi biển...',
      guideReq: 'Yêu cầu hướng dẫn viên', guideReqPh: 'VD: nói tiếng Anh, nữ, có kinh nghiệm food tour...',
      guideTime: 'Thời gian cần hướng dẫn viên', guideTimePh: 'VD: cả ngày, nửa ngày, 2 ngày...',
      budget: 'Ngân sách (VNĐ)', budgetPh: 'VD: 500.000 – 2.000.000 VNĐ/ngày',
      generate: 'Tạo lịch trình của tôi',
      generating: 'Đang tạo kế hoạch...',
      planTitle: 'Lịch trình cá nhân hóa của bạn',
      confirmPlan: 'Xác nhận kế hoạch này',
      adjustPlan: 'Điều chỉnh kế hoạch',
      bookNow: 'Đặt chỗ & Thanh toán',
    },
    guides: {
      title: 'Gặp gỡ hướng dẫn viên địa phương',
      subtitle: 'Những chuyên gia được tuyển chọn kỹ, am hiểu thành phố của mình.',
      available: 'Hoạt động tại',
      book: 'Đặt hướng dẫn viên này',
    },
    destinations: {
      title: 'Điểm đến nổi bật',
      subtitle: 'Ba thành phố, ba phong cách hoàn toàn khác nhau.',
      explore: 'Khám phá',
    },
    food: {
      title: 'Ẩm thực phải thử',
      subtitle: 'Từ món ăn đường phố nổi tiếng đến hương vị địa phương ẩn giấu.',
    },
    about: {
      title: 'Về VietLocal',
      p1: 'Mỗi hành trình đều bắt đầu từ một mong muốn đơn giản: khám phá điểm đến mới theo cách cá nhân và ý nghĩa.',
      p2: 'VietLocal được tạo ra để mỗi chuyến đi trở nên dễ dàng hơn, cá nhân hóa hơn và gắn kết hơn với trải nghiệm địa phương. Thông qua lập kế hoạch bằng AI và hướng dẫn viên địa phương thực sự.',
      vision: 'Tầm nhìn', visionText: 'Nền tảng du lịch trải nghiệm địa phương hàng đầu Việt Nam, nơi công nghệ và kết nối con người tạo nên hành trình ý nghĩa.',
      mission: 'Sứ mệnh', missionText: 'Cung cấp trải nghiệm du lịch cá nhân hóa thông qua AI và kết nối du khách với hướng dẫn viên và cộng đồng địa phương.',
    },
    steps: {
      title: 'Cách thức hoạt động',
      s1t: 'Nói với AI', s1d: 'Chia sẻ điểm đến, thời gian, sở thích và ngân sách của bạn.',
      s2t: 'Nhận kế hoạch', s2d: 'AI tạo lịch trình cá nhân hóa hoàn chỉnh trong vài giây.',
      s3t: 'Chọn hướng dẫn viên', s3d: 'Chọn hướng dẫn viên địa phương phù hợp nhất.',
      s4t: 'Đặt chỗ & Thanh toán', s4d: 'Xác nhận đặt chỗ và thanh toán an toàn trực tuyến.',
    },
    auth: {
      loginTitle: 'Chào mừng trở lại', registerTitle: 'Tham gia VietLocal',
      email: 'Email', password: 'Mật khẩu', name: 'Họ và tên',
      loginBtn: 'Đăng nhập', registerBtn: 'Tạo tài khoản',
      noAccount: 'Chưa có tài khoản?', hasAccount: 'Đã có tài khoản?',
      signUp: 'Đăng ký', signIn: 'Đăng nhập',
      or: 'hoặc',
      googleBtn: 'Tiếp tục với Google',
    },
    payment: {
      title: 'Hoàn tất đặt chỗ',
      summary: 'Tóm tắt đặt chỗ',
      total: 'Tổng cộng',
      method: 'Phương thức thanh toán',
      methods: ['Chuyển khoản ngân hàng', 'MoMo', 'ZaloPay', 'VNPay', 'Visa/Mastercard'],
      confirm: 'Xác nhận & Thanh toán',
      success: 'Đặt chỗ thành công! 🎉',
      successMsg: 'Lịch trình và hướng dẫn viên đã được đặt. Kiểm tra email để biết thêm chi tiết.',
    },
    blog: { title: 'Câu chuyện du lịch', subtitle: 'Những chia sẻ chân thực từ những chuyến đi.', readMore: 'Đọc thêm' },
    footer: { contact: 'Liên hệ', address: 'Số 15 Đường D5, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh', phone: '(+84) Hotline', email: 'VietLocal@gmail.com', follow: 'Theo dõi chúng tôi', terms: 'Điều khoản', policy: 'Bảo mật', payment: 'Thanh toán' },
  }
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [currentPlan, setCurrentPlan] = useState(null)
  const [toast, setToast] = useState(null)

  const t = translations[lang]

  // Load user from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('vietlocal_user')
    if (saved) setUser(JSON.parse(saved))
    const savedLang = localStorage.getItem('vietlocal_lang')
    if (savedLang) setLang(savedLang)
  }, [])

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('vietlocal_user', JSON.stringify(userData))
    setShowLogin(false)
    showToast(lang === 'en' ? `Welcome back, ${userData.name}!` : `Chào mừng trở lại, ${userData.name}!`)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('vietlocal_user')
    showToast(lang === 'en' ? 'Logged out successfully.' : 'Đã đăng xuất.')
  }

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('vietlocal_lang', l)
  }

  const showToast = (msg, duration = 3000) => {
    setToast(msg)
    setTimeout(() => setToast(null), duration)
  }

  return (
    <AppContext.Provider value={{
      lang, switchLang, t, user, login, logout,
      showLogin, setShowLogin,
      showRegister, setShowRegister,
      showPayment, setShowPayment,
      currentPlan, setCurrentPlan,
      toast, showToast
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
