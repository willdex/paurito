<script>
    $(function(){
      var markers = [
          ],
          values1 = [],
          values2 = [],
          values3 = {};

      var map = new jvm.Map({
        container: $('.map'),
        map: 'puertoesperalda',
focusOn:{
  x: 0.5,
  y: 0.5,
  scale: 3
},
        labels: {
          regions: {
            render: function(code){
              var doNotShow = ['US-RI', 'US-DC'];

              if (doNotShow.indexOf(code) === -1) {
                return code.split('-')[1];
              }
            },
            offsets: function(code){
              return {
                'CA': [-10, 10],
                'ID': [0, 40],
                'OK': [25, 0],
                'LA': [-20, 0],
                'FL': [45, 0],
                'KY': [10, 5],
                'VA': [15, 5],
                'MI': [30, 30],
                'AK': [50, -25],
                'HI': [25, 50]
              }[code.split('-')[1]];
            }
          },
          markers: {
            render: function(index){
              return 'Marker '+index;
            }
          }
        },
        markers: markers,
        series: {
          markers: [{
            attribute: 'fill',
            scale: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            values: values1,
            legend: {
              cssClass: 'jvectormap-legend-bg',
              vertical: true
            }
          },{
            attribute: 'r',
            scale: [5, 20],
            normalizeFunction: 'polynomial',
            values: values2
          },{
            attribute: 'image',
            scale: {
              bank: 'assets/icon-bank.png',
              factory: 'assets/icon-factory.png'
            },
            values: values3,
            legend: {
              horizontal: true,
              cssClass: 'jvectormap-legend-bg',
//              cssClass: 'jvectormap-legend-icons',
              title: 'Business '
            }
          }],
          regions: [{
            scale: {
//              NARANJA: '#ee7d0e',
//              AMARILLO: '#f0d701',
//              ROJO: '#b53726',
              NARANJA: '#6cc02e',
              AMARILLO: '#6cc02e',
              ROJO: '#6cc02e',
              VERDE: '#6cc02e',
              VENDIDO: '#e74c3c',
              RESERVADO: '#2980b9',
              BLOQUEADO: '#ffde00'
            },
// pintar de colores los lotes aqui
            attribute: 'fill',
            values: {
 "M1-1":'BLOQUEADO', "M1-2":'BLOQUEADO', "M1-3":'BLOQUEADO', "M1-4":'BLOQUEADO', "M1-5":'BLOQUEADO', "M1-6":'BLOQUEADO', "M1-7":'BLOQUEADO', "M10-1":'VENDIDO', "M10-10":'VENDIDO', "M10-11":'VENDIDO', "M10-12":'VENDIDO', "M10-13":'VENDIDO', "M10-14":'VENDIDO', "M10-15":'VENDIDO', "M10-16":'VENDIDO', "M10-17":'VENDIDO', "M10-18":'VENDIDO', "M10-19":'VENDIDO', "M10-2":'VENDIDO', "M10-20":'VENDIDO', "M10-21":'VENDIDO', "M10-22":'VENDIDO', "M10-3":'VENDIDO', "M10-4":'VENDIDO', "M10-5":'VENDIDO', "M10-6":'VENDIDO', "M10-7":'VENDIDO', "M10-8":'VENDIDO', "M10-9":'VENDIDO', "M11-1":'VENDIDO', "M11-10":'VERDE', "M11-11":'VERDE', "M11-12":'VERDE', "M11-13":'VERDE', "M11-14":'VERDE', "M11-15":'VERDE', "M11-16":'VERDE', "M11-2":'VERDE', "M11-3":'VERDE', "M11-4":'VENDIDO', "M11-5":'VERDE', "M11-6":'VERDE', "M11-7":'VERDE', "M11-8":'VERDE', "M11-9":'VERDE', "M12-1":'VENDIDO', "M12-10":'VENDIDO', "M12-11":'VENDIDO', "M12-12":'VENDIDO', "M12-13":'VENDIDO', "M12-14":'VENDIDO', "M12-15":'VENDIDO', "M12-16":'VENDIDO', "M12-17":'VENDIDO', "M12-18":'VENDIDO', "M12-19":'VENDIDO', "M12-2":'VENDIDO', "M12-20":'VENDIDO', "M12-21":'VENDIDO', "M12-22":'VENDIDO', "M12-23":'VENDIDO', "M12-24":'VENDIDO', "M12-25":'VENDIDO', "M12-26":'VENDIDO', "M12-27":'VENDIDO', "M12-28":'VENDIDO', "M12-29":'VENDIDO', "M12-3":'VENDIDO', "M12-30":'VENDIDO', "M12-31":'VENDIDO', "M12-32":'VENDIDO', "M12-33":'VENDIDO', "M12-34":'VENDIDO', "M12-35":'VENDIDO', "M12-36":'VENDIDO', "M12-37":'VERDE', "M12-38":'VENDIDO', "M12-39":'VENDIDO', "M12-4":'VENDIDO', "M12-40":'VENDIDO', "M12-41":'VENDIDO', "M12-42":'VENDIDO', "M12-43":'VENDIDO', "M12-44":'VENDIDO', "M12-45":'VENDIDO', "M12-46":'VENDIDO', "M12-5":'VENDIDO', "M12-6":'VENDIDO', "M12-7":'VENDIDO', "M12-8":'VENDIDO', "M12-9":'VENDIDO', "M13-1":'BLOQUEADO', "M13-10":'BLOQUEADO', "M13-11":'BLOQUEADO', "M13-12":'BLOQUEADO', "M13-13":'BLOQUEADO', "M13-14":'BLOQUEADO', "M13-15":'BLOQUEADO', "M13-16":'BLOQUEADO', "M13-17":'BLOQUEADO', "M13-18":'BLOQUEADO', "M13-19":'BLOQUEADO', "M13-2":'BLOQUEADO', "M13-20":'BLOQUEADO', "M13-21":'BLOQUEADO', "M13-22":'BLOQUEADO', "M13-23":'BLOQUEADO', "M13-24":'BLOQUEADO', "M13-25":'BLOQUEADO', "M13-26":'BLOQUEADO', "M13-27":'BLOQUEADO', "M13-28":'BLOQUEADO', "M13-29":'BLOQUEADO', "M13-3":'BLOQUEADO', "M13-30":'BLOQUEADO', "M13-31":'BLOQUEADO', "M13-32":'BLOQUEADO', "M13-33":'BLOQUEADO', "M13-4":'BLOQUEADO', "M13-5":'BLOQUEADO', "M13-6":'BLOQUEADO', "M13-7":'BLOQUEADO', "M13-8":'BLOQUEADO', "M13-9":'BLOQUEADO', "M14-1":'VENDIDO', "M14-10":'VENDIDO', "M14-11":'VENDIDO', "M14-12":'VENDIDO', "M14-13":'VENDIDO', "M14-14":'VENDIDO', "M14-15":'VENDIDO', "M14-16":'VENDIDO', "M14-17":'VENDIDO', "M14-18":'VENDIDO', "M14-19":'VENDIDO', "M14-2":'VENDIDO', "M14-20":'VENDIDO', "M14-21":'VENDIDO', "M14-22":'VENDIDO', "M14-23":'VENDIDO', "M14-24":'VENDIDO', "M14-25":'VENDIDO', "M14-26":'VENDIDO', "M14-27":'VENDIDO', "M14-28":'VENDIDO', "M14-29":'RESERVADO', "M14-3":'VENDIDO', "M14-30":'VENDIDO', "M14-31":'VENDIDO', "M14-32":'VENDIDO', "M14-33":'VENDIDO', "M14-34":'VENDIDO', "M14-35":'VENDIDO', "M14-36":'VENDIDO', "M14-37":'VENDIDO', "M14-38":'VENDIDO', "M14-39":'VENDIDO', "M14-4":'VENDIDO', "M14-40":'VENDIDO', "M14-41":'VENDIDO', "M14-42":'VENDIDO', "M14-43":'VENDIDO', "M14-44":'VENDIDO', "M14-45":'RESERVADO', "M14-46":'VENDIDO', "M14-5":'VENDIDO', "M14-6":'VENDIDO', "M14-7":'VENDIDO', "M14-8":'VENDIDO', "M14-9":'VENDIDO', "M15-1":'BLOQUEADO', "M15-10":'BLOQUEADO', "M15-11":'BLOQUEADO', "M15-12":'BLOQUEADO', "M15-13":'BLOQUEADO', "M15-14":'BLOQUEADO', "M15-15":'BLOQUEADO', "M15-16":'BLOQUEADO', "M15-17":'BLOQUEADO', "M15-18":'BLOQUEADO', "M15-19":'BLOQUEADO', "M15-2":'BLOQUEADO', "M15-20":'BLOQUEADO', "M15-21":'BLOQUEADO', "M15-22":'BLOQUEADO', "M15-23":'BLOQUEADO', "M15-24":'BLOQUEADO', "M15-25":'BLOQUEADO', "M15-26":'BLOQUEADO', "M15-27":'BLOQUEADO', "M15-28":'BLOQUEADO', "M15-29":'BLOQUEADO', "M15-3":'BLOQUEADO', "M15-30":'BLOQUEADO', "M15-31":'BLOQUEADO', "M15-32":'BLOQUEADO', "M15-33":'BLOQUEADO', "M15-4":'BLOQUEADO', "M15-5":'BLOQUEADO', "M15-6":'BLOQUEADO', "M15-7":'BLOQUEADO', "M15-8":'BLOQUEADO', "M15-9":'BLOQUEADO', "M16-1":'VENDIDO', "M16-10":'VENDIDO', "M16-11":'VENDIDO', "M16-12":'VENDIDO', "M16-13":'VENDIDO', "M16-14":'VENDIDO', "M16-15":'VENDIDO', "M16-16":'NARANJA', "M16-17":'VENDIDO', "M16-18":'VENDIDO', "M16-19":'VENDIDO', "M16-2":'VENDIDO', "M16-20":'VENDIDO', "M16-21":'VENDIDO', "M16-22":'VENDIDO', "M16-23":'VENDIDO', "M16-24":'VENDIDO', "M16-25":'VENDIDO', "M16-26":'VENDIDO', "M16-27":'VENDIDO', "M16-28":'VENDIDO', "M16-29":'VENDIDO', "M16-3":'VENDIDO', "M16-4":'VENDIDO', "M16-5":'VENDIDO', "M16-6":'VENDIDO', "M16-7":'VENDIDO', "M16-8":'VENDIDO', "M16-9":'VENDIDO', "M18-1":'VENDIDO', "M18-10":'VENDIDO', "M18-11":'VENDIDO', "M18-12":'NARANJA', "M18-13":'NARANJA', "M18-14":'NARANJA', "M18-15":'NARANJA', "M18-16":'NARANJA', "M18-17":'NARANJA', "M18-18":'NARANJA', "M18-19":'NARANJA', "M18-2":'VENDIDO', "M18-20":'VENDIDO', "M18-3":'VENDIDO', "M18-4":'VENDIDO', "M18-5":'VENDIDO', "M18-6":'VENDIDO', "M18-7":'VENDIDO', "M18-8":'VENDIDO', "M18-9":'VENDIDO', "M19-1":'VENDIDO', "M19-10":'NARANJA', "M19-11":'VENDIDO', "M19-12":'VENDIDO', "M19-13":'VENDIDO', "M19-14":'VENDIDO', "M19-15":'VENDIDO', "M19-16":'VENDIDO', "M19-17":'VENDIDO', "M19-18":'NARANJA', "M19-19":'VENDIDO', "M19-2":'VENDIDO', "M19-20":'VERDE', "M19-21":'VENDIDO', "M19-22":'VERDE', "M19-23":'VERDE', "M19-24":'VENDIDO', "M19-25":'VERDE', "M19-26":'VENDIDO', "M19-27":'RESERVADO', "M19-28":'VENDIDO', "M19-29":'VENDIDO', "M19-3":'VENDIDO', "M19-30":'VENDIDO', "M19-4":'VENDIDO', "M19-5":'VENDIDO', "M19-6":'RESERVADO', "M19-7":'NARANJA', "M19-8":'NARANJA', "M19-9":'NARANJA', "M2-1":'BLOQUEADO', "M2-2":'BLOQUEADO', "M2-3":'BLOQUEADO', "M2-4":'BLOQUEADO', "M2-5":'BLOQUEADO', "M20-1":'VENDIDO', "M20-10":'VERDE', "M20-11":'VERDE', "M20-12":'VERDE', "M20-13":'VERDE', "M20-14":'VERDE', "M20-15":'VERDE', "M20-16":'VERDE', "M20-17":'VENDIDO', "M20-18":'VENDIDO', "M20-19":'VENDIDO', "M20-2":'BLOQUEADO', "M20-20":'NARANJA', "M20-21":'NARANJA', "M20-22":'NARANJA', "M20-23":'NARANJA', "M20-24":'NARANJA', "M20-25":'NARANJA', "M20-26":'NARANJA', "M20-27":'NARANJA', "M20-28":'NARANJA', "M20-29":'NARANJA', "M20-3":'BLOQUEADO', "M20-30":'VENDIDO', "M20-31":'VENDIDO', "M20-32":'VENDIDO', "M20-4":'VENDIDO', "M20-5":'VENDIDO', "M20-6":'VERDE', "M20-7":'VERDE', "M20-8":'VERDE', "M20-9":'VERDE', "M22-1":'VENDIDO', "M22-17":'VENDIDO', "M22-18":'NARANJA', "M22-19":'NARANJA', "M22-2":'VENDIDO', "M22-20":'NARANJA', "M22-3":'VENDIDO', "M22-4":'VENDIDO', "M3-1":'VENDIDO', "M3-10":'VENDIDO', "M3-11":'VENDIDO', "M3-12":'VENDIDO', "M3-13":'VENDIDO', "M3-14":'VENDIDO', "M3-15":'VENDIDO', "M3-16":'VENDIDO', "M3-17":'VENDIDO', "M3-18":'VENDIDO', "M3-19":'VENDIDO', "M3-2":'VENDIDO', "M3-20":'VENDIDO', "M3-21":'VENDIDO', "M3-22":'VENDIDO', "M3-23":'VENDIDO', "M3-24":'VENDIDO', "M3-25":'VENDIDO', "M3-26":'VENDIDO', "M3-27":'VENDIDO', "M3-3":'VENDIDO', "M3-4":'VENDIDO', "M3-5":'VENDIDO', "M3-6":'VENDIDO', "M3-7":'VENDIDO', "M3-8":'VENDIDO', "M3-9":'VENDIDO', "M4-1":'VENDIDO', "M4-10":'VENDIDO', "M4-11":'VENDIDO', "M4-12":'VENDIDO', "M4-13":'VENDIDO', "M4-14":'VENDIDO', "M4-15":'VENDIDO', "M4-16":'VENDIDO', "M4-17":'VENDIDO', "M4-18":'VENDIDO', "M4-19":'VENDIDO', "M4-2":'VENDIDO', "M4-20":'VENDIDO', "M4-21":'VENDIDO', "M4-22":'VENDIDO', "M4-23":'VENDIDO', "M4-24":'VENDIDO', "M4-25":'VENDIDO', "M4-26":'VENDIDO', "M4-27":'VENDIDO', "M4-28":'VENDIDO', "M4-29":'VENDIDO', "M4-3":'VENDIDO', "M4-4":'VENDIDO', "M4-5":'VENDIDO', "M4-6":'VENDIDO', "M4-7":'VENDIDO', "M4-8":'VENDIDO', "M4-9":'VENDIDO', "M5-1":'VENDIDO', "M5-10":'VENDIDO', "M5-11":'VENDIDO', "M5-12":'VENDIDO', "M5-13":'VENDIDO', "M5-14":'VENDIDO', "M5-15":'VENDIDO', "M5-16":'VENDIDO', "M5-17":'VENDIDO', "M5-18":'VENDIDO', "M5-19":'VENDIDO', "M5-2":'VENDIDO', "M5-20":'VENDIDO', "M5-21":'VENDIDO', "M5-22":'VENDIDO', "M5-23":'VENDIDO', "M5-24":'VENDIDO', "M5-25":'VENDIDO', "M5-26":'VENDIDO', "M5-27":'VENDIDO', "M5-28":'VENDIDO', "M5-29":'VENDIDO', "M5-3":'VENDIDO', "M5-30":'VENDIDO', "M5-31":'VENDIDO', "M5-4":'VENDIDO', "M5-5":'VENDIDO', "M5-6":'VENDIDO', "M5-7":'VENDIDO', "M5-8":'VENDIDO', "M5-9":'VENDIDO', "M6-1":'VENDIDO', "M6-10":'VENDIDO', "M6-11":'VENDIDO', "M6-12":'VENDIDO', "M6-13":'VENDIDO', "M6-14":'VENDIDO', "M6-15":'VENDIDO', "M6-16":'VENDIDO', "M6-17":'VENDIDO', "M6-18":'VENDIDO', "M6-19":'VENDIDO', "M6-2":'VENDIDO', "M6-20":'VENDIDO', "M6-21":'VENDIDO', "M6-22":'VENDIDO', "M6-23":'VENDIDO', "M6-24":'VENDIDO', "M6-25":'VENDIDO', "M6-26":'VENDIDO', "M6-27":'VENDIDO', "M6-28":'VENDIDO', "M6-29":'VENDIDO', "M6-3":'VENDIDO', "M6-30":'VENDIDO', "M6-31":'VENDIDO', "M6-32":'VENDIDO', "M6-4":'VENDIDO', "M6-5":'VENDIDO', "M6-6":'VENDIDO', "M6-7":'VENDIDO', "M6-8":'VENDIDO', "M6-9":'VENDIDO', "M7-1":'VENDIDO', "M7-10":'VENDIDO', "M7-11":'VENDIDO', "M7-12":'VENDIDO', "M7-13":'VENDIDO', "M7-14":'VERDE', "M7-15":'VENDIDO', "M7-16":'VENDIDO', "M7-17":'VENDIDO', "M7-18":'VENDIDO', "M7-19":'VENDIDO', "M7-2":'VENDIDO', "M7-20":'VENDIDO', "M7-21":'VENDIDO', "M7-22":'VENDIDO', "M7-23":'VENDIDO', "M7-24":'VENDIDO', "M7-25":'VENDIDO', "M7-26":'VENDIDO', "M7-27":'VENDIDO', "M7-28":'VENDIDO', "M7-29":'VENDIDO', "M7-3":'VENDIDO', "M7-30":'VENDIDO', "M7-31":'VENDIDO', "M7-32":'VENDIDO', "M7-33":'VENDIDO', "M7-34":'VENDIDO', "M7-35":'VENDIDO', "M7-4":'VENDIDO', "M7-5":'VENDIDO', "M7-6":'VENDIDO', "M7-7":'VENDIDO', "M7-8":'VENDIDO', "M7-9":'VENDIDO', "M8-1":'VENDIDO', "M8-10":'VENDIDO', "M8-11":'VENDIDO', "M8-12":'VENDIDO', "M8-13":'VERDE', "M8-14":'VENDIDO', "M8-15":'VENDIDO', "M8-16":'VENDIDO', "M8-17":'VENDIDO', "M8-18":'VENDIDO', "M8-19":'VENDIDO', "M8-2":'VENDIDO', "M8-20":'VENDIDO', "M8-21":'VENDIDO', "M8-22":'VENDIDO', "M8-23":'VENDIDO', "M8-24":'VENDIDO', "M8-25":'VENDIDO', "M8-26":'VENDIDO', "M8-27":'VENDIDO', "M8-28":'VENDIDO', "M8-29":'VENDIDO', "M8-3":'VENDIDO', "M8-30":'VENDIDO', "M8-31":'VENDIDO', "M8-32":'VENDIDO', "M8-33":'VENDIDO', "M8-34":'VENDIDO', "M8-35":'VENDIDO', "M8-36":'VENDIDO', "M8-37":'VENDIDO', "M8-4":'VENDIDO', "M8-5":'VENDIDO', "M8-6":'VENDIDO', "M8-7":'VENDIDO', "M8-8":'VENDIDO', "M8-9":'VENDIDO', "M9-1":'VENDIDO', "M9-10":'VERDE', "M9-11":'VERDE', "M9-12":'VERDE', "M9-13":'VERDE', "M9-14":'VERDE', "M9-15":'VERDE', "M9-16":'VERDE', "M9-17":'VERDE', "M9-18":'VERDE', "M9-19":'VERDE', "M9-2":'VENDIDO', "M9-20":'VERDE', "M9-21":'VENDIDO', "M9-22":'VENDIDO', "M9-23":'VERDE', "M9-24":'VERDE', "M9-25":'VENDIDO', "M9-26":'VERDE', "M9-27":'VERDE', "M9-28":'VENDIDO', "M9-29":'VENDIDO', "M9-3":'VENDIDO', "M9-30":'VENDIDO', "M9-31":'VERDE', "M9-32":'VENDIDO', "M9-33":'VENDIDO', "M9-34":'VENDIDO', "M9-35":'VENDIDO', "M9-36":'VENDIDO', "M9-37":'VENDIDO', "M9-38":'VENDIDO', "M9-39":'VENDIDO', "M9-4":'RESERVADO', "M9-5":'VENDIDO', "M9-6":'VENDIDO', "M9-7":'VERDE', "M9-8":'VERDE', "M9-9":'VERDE',              "US-MO": 'red',
              "US-IA": 'green',
              "US-NE": 'green'
            },
            legend: {
              horizontal: true,
              cssClass: 'jvectormap-legend-bg',
              title: 'Color'
            }
          },{
            values: {
              "M0": '#f0f0f0',
              "TT": '#000000',
              "TT1": '#000000',
              "TT2": '#000000',
              "TT3": '#000000',
              "TT4": '#000000',
              "TT5": '#ffffff',
              "TTBG": '#f0f0f0',
              "TT6": '#000000',
              "TT7": '#000000',
              "TT8": '#000000',
              "TTA1": '#666666',
              "US-FL": 'blue'
            },
            attribute: 'fill'
          },{
            scale: {
              naranjab: 'assets/bg-naranja-b.png',
              naranjar: 'assets/bg-naranja-r.png',
              naranjav: 'assets/bg-naranja-v.png',
              verdeb: 'assets/bg-verde-b.png',
              verder: 'assets/bg-verde-r.png',
              verdev: 'assets/bg-verde-v.png',
              amarillob: 'assets/bg-amarillo-b.png',
              amarillov: 'assets/bg-amarillo-v.png',
              amarillor: 'assets/bg-amarillo-r.png',
              celesteb: 'assets/bg-celeste-b.png',
              celester: 'assets/bg-celeste-r.png',
              celestev: 'assets/bg-celeste-v.png',
              rosadob: 'assets/bg-rosado-b.png',
              rosadov: 'assets/bg-rosado-v.png',
              rosador: 'assets/bg-rosado-r.png',
              pasto: 'assets/bg-pattern-cesped.jpg',
              arena: 'assets/bg-pattern-arena.jpg',
              mar: 'assets/bg-pattern-mar.jpg',
              yellowBlue: 'assets/bg-yellow-blue.png'
            },
            values: {
              "BGx": 'pasto',
              "M10A": 'pasto',
              "M21A": 'pasto',
              "M2Ax": 'pasto',
"M3Ax": 'pasto',
"M4Ax": 'pasto',
"PASTO31x": 'pasto',
"PASTO30x": 'pasto',
"PASTO60x": 'pasto',
"PASTO59x": 'pasto',
"PASTO57x": 'pasto',
              "M11E": 'arena',
              "M17E": 'arena',
              "ARENA": 'arena',
              "ISLA": 'arena',
              "MAR": 'mar',
              "US-CA": 'yellowBlue',
            },
            attribute: 'fill',
            legend: {
              horizontal: true,
              cssClass: 'jvectormap-legend-bg',
              title: 'Pattern',
              labelRender: function(v){
                return {
                  redGreen: 'Low',
                  yellowBlue: 'High'
                }[v];
              }
            }
          }]
        },
        regionsSelectable: false,
        markersSelectable: false,
        markersSelectableOne: false,
        selectedRegions: JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ),
        selectedMarkers: JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ),

        onMarkerTipShow: function(event, tip, index){
          tip.html(tip.html()+' (modified markerx)');
        },
        onMarkerOver: function(event, index){
          console.log('marker-over', index);
        },
        onMarkerOut: function(event, index){
          console.log('marker-out', index);
        },
        onMarkerClick: function(event, index){
          console.log('marker-click', index);
        },
        onMarkerSelected: function(event, index, isSelected, selectedMarkers){
          console.log('marker-select', index, isSelected, selectedMarkers);
          if (window.localStorage) {
            window.localStorage.setItem(
              'jvectormap-selected-markers',
              JSON.stringify(selectedMarkers)
            );
          }
        },

        onRegionTipShow: function(event, tip, code){
//			if(tip.html()=="") return false;
//          tip.html(tip.html()+' (modified)');

			if(tip.html() != ""){
				var n=tip.html().split("-");
				if(n[7]=="LIBRE")
				var tipx = "<table cellpadding=\"5\" cellspacing=\"0\" border=\"0\" style=\"font-size:14px;\"><tr><th>Manzano:</th><td>"+n[0]+"</td></tr><tr><th>Lote:</th><td>"+n[1]+"</td></tr><tr><th>Categoria:</th><td>"+n[2]+" </td></tr><tr><th>Superficie:</th><td>"+n[3]+" m2</td></tr><tr><th>Estado:</th><td>"+n[7]+"</td></tr></table>";
				else
				var tipx = "<table cellpadding=\"5\" cellspacing=\"0\" border=\"0\" style=\"font-size:14px;\"><tr><th>Manzano:</th><td>"+n[0]+"</td></tr><tr><th>Lote:</th><td>"+n[1]+"</td></tr><tr><th>Categoria:</th><td>"+n[2]+" </td></tr><tr><th>Superficie:</th><td>"+n[3]+" m2</td></tr><tr><th>Estado:</th><td>"+n[7]+"</td></tr></table>";

			tip.html(tipx);
			}
			else event.preventDefault();



        },
        onRegionOver: function(event, code){
          console.log('region-over', code, map.getRegionName(code));
        },
        onRegionOut: function(event, code){
          console.log('region-out', code);
        },
        onRegionClick: function(event, code){
          console.log('region-click', code);
        },
        onRegionSelected: function(event, code, isSelected, selectedRegions){
          console.log('region-select', code, isSelected, selectedRegions);
          if (window.localStorage) {
            window.localStorage.setItem(
              'jvectormap-selected-regions',
              JSON.stringify(selectedRegions)
            );
          }
        },
        onViewportChange: function(e, scale, transX, transY){
            console.log('viewportChange', scale, transX, transY);
        }
      });

      $('.list-markers :checkbox').change(function(){
        var index = $(this).closest('li').attr('data-marker-index');

        if ($(this).prop('checked')) {
          map.addMarker( index, markers[index], [values1[index], values2[index], values3[index]] );
        } else {
          map.removeMarkers( [index] );
        }
      });
      $('.button-add-all').click(function(){
        $('.list-markers :checkbox').prop('checked', true);
        map.addMarkers(markers, [values1, values2, values3]);
      });
      $('.button-remove-all').click(function(){
        $('.list-markers :checkbox').prop('checked', false);
        map.removeAllMarkers();
      });
      $('.button-clear-selected-regions').click(function(){
        map.clearSelectedRegions();
      });
      $('.button-clear-selected-markers').click(function(){
        map.clearSelectedMarkers();
      });
      $('.button-change-values').click(function(){
        map.series.regions[1].clear();
        map.series.regions[1].setValues({
          "US-TX": "black",
          "US-CA": "black"
        });
      });
    });
  </script>