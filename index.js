// Initialize Leaflet map
var map = L.map('map').setView([9.0820, 8.6753], 7);

// Add the OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example coordinates for points
var points = [
    {lat: 8.6288, lng: 3.408},
    {lat: 7.2972, lng: 5.1451},
    {lat: 10.51597, lng: 7.451694},
    {lat: 7.54667, lng: 4.54692},
    {lat: 6.24268, lng: 7.11155},
    {lat: 6.86685, lng: 7.41742},
    {lat: 6.39088, lng: 8.02457},
    {lat: 10.05505, lng: 9.11815},
    {lat: 9.002, lng: 7.383},
    {lat: 9.51, lng:  6.44}
];

// Add markers to the map
var markers = [];
points.forEach(function(point) {
    var marker = L.marker([point.lat, point.lng]).addTo(map);
    markers.push(marker);
});


//example coordinated created myself
var points2=[
    {lat: 10.2, lng: 9.1}
    {lat: 11.4, lng: 10.2},
    {lat: 10.6, lng: 7.5},
    {lat: 7.45, lng: 4.38}
];

// Add markers to the map created myself
var markers2 = [];
points2.forEach(function(point) {
    var marker = L.marker([point.lat, point.lng]).addTo(map);
    markers2.push(marker);
});

// Function to toggle marker colors created myself
function toggleMarkerColors1() {
    markers2.forEach(function(marker2) {
        if (marker2.options.icon.options.iconUrl === 'star_black.png') {
            marker2.setIcon(L.icon({
                iconUrl: 'star_blue.png',
                iconSize: [25, 30],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            }));
        } else {
            marker2.setIcon(L.icon({
                iconUrl: 'star_black.png',
                iconSize: [25, 30],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            }));
        }
    });
}


// Function to toggle marker colors
function toggleMarkerColors() {
    markers.forEach(function(marker) {
        if (marker.options.icon.options.iconUrl === 'green_marker.png') {
            marker.setIcon(L.icon({
                iconUrl: 'red_marker.png',
                iconSize: [15, 30],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
            }));
        } else {
            marker.setIcon(L.icon({
                iconUrl: 'green_marker.png',
                iconSize: [15, 30],
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
        toggleMarkerColors1();
    }, 1000); // Change the interval as needed (1000ms = 1 second)
}

// Start blinking
blinkMarkers();


