/*============================= MAP LOCALIZATION =============================*/
var localMap = L.map(document.getElementById("map-localization"), {
  center: [-23.1853, -46.8934],
  zoom: 15,
});
var localBasemap = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {});
const localMarker = L.marker([-23.1832, -46.8961]);

localBasemap.addTo(localMap);
localMarker.addTo(localMap).bindPopup("Running Club.").openPopup();
