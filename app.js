/* ==========================================
   CHIANG MAI TRAVEL PWA - MAIN LOGIC
   ========================================== */

// --- 1. CONFIGURATION & DATA ---

// Curated Chiang Mai Old City Food & Cafes Coordinates
const SPOTS_DATA = [
  {
    id: 'khao-soi-khun-yai',
    name: 'Khao Soi Khun Yai (古城北門金麵)',
    category: 'khao_soi',
    lat: 18.7946,
    lng: 98.9839,
    emoji: '🍜',
    tagName: '泰北金麵',
    intro: '位於清邁古城北門旁的傳奇金麵，被許多人評為清邁最傳統好吃的泰北金麵！湯頭椰奶椰香濃郁、層次感十足。',
    recommend: '招牌雞肉金麵 (Khao Soi Gai) 70 THB',
    source: 'YouTube 萬人觀看推薦'
  },
  {
    id: 'khao-soi-maesai',
    name: 'Khao Soi Maesai (泰北金麵)',
    category: 'khao_soi',
    lat: 18.8021,
    lng: 98.9774,
    emoji: '🍜',
    tagName: '泰北金麵',
    intro: '榮獲米其林必比登推薦的超人氣金麵店，湯頭非常濃郁偏辣，椰奶風味與脆麵條完美咬合。',
    recommend: '牛肉金麵 (Khao Soi Beef) + 泰式奶茶',
    source: '米其林必比登推薦'
  },
  {
    id: 'feng-fei-fei-pig-leg',
    name: '鳳飛飛豬腳飯 (昌卜克門夜市)',
    category: 'night_market',
    lat: 18.7958,
    lng: 98.9858,
    emoji: '🍢',
    tagName: '夜市小吃',
    intro: '清邁北門夜市最著名的招牌小吃，老闆娘戴著標誌性牛仔帽。豬腳燉得極為軟爛入味，搭配半熟蛋與特製酸菜，讓人一口接一口。',
    recommend: '招牌豬腳飯 (小份 50 THB / 加肉 80 THB)',
    source: '各大部落格一致推薦'
  },
  {
    id: 'sunday-walking-street',
    name: '週日夜市烤肉串與泰式炒麵',
    category: 'night_market',
    lat: 18.7880,
    lng: 98.9860,
    emoji: '🍢',
    tagName: '夜市小吃',
    intro: '清邁最大最著名的週末市集。每週日下午在古城主幹道封路封街，有上千家手工藝品、平價小吃、現烤香熱烤肉串與地道泰式炒麵。',
    recommend: '香木烤豬肉串 10 THB、現炒 Pad Thai 40 THB',
    source: '部落客小客實地推薦'
  },
  {
    id: 'graph-cafe-nimman',
    name: 'Graph Cafe (尼曼路打卡始祖)',
    category: 'cafe',
    lat: 18.8001,
    lng: 98.9682,
    emoji: '☕',
    tagName: '文青咖啡',
    intro: '清邁網美打卡風潮的開山始祖之一。以黑白冷淡風與高品質「創意特調咖啡」風靡清邁，將冷萃、竹炭與新鮮果汁做驚艷結合。',
    recommend: 'Monochrome (竹炭拿鐵)、Lost Garden (玫瑰冷萃)',
    source: 'YouTube 藍亦明推薦'
  },
  {
    id: 'the-baristro-ping-river',
    name: 'The Baristro At Ping River (平河畔極簡風)',
    category: 'cafe',
    lat: 18.8105,
    lng: 99.0068,
    emoji: '☕',
    tagName: '文青咖啡',
    intro: '坐落於清邁美萍河畔的超人氣極簡美學咖啡館。水泥灰牆、工業風與通透大窗引進河畔天光，是拍照與放空的上乘去處。',
    recommend: 'Triple Espresso (三色漸層濃縮)、椰子千層蛋糕',
    source: '各大部落格必推打卡店'
  }
];

// --- 2. GLOBAL STATE ---
let map = null;
let markerGroup = null;
let currentActiveMarker = null;

// --- 3. DOM ELEMENTS ---
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

// --- 4. APP INITIALIZATION ---
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

  // F. Service Worker Registration for PWA offline features
  registerServiceWorker();
});

// --- 5. TAB NAVIGATION SYSTEM ---
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

// --- 6. LEAFLET MAP LOGIC ---
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

  // Load OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  // Group for easy clearing / adding pins
  markerGroup = L.layerGroup().addTo(map);

  // Populate Default markers
  renderMarkers('all');

  // Pill click filter handling
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const selectedCategory = pill.getAttribute('data-category');
      renderMarkers(selectedCategory);
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

// Drawer Transitions
function openDrawer(spot) {
  drawerTag.textContent = spot.tagName;
  drawerTitle.textContent = spot.name;
  drawerIntro.textContent = spot.intro;
  drawerRecommend.textContent = spot.recommend;
  drawerSource.textContent = spot.source;

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

// --- 7. CHECKLIST ACCORDION & STATE PERSISTENCE ---
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

// --- 8. SETTINGS MODAL & GOOGLE MAPS CONFIG ---
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

// --- 9. PWA SERVICE WORKER REGISTRATION ---
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
