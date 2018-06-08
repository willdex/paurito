 var map = AmCharts.makeChart("map", {
  "type": "map",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "listeners": [{
    "event": "rendered",
    "method": function(e) {
      // Let's log initial zoom settings (for home button)
      var map = e.chart;
      map.initialZoomLevel = map.zoomLevel();
      map.initialZoomLatitude = map.zoomLatitude();
  map.initialZoomLongitude = map.zoomLongitude();
    }
  }]
});

function zoomIn() {
  map.zoomIn();
}

function zoomOut() {
  map.zoomOut();
}

function centerMap() {
  map.zoomToLongLat(map.initialZoomLevel, map.initialZoomLongitude, map.initialZoomLatitude);
}