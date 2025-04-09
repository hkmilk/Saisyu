document.addEventListener("DOMContentLoaded", function () {

window.map = L.map('l-map', {
    center: [35.658613, 139.745442],
    zoom: 19,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([35.658613, 139.745442]).addTo(map)
.openPopup();

setTimeout(() => {
    map.invalidateSize();
 },100);
 const mapContainer = document.getElementById('l-map');

 const resizeObserver = new ResizeObserver(() => {
   map.invalidateSize();
 });
 
 resizeObserver.observe(mapContainer.parentElement);

});