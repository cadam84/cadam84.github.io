let map6 = L.map('webmap6').setView([36.146193 , -86.745961], 12.5)

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


let marker1 = L.marker([36.182045,-86.7510467]).addTo(map6)
let marker2 = L.marker([36.1580902,-86.851065]).addTo(map6)
let marker3 = L.marker([36.0840113,-86.7075445]).addTo(map6)
let marker4 = L.marker([36.1685816,-86.7396784]).addTo(map6)
let marker5 = L.marker([35.9322536,-86.8621235]).addTo(map6)

let polygon = L.polygon([
  [36.182045,-86.7510467],
  [36.1580902,-86.851065],
  [36.1685816,-86.7396784]
]).addTo(map6);

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
    [36.1811641,-86.7514921]
];
var polyline = L.polyline(latlngs, {color: 'purple'}).addTo(map6)
