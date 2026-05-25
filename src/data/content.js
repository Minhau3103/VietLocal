export const GUIDES = [
  {
    id: 1, name: 'Nguyen Linh Na', nameVi: 'Nguyễn Linh Na',
    cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    citiesVi: ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng'],
    lang: 'English', rating: 4.9, reviews: 128, price: '499,000 VND/day',
    desc: 'Licensed international tour guide with deep expertise in Indochina culture, traditional cuisine, and colonial architecture.',
    descVi: 'Hướng dẫn viên quốc tế có chuyên môn sâu về văn hóa Đông Dương, ẩm thực truyền thống và kiến trúc thuộc địa.',
    style: 'Refined, energetic, inspiring', styleVi: 'Tinh tế, năng động, truyền cảm hứng',
    photo: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA22URV2.img?w=720&h=455&m=4&q=100',
    license: '101 396 208',licenseVi: '101 396 208',
    bio: 'As a formally licensed international tour guide, I serve as both a cultural ambassador and professional coordinator for international travelers visiting Vietnam. With strong language skills, a service-oriented mindset, and deep local knowledge, I specialize in managing comprehensive tour programs while ensuring safety, service quality, and memorable experiences.',
    bioVi: 'Là hướng dẫn viên quốc tế có giấy phép chính thức, tôi vừa là đại sứ văn hóa vừa là điều phối viên chuyên nghiệp cho du khách quốc tế đến Việt Nam. Với kỹ năng ngôn ngữ tốt, tư duy dịch vụ và kiến thức địa phương sâu sắc, tôi chuyên quản lý các chương trình tour toàn diện.',
    specialties: ['Cultural Tours', 'Food Tours', 'History & Heritage', 'Architecture'],
    specialtiesVi: ['Tour văn hóa', 'Food tour', 'Lịch sử & Di sản', 'Kiến trúc'],
    reviewList: [
      { user: 'James T.', text: 'Linh Na was absolutely phenomenal. Her knowledge of history made every site come alive!', rating: 5 },
      { user: 'Sarah M.', text: 'Professional, warm, and incredibly knowledgeable. Highly recommend!', rating: 5 },
      { user: 'Yuki T.', text: 'The best guide I\'ve had in Vietnam. She knew every hidden corner of the Old Quarter.', rating: 5 },
    ]
  },
  {
    id: 2, name: 'Tran Minh Quan (Alex)', nameVi: 'Trần Minh Quân (Alex)',
    cities: ['Hanoi'], citiesVi: ['Hà Nội'],
    lang: 'English (IELTS 7.5)', rating: 4.8, reviews: 64, price: '299,000 VND/day',
    desc: 'Final-year tourism student passionate about Northern ethnic minority history and sustainable travel.',
    descVi: 'Sinh viên năm cuối ngành du lịch, đam mê lịch sử dân tộc thiểu số miền Bắc và du lịch bền vững.',
    style: 'Youthful, enthusiastic, engaging', styleVi: 'Trẻ trung, nhiệt huyết, tạo không khí vui vẻ',
    photo: 'https://hoichimtroi.com/wp-content/uploads/2025/07/anh-do-mixi-9-240x300.jpg',
    license: 'Certificate – Excellent Grade', licenseVi: 'Chứng chỉ – Loại Xuất sắc',
    bio: 'Final-year student at University of Social Sciences and Humanities, Hanoi. In-depth knowledge of Ho Chi Minh Mausoleum Complex, Temple of Literature, Imperial Citadel, Hoan Kiem Lake, and the Old Quarter. Expert in eco and Northern experience tours.',
    bioVi: 'Sinh viên năm cuối Đại học Khoa học Xã hội và Nhân văn, Hà Nội. Am hiểu sâu về Khu lăng Bác, Văn Miếu, Hoàng thành Thăng Long, Hồ Hoàn Kiếm và Phố cổ. Chuyên về tour sinh thái miền Bắc.',
    specialties: ['Hanoi City Tours', 'Heritage Sites', 'Eco Tours', 'Craft Villages'],
    specialtiesVi: ['City tour Hà Nội', 'Di tích lịch sử', 'Tour sinh thái', 'Làng nghề'],
    reviewList: [
      { user: 'Emma L.', text: 'Alex brought so much energy and passion. Our Hanoi trip was unforgettable!', rating: 5 },
      { user: 'Tom K.', text: 'Great value, super knowledgeable about the Old Quarter.', rating: 4 },
      { user: 'Marie D.', text: 'Young and very enthusiastic. Took us to places we never would have found alone.', rating: 5 },
    ]
  },
  {
    id: 3, name: 'Le Hoang Nam', nameVi: 'Lê Hoàng Nam',
    cities: ['Da Nang'], citiesVi: ['Đà Nẵng'],
    lang: 'English & Vietnamese', rating: 4.9, reviews: 89, price: '350,000 VND/day',
    desc: 'Born and raised in Da Nang, specializing in authentic local food tours, urban photography, and off-the-beaten-path gems.',
    descVi: 'Sinh ra và lớn lên tại Đà Nẵng, chuyên food tour địa phương, nhiếp ảnh đô thị và những địa điểm ít người biết.',
    style: 'Friendly, informative, authentic', styleVi: 'Thân thiện, chia sẻ tận tình, chân thực',
    photo: 'https://photo.znews.vn/w1250/Uploaded/gtnvzv/2026_05_21/long_nhat_2.jpg',
    license: 'Local Guide – Da Nang', licenseVi: 'Hướng dẫn viên địa phương – Đà Nẵng',
    bio: 'Born and raised in Da Nang, I specialize in connecting travelers with the city\'s most authentic experiences. With extensive knowledge of local geography, urban history, and Central Vietnamese culture, I design city tours, heritage tours, and food tours that provide genuine local perspectives.',
    bioVi: 'Sinh ra và lớn lên tại Đà Nẵng, tôi chuyên kết nối du khách với những trải nghiệm chân thực nhất của thành phố. Với hiểu biết sâu về địa lý địa phương, lịch sử đô thị và văn hóa miền Trung, tôi thiết kế các tour thành phố, di sản và ẩm thực.',
    specialties: ['Food Tours', 'Photography', 'City Tours', 'Beach & Nature'],
    specialtiesVi: ['Food tour', 'Nhiếp ảnh', 'City tour', 'Biển & Thiên nhiên'],
    reviewList: [
      { user: 'Maria G.', text: 'Nam took us to places no tourist would ever find. Pure magic!', rating: 5 },
      { user: 'David R.', text: 'The food tour was incredible. He knows every hidden gem in Da Nang.', rating: 5 },
      { user: 'Sophie L.', text: 'Felt like exploring the city with a best friend who knows everything.', rating: 5 },
    ]
  },
  {
    id: 4, name: 'Nguyen Vu Lam (Kevin)', nameVi: 'Nguyễn Vũ Lâm (Kevin)',
    cities: ['Ho Chi Minh City'], citiesVi: ['TP. Hồ Chí Minh'],
    lang: 'English', rating: 4.7, reviews: 45, price: '199,000 VND/half day',
    desc: 'English major specializing in budget-friendly walking tours, Saigon urban history, and hidden café culture.',
    descVi: 'Chuyên ngành tiếng Anh, chuyên walking tour bình dân, lịch sử đô thị Sài Gòn và văn hóa cà phê ẩn.',
    style: 'Dynamic, open-minded, energetic', styleVi: 'Năng động, cởi mở, đầy năng lượng',
    photo: 'https://nqs.1cdn.vn/2024/11/10/image.tienphong.vn-uploaded-2024-qjh-vcobuhviob-2024_11_10-_ca-si-chi-dan-7924.jpeg',
    license: 'English Studies – HCMC University', licenseVi: 'Sinh viên Tiếng Anh – ĐH TPHCM',
    bio: 'Third-year English major at Ho Chi Minh City University of Education. I focus on providing affordable short tour and coordination services. Fluent English, quick communication skills, and a friendly service mindset. Specializing in half-day tours, walking tours, and inner-city food experiences.',
    bioVi: 'Sinh viên năm 3 ngành Tiếng Anh, ĐH Sư phạm TPHCM. Tôi tập trung cung cấp dịch vụ tour ngắn và điều phối với giá hợp lý. Tiếng Anh lưu loát, giao tiếp nhanh và thân thiện. Chuyên walking tour nửa ngày và food tour trung tâm thành phố.',
    specialties: ['Walking Tours', 'Street Food', 'Budget Tours', 'Café Culture'],
    specialtiesVi: ['Walking tour', 'Ẩm thực đường phố', 'Tour tiết kiệm', 'Văn hóa cà phê'],
    reviewList: [
      { user: 'Lisa P.', text: 'Kevin is the ultimate budget guide. We packed so much into half a day!', rating: 5 },
      { user: 'Chen W.', text: 'Super fun and knew all the best street food spots.', rating: 4 },
      { user: 'Ana R.', text: 'Very affordable and surprisingly knowledgeable about Saigon history.', rating: 5 },
    ]
  },
]

export const DESTINATIONS = [
  {
    id: 'hcm', name: 'Ho Chi Minh City', nameVi: 'TP. Hồ Chí Minh',
    tagline: 'The city that never runs out of energy',
    taglineVi: 'Thành phố không bao giờ hết năng lượng',
    desc: 'Saigon pulses with life 24/7. From colonial landmarks to rooftop bars, night markets to hidden cafés.',
    descVi: 'Sài Gòn không ngủ. Từ di tích lịch sử đến rooftop bar, chợ đêm đến cà phê trong chung cư cũ.',
    photo: 'https://wallpapers.com/images/hd/ho-chi-minh-city-captivating-lights-ueewzvvy69big0po.jpg',
    highlights: ['Reunification Palace', 'Ben Thanh Market', 'Bui Vien Street', 'War Remnants Museum'],
    highlightsVi: ['Dinh Độc Lập', 'Chợ Bến Thành', 'Phố Tây Bùi Viện', 'Bảo tàng Chứng tích Chiến tranh'],
  },
  {
    id: 'hanoi', name: 'Hanoi', nameVi: 'Hà Nội',
    tagline: 'A city that rewards those who slow down',
    taglineVi: 'Thành phố dành cho người biết sống chậm',
    desc: 'Thousand-year capital with misty lakes, ancient temples, and a coffee culture unlike anywhere else.',
    descVi: 'Thủ đô nghìn năm với những hồ sương mờ, đền cổ, và văn hóa cà phê không đâu có được.',
    photo: 'https://lh3.googleusercontent.com/pw/AP1GczOnozAmitbjYrf_I1CL1C2qpPa7ErK_CyvtXyrWcTKtbxWUYRxAbG3d3WinXWP1MRBd7kRTjgCZpcoC8HzN6Y0zI6Q1jpo8p0RhrpSWz-PZIKYJC635CZoebKFGxnPZEEMqZmYa2gTY2W2z7LcQIa2c=w1464-h976-s-no-gm?authuser=0',
    highlights: ['Hoan Kiem Lake', 'Temple of Literature', 'Old Quarter', 'Ho Chi Minh Mausoleum'],
    highlightsVi: ['Hồ Hoàn Kiếm', 'Văn Miếu', 'Phố cổ', 'Lăng Bác'],
  },
  {
    id: 'danang', name: 'Da Nang', nameVi: 'Đà Nẵng',
    tagline: 'Come for the beach, stay for the calm',
    taglineVi: 'Đến vì biển, ở lại vì bình yên',
    desc: "Vietnam's most livable city: pristine beaches, marble mountains, and the iconic Dragon Bridge.",
    descVi: 'Thành phố đáng sống nhất Việt Nam: biển đẹp, Ngũ Hành Sơn, hải sản ngon và Cầu Rồng huyền thoại.',
    photo: 'https://cdn3.ivivu.com/2022/09/c%E1%BA%A7u-r%E1%BB%93ng-%C4%91%C3%A0-n%E1%BA%B5ng-ivivu-4.jpg',
    highlights: ['My Khe Beach', 'Dragon Bridge', 'Marble Mountains', 'Son Tra Peninsula'],
    highlightsVi: ['Biển Mỹ Khê', 'Cầu Rồng', 'Ngũ Hành Sơn', 'Bán đảo Sơn Trà'],
  },
]

export const FOODS = [
  { id:1, name:'Phở', nameVi:'Phở', desc:"Vietnam's soul in a bowl. Slow-cooked broth, silky rice noodles, fresh herbs, and tender beef.", descVi:'Linh hồn Việt Nam trong một tô. Nước dùng hầm chậm, bánh phở mềm, rau thơm và thịt tươi.', origin:'Hanoi', originVi:'Hà Nội', price:'35,000 – 80,000 VND', photo:'https://www.thedailymeal.com/img/gallery/the-ultimate-guide-to-pho/l-intro-1659125110.jpg' },
  { id:2, name:'Bánh Mì', nameVi:'Bánh Mì', desc:'The legendary Vietnamese sandwich. Crispy baguette with pâté, cold cuts, pickled veggies and chili.', descVi:'Bánh mì huyền thoại Việt Nam. Vỏ giòn với pâté, thịt nguội, rau củ chua và ớt.', origin:'Ho Chi Minh City', originVi:'Hồ Chí Minh', price:'20,000 – 45,000 VND', photo:'https://tse2.mm.bing.net/th/id/OIP.63a791CGu4ICQIOJUcCzMgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:3, name:'Mì Quảng', nameVi:'Mì Quảng', desc:"Da Nang's pride: turmeric-yellow noodles with shrimp, pork, peanuts, and rich broth.", descVi:'Niềm tự hào Đà Nẵng: mì nghệ vàng với tôm, thịt heo, đậu phộng và nước dùng đậm đà.', origin:'Da Nang', originVi:'Đà Nẵng', price:'30,000 – 60,000 VND', photo:'https://tse1.mm.bing.net/th/id/OIP.d7vTOLt9modt99evtRFOxQHaEj?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:4, name:'Bún Chả', nameVi:'Bún Chả', desc:"Hanoi's most beloved lunch: grilled pork in sweet fish sauce broth with vermicelli and fresh herbs.", descVi:'Món ăn trưa yêu thích nhất Hà Nội: chả nướng trong nước mắm ngọt, bún và rau thơm tươi.', origin:'Hanoi', originVi:'Hà Nội', price:'40,000 – 70,000 VND', photo:'https://www.seriouseats.com/thmb/atsVhLwxdCWyX-QDuhOLhR0Kx4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VyTran-BunChaHanoi-18-e37d96a89a0f43d097e02311686290f2.jpg' },
  { id:5, name:'Cơm Tấm', nameVi:'Cơm Tấm', desc:'Broken rice with grilled pork chops — the quintessential Saigon breakfast locals swear by.', descVi:'Cơm tấm sườn nướng — bữa sáng đặc trưng Sài Gòn mà người địa phương không thể thiếu.', origin:'Ho Chi Minh City', originVi:'Hồ Chí Minh', price:'35,000 – 65,000 VND', photo:'https://tse4.mm.bing.net/th/id/OIP.Q4eg-KuxLJLrxTJz3IbYGAHaFS?w=700&h=500&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:6, name:'Cà Phê Trứng', nameVi:'Cà Phê Trứng', desc:"Hanoi's unique egg coffee — strong Vietnamese brew topped with creamy velvety egg foam.", descVi:'Cà phê trứng độc đáo Hà Nội — cà phê đậm đà phủ lớp kem trứng mịn béo ngậy.', origin:'Hanoi', originVi:'Hà Nội', price:'25,000 – 50,000 VND', photo:'https://tse3.mm.bing.net/th/id/OIP.dsc98uHj85XJ8mFz2kBm6QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3' },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Da Nang – The City People Visit for Travel, But Stay for Peace',
    titleVi: 'Đà Nẵng – Thành phố người ta đến để du lịch, nhưng ở lại vì bình yên',
    excerpt: "If there's one word to describe Da Nang, it would be \"comfortable.\" A city that never makes you feel rushed...",
    excerptVi: 'Nếu phải mô tả Đà Nẵng bằng một từ, có lẽ đó sẽ là "dễ chịu". Một thành phố không khiến người ta vội vàng...',
    photo: 'https://cdn3.ivivu.com/2022/09/c%E1%BA%A7u-r%E1%BB%93ng-%C4%91%C3%A0-n%E1%BA%B5ng-ivivu-4.jpg',
    city: 'Da Nang', cityVi: 'Đà Nẵng',
    readTime: '5 min', readTimeVi: '5 phút đọc', date: 'May 2025',
    content: `If there's one word to describe Da Nang, it would probably be "comfortable."

Comfortable in the truest sense of a city that never makes people feel rushed. Everything here seems to move a little slower. People wake up early to go to the beach, spend longer hours at cafés, eat dinner later, and take more time enjoying the city instead of trying to keep up with it.

Maybe that's why Da Nang is always on the list of places people "have to come back to."

It's not as crowded as Ho Chi Minh City. It doesn't carry the old, quiet charm of Hanoi. Da Nang sits somewhere in between — modern yet approachable, lively enough to feel exciting while still keeping the relaxing atmosphere that many tourist cities have gradually lost.

## Mornings in Da Nang Begin with the Sea

Many people say that if you want to understand the rhythm of Da Nang, you should wake up early at least once.

Around 5 a.m., My Khe Beach is already full of people. Some are jogging, some are exercising, while others simply sit by the sea and chat together. The city wakes up gently — without noise, without chaos.

In Da Nang, the beach is not just a tourist destination. It feels like a natural part of everyday life.

📍 My Khe Beach – Vo Nguyen Giap Street, Son Tra

## Son Tra – Where Da Nang Feels Completely Different

If the city center feels modern and comfortable, then Son Tra Peninsula is the breathing soul of Da Nang.

The road leading up Son Tra has a unique beauty: mountains on one side, the sea on the other, and the higher you go, the smaller the city behind you seems to become. Many young people ride up here early in the morning or late in the afternoon just to enjoy the view, grab a coffee, and experience the quiet atmosphere.

There are stretches of road where you can barely hear any traffic noise — only the sound of the wind and the smell of the sea.

## People Often Remember Da Nang for the Smallest Things

In reality, what makes people love Da Nang are often the simplest moments.

A small bowl of Mi Quang in a hidden alley. A café overlooking the Han River. A seafood restaurant filled with locals more than tourists. Or the feeling of riding around Dragon Bridge when the city lights come on at night.

Da Nang never tries too hard to become "touristy." And perhaps that is exactly what makes it feel so close and welcoming.

## Da Nang Is the Kind of City That Makes People Want to Return

Some places are memorable because of their scenery. Some are famous for endless activities. But Da Nang is remembered because of the feeling it gives people — a place peaceful enough to rest, interesting enough to explore, and welcoming enough to make visitors feel comfortable even on their very first visit.

And perhaps that is why so many people leave Da Nang with the same thought: *"I'll definitely come back here one more time."*`,
    contentVi: `Nếu phải mô tả Đà Nẵng bằng một từ, có lẽ đó sẽ là "dễ chịu".

Dễ chịu theo đúng nghĩa của một thành phố không khiến người khác cảm thấy vội vàng. Ở đây, mọi thứ dường như chậm hơn một chút. Người ta dậy sớm để đi biển, ngồi cà phê lâu hơn, ăn tối muộn hơn và dành nhiều thời gian hơn để tận hưởng thành phố.

Có lẽ cũng vì vậy mà Đà Nẵng luôn nằm trong danh sách những nơi "phải quay lại" của rất nhiều người.

## Buổi sáng ở Đà Nẵng bắt đầu bằng biển

Nhiều người nói rằng muốn hiểu nhịp sống của Đà Nẵng thì hãy dậy sớm một lần.

Khoảng 5 giờ sáng, biển Mỹ Khê đã bắt đầu đông người. Có người chạy bộ, có người tập thể dục, cũng có những cô chú chỉ đơn giản ngồi nhìn biển rồi trò chuyện với nhau. Thành phố thức dậy khá nhẹ nhàng, không ồn ào.

Biển ở Đà Nẵng không chỉ là một địa điểm du lịch. Nó giống như một phần trong cuộc sống thường ngày của người dân nơi đây.

📍 Biển Mỹ Khê – Võ Nguyên Giáp, Sơn Trà

## Sơn Trà – nơi Đà Nẵng trở nên rất khác

Nếu trung tâm thành phố mang cảm giác hiện đại và thoải mái, thì bán đảo Sơn Trà lại là phần rất "thở" của Đà Nẵng.

Đường lên Sơn Trà có một kiểu đẹp rất riêng: một bên là núi, một bên là biển, càng đi càng thấy thành phố phía sau nhỏ dần. Nhiều bạn trẻ chọn chạy xe lên đây vào sáng sớm hoặc chiều muộn chỉ để ngắm cảnh, uống cà phê và tận hưởng cảm giác yên tĩnh.

## Đà Nẵng là kiểu thành phố khiến người ta muốn quay lại

Có những nơi đẹp vì cảnh quan. Có những nơi nổi tiếng vì nhiều hoạt động. Nhưng Đà Nẵng lại là kiểu thành phố được nhớ vì cảm giác mà nó mang lại.

*"Mình sẽ quay lại đây thêm một lần nữa."*`
  },
  {
    id: 2,
    title: "Hanoi – A City That Isn't Too Fast, So People Naturally Slow Down",
    titleVi: 'Hà Nội – Thành phố không quá vội để người ta sống chậm lại',
    excerpt: "Hanoi doesn't try to impress you immediately. The longer you stay, the more you understand why so many people love it...",
    excerptVi: 'Hà Nội không cố gắng gây ấn tượng ngay. Ở càng lâu, bạn càng hiểu vì sao nhiều người yêu nơi này đến vậy...',
    photo: 'https://cdn.justfly.vn/2048x1365/media/db/87/da5a-092f-4c27-bc45-11d1c5ee6397.jpg',
    city: 'Hanoi', cityVi: 'Hà Nội',
    readTime: '6 min', readTimeVi: '6 phút đọc', date: 'April 2025',
    content: `Some cities impress people the moment they arrive. Hanoi is different.

This city does not try to amaze you with flashy things. Hanoi feels more like the kind of place that the longer you stay, the more you understand why so many people love it so deeply.

Maybe it's an autumn morning filled with the faint scent of milk flowers drifting through the streets. A small old café hidden deep inside a narrow alley. Or simply the feeling of sitting on a sidewalk eating a hot bowl of pho in the chilly weather.

## Hanoi Has a Rhythm of Its Own

Perhaps the most interesting thing about Hanoi is its rhythm of life.

The city wakes up early. Older people exercise around Hoan Kiem Lake, small street vendors begin opening their shops, and the sounds of street sellers echo through the old neighborhoods.

Hanoi carries both the energy of a major city and the simple everyday feeling that many places have gradually lost.

📍 Hoan Kiem Lake – Hoan Kiem District, Hanoi

## The Old Quarter – Where Hanoi Preserves Its Past

If you truly want to feel Hanoi, you should probably spend an entire afternoon walking around the Old Quarter.

The narrow streets, old houses with balconies covered in greenery, the sound of motorbikes weaving between street vendors — together they create an atmosphere that is difficult to find anywhere else.

What makes the Old Quarter even more special is that it is not only for tourists. Local people still live, eat, and go about their daily lives there every day.

## Hanoi Is a City of Coffee

Many people jokingly say that in Hanoi, going for coffee is part of the lifestyle itself.

It's easy to find cafés located on the second floor of old houses, hidden inside small alleys, or beside balconies overlooking busy streets below. People don't go only for the coffee. They go to sit longer, talk longer, and quietly watch the city pass by.

**Some local cafés loved by many visitors:**
- Loading T Café – 8 Chan Cam Street, Hoan Kiem
- Café Giảng – 39 Nguyen Huu Huan Street, Hoan Kiem
- Tranquil Books & Coffee – 18B Nguyen Bieu Street, Ba Dinh

## Hanoi Is Probably Most Beautiful on Ordinary Days

In truth, what makes people remember Hanoi often has little to do with famous landmarks. It's the feeling of eating a bowl of bun cha in a small alley. Sitting on the back of a motorbike passing rows of autumn trees.

Hanoi is not the kind of city that people instantly fall in love with. But if you stay long enough, most people eventually discover a very personal corner of Hanoi that feels like their own.`,
    contentVi: `Có những thành phố khiến người ta ấn tượng ngay từ lần đầu đặt chân đến. Hà Nội thì khác.

Nơi này không cố gắng làm bạn "wow" bằng những thứ quá hào nhoáng. Hà Nội giống kiểu thành phố mà càng ở lâu, người ta càng hiểu vì sao nhiều người lại yêu nó đến vậy.

Có thể là một buổi sáng mùa thu với mùi hoa sữa thoang thoảng trên phố. Một quán cà phê cũ nằm sâu trong con ngõ nhỏ. Hay chỉ đơn giản là cảm giác ngồi trên vỉa hè ăn bát phở nóng giữa tiết trời se lạnh.

## Hà Nội có một nhịp sống rất riêng

Điều thú vị nhất ở Hà Nội có lẽ nằm ở nhịp sống.

Buổi sáng, thành phố bắt đầu khá sớm. Người lớn tuổi tập thể dục quanh hồ Gươm, những hàng quán nhỏ bắt đầu mở cửa, tiếng rao hàng vang lên giữa những con phố cũ.

Hà Nội vừa có sự náo nhiệt của một thành phố lớn, vừa giữ lại cảm giác rất đời thường mà không phải nơi nào cũng còn.

📍 Hồ Hoàn Kiếm – Hoàn Kiếm, Hà Nội

## Phố cổ – nơi Hà Nội giữ lại những điều xưa cũ

Nếu muốn cảm nhận Hà Nội rõ nhất, có lẽ nên dành một buổi chỉ để đi bộ quanh phố cổ.

Những con phố nhỏ, những căn nhà cũ với ban công phủ đầy cây xanh, tiếng xe máy chen giữa tiếng người bán hàng — tất cả tạo nên một cảm giác rất riêng mà khó nơi nào có được.

## Hà Nội là thành phố của cà phê

Nhiều người nói vui rằng ở Hà Nội, đi cà phê giống như một phần của văn hóa sống.

**Một vài quán local được nhiều người yêu thích:**
- Loading T Café – 8 Chân Cầm, Hoàn Kiếm
- Café Giảng – 39 Nguyễn Hữu Huân, Hoàn Kiếm
- Tranquil Books & Coffee – 18B Nguyễn Biểu, Ba Đình

Hà Nội không phải kiểu thành phố "dễ yêu" ngay lập tức. Nhưng nếu ở đủ lâu, người ta thường sẽ tìm thấy một góc Hà Nội rất riêng dành cho mình.`
  },
  {
    id: 3,
    title: 'Ho Chi Minh City – For People Who Always Want to Keep Moving Forward',
    titleVi: 'TP. Hồ Chí Minh – Thành phố của những người luôn muốn đi tiếp',
    excerpt: "If Hanoi feels nostalgic, then Saigon feels like a city that never stops moving. People say it never sleeps...",
    excerptVi: 'Nếu Hà Nội mang cảm giác hoài niệm, thì Sài Gòn giống một thành phố luôn chuyển động. Người ta nói Sài Gòn không ngủ...',
    photo: 'https://img6.thuthuatphanmem.vn/uploads/2022/02/09/hinh-anh-dep-ve-thanh-pho-ho-chi-minh_031030613.jpg',
    city: 'Ho Chi Minh City', cityVi: 'Hồ Chí Minh',
    readTime: '7 min', readTimeVi: '7 phút đọc', date: 'March 2025',
    content: `If Hanoi feels nostalgic and slow-paced, then Ho Chi Minh City feels like a city that never stops moving.

People often say that Saigon never sleeps. But perhaps what makes it even more special is that this city never seems to run out of energy.

Whether it's early morning or midnight, you will still find food stalls open, streams of motorbikes filling the streets, and conversations that never truly end. The city has a unique kind of liveliness — sometimes rushed, sometimes noisy, but incredibly easy to get swept up in.

## Saigon Is a City of Everyday Experiences

One of the most interesting things about Ho Chi Minh City is that everything moves fast, yet the city never feels distant or cold.

You can start your morning with a sidewalk coffee, have lunch at a small local eatery hidden inside an old apartment building, spend the afternoon working at a bookstore café, and then go on a late-night food tour in District 4 or District 10.

## Ben Thanh Market – Where Many People First Meet Saigon

It may sound a bit touristy, but it's almost impossible to talk about Ho Chi Minh City without mentioning Ben Thanh Market.

This is where you can see many different sides of the city at once: tourists, longtime vendors, local food stalls, and the energetic rhythm that defines central Saigon.

📍 Ben Thanh Market – Le Loi Street, District 1

## Old Apartment Buildings – A Very Unique Part of Saigon

If Hanoi is famous for its Old Quarter, then Saigon is known for its old apartment buildings filled with personality.

The aging buildings on Nguyen Hue Street or Ton That Dam Street may look worn-out from the outside, but inside they are home to cafés, studios, bakeries, and concept stores created by young locals.

## Saigon Is Probably Most Beautiful at Night

If the city feels rushed during the day, nighttime is when Saigon truly comes alive.

After around 8 p.m., many people are only just beginning to head out. Restaurants become more crowded, rooftop bars turn the music up louder, and street food areas and night markets become busier than ever.

**Places to feel the real Saigon vibe:**
- Bach Dang Wharf – walk by the Saigon River at night
- Ho Thi Ky Market – paradise for late-night food lovers
- Cafés that stay open until 2–3 a.m.

Saigon is remembered for its energy. A city always moving, always crowded — yet incredibly open and welcoming, making people feel like they belong here.`,
    contentVi: `Nếu Hà Nội mang cảm giác hoài niệm và chậm rãi, thì Sài Gòn lại giống một thành phố luôn chuyển động.

Người ta thường nói Sài Gòn không ngủ. Nhưng thật ra, điều đặc biệt hơn là nơi này gần như không bao giờ hết năng lượng.

Dù là sáng sớm hay nửa đêm, bạn vẫn sẽ thấy hàng quán mở cửa, dòng xe chạy liên tục và những cuộc trò chuyện chưa bao giờ thực sự kết thúc.

## Sài Gòn là thành phố của những trải nghiệm rất "đời"

Bạn có thể bắt đầu ngày mới bằng một ly cà phê vỉa hè, ăn trưa trong một quán cơm nhỏ nằm giữa chung cư cũ, chiều ghé bookstore café làm việc và tối lại lang thang food tour ở quận 4 hay quận 10.

## Chợ Bến Thành – nơi mọi người bắt đầu làm quen với Sài Gòn

Đây là nơi bạn có thể nhìn thấy rất nhiều màu sắc khác nhau của thành phố: khách du lịch, người bán hàng lâu năm, những quầy đồ ăn local và cả nhịp sống rất đặc trưng của trung tâm Sài Gòn.

📍 Chợ Bến Thành – Lê Lợi, Quận 1

## Sài Gòn đẹp nhất có lẽ là vào ban đêm

Khoảng sau 8 giờ tối, rất nhiều người mới bắt đầu ra đường. Các quán ăn đông hơn, nhạc ở các rooftop bật lớn hơn, các khu ăn vặt và chợ đêm bắt đầu nhộn nhịp.

**Những nơi nên thử để cảm nhận "vibe" Sài Gòn:**
- Bến Bạch Đằng – đi dạo ven sông Sài Gòn buổi tối
- Chợ Hồ Thị Kỷ – thiên đường food tour về đêm
- Các quán cà phê mở xuyên đêm đến 2–3 giờ sáng

Sài Gòn được nhớ vì năng lượng của nó. Và có lẽ, điều đặc biệt nhất là dù bạn đến đây với lý do gì, thành phố này luôn cho bạn cảm giác: *"Mình có thể bắt đầu lại một điều gì đó ở đây."*`
  },
]

export const FOOD_TOUR_POSTS = [
  {
    id: 4,
    title: 'Hanoi – Old Quarter Food Tour',
    titleVi: 'Hà Nội – Food Tour Phố Cổ',
    excerpt: 'Going to Hanoi without trying the Old Quarter food scene at night is honestly such a waste. I randomly joined a food tour and it turned out way better than expected...',
    excerptVi: 'Đi Hà Nội mà không ăn phố cổ buổi tối là tiếc thật luôn 😭 Mình vừa có một buổi food tour kiểu random nhưng kết quả lại ngon ngoài mong đợi...',
    photo: 'https://statics.vincom.com.vn/xu-huong/anh_thumbnail/an-gi-o-ha-noi-thumnail.jpeg',
    city: 'Hanoi', cityVi: 'Hà Nội',
    tag: 'Food Tour', tagVi: 'Food Tour',
    readTime: '4 min', readTimeVi: '4 phút đọc', date: 'May 2025',
    spots: [
      { name: 'Bún Chả Hàng Quạt', address: '74 Hàng Quạt, Hoàn Kiếm', addressVi: '74 Hàng Quạt, Hoàn Kiếm' },
      { name: 'Nem Rán Phố Cổ', address: '38 Hàng Buồm, Hoàn Kiếm', addressVi: '38 Hàng Buồm, Hoàn Kiếm' },
      { name: 'Café Giảng', address: '39 Nguyễn Hữu Huân, Hoàn Kiếm', addressVi: '39 Nguyễn Hữu Huân, Hoàn Kiếm' },
    ],
    content: `Going to Hanoi without trying the Old Quarter food scene at night is honestly such a waste 😭

I randomly joined a food tour one evening and it turned out way better than I expected. Just walking around the Old Quarter, every local spot was packed with people.

The grilled bún chả was probably my favorite — the smell literally pulled me into the restaurant 😭 The fried spring rolls were super crispy and fresh. After eating, sitting on tiny plastic chairs drinking local beer while watching the streets light up felt peak Hanoi.

And you HAVE to try egg coffee. I thought it'd taste weird at first but it was actually so addictive. Creamy, sweet, slightly bitter… sitting in a small café overlooking the street was such a vibe.

## 📍 Recommended Spots

**Bún Chả Hàng Quạt** — 74 Hàng Quạt, Hoàn Kiếm
The smell alone will pull you in. Grilled pork patties, fresh herbs, vermicelli — this is Hanoi in a bowl.

**Nem Rán Phố Cổ** — 38 Hàng Buồm, Hoàn Kiếm
Crispy, piping hot spring rolls. Best eaten standing on the street.

**Café Giảng** — 39 Nguyễn Hữu Huân, Hoàn Kiếm
The original egg coffee spot. Go upstairs, find a window seat, and take your time.`,
    contentVi: `Đi Hà Nội mà không ăn phố cổ buổi tối là tiếc thật luôn 😭

Mình vừa có một buổi food tour kiểu random nhưng kết quả lại ngon ngoài mong đợi. Đi bộ loanh quanh khu phố cổ thôi mà quán nào cũng đông nghịt người địa phương.

Ấn tượng nhất chắc là bún chả nướng thơm cực kỳ, kiểu vừa đi ngang là bị mùi kéo vào luôn 😭 Nem rán thì giòn, nóng hổi. Ăn xong ngồi vỉa hè uống bia hơi nhìn phố lên đèn đúng vibe Hà Nội luôn.

À và nhất định phải thử cà phê trứng nha. Ban đầu mình nghĩ sẽ khó uống nhưng ai ngờ cuốn thật sự. Kiểu béo béo thơm thơm, ngồi trong quán nhỏ nhìn xuống phố rất chill.

## 📍 Gợi ý địa điểm

**Bún Chả Hàng Quạt** — 74 Hàng Quạt, Hoàn Kiếm
Chỉ cần đi ngang là bị mùi kéo vào. Chả nướng thơm, rau thơm tươi, bún mịn — đây chính là Hà Nội trong một tô.

**Nem Rán Phố Cổ** — 38 Hàng Buồm, Hoàn Kiếm
Nem giòn, nóng hổi. Ăn đứng ngoài phố mới đúng chất.

**Café Giảng** — 39 Nguyễn Hữu Huân, Hoàn Kiếm
Quán cà phê trứng lâu đời nhất Hà Nội. Lên tầng trên, tìm chỗ ngồi cạnh cửa sổ và nhâm nhi thật lâu.`,
  },
  {
    id: 5,
    title: 'Hanoi – Local Coffee Tour',
    titleVi: 'Hà Nội – Tour Cà Phê Local',
    excerpt: 'Hanoi is honestly heaven for people who love café hopping. A local took me to hidden cafés tucked inside tiny alleys — no way I could have found them on my own...',
    excerptVi: 'Hà Nội đúng kiểu thành phố dành cho những người thích đi cà phê 🥹 Mình được local dẫn đi mấy quán nằm trong ngõ nhỏ, nếu tự đi chắc chắn không bao giờ biết...',
    photo: 'https://miro.medium.com/v2/resize:fit:1200/1*0qRZ9kYqKu2beSr-b5doNA.jpeg',
    city: 'Hanoi', cityVi: 'Hà Nội',
    tag: 'Café Tour', tagVi: 'Tour Cà Phê',
    readTime: '4 min', readTimeVi: '4 phút đọc', date: 'April 2025',
    spots: [
      { name: 'Loading T Café', address: '8 Chân Cầm, Hoàn Kiếm', addressVi: '8 Chân Cầm, Hoàn Kiếm' },
      { name: 'The Note Coffee', address: '64 Lương Văn Can, Hoàn Kiếm', addressVi: '64 Lương Văn Can, Hoàn Kiếm' },
      { name: 'Tranquil Books & Coffee', address: '18B Nguyễn Biểu, Ba Đình', addressVi: '18B Nguyễn Biểu, Ba Đình' },
    ],
    content: `Hanoi is honestly heaven for people who love café hopping 🥹

A local took me to a few hidden cafés tucked inside tiny alleys — there's no way I could've found them on my own.

Some places looked old from the outside but had the coziest atmosphere ever. Warm yellow lights, soft music, super quiet… the kind of place you end up sitting in for hours. And the egg coffee here tasted way better than I imagined, almost like a dessert.

What I loved most is that every café had its own story. They didn't feel overly commercialized like the trendy TikTok cafés.

## 📍 Recommended Spots

**Loading T Café** — 8 Chân Cầm, Hoàn Kiếm
Hidden down a quiet alley. Great for people-watching and slow afternoons.

**The Note Coffee** — 64 Lương Văn Can, Hoàn Kiếm
The walls are covered in handwritten notes from visitors around the world. Super charming.

**Tranquil Books & Coffee** — 18B Nguyễn Biểu, Ba Đình
Books, coffee, and total peace. The best combination in Hanoi.`,
    contentVi: `Hà Nội đúng kiểu thành phố dành cho những người thích đi cà phê 🥹

Mình được local dẫn đi mấy quán nằm trong ngõ nhỏ, nếu tự đi chắc chắn không bao giờ biết.

Có quán nhìn cũ cũ thôi nhưng vibe cực kỳ đẹp, kiểu yên tĩnh, nhạc nhẹ, ánh sáng vàng vàng rất hợp ngồi cả chiều. Cà phê trứng ở đây ngon hơn mình tưởng nhiều, không bị tanh mà thơm kiểu bánh kem ấy.

Điều mình thích nhất là mỗi quán đều có một câu chuyện riêng, cảm giác không bị commercial quá như các quán hot trên TikTok.

## 📍 Gợi ý địa điểm

**Loading T Café** — 8 Chân Cầm, Hoàn Kiếm
Nằm sâu trong ngõ nhỏ yên tĩnh. Lý tưởng để ngồi cả buổi chiều.

**The Note Coffee** — 64 Lương Văn Can, Hoàn Kiếm
Tường phủ đầy ghi chú tay của khách từ khắp nơi trên thế giới. Rất dễ thương.

**Tranquil Books & Coffee** — 18B Nguyễn Biểu, Ba Đình
Sách, cà phê và sự bình yên hoàn toàn. Combo tuyệt nhất ở Hà Nội.`,
  },
  {
    id: 6,
    title: 'Saigon – Night Motorbike Food Tour',
    titleVi: 'Sài Gòn – Food Tour Xe Máy Buổi Tối',
    excerpt: 'Food in Saigon somehow tastes even better at night. I joined a motorbike food tour and it was honestly SO fun — riding district to district just to eat...',
    excerptVi: 'Không hiểu sao đồ ăn ở Sài Gòn lúc nào cũng ngon hơn khi ăn ban đêm 😭 Mình vừa trải nghiệm food tour bằng xe máy và thật sự quá vui luôn...',
    photo: 'https://cdn.klfoodie.com/2024/06/326750465_121485594166043_5041546684692910779_n-768x768.jpg',
    city: 'Ho Chi Minh City', cityVi: 'Hồ Chí Minh',
    tag: 'Night Tour', tagVi: 'Tour Đêm',
    readTime: '4 min', readTimeVi: '4 phút đọc', date: 'March 2025',
    spots: [
      { name: 'Phá Lấu Bò', address: '243/29 Tôn Đản, District 4', addressVi: '243/29 Tôn Đản, Quận 4' },
      { name: 'Hủ Tiếu Gõ Đêm', address: 'Nguyễn Thượng Hiền St, District 3', addressVi: 'Đường Nguyễn Thượng Hiền, Quận 3' },
      { name: 'Chè Mâm Khánh Vy', address: '242B Sư Vạn Hạnh, District 10', addressVi: '242B Sư Vạn Hạnh, Quận 10' },
    ],
    content: `I swear food in Saigon somehow tastes even better at night 😭

I recently joined a motorbike food tour and it was honestly SO fun. We rode from district to district just to eat 😭 From phá lấu and grilled rice paper to late-night noodle carts and sweet dessert soups. Every place the local guide took us to felt like a hidden gem packed with locals.

Honestly, sitting on the back of a motorbike, riding through busy streets at night before stopping at a tiny roadside food stall felt like the most Saigon experience ever.

## 📍 Recommended Spots

**Phá Lấu Bò** — 243/29 Tôn Đản, District 4
Offal stew with coconut milk and spices. Sounds unusual, tastes incredible. District 4 is the real Saigon.

**Hủ Tiếu Gõ Đêm** — Nguyễn Thượng Hiền Street, District 3
The street cart that taps its bowl to announce it's coming. Late night, hot broth, pure comfort.

**Chè Mâm Khánh Vy** — 242B Sư Vạn Hạnh, District 10
A giant tray of Vietnamese sweet soups. You pick what you want — colorful, sweet, and totally worth it.`,
    contentVi: `Không hiểu sao đồ ăn ở Sài Gòn lúc nào cũng ngon hơn khi ăn ban đêm 😭

Mình vừa trải nghiệm food tour bằng xe máy và thật sự quá vui luôn. Đi từ quận này sang quận khác chỉ để ăn 😭 Từ phá lấu, bánh tráng nướng, hủ tiếu gõ cho tới chè đêm. Mỗi chỗ local dẫn đi đều kiểu 'quán ruột', đông nghẹt người nhưng ăn rất đáng.

Cảm giác ngồi sau xe chạy qua mấy con đường đông đúc, gió tối mát mát rồi tấp vào quán ven đường ăn đồ nóng hổi đúng chất Sài Gòn luôn.

## 📍 Gợi ý địa điểm

**Phá Lấu Bò** — 243/29 Tôn Đản, Quận 4
Nội tạng bò hầm nước cốt dừa và gia vị. Nghe lạ nhưng ăn rất cuốn. Quận 4 là Sài Gòn thật sự.

**Hủ Tiếu Gõ Đêm** — Đường Nguyễn Thượng Hiền, Quận 3
Xe gõ lốc cốc đi khắp phố. Đêm khuya, nước dùng nóng hổi, đúng chất bình dân.

**Chè Mâm Khánh Vy** — 242B Sư Vạn Hạnh, Quận 10
Mâm chè đủ màu sắc, tự chọn thứ mình thích. Ngọt ngào và đáng thử.`,
  },
  {
    id: 7,
    title: 'Saigon – Night Market Street Food',
    titleVi: 'Sài Gòn – Ăn Vặt Chợ Đêm',
    excerpt: 'Real review: going to Saigon night markets is dangerous because you WILL overeat. I planned to eat a little... ended up carrying food in both hands...',
    excerptVi: 'Review thật lòng là đi chợ đêm Sài Gòn cực kỳ dễ bị… ăn quá tay 😭 Định vào ăn nhẹ thôi mà cuối cùng cầm full đồ ăn trên tay...',
    photo: 'https://thecitylane.com/wp-content/uploads/2017/08/IMG_0312.jpg',
    city: 'Ho Chi Minh City', cityVi: 'Hồ Chí Minh',
    tag: 'Street Food', tagVi: 'Ăn Vặt',
    readTime: '3 min', readTimeVi: '3 phút đọc', date: 'February 2025',
    spots: [
      { name: 'Hồ Thị Kỷ Night Market', address: 'Hồ Thị Kỷ Street, District 10', addressVi: 'Chợ Hồ Thị Kỷ, Quận 10' },
      { name: 'Nguyễn Thượng Hiền Food Street', address: 'Nguyễn Thượng Hiền, Bình Thạnh', addressVi: 'Nguyễn Thượng Hiền, Bình Thạnh' },
      { name: 'Bến Thành Night Market', address: 'Ben Thanh area, District 1', addressVi: 'Khu Bến Thành, Quận 1' },
    ],
    content: `Real review: going to Saigon night markets is dangerous because you WILL overeat 😭

I planned to eat a little… ended up carrying food in both hands. This place is basically street food heaven. Grilled skewers smelled amazing, rice paper salad was insanely addictive, and every milk tea stall had a huge line. The atmosphere was so lively, especially going with friends.

My favorite part was honestly just walking around, eating random snacks, and chatting. Super simple but somehow super fun.

## 📍 Recommended Spots

**Hồ Thị Kỷ Night Market** — District 10
Saigon's most famous night food market. Everything from Thai food to Vietnamese snacks to fruit. Go hungry.

**Nguyễn Thượng Hiền Food Street** — Bình Thạnh
Less touristy, more local. The grilled skewers and rice paper rolls here are seriously good.

**Bến Thành Night Market** — District 1
Right next to Ben Thanh Market. Great for tourists but also genuinely delicious. The atmosphere at night is unbeatable.`,
    contentVi: `Review thật lòng là đi chợ đêm Sài Gòn cực kỳ dễ bị… ăn quá tay 😭

Định vào ăn nhẹ thôi mà cuối cùng cầm full đồ ăn trên tay. Ở đây kiểu thiên đường ăn vặt luôn á. Xiên nướng thơm cực kỳ, bánh tráng trộn siêu cuốn, trà sữa thì quầy nào cũng đông. Không khí đông vui nên đi với bạn bè là đúng bài.

Mình thích nhất là cảm giác đi bộ vừa ăn vừa tám chuyện, kiểu rất đời thường nhưng lại vui cực.

## 📍 Gợi ý địa điểm

**Chợ Hồ Thị Kỷ** — Quận 10
Chợ đêm ăn vặt nổi tiếng nhất Sài Gòn. Đủ từ đồ Thái đến đồ Việt. Đến khi đói bụng nhé.

**Phố Ăn Vặt Nguyễn Thượng Hiền** — Bình Thạnh
Ít khách du lịch hơn, local hơn. Xiên nướng và bánh tráng trộn ở đây ngon thật sự.

**Chợ Đêm Bến Thành** — Quận 1
Ngay cạnh chợ Bến Thành. Phù hợp cả khách du lịch lẫn người địa phương. Không khí buổi tối cực kỳ sôi động.`,
  },
  {
    id: 8,
    title: 'Da Nang – Night Seafood Experience',
    titleVi: 'Đà Nẵng – Hải Sản Đêm',
    excerpt: 'Da Nang at night is literally paradise for seafood lovers. A local brought me to a spot near the beach — not famous online but completely packed with locals...',
    excerptVi: 'Đà Nẵng ban đêm đúng là dành cho team mê hải sản 😭 Mình được local dẫn đi ăn ở một quán ven biển, không quá nổi tiếng trên mạng nhưng đông dân địa phương cực...',
    photo: 'https://tse3.mm.bing.net/th/id/OIP.vdBbbsStePLsvG0qh2uGTgHaE_?rs=1&pid=ImgDetMain&o=7&rm=3',
    city: 'Da Nang', cityVi: 'Đà Nẵng',
    tag: 'Seafood', tagVi: 'Hải Sản',
    readTime: '4 min', readTimeVi: '4 phút đọc', date: 'March 2025',
    spots: [
      { name: 'Hải Sản Bé Mặn', address: 'Lot 14 Hoàng Sa, Sơn Trà', addressVi: 'Lô 14 Hoàng Sa, Sơn Trà' },
      { name: 'Hải Sản Năm Đảnh', address: 'K139/H59/38 Trần Quang Khải, Sơn Trà', addressVi: 'K139/H59/38 Trần Quang Khải, Sơn Trà' },
      { name: 'Mì Quảng Bà Mua', address: '95A Nguyễn Tri Phương, Hải Châu', addressVi: '95A Nguyễn Tri Phương, Hải Châu' },
    ],
    content: `Da Nang at night is literally paradise for seafood lovers 😭

A local brought me to this seafood spot near the beach that wasn't super famous online but completely packed with locals. Everything tasted SO fresh. The shrimp was sweet, the grilled squid smelled incredible, and the scallops with scallion oil were ridiculously good.

Eating seafood while listening to the ocean waves felt unbelievably relaxing. What I love about Da Nang is how calm everything feels. Even eating out feels more chill compared to bigger cities.

## 📍 Recommended Spots

**Hải Sản Bé Mặn** — Lot 14 Hoàng Sa, Sơn Trà
Right by the beach. Packed with locals every night. Order the scallops with scallion oil — non-negotiable.

**Hải Sản Năm Đảnh** — K139/H59/38 Trần Quang Khải, Sơn Trà
Another local favorite. Great grilled squid and fresh shrimp at very reasonable prices.

**Mì Quảng Bà Mua** — 95A Nguyễn Tri Phương, Hải Châu
Da Nang's signature noodle dish done right. Rich, flavorful broth with just a little at the bottom — classic Central Vietnam style.`,
    contentVi: `Đà Nẵng ban đêm đúng là dành cho team mê hải sản 😭

Mình được local dẫn đi ăn ở một quán ven biển, không quá nổi tiếng trên mạng nhưng đông dân địa phương cực. Hải sản tươi thật sự, kiểu tôm còn ngọt thịt luôn ấy. Mực nướng thơm, sò mỡ hành béo cực kỳ.

Vừa ăn vừa nghe tiếng biển nên cảm giác relax lắm. Điều mình thích ở Đà Nẵng là mọi thứ không quá vội, ăn uống cũng chill hơn nhiều so với các thành phố lớn.

## 📍 Gợi ý địa điểm

**Hải Sản Bé Mặn** — Lô 14 Hoàng Sa, Sơn Trà
Ngay ven biển. Đông người địa phương mỗi tối. Order sò mỡ hành — không thể bỏ qua.

**Hải Sản Năm Đảnh** — K139/H59/38 Trần Quang Khải, Sơn Trà
Quán ruột của dân địa phương. Mực nướng ngon và tôm tươi giá rất hợp lý.

**Mì Quảng Bà Mua** — 95A Nguyễn Tri Phương, Hải Châu
Mì Quảng chuẩn vị Đà Nẵng. Nước dùng đậm đà, chỉ một chút ở đáy tô — đúng kiểu miền Trung.`,
  },
  {
    id: 9,
    title: 'Da Nang – Local Hidden Gem Food Tour',
    titleVi: 'Đà Nẵng – Food Tour Local Hidden Gem',
    excerpt: 'The best thing about having a local guide is discovering places that would NEVER show up on Google. Some restaurants looked ordinary but were packed with locals inside...',
    excerptVi: 'Mình nghĩ điều hay nhất khi có local dẫn đi là được ăn ở những chỗ mà Google không bao giờ hiện 😭 Có mấy quán nhìn cực kỳ bình thường nhưng bước vào là full người địa phương...',
    photo: 'https://fvgtravel.com.vn/uploads/up/root/editor/2024/10/17/16/03/w1230/goi1729134193_8371.jpg',
    city: 'Da Nang', cityVi: 'Đà Nẵng',
    tag: 'Hidden Gems', tagVi: 'Địa Điểm Ẩn',
    readTime: '4 min', readTimeVi: '4 phút đọc', date: 'January 2025',
    spots: [
      { name: 'Bánh Xèo Bà Dưỡng', address: 'K280/23 Hoàng Diệu, Hải Châu', addressVi: 'K280/23 Hoàng Diệu, Hải Châu' },
      { name: 'Bún Mắm Vân', address: 'K23/14 Trần Kế Xương, Hải Châu', addressVi: 'K23/14 Trần Kế Xương, Hải Châu' },
      { name: 'Chè Liên', address: '175 Hải Phòng, Thanh Khê', addressVi: '175 Hải Phòng, Thanh Khê' },
    ],
    content: `I think the best thing about having a local guide is discovering places that would NEVER show up on Google 😭

Some restaurants looked super ordinary from the outside but were packed with locals inside. The mì Quảng tasted incredibly authentic and the crispy Vietnamese pancakes were amazing.

The local guide also shared stories about Da Nang people, their lifestyle, and food culture… so it felt less like just eating and more like actually experiencing local life.

## 📍 Recommended Spots

**Bánh Xèo Bà Dưỡng** — K280/23 Hoàng Diệu, Hải Châu
Da Nang-style sizzling pancakes — larger than Saigon style, crispier, and eaten wrapped in rice paper with fresh herbs. A must.

**Bún Mắm Vân** — K23/14 Trần Kế Xương, Hải Châu
Fermented fish paste noodle soup. Strong, bold, distinctly Central Vietnamese. Not for the faint-hearted but absolutely worth it.

**Chè Liên** — 175 Hải Phòng, Thanh Khê
A local dessert shop that's been around forever. Cool, sweet, and the perfect end to a food tour.`,
    contentVi: `Mình nghĩ điều hay nhất khi có local dẫn đi là được ăn ở những chỗ mà Google không bao giờ hiện 😭

Có mấy quán nhìn cực kỳ bình thường thôi nhưng bước vào là full người địa phương. Mì Quảng ở đây ngon kiểu đậm vị thật sự, bánh xèo giòn tan luôn.

Local còn kể cho mình nghe nhiều chuyện về người Đà Nẵng, về cách họ ăn uống, sinh hoạt… nên cảm giác không chỉ là đi ăn mà giống đang trải nghiệm cuộc sống ở đây luôn ấy.

## 📍 Gợi ý địa điểm

**Bánh Xèo Bà Dưỡng** — K280/23 Hoàng Diệu, Hải Châu
Bánh xèo kiểu Đà Nẵng — to hơn Sài Gòn, giòn hơn, ăn kèm rau sống và bánh tráng. Không thể bỏ qua.

**Bún Mắm Vân** — K23/14 Trần Kế Xương, Hải Châu
Bún mắm đậm vị đặc trưng miền Trung. Mạnh mẽ, đậm đà, khác biệt. Ăn quen là nghiện.

**Chè Liên** — 175 Hải Phòng, Thanh Khê
Quán chè local có thâm niên. Mát lạnh, ngọt dịu, kết thúc hoàn hảo cho một buổi food tour.`,
  },
]
