const mapbox = require('mapbox-gl');
console.log("************")
const buildMarker = function(markerType, array) {
    console.log('buildmarker invoked')
    const finalMarker = document.createElement('div');
    let current = markerType.toLowerCase();
    finalMarker.style.width = '32px';
    finalMarker.style.height = '39px';
    if(current === 'activity') {
        console.log("hit activity")
        finalMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    if(current === 'hotel') {
        finalMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    if(current === 'restaurant'){
        finalMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    return new mapbox.Marker(finalMarker)
    .setLngLat(array)
    //console.log("final marker", finalMarker)
    //return finalMarker;
}

module.exports = buildMarker;
