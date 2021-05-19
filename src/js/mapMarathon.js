/*============================= MAP MARATHON =============================*/
var map = L.map(document.getElementById("map-marathon"), {
  center: [-23.1853, -46.8934],
  zoom: 15,
});
var basemap = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {});
const marker = L.marker([-23.1853, -46.8934]);

basemap.addTo(map);
marker.addTo(map).bindPopup("Pace Runners 10km.").openPopup();
