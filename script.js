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

const featured = rides[0];
const featuredEl = document.querySelector('#featured-ride');
const ridesEl = document.querySelector('#rides');
const routesMetric = document.querySelector('#metric-routes');
const driversMetric = document.querySelector('#metric-drivers');

const feedbackDriver = document.querySelector('#feedback-driver');
const feedbackCar = document.querySelector('#feedback-car');
const feedbackRating = document.querySelector('#feedback-rating');
const feedbackText = document.querySelector('#feedback-text');

function renderStars(rating) {
  const rounded = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, i) => i < rounded ? '★' : '☆').join(' ');
  return `${stars} ${rating.toFixed(1)}`;
}

function renderRideCard(ride) {
  const stopsText = ride.stops.join(' · ');
  return `
    <article class="ride-card">
      <div class="ride__top">
        <div>
          <div class="route">${ride.from} → ${ride.to}</div>
          <div class="stops">Via ${stopsText}</div>
        </div>
        <span class="pill pill--soft">Leaves in ${ride.departureInMin} min</span>
      </div>
      <div class="ride__meta">
        <span class="pill pill--ghost">${ride.car}</span>
        <span class="pill pill--success">Driver ${renderStars(ride.rating)}</span>
        <span class="pill pill--ghost">Passenger rating ${ride.passengerRating.toFixed(1)}</span>
      </div>
      <div class="ride__meta">
        <span class="price">${ride.price} birr</span>
        <span>${ride.distanceKm} km · birr/km pricing</span>
        <span>Posted ${ride.postedAgo} min ago</span>
      </div>
      <p class="muted">"${ride.feedback}"</p>
    </article>
  `;
}

function hydrateFeatured() {
  featuredEl.innerHTML = renderRideCard(featured);
}

function hydrateMetrics() {
  routesMetric.textContent = rides.length;
  const avgRating = (rides.reduce((acc, r) => acc + r.rating, 0) / rides.length).toFixed(1);
  driversMetric.textContent = `${avgRating} ★ drivers`;
}

function hydrateFeedback() {
  feedbackDriver.textContent = featured.driver;
  feedbackCar.textContent = featured.car;
  feedbackRating.textContent = renderStars(featured.rating);
  feedbackText.textContent = featured.feedback;
}

function matchesFilters(ride, filters) {
  const searchTerm = filters.search.trim().toLowerCase();
  const inSearch = !searchTerm || [ride.driver, ride.from, ride.to, ...ride.stops].some(val => val.toLowerCase().includes(searchTerm));

  const dep = filters.departure.trim().toLowerCase();
  const dest = filters.destination.trim().toLowerCase();
  const depMatch = !dep || ride.from.toLowerCase().includes(dep) || ride.stops.some(stop => stop.toLowerCase().includes(dep));
  const destMatch = !dest || ride.to.toLowerCase().includes(dest) || ride.stops.some(stop => stop.toLowerCase().includes(dest));

  const timeMatch = filters.timeWindow === 'any'
    ? true
    : filters.timeWindow === 'soon'
      ? ride.departureInMin <= 30
      : ride.departureInMin <= 60;

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
  const filtered = rides.filter(ride => matchesFilters(ride, mergedFilters));
  const sorted = sortRides(filtered, sortBy);

  ridesEl.innerHTML = sorted.map(renderRideCard).join('');

  if (!ridesEl.innerHTML) {
    ridesEl.innerHTML = '<p class="muted">No rides match your filters yet. Try widening your search.</p>';
  }
}

hydrateFeatured();
hydrateMetrics();
hydrateFeedback();
renderRides();

['#search', '#departure', '#destination', '#timeWindow', '#sort'].forEach(sel => {
  const el = document.querySelector(sel);
  el.addEventListener('input', () => renderRides());
  el.addEventListener('change', () => renderRides());
});
