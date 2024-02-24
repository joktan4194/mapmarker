// Initialize Leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example coordinates for points
var points = [
    {lat: 51.5, lng: -0.09},
    {lat: 51.51, lng: -0.1},
    {lat: 51.49, lng: -0.1}
];

// Add markers to the map
var markers = [];
points.forEach(function(point) {
    var marker = L.marker([point.lat, point.lng]).addTo(map);
    markers.push(marker);
});

// Function to toggle marker colors
function toggleMarkerColors() {
    markers.forEach(function(marker) {
        if (marker.options.icon.options.iconUrl === 'green_marker.png') {
            marker.setIcon(L.icon({
                iconUrl: 'red_marker.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            }));
        } else {
            marker.setIcon(L.icon({
                iconUrl: 'green_marker.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            }));
        }
    });
}

// Function to toggle marker colors at regular intervals
function blinkMarkers() {
    setInterval(function() {
        toggleMarkerColors();
    }, 1000); // Change the interval as needed (1000ms = 1 second)
}

// Start blinking
blinkMarkers();

