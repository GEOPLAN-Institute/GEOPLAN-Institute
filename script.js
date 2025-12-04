// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('nav');
menuBtn && menuBtn.addEventListener('click', () => { nav.classList.toggle('hidden'); });

// Leaflet map
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.667, 21.167], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker([42.667,21.167]).addTo(map)
    .bindPopup('<strong>Instituti GEOPLAN</strong><br>Hulumtim dhe GIS')
    .openPopup();
});
