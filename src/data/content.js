// Using Wikimedia Commons & direct CDN links - verified working
const IMG = {
  // DESTINATIONS
  hcm:    'https://wallpaperswide.com/download/ho_chi_minh_city_hcmc_saigon_vietnam_asia-wallpaper-2048x1536.jpg',
  hanoi:  'https://cdn.justfly.vn/2048x1365/media/db/87/da5a-092f-4c27-bc45-11d1c5ee6397.jpg',
  danang: 'https://tse4.mm.bing.net/th/id/OIP.0L9AzlFQDPUMt7ibAIC-bgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',

  // FOOD - Wikipedia food photos, all verified
  pho:        'https://www.thedailymeal.com/img/gallery/the-ultimate-guide-to-pho/l-intro-1659125110.jpg',
  banhmi:     'https://tse2.mm.bing.net/th/id/OIP.63a791CGu4ICQIOJUcCzMgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
  miquang:    'https://tse1.mm.bing.net/th/id/OIP.d7vTOLt9modt99evtRFOxQHaEj?rs=1&pid=ImgDetMain&o=7&rm=3',
  buncha:     'https://www.seriouseats.com/thmb/atsVhLwxdCWyX-QDuhOLhR0Kx4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VyTran-BunChaHanoi-18-e37d96a89a0f43d097e02311686290f2.jpg',
  comtam:     'https://tse4.mm.bing.net/th/id/OIP.Q4eg-KuxLJLrxTJz3IbYGAHaFS?w=700&h=500&rs=1&pid=ImgDetMain&o=7&rm=3',
  caphetrung: 'https://tse3.mm.bing.net/th/id/OIP.dsc98uHj85XJ8mFz2kBm6QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',

  // BLOG
  blog_dn:  'https://cdn3.ivivu.com/2022/09/c%E1%BA%A7u-r%E1%BB%93ng-%C4%91%C3%A0-n%E1%BA%B5ng-ivivu-4.jpg',
  blog_hn:  'https://lh3.googleusercontent.com/pw/AP1GczOnozAmitbjYrf_I1CL1C2qpPa7ErK_CyvtXyrWcTKtbxWUYRxAbG3d3WinXWP1MRBd7kRTjgCZpcoC8HzN6Y0zI6Q1jpo8p0RhrpSWz-PZIKYJC635CZoebKFGxnPZEEMqZmYa2gTY2W2z7LcQIa2c=w1464-h976-s-no-gm?authuser=0',
  blog_hcm: 'https://img6.thuthuatphanmem.vn/uploads/2022/02/09/hinh-anh-dep-ve-thanh-pho-ho-chi-minh_031030613.jpg',

  // GUIDES (Unsplash portraits - these work fine)
  g1: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA22URV2.img?w=720&h=455&m=4&q=100',
  g2: 'https://hoichimtroi.com/wp-content/uploads/2025/07/anh-do-mixi-9-240x300.jpg',
  g3: 'https://photo.znews.vn/w1250/Uploaded/gtnvzv/2026_05_21/long_nhat_2.jpg',
  g4: 'https://nqs.1cdn.vn/2024/11/10/image.tienphong.vn-uploaded-2024-qjh-vcobuhviob-2024_11_10-_ca-si-chi-dan-7924.jpeg',
}

export const GUIDES = [
  {
    id: 1, name: 'Nguyen Linh Na', nameVi: 'Nguyễn Linh Na',
    cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    citiesVi: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng'],
    lang: 'English', rating: 4.9, reviews: 128, price: '499,000 VND/day',
    desc: 'Licensed international tour guide with deep expertise in Indochina culture, traditional cuisine, and colonial architecture.',
    descVi: 'Hướng dẫn viên quốc tế có chuyên môn sâu về văn hóa Đông Dương, ẩm thực truyền thống và kiến trúc thuộc địa.',
    style: 'Refined, energetic, inspiring', styleVi: 'Tinh tế, năng động, truyền cảm hứng',
    photo: IMG.g1,
    reviewList: [
      { user: 'James T.', text: 'Linh Na was absolutely phenomenal. Her knowledge of history made every site come alive!', rating: 5 },
      { user: 'Sarah M.', text: 'Professional, warm, and incredibly knowledgeable. Highly recommend!', rating: 5 },
    ]
  },
  {
    id: 2, name: 'Tran Minh Quan (Alex)', nameVi: 'Trần Minh Quân (Alex)',
    cities: ['Hanoi'], citiesVi: ['Hà Nội'],
    lang: 'English (IELTS 7.5)', rating: 4.8, reviews: 64, price: '299,000 VND/day',
    desc: 'Final-year tourism student passionate about Northern ethnic minority history and sustainable travel.',
    descVi: 'Sinh viên năm cuối ngành du lịch, đam mê lịch sử dân tộc thiểu số miền Bắc và du lịch bền vững.',
    style: 'Youthful, enthusiastic, engaging', styleVi: 'Trẻ trung, nhiệt huyết, tạo không khí vui vẻ',
    photo: IMG.g2,
    reviewList: [
      { user: 'Emma L.', text: 'Alex brought so much energy and passion. Our Hanoi trip was unforgettable!', rating: 5 },
      { user: 'Tom K.', text: 'Great value, super knowledgeable about the Old Quarter.', rating: 4 },
    ]
  },
  {
    id: 3, name: 'Le Hoang Nam', nameVi: 'Lê Hoàng Nam',
    cities: ['Da Nang'], citiesVi: ['Đà Nẵng'],
    lang: 'English & Vietnamese', rating: 4.9, reviews: 89, price: '350,000 VND/day',
    desc: 'Born and raised in Da Nang, specializing in authentic local food tours, urban photography, and off-the-beaten-path gems.',
    descVi: 'Sinh ra và lớn lên tại Đà Nẵng, chuyên food tour địa phương, nhiếp ảnh đô thị và những địa điểm ít người biết.',
    style: 'Friendly, informative, authentic', styleVi: 'Thân thiện, chia sẻ tận tình, chân thực',
    photo: IMG.g3,
    reviewList: [
      { user: 'Maria G.', text: 'Nam took us to places no tourist would ever find. Pure magic!', rating: 5 },
      { user: 'David R.', text: 'The food tour was incredible. He knows every hidden gem in Da Nang.', rating: 5 },
    ]
  },
  {
    id: 4, name: 'Nguyen Vu Lam (Kevin)', nameVi: 'Nguyễn Vũ Lâm (Kevin)',
    cities: ['Ho Chi Minh City'], citiesVi: ['TP. Hồ Chí Minh'],
    lang: 'English', rating: 4.7, reviews: 45, price: '199,000 VND/half day',
    desc: 'English major specializing in budget-friendly walking tours, Saigon urban history, and hidden café culture.',
    descVi: 'Chuyên ngành tiếng Anh, chuyên walking tour bình dân, lịch sử đô thị Sài Gòn và văn hóa cà phê ẩn.',
    style: 'Dynamic, open-minded, energetic', styleVi: 'Năng động, cởi mở, đầy năng lượng',
    photo: IMG.g4,
    reviewList: [
      { user: 'Lisa P.', text: 'Kevin is the ultimate budget guide. We packed so much into half a day!', rating: 5 },
      { user: 'Chen W.', text: 'Super fun and knew all the best street food spots.', rating: 4 },
    ]
  },
]

export const DESTINATIONS = [
  {
    id: 'hcm', name: 'Ho Chi Minh City', nameVi: 'TP. Hồ Chí Minh',
    tagline: 'The city that never runs out of energy',
    taglineVi: 'Thành phố không bao giờ hết năng lượng',
    desc: 'Saigon pulses with life 24/7. From colonial landmarks to rooftop bars, night markets to hidden cafés in old apartments.',
    descVi: 'Sài Gòn không ngủ. Từ di tích lịch sử đến rooftop bar, chợ đêm đến cà phê trong chung cư cũ.',
    photo: IMG.hcm,
    highlights: ['Reunification Palace', 'Ben Thanh Market', 'Bui Vien Street', 'War Remnants Museum'],
    highlightsVi: ['Dinh Độc Lập', 'Chợ Bến Thành', 'Phố Tây Bùi Viện', 'Bảo tàng Chứng tích Chiến tranh'],
  },
  {
    id: 'hanoi', name: 'Hanoi', nameVi: 'Hà Nội',
    tagline: 'A city that rewards those who slow down',
    taglineVi: 'Thành phố dành cho người biết sống chậm',
    desc: 'Thousand-year capital with misty lakes, ancient temples, and a coffee culture unlike anywhere else.',
    descVi: 'Thủ đô nghìn năm với những hồ sương mờ, đền cổ, và văn hóa cà phê không đâu có được.',
    photo: IMG.hanoi,
    highlights: ['Hoan Kiem Lake', 'Temple of Literature', 'Old Quarter', 'Ho Chi Minh Mausoleum'],
    highlightsVi: ['Hồ Hoàn Kiếm', 'Văn Miếu', 'Phố cổ', 'Lăng Bác'],
  },
  {
    id: 'danang', name: 'Da Nang', nameVi: 'Đà Nẵng',
    tagline: 'Come for the beach, stay for the calm',
    taglineVi: 'Đến vì biển, ở lại vì bình yên',
    desc: "Vietnam's most livable city: pristine beaches, marble mountains, legendary seafood, and the iconic Dragon Bridge.",
    descVi: 'Thành phố đáng sống nhất Việt Nam: biển đẹp, Ngũ Hành Sơn, hải sản ngon và Cầu Rồng huyền thoại.',
    photo: IMG.danang,
    highlights: ['My Khe Beach', 'Dragon Bridge', 'Marble Mountains', 'Son Tra Peninsula'],
    highlightsVi: ['Biển Mỹ Khê', 'Cầu Rồng', 'Ngũ Hành Sơn', 'Bán đảo Sơn Trà'],
  },
]

export const FOODS = [
  {
    id: 1, name: 'Phở', nameVi: 'Phở',
    desc: "Vietnam's soul in a bowl. Slow-cooked broth, silky rice noodles, fresh herbs, and tender beef.",
    descVi: 'Linh hồn Việt Nam trong một tô. Nước dùng hầm chậm, bánh phở mềm, rau thơm và thịt tươi.',
    origin: 'Hanoi', originVi: 'Hà Nội', price: '35,000 – 80,000 VND',
    photo: IMG.pho,
  },
  {
    id: 2, name: 'Bánh Mì', nameVi: 'Bánh Mì',
    desc: 'The legendary Vietnamese sandwich. Crispy baguette with pâté, cold cuts, pickled veggies and chili.',
    descVi: 'Bánh mì huyền thoại Việt Nam. Vỏ giòn với pâté, thịt nguội, rau củ chua và ớt.',
    origin: 'Ho Chi Minh City', originVi: 'Hồ Chí Minh', price: '20,000 – 45,000 VND',
    photo: IMG.banhmi,
  },
  {
    id: 3, name: 'Mì Quảng', nameVi: 'Mì Quảng',
    desc: "Da Nang's pride: turmeric-yellow noodles with shrimp, pork, peanuts, and rich broth.",
    descVi: 'Niềm tự hào Đà Nẵng: mì nghệ vàng với tôm, thịt heo, đậu phộng và nước dùng đậm đà.',
    origin: 'Da Nang', originVi: 'Đà Nẵng', price: '30,000 – 60,000 VND',
    photo: IMG.miquang,
  },
  {
    id: 4, name: 'Bún Chả', nameVi: 'Bún Chả',
    desc: "Hanoi's most beloved lunch: grilled pork in sweet fish sauce broth with vermicelli and fresh herbs.",
    descVi: 'Món ăn trưa yêu thích nhất Hà Nội: chả nướng trong nước mắm ngọt, bún và rau thơm tươi.',
    origin: 'Hanoi', originVi: 'Hà Nội', price: '40,000 – 70,000 VND',
    photo: IMG.buncha,
  },
  {
    id: 5, name: 'Cơm Tấm', nameVi: 'Cơm Tấm',
    desc: 'Broken rice with grilled pork chops — the quintessential Saigon breakfast locals swear by.',
    descVi: 'Cơm tấm sườn nướng — bữa sáng đặc trưng Sài Gòn mà người địa phương không thể thiếu.',
    origin: 'Ho Chi Minh City', originVi: 'Hồ Chí Minh', price: '35,000 – 65,000 VND',
    photo: IMG.comtam,
  },
  {
    id: 6, name: 'Cà Phê Trứng', nameVi: 'Cà Phê Trứng',
    desc: "Hanoi's unique egg coffee — strong Vietnamese brew topped with creamy velvety egg foam.",
    descVi: 'Cà phê trứng độc đáo Hà Nội — cà phê đậm đà phủ lớp kem trứng mịn béo ngậy.',
    origin: 'Hanoi', originVi: 'Hà Nội', price: '25,000 – 50,000 VND',
    photo: IMG.caphetrung,
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Da Nang – The City People Visit for Travel, But Stay for Peace',
    titleVi: 'Đà Nẵng – Thành phố người ta đến để du lịch, nhưng ở lại vì bình yên',
    excerpt: "If there's one word to describe Da Nang, it would be \"comfortable.\" A city that never makes you feel rushed...",
    excerptVi: 'Nếu phải mô tả Đà Nẵng bằng một từ, có lẽ đó sẽ là "dễ chịu". Một thành phố không khiến người ta vội vàng...',
    photo: IMG.blog_dn, city: 'Da Nang', cityVi: 'Đà Nẵng',
    readTime: '5 min', readTimeVi: '5 phút đọc', date: 'May 2025',
  },
  {
    id: 2,
    title: "Hanoi – A City That Isn't Too Fast, So People Naturally Slow Down",
    titleVi: 'Hà Nội – Thành phố không quá vội để người ta sống chậm lại',
    excerpt: "Hanoi doesn't try to impress you immediately. The longer you stay, the more you understand why so many people love it...",
    excerptVi: 'Hà Nội không cố gắng gây ấn tượng ngay. Ở càng lâu, bạn càng hiểu vì sao nhiều người yêu nơi này đến vậy...',
    photo: IMG.blog_hn, city: 'Hanoi', cityVi: 'Hà Nội',
    readTime: '6 min', readTimeVi: '6 phút đọc', date: 'April 2025',
  },
  {
    id: 3,
    title: 'Ho Chi Minh City – For People Who Always Want to Keep Moving Forward',
    titleVi: 'TP. Hồ Chí Minh – Thành phố của những người luôn muốn đi tiếp',
    excerpt: "If Hanoi feels nostalgic, then Saigon feels like a city that never stops moving...",
    excerptVi: 'Nếu Hà Nội mang cảm giác hoài niệm, thì Sài Gòn giống một thành phố luôn chuyển động...',
    photo: IMG.blog_hcm, city: 'Ho Chi Minh City', cityVi: 'Hồ Chí Minh',
    readTime: '7 min', readTimeVi: '7 phút đọc', date: 'March 2025',
  },
]
