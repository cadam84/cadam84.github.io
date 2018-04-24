let map6 = L.map('webmap6').setView([36.074389, -86.724014], 10)

let streetbasemapURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
let streetbasemap = L.tileLayer(streetbasemapURL)
streetbasemap.addTo(map6)

let satelliteURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let satellitebasemap = L.tileLayer(satelliteURL)

let topoURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let topobasemap = L.tileLayer(topoURL)

let mybasemaps = {
  'Street basemap': streetbasemap,
  'Satellite basemap': satellitebasemap,
  'Topographic basemap': topobasemap
}

L.control.layers(mybasemaps).addTo(map6)

let markerIcon = L.icon({
    iconUrl: 'marker-icon-orange.png',
    iconSize: [10, 15],
    })

let markerOption = { icon: markerIcon }

let marker1 = L.marker([36.182045,-86.7510467]).addTo(map6)
let marker2 = L.marker([36.1580902,-86.851065]).addTo(map6)
let marker3 = L.marker([36.0840113,-86.7075445]).addTo(map6)
let marker4 = L.marker([36.1685816,-86.7396784]).addTo(map6)
let marker5 = L.marker([35.9322536,-86.8621235]).addTo(map6)



let polygonShape = [
  [36.182045,-86.7510467],
  [36.1580902,-86.851065],
  [36.1685816,-86.7396784]
]

let polygonStyle = {
  color: 'navy',
  fillColor: '#b5d1ff',
  fillOpacity: 0.5
}
let polygon = L.polygon(polygonShape, polygonStyle).addTo(map6)

polygon.bindPopup('3 Main Butcher Shops in Central Nashville')
marker1.bindPopup('Porter Road Butcher Shop')
marker2.bindPopup('Bare Bones Butcher Shop')
marker3.bindPopup('Carniceria San Luis')
marker4.bindPopup('Roys Meat Service')
marker5.bindPopup('Carnivore Meat Company')


map6.on('click', function (event) {
  console.log('You clicked the map of Nashville at ' + event.latlng)
})


var latlngs = [
    [36.1580902,-86.851065],
    [36.033431, -86.778259]
];
var polyline = L.polyline(latlngs, {color: 'navy'}).addTo(map6)
