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
    intro: '清邁最頂級精緻的泰北蘭納風格水療館，以熱帶竹子庭園和專業木槌按摩 (Tok Sen) 聞名，環境優雅幽靜。',
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
    map_tip: '點選地標顯示推薦菜色與藍亦明、小客等來源評價',
    label_recommend: '🌟 推薦招牌 / 價格特色',
    label_hours: '🕒 營業時間與狀態',
    label_source: '📍 來源標籤',
    status_open: '營業中',
    status_closed: '已打烊',
    status_sunday: '未營業 (僅週日開)',
    status_unknown: '時間未明',
    popup_text: '點擊顯示詳細介紹'
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
    map_tip: 'Tap markers to see recommendations & reviewer tags',
    label_recommend: '🌟 Highlight / Price Package',
    label_hours: '🕒 Opening Hours & Live Status',
    label_source: '📍 Verification Source',
    status_open: 'Open Now',
    status_closed: 'Closed Now',
    status_sunday: 'Closed (Sunday Only)',
    status_unknown: 'Hours Unknown',
    popup_text: 'Click to show details'
  }
};

// --- 3. GLOBAL STATE ---
let map = null;
let activeTileLayer = null;
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
    }
  });
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
