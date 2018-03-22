let map1 = L.map('webmap1').setView([36.113614, -86.718002], 10)
let basemap = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
L.tileLayer(basemap).addTo(map1)
let marker = L.marker([36.113614, -86.718002]).addTo(map1)
let polygon = L.polygon([
  [36.193088, -86.716471],
  [36.24073, -86.623087],
  [36.227438, -86.667032]
]).addTo(map1);

polygon.bindPopup('St. Katharine\'s and Wapping')
marker.bindPopup('Nashville, Tennesse')

map1.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
