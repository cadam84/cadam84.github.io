let map5 = L.map('webmap5').setView([38, -98.824936], 4.2)

let graybasemapURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
let graybasemap = L.tileLayer(graybasemapURL)
graybasemap.addTo(map5)

let satelliteURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let satellitebasemap = L.tileLayer(satelliteURL)

let topoURL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let topobasemap = L.tileLayer(topoURL)

let mybasemaps = {
  'Gray basemap': graybasemap,
  'Satellite basemap': satellitebasemap,
  'Topographic basemap': topobasemap
}

L.control.layers(mybasemaps).addTo(map5)

GeojsonStyle = function (state) {
  let age = state.properties.ASIAN
  let stateColor = '#88b4fc'
  if (age < 293000) {stateColor = '#b9a4f2'}
  let style = {
    color: stateColor,
    weight: 1.5,
    fillOpacity: 0.1
  }
  return style
}

function myPopup (state, statelayer){
  let name = state.properties.STATE_NAME
  let asian = state.properties.ASIAN
  statelayer.bindPopup(name + ' has this many Asians in their population: ' + asian + '<br>The national average is 293,000')
}

GeojsonOptions = {
  style: GeojsonStyle,
  onEachFeature: myPopup
}
L.geoJSON(stateData, GeojsonOptions).addTo(map5)
