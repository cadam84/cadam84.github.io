let map1 = L.map('webmap1').setView([36.146193 , -86.745961], 12.5)
let basemap = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
L.tileLayer(basemap).addTo(map1)
let marker = L.marker([36.1263, -86.6774]).addTo(map1)
let polygon = L.polygon([
  [36.169962 , -86.774972],
  [36.166602 , -86.778319],
  [36.163795 , -86.772225]
]).addTo(map1);

polygon.bindPopup('Nissan Stadium and Public Square Park')
marker.bindPopup('Nashville International Airport - BNA')

map1.on('click', function (event) {
  console.log('You clicked the map of Nashville at ' + event.latlng)
})


var latlngs = [
    [36.159523, -86.771058],
    [36.161914, -86.769083],
    [36.166072, -86.771058]
];
var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map1)
