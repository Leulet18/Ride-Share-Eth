const rides = [
  {
    id: 1,
    driver: 'Selam Tesfaye',
    car: 'Hyundai i10 · Blue',
    rating: 4.9,
    feedback: 'Always on time, keeps a clean car, and knows the shortcuts.',
    from: 'Bole Bulbula',
    to: 'Megenagna',
    stops: ['Bole Michael', 'Bole Airport', 'Imperial Hotel', 'Anbessa Garage'],
    departureInMin: 18,
    price: 65,
    distanceKm: 12,
    passengerRating: 4.7,
    postedAgo: 6
  },
  {
    id: 2,
    driver: 'Nahom Bekele',
    car: 'Toyota Vitz · Silver',
    rating: 4.6,
    feedback: 'Friendly and flexible about pick-up points.',
    from: 'Piassa',
    to: 'CMC',
    stops: ['Arat Kilo', 'Shola', 'CMC'],
    departureInMin: 40,
    price: 60,
    distanceKm: 9,
    passengerRating: 4.5,
    postedAgo: 12
  },
  {
    id: 3,
    driver: 'Hanna Girma',
    car: 'Suzuki Dzire · White',
    rating: 5.0,
    feedback: 'Communicates clearly and drives smoothly.',
    from: 'Jemo',
    to: '4 Kilo',
    stops: ['Mexico', 'Piassa'],
    departureInMin: 25,
    price: 70,
    distanceKm: 11,
    passengerRating: 4.8,
    postedAgo: 4
  },
  {
    id: 4,
    driver: 'Abel Mulu',
    car: 'Toyota Corolla · Black',
    rating: 4.4,
    feedback: 'Great music and respectful driving.',
    from: 'CMC',
    to: 'Sarbet',
    stops: ['Lideta', 'Mexico'],
    departureInMin: 55,
    price: 68,
    distanceKm: 10,
    passengerRating: 4.3,
    postedAgo: 20
  },
  {
    id: 5,
    driver: 'Ruth Alemu',
    car: 'Hyundai Accent · Gray',
    rating: 4.8,
    feedback: 'Calm driver, keeps you updated on traffic.',
    from: 'Megenagna',
    to: 'Bole Bulbula',
    stops: ['Bole Atlas', 'Bole Michael'],
    departureInMin: 12,
    price: 62,
    distanceKm: 8,
    passengerRating: 4.6,
    postedAgo: 8
  }
];

const translations = {
  am: {
    'hero.eyebrow': 'አዲስ አበባ · የማህበረሰብ ጉዞዎች',
    'hero.title': 'ጉዞውን ያካፍሉ፣ በርካሽ በፍጥነት ይድረሱ።',
    'hero.lede': 'Ride Share Eth በተመሳሳይ አቅጣጫ የሚጓዙ ጎዳና ተጓዦችን ያገናኛል፣ ጉዞዎችን በቀላሉ ለመካፈል ያግዛል። መንገድዎን ይለጥፉ፣ ጨረታዎችን ይቀበሉ፣ ነዳጅን ብቻ ይካፈሉ።',
    'hero.meta1': 'አማካይ ዋጋ፡ 60–70 ብር በጉዞ',
    'hero.meta2': 'በብር/ኪ.ሜ የሚታወቅ ዋጋ',
    'panel.label': 'በቀጥታ የሚሄዱ',
    'panel.live': 'በቀጥታ',
    'legend.driver': 'የተቆጣጠሩ አሽከርካሪዎች',
    'legend.passenger': 'ግልጽ የተሳፋሪ መረጃ',
    'cta.postRide': 'ጉዞ ይለጥፉ',
    'cta.browseRides': 'ጉዞዎችን ይመልከቱ',
    'why.eyebrow': 'ለምን Ride Share Eth',
    'why.title': 'በአዲስ አበባ እንደሚንቀሳቀስ ተስማሚ',
    'why.body': 'የአንበሳና ሸገር አውቶቡሶች በፍጥነት ይሞላሉ፣ ሰማያዊ ሚኒበሶች ብዙ ይከፍላሉ፣ የግል ታክሲዎች በጀትን ይጭናሉ። Ride Share Eth በመንገድ ላይ ያሉ አሽከርካሪዎችን ከቅርብ ተሳፋሪዎች ጋር ያገናኛል እንዲሁም ጉዞዎች በርካሽ ይቆያሉ።',
    'why.list1': 'መንገድዎን በመነሻው 20–30 ደቂቃ በፊት ይለጥፉ።',
    'why.list2': 'ተሳፋሪዎች በመካከለኛ ጣቢያዎች ጨረታ ያቀርባሉ—ከቦሌ ቡልቡላ እስከ መገናኛ ድረስ።',
    'why.list3': 'ግልጽ ግብረመልስ፡ አሽከርካሪና ተሳፋሪ የእርስዎን ደረጃ ያያሉ።',
    'why.list4': 'ዋጋ በብር/ኪ.ሜ የሚቆጠር፣ በተለምዶ አገር የሚጠቀሱ መንገዶች 60–70 ብር ይሆናሉ።',
    'metrics.savingsLabel': 'ከግል ታክሲ ጋር የተያያዘ አማካይ ቅናሽ',
    'metrics.routesLabel': 'ዛሬ የተሳፉ መንገዶች',
    'metrics.driversLabel': 'የተታመኑ አሽከርካሪዎች',
    'metrics.badge': 'ማህበረሰብ በመጀመሪያ · የነዳጅ ክፍያ አጋር',
    'metrics.driversValue': '{rating} ★ አሽከርካሪዎች',
    'rides.eyebrow': 'በቀጥታ ጉዞዎች',
    'rides.title': 'ከአንተ ጋር የሚጣጣሙ ጉዞዎችን ያግኙ',
    'rides.searchPlaceholder': 'በአካባቢ፣ ጣቢያ ወይም አሽከርካሪ ይፈልጉ...',
    'rides.sortRecent': 'በቅርብ ጊዜ የተጨመረ',
    'rides.sortPrice': 'ዝቅተኛ ዋጋ',
    'rides.sortRating': 'ከፍተኛ ደረጃ',
    'rides.fromLabel': 'ከየት',
    'rides.fromPlaceholder': 'ለምሳሌ፣ ቦሌ ቡልቡላ',
    'rides.toLabel': 'ወዴት',
    'rides.toPlaceholder': 'ለምሳሌ፣ መገናኛ',
    'rides.timeLabel': 'መነሻ ጊዜ',
    'rides.timeAny': 'በዛሬ ቀን ሁሉም',
    'rides.timeSoon': 'በ30 ደቂቃ ውስጥ',
    'rides.timeHour': 'በ1 ሰዓት ውስጥ',
    'rides.empty': 'በአሁኑ ጊዜ እነዚህን ማጣሪያዎች የሚያሟሉ ጉዞዎች አልተገኙም። ይስፋቱ።',
    'trust.eyebrow': 'የእርግጠኝነት እና ደህንነት',
    'trust.title': 'ከማን ጋር እንደምትጓዙ ይወቁ',
    'trust.body': 'የአሽከርካሪ ካርድ የመኪና ሞዴል፣ ደረጃ፣ እና የተሳፋሪ ግብረመልሶችን ያሳያል። ጨረታ የሚያቀርቡ ተሳፋሪዎችም ያለፉትን ደረጃ ይካፈላሉ ስለዚህ ሁሉም እርግጠኛ ይሆናሉ።',
    'trust.pill1': 'አሽከርካሪ የተረጋገጠ',
    'trust.pill2': 'የተሳፋሪ ደረጃ ይታያል',
    'trust.pill3': 'የግብረመልስ ታሪክ',
    'trust.feedbackTitle': 'ተጠቃሚ አሽከርካሪ',
    'footer.about': 'ብልህ፣ የማህበረሰብ ጉዞዎች በአዲስ። የምትካፈሉትን ኪ.ሜ ብቻ ይክፈሉ።',
    'footer.corridors': 'ታዋቂ መንገዶች',
    'footer.route1': 'ቦሌ ቡልቡላ → መገናኛ',
    'footer.route2': 'ፒያሳ → ሲኤምሲ',
    'footer.route3': 'ጀሞ → ሜክሲኮ → 4 ኪሎ',
    'footer.costs': 'የዋጋ መረጃ',
    'footer.cost1': 'አንበሳ/ሸገር፡ ~20 ብር',
    'footer.cost2': 'ሰማያዊ ሚኒበስ፡ ~40 ብር',
    'footer.cost3': 'የግል ታክሲ፡ ~230 ብር',
    'footer.cost4': 'Ride Share Eth፡ ~60–70 ብር',
    'footer.note': 'በአዲስ የተገነባ፣ ለአዲስ። የነዳጅ ክፍያ እንጂ የትርፍ መሆን አይደለም።',
    'ride.viaPrefix': 'በመካከል',
    'ride.leavesIn': 'በ{minutes} ደቂቃ ይነሳ',
    'ride.driverRating': 'አሽከርካሪ {stars}',
    'ride.passengerRating': 'የተሳፋሪ ደረጃ {rating}',
    'ride.distance': 'ኪ.ሜ · ብር/ኪ.ሜ ዋጋ',
    'ride.postedAgo': 'ከ{minutes} ደቂቃ በፊት ተጨምሯል',
    'ride.priceSuffix': 'ብር'
  },
  en: {
    'hero.eyebrow': 'Addis Ababa · Community Rides',
    'hero.title': 'Share the ride, beat the rush.',
    'hero.lede': 'Ride Share Eth connects commuters heading the same way so everyone travels faster and more affordably. Post your route, accept bids, and split fuel costs—not profits.',
    'hero.meta1': 'Avg price: 60–70 birr per trip',
    'hero.meta2': 'Based on birr-per-kilometer pricing',
    'panel.label': 'Next leaving soon',
    'panel.live': 'Live',
    'legend.driver': 'Driver-rated & verified',
    'legend.passenger': 'Passenger transparency',
    'cta.postRide': 'Post a ride',
    'cta.browseRides': 'Browse rides',
    'why.eyebrow': 'Why Ride Share Eth',
    'why.title': 'Built for the way Addis moves',
    'why.body': 'Anbessa and Sheger buses fill up early, blue minibuses cost more, and private cabs stretch budgets. Ride Share Eth matches drivers already on the road with riders nearby so trips stay affordable.',
    'why.list1': 'Post your route 20–30 minutes before departure.',
    'why.list2': 'Riders bid for seats along the way—Bole Bulbula to Megenagna and beyond.',
    'why.list3': 'Transparent feedback: drivers and passengers see each other\'s ratings.',
    'why.list4': 'Pricing that makes sense: birr-per-kilometer, usually 60–70 birr for popular corridors.',
    'metrics.savingsLabel': 'Avg rider savings vs. private cab',
    'metrics.routesLabel': 'Routes covered today',
    'metrics.driversLabel': 'Trusted drivers',
    'metrics.badge': 'Community-first · Fuel-cost sharing',
    'metrics.driversValue': '{rating} ★ drivers',
    'rides.eyebrow': 'Live rides',
    'rides.title': 'Find a ride that matches your path',
    'rides.searchPlaceholder': 'Search by area, stop, or driver...',
    'rides.sortRecent': 'Most recent',
    'rides.sortPrice': 'Lowest price',
    'rides.sortRating': 'Top rated',
    'rides.fromLabel': 'From',
    'rides.fromPlaceholder': 'e.g., Bole Bulbula',
    'rides.toLabel': 'To',
    'rides.toPlaceholder': 'e.g., Megenagna',
    'rides.timeLabel': 'Leaving',
    'rides.timeAny': 'Anytime today',
    'rides.timeSoon': 'Within 30 minutes',
    'rides.timeHour': 'Within an hour',
    'rides.empty': 'No rides match your filters yet. Try widening your search.',
    'trust.eyebrow': 'Trust & safety',
    'trust.title': 'Know who you ride with',
    'trust.body': 'Driver cards show car model, rating, and rider feedback. Passengers bidding on seats also share their track record so everyone feels confident sharing a ride.',
    'trust.pill1': 'Driver verified',
    'trust.pill2': 'Passenger rating visible',
    'trust.pill3': 'Feedback history',
    'trust.feedbackTitle': 'Featured driver',
    'footer.about': 'Smart, community-driven rides across Addis. Pay only for the kilometers you share.',
    'footer.corridors': 'Popular corridors',
    'footer.route1': 'Bole Bulbula → Megenagna',
    'footer.route2': 'Piassa → CMC',
    'footer.route3': 'Jemo → Mexico → 4 Kilo',
    'footer.costs': 'Costs at a glance',
    'footer.cost1': 'Anbessa/Sheger: ~20 birr',
    'footer.cost2': 'Blue minibus: ~40 birr',
    'footer.cost3': 'Private cab: ~230 birr',
    'footer.cost4': 'Ride Share Eth: ~60–70 birr',
    'footer.note': 'Built in Addis for Addis. Fuel-cost sharing, not profiteering.',
    'ride.viaPrefix': 'Via',
    'ride.leavesIn': 'Leaves in {minutes} min',
    'ride.driverRating': 'Driver {stars}',
    'ride.passengerRating': 'Passenger rating {rating}',
    'ride.distance': 'km · birr/km pricing',
    'ride.postedAgo': 'Posted {minutes} min ago',
    'ride.priceSuffix': 'birr'
  }
};

const featured = rides[0];
const featuredEl = document.querySelector('#featured-ride');
const ridesEl = document.querySelector('#rides');
const routesMetric = document.querySelector('#metric-routes');
const driversMetric = document.querySelector('#metric-drivers');
const langToggle = document.querySelector('#lang-toggle');

const feedbackDriver = document.querySelector('#feedback-driver');
const feedbackCar = document.querySelector('#feedback-car');
const feedbackRating = document.querySelector('#feedback-rating');
const feedbackText = document.querySelector('#feedback-text');

let currentLang = 'am';

function renderStars(rating) {
  const rounded = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, i) => (i < rounded ? '★' : '☆')).join(' ');
  return `${stars} ${rating.toFixed(1)}`;
}

function renderRideCard(ride) {
  const dict = translations[currentLang];
  const stopsText = ride.stops.join(' · ');
  return `
    <article class="ride-card">
      <div class="ride__top">
        <div>
          <div class="route">${ride.from} → ${ride.to}</div>
          <div class="stops">${dict['ride.viaPrefix']} ${stopsText}</div>
        </div>
        <span class="pill pill--soft">${dict['ride.leavesIn'].replace('{minutes}', ride.departureInMin)}</span>
      </div>
      <div class="ride__meta">
        <span class="pill pill--ghost">${ride.car}</span>
        <span class="pill pill--success">${dict['ride.driverRating'].replace('{stars}', renderStars(ride.rating))}</span>
        <span class="pill pill--ghost">${dict['ride.passengerRating'].replace('{rating}', ride.passengerRating.toFixed(1))}</span>
      </div>
      <div class="ride__meta">
        <span class="price">${ride.price} ${dict['ride.priceSuffix']}</span>
        <span>${ride.distanceKm} ${dict['ride.distance']}</span>
        <span>${dict['ride.postedAgo'].replace('{minutes}', ride.postedAgo)}</span>
      </div>
      <p class="muted">"${ride.feedback}"</p>
    </article>
  `;
}

function hydrateFeatured() {
  featuredEl.innerHTML = renderRideCard(featured);
}

function hydrateMetrics() {
  const dict = translations[currentLang];
  routesMetric.textContent = rides.length;
  const avgRating = (rides.reduce((acc, r) => acc + r.rating, 0) / rides.length).toFixed(1);
  driversMetric.textContent = dict['metrics.driversValue'].replace('{rating}', avgRating);
}

function hydrateFeedback() {
  feedbackDriver.textContent = featured.driver;
  feedbackCar.textContent = featured.car;
  feedbackRating.textContent = renderStars(featured.rating);
  feedbackText.textContent = featured.feedback;
}

function matchesFilters(ride, filters) {
  const searchTerm = filters.search.trim().toLowerCase();
  const inSearch =
    !searchTerm || [ride.driver, ride.from, ride.to, ...ride.stops].some((val) => val.toLowerCase().includes(searchTerm));

  const dep = filters.departure.trim().toLowerCase();
  const dest = filters.destination.trim().toLowerCase();
  const depMatch = !dep || ride.from.toLowerCase().includes(dep) || ride.stops.some((stop) => stop.toLowerCase().includes(dep));
  const destMatch = !dest || ride.to.toLowerCase().includes(dest) || ride.stops.some((stop) => stop.toLowerCase().includes(dest));

  const timeMatch =
    filters.timeWindow === 'any' ? true : filters.timeWindow === 'soon' ? ride.departureInMin <= 30 : ride.departureInMin <= 60;

  return inSearch && depMatch && destMatch && timeMatch;
}

function sortRides(list, sortBy) {
  const sorted = [...list];
  switch (sortBy) {
    case 'price':
      return sorted.sort((a, b) => a.price - b.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted.sort((a, b) => a.postedAgo - b.postedAgo);
  }
}

function renderRides(filters = {}) {
  const mergedFilters = {
    search: document.querySelector('#search').value || '',
    departure: document.querySelector('#departure').value || '',
    destination: document.querySelector('#destination').value || '',
    timeWindow: document.querySelector('#timeWindow').value || 'any',
    ...filters
  };

  const sortBy = document.querySelector('#sort').value;
  const filtered = rides.filter((ride) => matchesFilters(ride, mergedFilters));
  const sorted = sortRides(filtered, sortBy);

  ridesEl.innerHTML = sorted.map(renderRideCard).join('');

  if (!ridesEl.innerHTML) {
    ridesEl.innerHTML = `<p class="muted">${translations[currentLang]['rides.empty']}</p>`;
  }
}

function applyTranslations() {
  const dict = translations[currentLang];
  document.documentElement.lang = currentLang === 'am' ? 'am' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-option]').forEach((el) => {
    const key = el.dataset.i18nOption;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  langToggle.textContent = currentLang === 'am' ? 'English' : 'አማርኛ';
  langToggle.setAttribute('aria-label', currentLang === 'am' ? 'Switch to English' : 'Switch to Amharic');

  hydrateMetrics();
  hydrateFeatured();
  hydrateFeedback();
  renderRides();
}

function init() {
  hydrateFeatured();
  hydrateMetrics();
  hydrateFeedback();
  renderRides();
  applyTranslations();

  ['#search', '#departure', '#destination', '#timeWindow', '#sort'].forEach((sel) => {
    const el = document.querySelector(sel);
    el.addEventListener('input', () => renderRides());
    el.addEventListener('change', () => renderRides());
  });

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'am' ? 'en' : 'am';
    applyTranslations();
  });
}

init();
