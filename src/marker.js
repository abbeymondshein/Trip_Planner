const mapbox = require('mapbox-gl');

const buildMarker = function(markerType, array) {
    const finalMarker = document.createElement('div');
    let current = markerType.toLowerCase();
    finalMarker.style.width = '32px';
    finalMarker.style.height = '39px';
    if(markerType === 'activity') {
        finalMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    if(markerType === 'hotel') {
        finalMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    if(markerType === 'restaurant'){
        finalMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    new mapbox.Marker(finalMarker)
    .setLngLat(array)
}

module.exports = buildMarker;