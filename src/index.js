console.log('WE WEBPACK');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFybmV5MTkiLCJhIjoiY2pyOW5yd3c2MGhrbzQzb2M4bWdhbTg1ZiJ9.vGizzZf82PoBMxJ3hG0iFA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl)
    .setLngLat([-74.009151, 40.705086])
    .addTo(map);
//51.163692,-1.8580739


const marker = buildMarker("hotel", [-74.0017791, 40.719969]);
console.log("marker",typeof marker)
console.dir(marker)
marker.addTo(map);

/*
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFybmV5MTkiLCJhIjoiY2pyOW5yd3c2MGhrbzQzb2M4bWdhbTg1ZiJ9.vGizzZf82PoBMxJ3hG0iFA';
var map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v11'
});
*/
