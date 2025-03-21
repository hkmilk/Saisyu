var corner1 = L.latLng(35.658613,139.745442),
corner2 = L.latLng(35.658613, 139.745442),
bounds = L.latLngBounds(corner1, corner2);


var map = L.map('l-map', {
    center: [35.658613, 139.745442],
    zoom: 19,
    maxBounds: bounds,
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([35.658613, 139.745442]).addTo(map)
.openPopup();