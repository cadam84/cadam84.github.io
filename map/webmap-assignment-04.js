let map4 = L.map('webmap4').setView([38, -98.824936], 4.2)
basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(map4)

GeojsonStyle = function (state) {
  let age = state.properties.MED_AGE
  let stateColor = '#88b4fc'
  if (age < 38) {stateColor = '#b9a4f2'}
  let style = {
    color: stateColor,
    weight: 1.5,
    fillOpacity: 0.1
  }
  return style
}

function myPopup (state, statelayer){
  let name = state.properties.STATE_NAME
  let age = state.properties.MED_AGE
  statelayer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
}

GeojsonOptions = {
  style: GeojsonStyle,
  onEachFeature: myPopup
}
L.geoJSON(stateData, GeojsonOptions).addTo(map4)
