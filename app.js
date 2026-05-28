/* ==========================================
   CHIANG MAI TRAVEL PWA - MAIN LOGIC
   ========================================== */

// --- 1. CONFIGURATION & DATA (BILINGUAL) ---
const SPOTS_DATA = [
  {
    id: 'khao-soi-khun-yai',
    name: 'Khao Soi Khun Yai (古城北門金麵)',
    name_en: 'Khao Soi Khun Yai (North Gate)',
    category: 'khao_soi',
    lat: 18.7946,
    lng: 98.9839,
    emoji: '🍜',
    tagName: '泰北金麵',
    tagName_en: 'Khao Soi',
    intro: '位於清邁古城北門旁的傳奇金麵，被許多人評為清邁最傳統好吃的泰北金麵！湯頭椰奶椰香濃郁、層次感十足。',
    intro_en: 'Legendary Khao Soi shop next to the North Gate of Chiang Mai Old City. Highly regarded as the most traditional and delicious Khao Soi! Rich coconut milk broth with deep flavor layers.',
    recommend: '招牌雞肉金麵 (Khao Soi Gai) 70 THB',
    recommend_en: 'Signature Chicken Khao Soi (Khao Soi Gai) 70 THB',
    openTime: '10:00',
    closeTime: '14:00',
    hoursDisplay: '10:00 - 14:00 (週日公休)',
    hoursDisplay_en: '10:00 - 14:00 (Closed on Sundays)',
    source: 'YouTube 萬人觀看推薦',
    source_en: 'Recommended by YouTube (10k+ Views)'
  },
  {
    id: 'khao-soi-maesai',
    name: 'Khao Soi Maesai (泰北金麵)',
    name_en: 'Khao Soi Maesai ( Michelin Bib )',
    category: 'khao_soi',
    lat: 18.8021,
    lng: 98.9774,
    emoji: '🍜',
    tagName: '泰北金麵',
    tagName_en: 'Khao Soi',
    intro: '榮獲米其林必比登推薦的超人氣金麵店，湯頭非常濃郁偏辣，椰奶風味與脆麵條完美咬合。',
    intro_en: 'An ultra-popular Khao Soi restaurant awarded the Michelin Bib Gourmand. The broth is rich and spicy, matching the crispy noodles perfectly.',
    recommend: '牛肉金麵 (Khao Soi Beef) + 泰式奶茶',
    recommend_en: 'Beef Khao Soi (Khao Soi Beef) + Thai Milk Tea',
    openTime: '08:00',
    closeTime: '16:00',
    hoursDisplay: '08:00 - 16:00 (週日公休)',
    hoursDisplay_en: '08:00 - 16:00 (Closed on Sundays)',
    source: '米其林必比登推薦',
    source_en: 'Michelin Bib Gourmand'
  },
  {
    id: 'feng-fei-fei-pig-leg',
    name: '鳳飛飛豬腳飯 (昌卜克門夜市)',
    name_en: 'Khao Kha Moo Chang Phueak (Cowboy Hat Pig Leg)',
    category: 'night_market',
    lat: 18.7958,
    lng: 98.9858,
    emoji: '🍢',
    tagName: '夜市小吃',
    tagName_en: 'Night Market',
    intro: '清邁北門夜市最著名的招牌小吃，老闆娘戴著標誌性牛仔帽。豬腳燉得極為軟爛入味，搭配半熟蛋與特製酸菜，讓人一口接一口。',
    intro_en: 'The most famous street food stall at the North Gate night market, run by a lady in a signature cowboy hat. The pig leg is slow-cooked until meltingly tender, served with a soft egg and sour mustard greens.',
    recommend: '招牌豬腳飯 (小份 50 THB / 加肉 80 THB)',
    recommend_en: 'Stewed Pork Leg Rice (Small 50 THB / Extra Meat 80 THB)',
    openTime: '17:00',
    closeTime: '23:59',
    hoursDisplay: '17:00 - 24:00 (無休)',
    hoursDisplay_en: '17:00 - Midnight (Daily)',
    source: '各大部落格一致推薦',
    source_en: 'Recommended by Top Travel Blogs'
  },
  {
    id: 'sunday-walking-street',
    name: '週日夜市烤肉串與泰式炒麵',
    name_en: 'Sunday Walking Street Food Stalls',
    category: 'night_market',
    lat: 18.7880,
    lng: 98.9860,
    emoji: '🍢',
    tagName: '夜市小吃',
    tagName_en: 'Night Market',
    intro: '清邁最大最著名的週末市集。每週日下午在古城主幹道封路封街，有上千家手工藝品、平價小吃、現烤香熱烤肉串與地道泰式炒麵。',
    intro_en: 'The largest and most famous weekend walking street in Chiang Mai. Closed to traffic every Sunday afternoon, featuring thousands of handmade crafts, local snacks, and street grills.',
    recommend: '香木烤豬肉串 10 THB、現炒 Pad Thai 40 THB',
    recommend_en: 'Grilled Pork Skewer 10 THB, Pad Thai 40 THB',
    openTime: '17:00',
    closeTime: '22:00',
    hoursDisplay: '僅週日 17:00 - 22:00',
    hoursDisplay_en: 'Sundays Only, 17:00 - 22:00',
    source: '部落客小客實地推薦',
    source_en: 'Recommended by Travel Blogger Xiaoke'
  },
  {
    id: 'graph-cafe-nimman',
    name: 'Graph Cafe (尼曼路打卡始祖)',
    name_en: 'Graph Cafe (One Nimman)',
    category: 'cafe',
    lat: 18.8001,
    lng: 98.9682,
    emoji: '☕',
    tagName: '文青咖啡',
    tagName_en: 'Chic Cafe',
    intro: '清邁網美打卡風潮的開山始祖之一。以黑白冷淡風與高品質「創意特調咖啡」風靡清邁，將冷萃、竹炭與新鮮果汁做驚艷結合。',
    intro_en: 'One of the pioneers of the Instagrammable cafe trend in Chiang Mai. Famous for its black-and-white minimalist interior and creative specialty coffee combining cold brew, charcoal, and fruit juices.',
    recommend: 'Monochrome (竹炭拿鐵)、Lost Garden (玫瑰冷萃)',
    recommend_en: 'Monochrome (Charcoal Latte), Lost Garden (Rose Cold Brew)',
    openTime: '09:00',
    closeTime: '17:30',
    hoursDisplay: '09:00 - 17:30 (無休)',
    hoursDisplay_en: '09:00 - 17:30 (Daily)',
    source: 'YouTube 藍亦明推薦',
    source_en: 'Recommended by YouTuber Lan Yiming'
  },
  {
    id: 'the-baristro-ping-river',
    name: 'The Baristro At Ping River (平河畔極簡風)',
    name_en: 'The Baristro At Ping River (Riverfront)',
    category: 'cafe',
    lat: 18.8105,
    lng: 99.0068,
    emoji: '☕',
    tagName: '文青咖啡',
    tagName_en: 'Chic Cafe',
    intro: '坐落於清邁美萍河畔的超人氣極簡美學咖啡館。水泥灰牆、工業風與通透大窗引進河畔天光，是拍照與放空的上乘去處。',
    intro_en: 'An ultra-popular minimalist cafe located on the banks of the Ping River. Featuring concrete walls, industrial design, and massive windows overlooking the river.',
    recommend: 'Triple Espresso (三色漸層濃縮)、椰子千層蛋糕',
    recommend_en: 'Triple Espresso (Three-layered Espresso), Coconut Crepe Cake',
    openTime: '08:00',
    closeTime: '18:00',
    hoursDisplay: '08:00 - 18:00 (無休)',
    hoursDisplay_en: '08:00 - 18:00 (Daily)',
    source: '各大部落格必推打卡店',
    source_en: 'A Must-visit according to Travel Blogs'
  },
  {
    id: 'fah-lanna-spa-oldcity',
    name: 'Fah Lanna Spa (古城蘭納風 SPA)',
    name_en: 'Fah Lanna Spa (Old City)',
    category: 'massage',
    lat: 18.7925,
    lng: 98.9812,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '清邁最頂級精緻的泰北蘭納風格水療館，以熱帶竹子庭園 and 專業木槌按摩 (Tok Sen) 聞名，環境優雅幽靜。',
    intro_en: 'Chiang Mai\'s premier Lanna-style day spa. Famous for its lush tropical bamboo garden and professional Tok Sen (wooden hammer) massage in a peaceful atmosphere.',
    recommend: '經典蘭納古法木槌按摩 (Lanna Tok Sen) 約 1,200 THB',
    recommend_en: 'Traditional Lanna Tok Sen Massage ~1,200 THB',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '部落客小客特選推薦',
    source_en: 'Recommended by Blogger Xiaoke'
  },
  {
    id: 'lila-massage-oldcity',
    name: 'Lila Thai Massage (女子監獄更生人按摩)',
    name_en: 'Lila Thai Massage (Ex-Inmates Rehab)',
    category: 'massage',
    lat: 18.7885,
    lng: 98.9875,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '由前清邁女子監獄長創立，旨在培訓出獄女性按摩技能以重返社會。按摩師手法純熟有力，價格極具CP值，服務親切。',
    intro_en: 'Founded by the former director of Chiang Mai Women\'s Prison to help ex-inmates reintegrate into society. Masseuses are highly trained and offer exceptional, affordable massages.',
    recommend: '泰式古法全身按摩 350 THB / 2小時',
    recommend_en: 'Traditional Thai Massage 350 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: 'YouTube 藍亦明親體驗推薦',
    source_en: 'Recommended by YouTuber Lan Yiming'
  },
  {
    id: 'lets-relax-one-nimman',
    name: 'Let\'s Relax Spa (寧曼一號店)',
    name_en: 'Let\'s Relax Spa (One Nimman)',
    category: 'massage',
    lat: 18.8005,
    lng: 98.9680,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '泰國知名的連鎖高端 Spa 品牌，服務高度標準化且貼心，環境香氣怡人。按摩結束後附贈美味的「芒果糯米飯」是最大亮點！',
    intro_en: 'A famous high-end boutique spa chain in Thailand. Renowned for its clean environment, professional service, and the free warm mango sticky rice served after treatments!',
    recommend: '泰式草藥球熱敷按摩 1,200 THB / 2小時',
    recommend_en: 'Thai Massage with Herbal Compress 1,200 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '23:59',
    hoursDisplay: '10:00 - 24:00 (無休)',
    hoursDisplay_en: '10:00 - Midnight (Daily)',
    source: '各大部落格一致好評推薦',
    source_en: 'Highly Rated on Travel Blogs'
  },
  {
    id: 'mandeene-massage-oldcity',
    name: 'Mandeene Massage (曼迪恩平價放鬆按摩)',
    name_en: 'Mandeene Massage (Old City)',
    category: 'massage',
    lat: 18.7892,
    lng: 98.9830,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '古城內評價極高的平價按摩小店，服務細緻乾淨、力道非常到位。是小預算旅客行經古城累了時最佳的放鬆選擇。',
    intro_en: 'A cozy, clean, and highly-rated local massage parlor in the Old City. Friendly service with firm pressure—the best budget spot to unwind after a walking day.',
    recommend: '腳底精油按摩 300 THB / 1小時',
    recommend_en: 'Foot Oil Massage 300 THB / 1 Hour',
    openTime: '11:00',
    closeTime: '22:30',
    hoursDisplay: '11:00 - 22:30 (無休)',
    hoursDisplay_en: '11:00 - 22:30 (Daily)',
    source: '部落客小客實地推薦',
    source_en: 'Recommended by Blogger Xiaoke'
  },
  {
    id: 'the-opium-chiangmai',
    name: 'The Opium Chiang Mai (奧品公寓)',
    name_en: 'The Opium Chiang Mai',
    category: 'hotel',
    lat: 18.8063,
    lng: 98.9804,
    emoji: '🏨',
    tagName: '精選住宿',
    tagName_en: 'Stays & Hotels',
    intro: '位於 Santitham 區的清邁在地慢活生活圈，物價便宜且生活機能完善。具備精美戶外泳池且客房寬敞明亮，是享受慢活的高CP值公寓選擇。',
    intro_en: 'Located in the Santitham area, a peaceful local community with great convenience and budget-friendly living. Features a swimming pool and spacious rooms.',
    recommend: '高CP值寬敞公寓 (適合家庭與長輩短期居住)',
    recommend_en: 'High-value spacious apartments (ideal for families and seniors)',
    openTime: '00:00',
    closeTime: '23:59',
    hoursDisplay: '24 小時接待櫃台',
    hoursDisplay_en: '24-Hour Reception Desk',
    source: '彙整指南推薦住宿',
    source_en: 'Travel Guide Recommendation'
  },
  {
    id: 'thanin-market',
    name: 'Thanin Market (塔寧市場 / 喜里瓦塔納市場)',
    name_en: 'Thanin Market (Siri Wattana Market)',
    category: 'night_market',
    lat: 18.8042,
    lng: 98.9842,
    emoji: '🍢',
    tagName: '傳統市場',
    tagName_en: 'Traditional Market',
    intro: '被譽為清邁美食寶庫，環境明亮乾淨，生熟食分開。這裡有豐富的泰北香腸、炸豬皮與各式在地傳統小吃，是採購與品嚐道地便宜熟食的首選。',
    intro_en: 'Known as a Chiang Mai food treasure chest. Clean, bright environment with separate raw/cooked food sections. Perfect for budget-friendly local dining.',
    recommend: '在地泰北香腸、炸豬皮、現做熟食',
    recommend_en: 'Northern Thai Sausage, Crispy Rinds, Ready-to-eat Local Dishes',
    openTime: '06:00',
    closeTime: '20:00',
    hoursDisplay: '06:00 - 20:00 (無休)',
    hoursDisplay_en: '06:00 - 20:00 (Daily)',
    source: '塔寧生活圈推薦市場',
    source_en: 'Thanin Neighborhood Guide'
  },
  {
    id: 'jing-jai-market',
    name: 'Jing Jai Market (JJ Market / 靜心文創市集)',
    name_en: 'Jing Jai Market (JJ Market / Organic Market)',
    category: 'night_market',
    lat: 18.8055,
    lng: 98.9912,
    emoji: '🌿',
    tagName: '文創市集',
    tagName_en: 'Creative Market',
    intro: '每週六、日早上營業的高端文創與有機農夫市集，環境如公園般充滿綠意，販售高品質手作服飾飾品、特色手工藝品與在地小農手沖咖啡。',
    intro_en: 'Premium weekend morning market featuring organic farm products, local coffee, and high-quality artisan crafts in a lush, park-like setting.',
    recommend: '小農精品手沖咖啡、手作包包與原創服飾',
    recommend_en: 'Artisan Drip Coffee, Handmade Bags & Original Wearables',
    openTime: '06:00',
    closeTime: '13:00',
    hoursDisplay: '僅週六日 06:00 - 13:00',
    hoursDisplay_en: 'Sat & Sun Only, 06:00 - 13:00',
    source: '文青精品手創必推市集',
    source_en: 'Must-visit Creative Craft Market'
  },
  {
    id: 'warorot-market',
    name: 'Warorot Market (瓦洛洛傳統市場)',
    name_en: 'Warorot Market (Kad Luang)',
    category: 'night_market',
    lat: 18.7902,
    lng: 99.0005,
    emoji: '🎒',
    tagName: '傳統市場',
    tagName_en: 'Traditional Market',
    intro: '清邁最古老且最大的傳統市場，當地人採買日用品與生鮮的中心。也是遊客採買伴手禮（如果乾、泰北香腸、泰北辣椒醬與茶葉香料）的最佳平價去處。',
    intro_en: 'The oldest traditional market in Chiang Mai. The ultimate destination to shop for souvenirs like dried fruits, Northern Thai sausages, and local spices.',
    recommend: '芒果乾、泰北香腸伴手禮、泰式茶葉香料',
    recommend_en: 'Dried Mangoes, Northern Thai Sausages, Local Tea & Spices',
    openTime: '05:00',
    closeTime: '18:00',
    hoursDisplay: '05:00 - 18:00 (無休)',
    hoursDisplay_en: '05:00 - 18:00 (Daily)',
    source: '伴手禮與在地雜貨必訪地',
    source_en: 'Popular Local Grocery & Souvenir hub'
  },
  {
    id: 'saturday-walking-street',
    name: '週六夜市 (Wua Lai Walking Street)',
    name_en: 'Saturday Walking Street (Wua Lai)',
    category: 'night_market',
    lat: 18.7808,
    lng: 98.9877,
    emoji: '🍢',
    tagName: '夜市小吃',
    tagName_en: 'Night Market',
    intro: '位於古城南門外的銀匠區，規模略小於週日夜市，但較不擁擠。有著豐富的手工藝銀飾、精緻平價小物，以及烤肉串等夜市美食。',
    intro_en: 'Located in the silversmith district just south of Chiang Mai Gate. Slightly smaller and less crowded than the Sunday market, offering beautiful silver crafts and street food.',
    recommend: '手工銀飾配件、各式烤肉串與泰北街邊小吃',
    recommend_en: 'Handmade Silver Jewelry, Grilled Skewers & Local Street Foods',
    openTime: '17:00',
    closeTime: '22:30',
    hoursDisplay: '僅週六 17:00 - 22:30',
    hoursDisplay_en: 'Saturdays Only, 17:00 - 22:30',
    source: '週六必逛銀匠街市集',
    source_en: 'Popular Saturday Silversmith Market'
  },
  {
    id: 'wat-doi-suthep',
    name: '素帖山雙龍寺 (Wat Phra That Doi Suthep)',
    name_en: 'Wat Phra That Doi Suthep (Doi Suthep)',
    category: 'sightseeing',
    lat: 18.8052,
    lng: 98.9216,
    emoji: '⛩️',
    tagName: '經典寺廟',
    tagName_en: 'Historic Temple',
    intro: '清邁最重要的佛教聖地與代表地標，坐落於素帖山上。可攀登306階雙龍雕刻石階或搭乘電梯直達塔頂，朝聖巨大的金色舍利塔，並俯瞰清邁市區全景。',
    intro_en: 'The most famous landmark in Chiang Mai, situated on Doi Suthep mountain. Accessible by a 306-step stair or elevator. Offers panoramic city views.',
    recommend: '朝聖巨型黃金寶塔、俯瞰清邁全景、祈福參拜',
    recommend_en: 'Sacred Golden Pagoda, Panoramic City Views, Monk Blessings',
    openTime: '06:00',
    closeTime: '20:00',
    hoursDisplay: '06:00 - 20:00 (無休)',
    hoursDisplay_en: '06:00 - 20:00 (Daily)',
    source: '清邁朝聖第一地標',
    source_en: 'Chiang Mai landmark pilgrimage site'
  },
  {
    id: 'wat-chedi-luang',
    name: '契迪龍寺 / 大佛塔寺 (Wat Chedi Luang)',
    name_en: 'Wat Chedi Luang (Temple of the Great Stupa)',
    category: 'sightseeing',
    lat: 18.7870,
    lng: 98.9866,
    emoji: '⛩️',
    tagName: '經典寺廟',
    tagName_en: 'Historic Temple',
    intro: '位於古城中心，以宏偉的14世紀巨型地震毀損佛塔遺跡著稱。雖已半毀，但高聳殘缺的石雕外牆仍散發著歷史的滄桑與莊嚴，腹地寬敞且有無障礙坡道。',
    intro_en: 'Located in the city center, famous for its grand 14th-century brick stupa partially destroyed by an earthquake. Spacious and wheelchair-accessible.',
    recommend: '震毀佛塔主體結構、清邁城市支柱神廟、主殿大佛',
    recommend_en: 'Ancient Ruined Brick Pagoda, City Pillar Shrine, Grand Buddha Hall',
    openTime: '05:00',
    closeTime: '22:00',
    hoursDisplay: '05:00 - 22:00 (無休)',
    hoursDisplay_en: '05:00 - 22:00 (Daily)',
    source: '古城中央歷史文化遺跡',
    source_en: 'Old City historical centerpiece'
  },
  {
    id: 'wat-phra-sing',
    name: '帕邢寺 (Wat Phra Singh)',
    name_en: 'Wat Phra Singh (Gold Buddha Temple)',
    category: 'sightseeing',
    lat: 18.7888,
    lng: 98.9812,
    emoji: '⛩️',
    tagName: '經典寺廟',
    tagName_en: 'Historic Temple',
    intro: '古城內地位最崇高、香火最鼎盛的皇家寺廟。展現了蘭納（Lanna）古典木雕與精緻黃金壁畫，寺內供奉著名的獅佛「帕邢」，極具藝術鑑賞價值。',
    intro_en: 'The most revered temple inside the Old City walls, displaying classic Lanna-style wood carvings and murals. Houses the sacred Phra Singh Buddha.',
    recommend: '壁畫佛殿 (Lai Kam Chapel)、供奉獅佛、金碧輝煌舍利塔',
    recommend_en: 'Lai Kam Murals, Sacred Phra Singh Buddha, Golden Relic Stupa',
    openTime: '09:00',
    closeTime: '18:00',
    hoursDisplay: '09:00 - 18:00 (無休)',
    hoursDisplay_en: '09:00 - 18:00 (Daily)',
    source: '古城最大精美木雕寺廟',
    source_en: 'Old City gold-mural royal temple'
  },
  {
    id: 'wat-umong',
    name: '悟孟寺 (Wat Umong / 森林隧道寺)',
    name_en: 'Wat Umong (Forest Tunnel Temple)',
    category: 'sightseeing',
    lat: 18.7832,
    lng: 98.9513,
    emoji: '🌳',
    tagName: '經典寺廟',
    tagName_en: 'Historic Temple',
    intro: '位於素帖山腳下的靜謐森林古寺。最著名的是其建於15世紀的磚造地下冥想隧道，供人安靜打坐。林間有著散落的斑駁佛像與幽靜湖泊，深受修行者喜愛。',
    intro_en: 'A unique 15th-century forest temple located at the foot of Doi Suthep. Features ancient brick tunnels for meditation and a tranquil forest setting.',
    recommend: '地下古老冥想隧道、巨大歷史磚塔、斑駁林間佛首',
    recommend_en: 'Underground Meditation Tunnels, Ancient Relic Chedi, Forest Buddha Heads',
    openTime: '05:00',
    closeTime: '20:00',
    hoursDisplay: '05:00 - 20:00 (無休)',
    hoursDisplay_en: '05:00 - 20:00 (Daily)',
    source: '森林幽靜冥想隧道古廟',
    source_en: 'Historic forest tunnel retreat'
  },
  {
    id: 'galae-restaurant',
    name: 'Galae Restaurant (水庫花園餐廳)',
    name_en: 'Galae Restaurant (Lakeside Garden Restaurant)',
    category: 'restaurant',
    lat: 18.7885,
    lng: 98.9535,
    emoji: '🌿',
    tagName: '網美餐廳',
    tagName_en: 'Boutiques',
    intro: '坐落於素帖山腳下的水庫旁，餐廳被滿山谷美麗的季節性鮮花（如繡球花、鬱金香）包圍。步道平坦方便長輩或輪椅移動，是融合自然美景與美食的必推去處。',
    intro_en: 'Nestled near a reservoir at the foot of Doi Suthep, surrounded by colorful flowers. Features a flat, senior-friendly path and beautiful lakeside scenery.',
    recommend: '招牌蜂蜜烤雞、烤豬肋排、特色泰北沙拉與飲品',
    recommend_en: 'Signature Honey Grilled Chicken, Crispy Ribs, Thai Salads',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '水庫旁萬花包圍景觀餐廳',
    source_en: 'Famous lakeside garden restaurant'
  },
  {
    id: 'khaomao-khaofang',
    name: '黑森林餐廳 (Khaomao-Khaofang)',
    name_en: 'Khaomao-Khaofang (The Black Forest Restaurant)',
    category: 'restaurant',
    lat: 18.7302,
    lng: 98.9439,
    emoji: '🌲',
    tagName: '網美餐廳',
    tagName_en: 'Boutiques',
    intro: '米其林必比登推薦餐廳，內部建有宏偉的人造瀑布、潺潺溪流與極其茂密的熱帶雨林植物。用餐環境清爽舒適，宛如走入童話森林般夢幻。',
    intro_en: 'Michelin Bib Gourmand restaurant styled as a magical rain forest. Features majestic artificial waterfalls, streams, and stunning tropical plants.',
    recommend: '泰北燉豬肉咖哩 (Gaeng Hung Lay)、椰肉炒綜合海鮮',
    recommend_en: 'Northern Pork Curry (Gaeng Hung Lay), Seafood Stir-fry in Fresh Coconut',
    openTime: '11:00',
    closeTime: '21:30',
    hoursDisplay: '11:00 - 21:30 (無休)',
    hoursDisplay_en: '11:00 - 21:30 (Daily)',
    source: '米其林必比登推薦黑森林',
    source_en: 'Michelin Bib Gourmand Rainforest'
  },
  {
    id: 'the-deck-one',
    name: 'The Deck 1 (湄濱河畔景觀餐廳)',
    name_en: 'The Deck 1 (Riverside Eatery & Bar)',
    category: 'restaurant',
    lat: 18.7909,
    lng: 98.9998,
    emoji: '🍽️',
    tagName: '網美餐廳',
    tagName_en: 'Boutiques',
    intro: '位於湄濱河畔的精緻景觀餐廳，設有玻璃屋冷氣室內區與河邊老樹下的戶外區，景色開闊。提供溫潤精緻的泰西融合菜色，十分適合家庭聚餐與浪漫約會。',
    intro_en: 'An elegant dining venue on the banks of Ping River. Features indoor glass pavilions and outdoor tables under a century-old rain tree. Perfect for families.',
    recommend: '精緻泰西融合海鮮料理、河畔雙人下午茶套組',
    recommend_en: 'Thai-Western Fusion Seafood dishes, Riverside Afternoon Tea Set',
    openTime: '07:00',
    closeTime: '22:00',
    hoursDisplay: '07:00 - 22:00 (無休)',
    hoursDisplay_en: '07:00 - 22:00 (Daily)',
    source: '河畔玻璃老樹景觀餐廳',
    source_en: 'Riverfront upscale family restaurant'
  },
  {
    id: 'ginger-farm-kitchen',
    name: 'Ginger Farm Kitchen (尼曼一號店)',
    name_en: 'Ginger Farm Kitchen (One Nimman)',
    category: 'restaurant',
    lat: 18.7999,
    lng: 98.9675,
    emoji: '🌿',
    tagName: '網美餐廳',
    tagName_en: 'Boutiques',
    intro: '位於熱門的尼曼一號商圈內，米其林必比登推薦的「從農場到餐桌」有機連鎖餐廳。堅持無化學味精與新鮮健康食材，鄉村田園風格裝潢非常適合網美打卡。',
    intro_en: 'Michelin Bib Gourmand organic restaurant located at One Nimman. Serves wholesome, MSG-free farm-to-table cuisine in a rustic, beautifully styled space.',
    recommend: '招牌蟹肉歐姆蛋、酥脆烤豬肉配雙色泰式醬',
    recommend_en: 'Signature Crab Omelette, Crispy Pork Belly with Local Dips',
    openTime: '11:00',
    closeTime: '22:00',
    hoursDisplay: '11:00 - 22:00 (無休)',
    hoursDisplay_en: '11:00 - 22:00 (Daily)',
    source: '米其林必比登農場有機餐',
    source_en: 'Michelin Bib Gourmand Organic Farm'
  },
  {
    id: 'dash-teak-house',
    name: 'Dash! Teak House (古城柚木音樂餐廳)',
    name_en: 'Dash! Teak House (Old City Teak House)',
    category: 'restaurant',
    lat: 18.7875,
    lng: 98.9922,
    emoji: '🛖',
    tagName: '網美餐廳',
    tagName_en: 'Boutiques',
    intro: '隱密於古城巷弄內的一棟宏偉雙層傳統柚木建築餐廳。氣氛溫馨浪漫，提供精緻高品質的泰北咖哩與各式經典料理，晚間常有 Live 音樂演奏。',
    intro_en: 'Tucked inside a quiet alley of the Old City in a traditional double-decker teakwood house. Offers a cozy, romantic atmosphere and excellent Northern Thai food.',
    recommend: '泰北清邁金麵 (Khao Soi)、酥炸羅望子醬魚、手工甜品',
    recommend_en: 'Traditional Khao Soi, Crispy Fish with Tamarind Sauce, Artisan Desserts',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '古城著名柚木木屋音樂餐廳',
    source_en: 'Famous Old City Teak House Restaurant'
  },
  {
    id: 'womens-massage-center',
    name: 'Women\'s Massage Center By Ex-Prisoner',
    name_en: 'Women\'s Massage Center By Ex-Prisoner',
    category: 'massage',
    lat: 18.7931,
    lng: 98.9858,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '同樣由前清邁女子監獄更生人組成的專業按摩院。按摩師力道十足、穴位按壓非常精準，為需要就業輔導重返社會的更生女性提供良好舞台，服務深獲好評。',
    intro_en: 'A popular massage project run by ex-inmates. Renowned for firm pressure and precise trigger-point massage. Helping women build skills to reintegrate into society.',
    recommend: '傳統泰式全身伸展按摩 300 THB / 小時',
    recommend_en: 'Traditional Thai Stretch Massage ~300 THB / Hour',
    openTime: '09:00',
    closeTime: '21:00',
    hoursDisplay: '09:00 - 21:00 (無休)',
    hoursDisplay_en: '09:00 - 21:00 (Daily)',
    source: '更生人就業培訓好店',
    source_en: 'Ex-inmate vocation program'
  },
  {
    id: 'blind-massage-conservation',
    name: 'Thai Massage Conservation Club (盲人按摩)',
    name_en: 'Thai Massage Conservation Club (Blind Massage)',
    category: 'massage',
    lat: 18.7865,
    lng: 98.9880,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '由盲人按摩師提供服務的經典公益性按摩小店，位於古城內契迪龍寺對面。按摩師由於視覺受限，在觸覺與力道拿捏上極具天賦與敏銳度，收費極度便宜（約150泰銖起）。',
    intro_en: 'A non-profit massage center operated by visually impaired therapists. Located opposite Wat Chedi Luang. Extremely affordable with highly intuitive touch.',
    recommend: '盲人穴位經絡指壓按摩 200 THB / 小時',
    recommend_en: 'Deep Acupressure Blind Massage ~200 THB / Hour',
    openTime: '09:00',
    closeTime: '20:00',
    hoursDisplay: '09:00 - 20:00 (無休)',
    hoursDisplay_en: '09:00 - 20:00 (Daily)',
    source: '盲人按摩平價口碑店',
    source_en: 'Blind Massage Quality Shop'
  },
  {
    id: 'the-artist-spa-nimman',
    name: 'The Artist Spa (尼曼區高CP值小店)',
    name_en: 'The Artist Spa (Nimman Shop)',
    category: 'massage',
    lat: 18.7993,
    lng: 98.9670,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '尼曼區小巷內極具性價比的溫馨按摩店。泰式指壓一小時約 300 泰銖，涵蓋肩頸頭手腳，按完後還貼心附贈當季新鮮水果與精緻熱茶，服務態度親近。',
    intro_en: 'A high-value cozy parlor in the Nimman area. Standard massage is highly budget-friendly (around 300 THB/hr), including head, neck, and shoulders, served with fruits & hot tea.',
    recommend: '頭肩頸背部舒壓指壓 300 THB / 小時',
    recommend_en: 'Head, Neck & Shoulders De-stress ~300 THB / Hour',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '尼曼附水果熱茶高CP值店',
    source_en: 'Top rated budget Nimman shop'
  },
  {
    id: 'thai-healing-massage-santitham',
    name: 'Thai Healing Massage (桑堤譚隱藏平價店)',
    name_en: 'Thai Healing Massage (Santitham)',
    category: 'massage',
    lat: 18.8055,
    lng: 98.9780,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '位於 Santitham/Jedyod 區的隱藏版在地優質平價小店。店面簡單質樸，按摩師技法極為專業扎實，以精準的穴位經絡舒緩、泰北古法經絡推拿聞名。',
    intro_en: 'A hidden local gem in the Jedyod/Santitham area. Quiet and simple atmosphere, featuring professional therapists who specialize in deep therapeutic acupressure.',
    recommend: '泰北古法經絡指壓按摩 300 THB / 小時',
    recommend_en: 'Traditional Lanna Therapeutic Acupressure ~300 THB / Hour',
    openTime: '10:00',
    closeTime: '21:00',
    hoursDisplay: '10:00 - 21:00 (無休)',
    hoursDisplay_en: '10:00 - 21:00 (Daily)',
    source: '桑堤譚生活圈平價按摩',
    source_en: 'Santitham neighborhood favorite'
  },
  {
    id: 'cheeva-spa',
    name: 'Cheeva Spa (純白極簡水療館)',
    name_en: 'Cheeva Spa (White Minimalist Spa)',
    category: 'massage',
    lat: 18.7977,
    lng: 98.9792,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '純白簡約、極具小清新風格的高評價水療館。環境靜謐，提供高規格去角質、精油舒壓水療，療程結束後附贈招牌的精緻芒果乳酪甜點，是網美與家庭極推的放鬆去處。',
    intro_en: 'A clean, minimalist day spa styled as a white sanctuary. Offers body scrubs and aromatic oil therapies, finished with delicious mango yogurt pudding.',
    recommend: '蘭納精油水療去角質套餐 1,200 THB / 2小時',
    recommend_en: 'Lanna Aromatic Oil & Scrub Package ~1,200 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '21:00',
    hoursDisplay: '10:00 - 21:00 (無休)',
    hoursDisplay_en: '10:00 - 21:00 (Daily)',
    source: '極簡文青風格大推 SPA',
    source_en: 'Top Blogger recommended spa'
  },
  {
    id: 'calm-massage-spa',
    name: 'Calm Massage and Spa (靛藍主題文青館)',
    name_en: 'Calm Massage and Spa (Indigo Sanctuary)',
    category: 'massage',
    lat: 18.7897,
    lng: 98.9842,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '以天然「靛藍」與溫暖木質調為主題的精緻連鎖文青風按摩館。位於古城內，環境幽靜祥和、服務標準細密，精油香氣療癒。',
    intro_en: 'A boutique spa inside the Old City decorated in calming indigo and earthy tones. Provides standard, professional treatments in a deeply relaxing atmosphere.',
    recommend: '暖椰子油芳療全身按摩 1,500 THB / 2小時',
    recommend_en: 'Warm Coconut Aromatic Oil Massage ~1,500 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '古城設計美學連鎖 SPA',
    source_en: 'Boutique design hotel & spa'
  },
  {
    id: 'kiyora-spa',
    name: 'Kiyora Spa (頂級草藥熱敷與免費接送)',
    name_en: 'Kiyora Spa (Herbal Compress & Pick-up)',
    category: 'massage',
    lat: 18.7885,
    lng: 98.9955,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '位於古城與夜市之間，環境隱私優雅，設有熱帶大花園別墅。**提供清邁市中心的免費專車接送服務**，其古法草藥球熱敷與香薰推拿廣受國際旅客讚譽。',
    intro_en: 'A premium day spa offering private treatment villas and a lush tropical garden. Features a **free roundtrip shuttle service in the city**. Popular for herbal compresses.',
    recommend: '泰式指壓搭配熱草藥球熱敷 1,600 THB / 2小時',
    recommend_en: 'Thai Acupressure & Hot Herbal Compress ~1,600 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '免費接送最貼心中價位店',
    source_en: 'Best service spa with free shuttle'
  },
  {
    id: 'antique-massage-spa',
    name: 'Antique Massage and Spa (復古花園水療)',
    name_en: 'Antique Massage and Spa (Vintage Garden)',
    category: 'massage',
    lat: 18.7770,
    lng: 98.9850,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '靠近南門週六夜市，隱身於充滿老派泰式風情的復古綠意花園平房中。提供極具性價比的按摩與全身去角質護理套餐，服務人員態度極度謙和貼心。',
    intro_en: 'Tucked away in a vintage garden cottage south of the Old City. Offers highly budget-friendly, comprehensive spa and scrub packages with warm, hospitable service.',
    recommend: '精選去角質 + 熱精油 SPA 套餐 1,200 THB / 2小時',
    recommend_en: 'Body Scrub & Hot Aromatic Oil Massage ~1,200 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '週六夜市旁復古花園好店',
    source_en: 'Vintage garden boutique spa'
  },
  {
    id: 'zira-spa-chiangmai',
    name: 'Zira Spa (頂級奢華蘭納大獎館)',
    name_en: 'Zira Spa (Award-winning Lanna Luxury)',
    category: 'massage',
    lat: 18.7905,
    lng: 98.9929,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '獲獎無數的清邁殿堂級奢華水療中心。中庭為華麗的蘭納宮殿庭院與觀賞鯉魚池，客房極其私密開闊，設有獨立衛浴與按摩浴缸，技師手法達到皇家水準。',
    intro_en: 'Award-winning luxury spa in the Old City. Features a grand courtyard with a koi pond, beautiful Lanna architecture, and suites with private jacuzzi tubs.',
    recommend: '經典皇家蘭納 Tok Sen 木槌敲擊 2,200 THB / 2小時',
    recommend_en: 'Royal Lanna Tok Sen Hammer Massage ~2,200 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '國際金獎頂級皇家水療',
    source_en: 'International Gold Award luxury spa'
  },
  {
    id: 'divana-lana-spa',
    name: 'Divana Lana Spa (百年貴婦殖民別墅)',
    name_en: 'Divana Lana Spa (Colonial Teak Villa)',
    category: 'massage',
    lat: 18.7750,
    lng: 99.0120,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '泰國頂級貴婦水療品牌 Divana 的清邁分店，坐落於 Siripanna 渡假村內。隱藏在90年歷史的殖民風柚木別墅中，其招牌熱石推拿與奢華牛奶浴是追求極致放鬆者的第一首選。',
    intro_en: 'One of Thailand\'s most prestigious luxury spa brands, set inside the Siripanna resort in a 90-year-old colonial mansion. Famous for hot stone & milk baths.',
    recommend: '殖民蘭納香氛熱石理療 2,800 THB / 2小時',
    recommend_en: 'Colonial Lanna Aromatic Hot Stone Therapy ~2,800 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '泰國殿堂級貴婦水療品牌',
    source_en: 'Prestigious Bangkok luxury brand'
  },
  {
    id: 'oasis-spa-lanna',
    name: 'Oasis Spa (綠洲水療帕邢寺店)',
    name_en: 'The Oasis Spa (Lanna Garden Wat Phra Singh)',
    category: 'massage',
    lat: 18.7875,
    lng: 98.9822,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '泰國最負盛名的殿堂級花園 SPA 品牌。古城店座落於帕邢寺旁，主打極具熱帶風情的古典庭園環境。以其經典的「四手按摩」和專業的高端護理，為賓客提供極致舒心的貴賓禮遇。',
    intro_en: 'Thailand\'s legendary luxury garden spa brand. Located near Wat Phra Singh. Renowned for its signature four-hand massage in private garden villas.',
    recommend: '綠洲招牌四手經典按摩 (Oasis Four Hands) 2,900 THB / 2小時',
    recommend_en: 'Signature Oasis Four Hands Massage ~2,900 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '泰國著名奢華綠洲花園 SPA',
    source_en: 'Legendary Thai luxury garden spa'
  },
  {
    id: 'anantara-spa',
    name: 'Anantara Spa (安納塔拉五星芳療)',
    name_en: 'Anantara Spa (Five-Star Riverside Resort)',
    category: 'massage',
    lat: 18.7816,
    lng: 99.0037,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '位於奢華五星級安納塔拉度假酒店內，面向美萍河畔。環境巧妙融合現代禪風與傳統蘭納美學，提供極致細緻的五星度假式高端精油芳療與拉伸。',
    intro_en: 'A premium luxury spa located at the five-star Anantara resort. Set on the Ping River, offering top-tier signature aromatherapy and Lanna therapies.',
    recommend: '安納塔拉皇家香薰精油舒壓理療 3,200 THB / 90分鐘',
    recommend_en: 'Anantara Signature Aromatic Therapy ~3,200 THB / 90 Mins',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '安納塔拉五星河畔度假 SPA',
    source_en: 'Five-Star Anantara Hotel Spa'
  },
  {
    id: 'rarinjinda-wellness-spa',
    name: 'RarinJinda Wellness Spa (五星恆溫健康水療)',
    name_en: 'RarinJinda Wellness Spa (Riverside Wellness)',
    category: 'massage',
    lat: 18.7897,
    lng: 99.0042,
    emoji: '💆',
    tagName: '泰式按摩',
    tagName_en: 'Massage / SPA',
    intro: '榮獲亞洲健康水療大獎的頂尖水療中心，位於美萍河畔。設有全清邁最完善的室內恆溫水療池 (Hydrotherapy Pool)、紅外線桑拿房，結合專業精密的草藥理療，提供全方位的健康體驗。',
    intro_en: 'Multiple award-winning wellness spa on the Ping River. Renowned for its state-of-the-art indoor heated hydrotherapy pools and infrared saunas.',
    recommend: '蘭納大自然金色泥土草藥熱敷套餐 2,500 THB / 2小時',
    recommend_en: 'Lanna Golden Earth & Hot Herb Compress ~2,500 THB / 2 Hours',
    openTime: '10:00',
    closeTime: '22:00',
    hoursDisplay: '10:00 - 22:00 (無休)',
    hoursDisplay_en: '10:00 - 22:00 (Daily)',
    source: '榮獲亞洲多項水療大獎名店',
    source_en: 'Award-winning Wellness Hydro-Spa'
  }
];

// --- 2. BILINGUAL UI TRANSLATIONS ---
const TRANSLATIONS = {
  zh: {
    title: '泰想去清邁 🧭',
    explore_map: '探索地圖',
    attractions: '景點活動',
    preparation: '出發準備',
    all_recommend: '全部推薦',
    khao_soi: '泰北金麵',
    night_market: '夜市小吃',
    cafe: '文青咖啡',
    restaurant: '網美餐廳',
    massage: '泰式按摩',
    sightseeing: '經典景點',
    hotel: '精選住宿',
    map_tip: '點選地標顯示推薦菜色與藍亦明、小客等來源評價',
    label_recommend: '🌟 推薦招牌 / 價格特色',
    label_hours: '🕒 營業時間與狀態',
    label_source: '📍 來源標籤',
    status_open: '營業中',
    status_closed: '已打烊',
    status_sunday: '未營業 (僅週日開)',
    status_unknown: '時間未明',
    popup_text: '點擊顯示詳細介紹',
    btn_locate_title: '定位我的位置',
    popup_user_location: '您的位置',
    error_geolocation: '無法取得您的位置，請確認是否已授權瀏覽器定位權限。'
  },
  en: {
    title: 'Chiang Mai Buddy 🧭',
    explore_map: 'Explore Map',
    attractions: 'Attractions',
    preparation: 'Preparation',
    all_recommend: 'All Recommended',
    khao_soi: 'Khao Soi',
    night_market: 'Street Food',
    cafe: 'Chic Cafes',
    restaurant: 'Boutiques',
    massage: 'Thai Massage',
    sightseeing: 'Sightseeing',
    hotel: 'Hotels',
    map_tip: 'Tap markers to see recommendations & reviewer tags',
    label_recommend: '🌟 Highlight / Price Package',
    label_hours: '🕒 Opening Hours & Live Status',
    label_source: '📍 Verification Source',
    status_open: 'Open Now',
    status_closed: 'Closed Now',
    status_sunday: 'Closed (Sunday Only)',
    status_unknown: 'Hours Unknown',
    popup_text: 'Click to show details',
    btn_locate_title: 'Locate Me',
    popup_user_location: 'Your Location',
    error_geolocation: 'Unable to retrieve your location. Please check your browser location permissions.'
  }
};

// --- 3. GLOBAL STATE ---
let map = null;
let activeTileLayer = null;
let userLocationMarker = null;
let markerGroup = null;
let currentActiveMarker = null;
let currentLang = localStorage.getItem('app_lang') || 'zh';
let currentCategory = 'all';

// --- 4. DOM ELEMENTS ---
const tabs = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const btnSettings = document.getElementById('btn-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const settingsModal = document.getElementById('settings-modal');
const btnSaveKey = document.getElementById('btn-save-key');
const btnResetKey = document.getElementById('btn-reset-key');
const gmapsInput = document.getElementById('gmaps-api-key');
const apiStatusBadge = document.getElementById('api-status');

const detailsDrawer = document.getElementById('details-drawer');
const btnCloseDrawer = document.getElementById('btn-close-drawer');
const drawerTag = document.getElementById('drawer-tag');
const drawerTitle = document.getElementById('drawer-title');
const drawerIntro = document.getElementById('drawer-intro');
const drawerRecommend = document.getElementById('drawer-recommend');
const drawerSource = document.getElementById('drawer-source');

const categoryPills = document.querySelectorAll('.pill-btn');
const accordions = document.querySelectorAll('.accordion-header');
const btnLang = document.getElementById('btn-lang');

// --- 5. APP INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // A. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // B. Tab Switching setup
  initTabNavigation();

  // C. Map setup (Leaflet default)
  initLeafletMap();

  // D. Checklist setup (localStorage loading & progress calculation)
  initChecklist();

  // E. Settings Modal setup
  initSettingsModal();

  // F. Language Switcher Binding
  initLanguageSwitcher();

  // G. Service Worker Registration for PWA offline features
  registerServiceWorker();
});

// --- 6. TAB NAVIGATION SYSTEM ---
function initTabNavigation() {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTabId = tab.getAttribute('data-tab');

      // Update Navigation styling
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Switch views
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === targetTabId) {
          content.classList.add('active');
        }
      });

      // Special Trigger: invalidateSize for Leaflet when switching back to Map
      if (targetTabId === 'tab-map' && map) {
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      }
    });
  });
}

// --- 7. LEAFLET MAP LOGIC ---
function initLeafletMap() {
  // Chiang Mai Old City central coordinates
  const chiangMaiCenter = [18.7900, 98.9860];
  
  // Set up the Leaflet Map
  map = L.map('map', {
    center: chiangMaiCenter,
    zoom: 14,
    zoomControl: true,
    attributionControl: false
  });

  // Create a custom Leaflet Control for switching map language
  const MapLangControl = L.Control.extend({
    options: {
      position: 'topright'
    },
    onAdd: function(map) {
      const container = L.DomUtil.create('div', 'leaflet-bar map-lang-control');
      container.innerHTML = `
        <button id="map-btn-zh" class="map-lang-btn ${currentLang === 'zh' ? 'active' : ''}">中</button>
        <button id="map-btn-en" class="map-lang-btn ${currentLang === 'en' ? 'active' : ''}">EN</button>
      `;
      
      // Stop clicks from bubbling to the map
      L.DomEvent.disableClickPropagation(container);
      
      const btnZh = container.querySelector('#map-btn-zh');
      const btnEn = container.querySelector('#map-btn-en');
      
      btnZh.addEventListener('click', () => {
        if (currentLang !== 'zh') {
          changeAppLanguage('zh');
        }
      });
      
      btnEn.addEventListener('click', () => {
        if (currentLang !== 'en') {
          changeAppLanguage('en');
        }
      });
      
      return container;
    }
  });

  map.addControl(new MapLangControl());

  // Create a custom Leaflet Control for Geolocation "Locate Me"
  const LocateMeControl = L.Control.extend({
    options: {
      position: 'topright'
    },
    onAdd: function(map) {
      const container = L.DomUtil.create('div', 'leaflet-bar locate-control');
      container.innerHTML = `
        <button id="map-btn-locate" class="locate-btn" title="${currentLang === 'zh' ? '定位我的位置' : 'Locate Me'}" aria-label="Locate Me">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" x2="12" y1="1" y2="3"/><line x1="12" x2="12" y1="21" y2="23"/><line x1="1" x2="3" y1="12" y2="12"/><line x1="21" x2="23" y1="12" y2="12"/></svg>
        </button>
      `;
      
      // Stop clicks from bubbling to the map
      L.DomEvent.disableClickPropagation(container);
      
      const btnLocate = container.querySelector('#map-btn-locate');
      btnLocate.addEventListener('click', locateUser);
      
      return container;
    }
  });

  map.addControl(new LocateMeControl());

  // Group for easy clearing / adding pins
  markerGroup = L.layerGroup().addTo(map);

  // Pill click filter handling
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      currentCategory = pill.getAttribute('data-category');
      renderMarkers(currentCategory);
      closeDrawer();
    });
  });

  // Click on map background closes drawer
  map.on('click', () => {
    closeDrawer();
  });

  // Drawer Close Button
  btnCloseDrawer.addEventListener('click', closeDrawer);
}

// Function to create HTML icons inside Leaflet
function createCustomIcon(emoji, isActive = false) {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div class="marker-pin-wrapper ${isActive ? 'marker-active' : ''}">
        <span class="icon-inner">${emoji}</span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
}

function renderMarkers(category) {
  markerGroup.clearLayers();

  SPOTS_DATA.forEach(spot => {
    if (category === 'all' || spot.category === category) {
      // Create Marker with Custom Emoji Icon
      const marker = L.marker([spot.lat, spot.lng], {
        icon: createCustomIcon(spot.emoji)
      });

      // Bind bilingual popup
      const spotName = currentLang === 'zh' ? spot.name : spot.name_en;
      const popupMsg = TRANSLATIONS[currentLang].popup_text;
      marker.bindPopup(`<div class="map-popup-card"><h4>${spotName}</h4><p>${popupMsg}</p></div>`);

      // Pin Click Event
      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        
        // Reset old active marker icons
        if (currentActiveMarker) {
          const oldSpot = SPOTS_DATA.find(s => s.lat === currentActiveMarker.getLatLng().lat);
          if (oldSpot) {
            currentActiveMarker.setIcon(createCustomIcon(oldSpot.emoji, false));
          }
        }

        // Highlight selected pin
        marker.setIcon(createCustomIcon(spot.emoji, true));
        currentActiveMarker = marker;

        // Smoothly Pan map to spot
        map.panTo([spot.lat, spot.lng]);

        // Slide open the Details Drawer
        openDrawer(spot);
      });

      // Add to Layer Group
      markerGroup.addLayer(marker);
    }
  });
}

// Check Open Status dynamically based on local time
function checkOpenStatus(spot) {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const isZh = currentLang === 'zh';
  const dict = TRANSLATIONS[currentLang];

  // Special rule: Sunday Night Market
  if (spot.id === 'sunday-walking-street') {
    if (currentDay !== 0) {
      return { text: dict.status_sunday, isOpen: false };
    }
  }

  const openStr = spot.openTime;
  const closeStr = spot.closeTime;
  if (!openStr || !closeStr) return { text: dict.status_unknown, isOpen: false };

  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const currentTimeVal = currentHour * 60 + currentMin;

  const [oHour, oMin] = openStr.split(':').map(Number);
  const [cHour, cMin] = closeStr.split(':').map(Number);
  
  const oVal = oHour * 60 + oMin;
  let cVal = cHour * 60 + cMin;

  let isOpen = false;
  if (cVal < oVal) {
    // Closes past midnight (e.g. 17:00 to 02:00 next day)
    if (currentTimeVal >= oVal || currentTimeVal <= cVal) {
      isOpen = true;
    }
  } else {
    if (currentTimeVal >= oVal && currentTimeVal <= cVal) {
      isOpen = true;
    }
  }

  if (isOpen) {
    return { text: dict.status_open, isOpen: true };
  } else {
    return { text: dict.status_closed, isOpen: false };
  }
}

// Drawer Transitions
function openDrawer(spot) {
  const isZh = currentLang === 'zh';
  drawerTag.textContent = isZh ? spot.tagName : spot.tagName_en;
  drawerTitle.textContent = isZh ? spot.name : spot.name_en;
  drawerIntro.textContent = isZh ? spot.intro : spot.intro_en;
  drawerRecommend.textContent = isZh ? spot.recommend : spot.recommend_en;
  drawerSource.textContent = isZh ? spot.source : spot.source_en;

  // Set Hours Display & Compute Open Status
  const hoursDisplayEl = document.getElementById('drawer-hours');
  if (hoursDisplayEl) {
    const status = checkOpenStatus(spot);
    const badgeClass = status.isOpen ? 'open' : 'closed';
    const hoursText = isZh ? spot.hoursDisplay : spot.hoursDisplay_en;
    hoursDisplayEl.innerHTML = `${hoursText} <span id="drawer-status" class="status-badge ${badgeClass}">${status.text}</span>`;
  }

  // Add source-specific style class if needed
  if (spot.source.includes('藍亦明')) {
    drawerSource.className = 'value source-badge';
  } else {
    drawerSource.className = 'value source-badge';
    drawerSource.style.backgroundColor = 'var(--accent-gold-light)';
    drawerSource.style.color = 'var(--accent-gold)';
  }

  detailsDrawer.classList.add('open');
}

function closeDrawer() {
  detailsDrawer.classList.remove('open');
  if (currentActiveMarker) {
    const activeSpot = SPOTS_DATA.find(s => s.lat === currentActiveMarker.getLatLng().lat);
    if (activeSpot) {
      currentActiveMarker.setIcon(createCustomIcon(activeSpot.emoji, false));
    }
    currentActiveMarker = null;
  }
}

// Dynamically switch Leaflet map tile layer language
function setMapTileLayer(lang) {
  if (!map) return;
  
  if (activeTileLayer) {
    map.removeLayer(activeTileLayer);
  }
  
  if (lang === 'zh') {
    // GaoDe tiles for Chinese labels (WGS-84 outside China)
    activeTileLayer = L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ['1', '2', '3', '4'],
      maxZoom: 18,
      attribution: '© 高德地圖 Amap'
    });
  } else {
    // CartoDB Voyager tiles for English labels
    activeTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
      attribution: '© OpenStreetMap, © CARTO'
    });
  }
  
  activeTileLayer.addTo(map);
}

// Centralized function to switch app and map language
function changeAppLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('app_lang', currentLang);
  
  // 1. Update header language toggle button label
  if (btnLang) {
    btnLang.textContent = currentLang === 'zh' ? 'EN' : '中文';
  }
  
  // 2. Update map language selector control states
  const mapBtnZh = document.getElementById('map-btn-zh');
  const mapBtnEn = document.getElementById('map-btn-en');
  if (mapBtnZh && mapBtnEn) {
    if (currentLang === 'zh') {
      mapBtnZh.classList.add('active');
      mapBtnEn.classList.remove('active');
    } else {
      mapBtnZh.classList.remove('active');
      mapBtnEn.classList.add('active');
    }
  }
  
  // 3. Update map tile layers
  setMapTileLayer(currentLang);
  
  // 4. Update general UI texts (header, tabs, bottom nav, etc.)
  updateUILanguage();
  
  // 5. Re-render map pins with the updated language (popups/tooltips)
  renderMarkers(currentCategory);
  
  // 6. If drawer is currently active, re-render it instantly
  if (detailsDrawer && detailsDrawer.classList.contains('open') && currentActiveMarker) {
    const activeLatLng = currentActiveMarker.getLatLng();
    const activeSpot = SPOTS_DATA.find(s => s.lat === activeLatLng.lat && s.lng === activeLatLng.lng);
    if (activeSpot) {
      openDrawer(activeSpot);
    }
  }
}

// Locate the user's current GPS position
function locateUser() {
  const dict = TRANSLATIONS[currentLang];
  
  if (!navigator.geolocation) {
    alert(dict.error_geolocation);
    return;
  }
  
  const btnLocate = document.getElementById('map-btn-locate');
  if (btnLocate) {
    btnLocate.classList.add('loading');
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      if (btnLocate) {
        btnLocate.classList.remove('loading');
      }
      
      const { latitude, longitude, accuracy } = position.coords;
      const userLatLng = [latitude, longitude];
      
      // Smoothly pan and zoom to user's location
      map.setView(userLatLng, 16);
      
      // Update or create user location pulsing marker
      if (userLocationMarker) {
        userLocationMarker.setLatLng(userLatLng);
      } else {
        const pulsingIcon = L.divIcon({
          className: 'user-location-marker-container',
          html: `
            <div class="user-pulse-dot"></div>
            <div class="user-pulse-wave"></div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });
        
        userLocationMarker = L.marker(userLatLng, { icon: pulsingIcon }).addTo(map);
      }
      
      // Bind bilingual user location popup
      const userPopupContent = `
        <div class="user-location-popup">
          <h4>${dict.popup_user_location}</h4>
          <p>${latitude.toFixed(5)}, ${longitude.toFixed(5)} (±${Math.round(accuracy)}m)</p>
        </div>
      `;
      userLocationMarker.bindPopup(userPopupContent).openPopup();
    },
    (error) => {
      if (btnLocate) {
        btnLocate.classList.remove('loading');
      }
      console.error('Geolocation error:', error);
      alert(dict.error_geolocation);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

// --- 8. CHECKLIST ACCORDION & STATE PERSISTENCE ---
function initChecklist() {
  // A. Accordion Expansion Toggle
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all accordions for clean UX, then open target
      document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // B. State Persistence (localStorage)
  const checkboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');

  // Load saved states
  checkboxes.forEach(cb => {
    const checkboxId = cb.getAttribute('data-id');
    const isChecked = localStorage.getItem(checkboxId) === 'true';
    cb.checked = isChecked;

    // Listen to changes
    cb.addEventListener('change', () => {
      localStorage.setItem(checkboxId, cb.checked);
      updateCategoryProgress(cb.closest('.accordion-item'));
    });
  });

  // Initialize progress bars for all categories
  document.querySelectorAll('.accordion-item').forEach(item => {
    updateCategoryProgress(item);
  });
}

function updateCategoryProgress(accordionItem) {
  const checkboxes = accordionItem.querySelectorAll('input[type="checkbox"]');
  const checkedCount = accordionItem.querySelectorAll('input[type="checkbox"]:checked').length;
  const totalCount = checkboxes.length;

  const percentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  // Update UI Elements
  const progressText = accordionItem.querySelector('.progress-text');
  const progressFill = accordionItem.querySelector('.progress-bar-fill');

  if (progressText && progressFill) {
    progressText.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;
  }
}

// --- 9. SETTINGS MODAL & GOOGLE MAPS CONFIG ---
function initSettingsModal() {
  // Open Settings Modal
  btnSettings.addEventListener('click', () => {
    settingsModal.classList.add('open');
    // Load stored key
    const savedKey = localStorage.getItem('gmaps_api_key') || '';
    gmapsInput.value = savedKey;
    updateKeyBadgeState(savedKey);
  });

  // Close Settings Modal
  btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.remove('open');
  });

  // Save Config Key
  btnSaveKey.addEventListener('click', () => {
    const keyVal = gmapsInput.value.trim();
    if (keyVal) {
      localStorage.setItem('gmaps_api_key', keyVal);
      alert('已成功儲存 Google Maps API 金鑰！(目前環境依舊先展示 Leaflet.js 本機地圖)');
    } else {
      localStorage.removeItem('gmaps_api_key');
    }
    updateKeyBadgeState(keyVal);
    settingsModal.classList.remove('open');
  });

  // Reset/Clear Config Key
  btnResetKey.addEventListener('click', () => {
    gmapsInput.value = '';
    localStorage.removeItem('gmaps_api_key');
    updateKeyBadgeState('');
    alert('已清除 Google Maps API 金鑰，回復 Leaflet 免金鑰引擎。');
    settingsModal.classList.remove('open');
  });
}

function updateKeyBadgeState(key) {
  if (key) {
    apiStatusBadge.className = 'api-status-badge active';
    apiStatusBadge.querySelector('span:last-child').textContent = '已串接 Google Maps API 金鑰';
  } else {
    apiStatusBadge.className = 'api-status-badge inactive';
    apiStatusBadge.querySelector('span:last-child').textContent = '目前使用 Leaflet.js 引擎 (免 API 金鑰)';
  }
}

// --- 10. BILINGUAL LANGUAGE ROUTER ---
function initLanguageSwitcher() {
  if (btnLang) {
    btnLang.addEventListener('click', () => {
      const newLang = currentLang === 'zh' ? 'en' : 'zh';
      changeAppLanguage(newLang);
    });
  }
  
  // Apply initial translations & tile layer on page load
  changeAppLanguage(currentLang);
}

function updateUILanguage() {
  const dict = TRANSLATIONS[currentLang];
  
  // A. Main header title
  const titleEl = document.getElementById('app-title');
  if (titleEl) titleEl.textContent = dict.title;
  
  // B. Floating map helper tip
  const mapHelperEl = document.getElementById('map-helper-text');
  if (mapHelperEl) mapHelperEl.textContent = dict.map_tip;
  
  // C. Bottom Navigation bar texts
  const navMap = document.getElementById('nav-text-map');
  if (navMap) navMap.textContent = dict.explore_map;
  const navAttr = document.getElementById('nav-text-attractions');
  if (navAttr) navAttr.textContent = dict.attractions;
  const navPrep = document.getElementById('nav-text-preparation');
  if (navPrep) navPrep.textContent = dict.preparation;
  
  // D. Info Drawer labels
  const lblRec = document.getElementById('label-recommend');
  if (lblRec) lblRec.textContent = dict.label_recommend;
  const lblHrs = document.getElementById('label-hours');
  if (lblHrs) lblHrs.textContent = dict.label_hours;
  const lblSrc = document.getElementById('label-source');
  if (lblSrc) lblSrc.textContent = dict.label_source;
  
  // E. Filter Category Pills
  categoryPills.forEach(pill => {
    const cat = pill.getAttribute('data-category');
    if (cat === 'all') {
      pill.innerHTML = `<span class="pill-emoji">✨</span> ${dict.all_recommend}`;
    } else if (cat === 'khao_soi') {
      pill.innerHTML = `<span class="pill-emoji">🍜</span> ${dict.khao_soi}`;
    } else if (cat === 'night_market') {
      pill.innerHTML = `<span class="pill-emoji">🍢</span> ${dict.night_market}`;
    } else if (cat === 'cafe') {
      pill.innerHTML = `<span class="pill-emoji">☕</span> ${dict.cafe}`;
    } else if (cat === 'restaurant') {
      pill.innerHTML = `<span class="pill-emoji">🌿</span> ${dict.restaurant}`;
    } else if (cat === 'massage') {
      pill.innerHTML = `<span class="pill-emoji">💆</span> ${dict.massage}`;
    } else if (cat === 'sightseeing') {
      pill.innerHTML = `<span class="pill-emoji">⛩️</span> ${dict.sightseeing}`;
    } else if (cat === 'hotel') {
      pill.innerHTML = `<span class="pill-emoji">🏨</span> ${dict.hotel}`;
    }
  });
  
  // F. Locate Button Tooltip
  const btnLocate = document.getElementById('map-btn-locate');
  if (btnLocate) {
    btnLocate.setAttribute('title', dict.btn_locate_title);
  }
}

// --- 11. PWA SERVICE WORKER REGISTRATION ---
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('PWA Service Worker registered successfully with scope: ', reg.scope);
        })
        .catch(err => {
          console.error('PWA Service Worker registration failed: ', err);
        });
    });
  }
}
