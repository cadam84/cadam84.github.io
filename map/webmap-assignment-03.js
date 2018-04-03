let map3 = L.map('webmap3').setView([36.146193 , -86.745961], 12.5)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map3)

let redIcon = L.icon({
    iconUrl: 'leaf-red.png',
    iconSize: [21, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  })

let markerCoordinates = [36.1263, -86.6774]
let markerIcon = { icon: redIcon }

let marker = L.marker(markerCoordinates, markerIcon).addTo(map3)

let polygon = L.polygon([
  [36.169962 , -86.774972],
  [36.166602 , -86.778319],
  [36.163795 , -86.772225]
]).addTo(map3);
