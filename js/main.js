
var $ = window.jQuery;
var Reveal = window.Reveal;
define("lja", ["esri/map", "esri/layers/FeatureLayer", "esri/graphic", "esri/symbols/SimpleMarkerSymbol", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol"], function (Map, FeatureLayer, Graphic, SimpleMarkerSymbol, Point, PictureMarkerSymbol) {
  //var incidentsUrl = "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/SanFrancisco/311Incidents/MapServer/0";
  var simpleMarkerSymbol = new SimpleMarkerSymbol()
    .setSize(20)
    .setColor("green");
  var simpleMarkerSymbol2 = new SimpleMarkerSymbol()
    .setSize(40)
    .setColor("green");

  var simpleMarkerSymbol3 = new SimpleMarkerSymbol()
    .setSize(60)
    .setColor("green");

  var esriSymbol = new PictureMarkerSymbol("img/esri.png", 20, 20);

  var esriSymbol2 = new PictureMarkerSymbol("img/esri.png", 40, 40);

  var esriSymbol3 = new PictureMarkerSymbol("img/esri.png", 60, 60);

  var svgPath = "M 9.6875 0 C 8.3661111 0.030771513 7.1529045 0.36042383 5.90625 0.875 C 4.1762916 1.6024141 1.9675195 3.2794316 0.625 6.4375 C 0.31153262 7.3171777 -0.91809375 11.523494 1.3125 15.125 C 3.1230644 18.048176 5.4296094 19.446463 8.28125 19.84375 C 11.12779 20.239424 12.668344 19.89072 14.46875 19.09375 C 18.679037 17.230016 21.90307 10.228254 18.6875 5.15625 C 17.418662 2.8149199 14.109159 0.77936133 10.46875 0.9375 C 9.607627 0.91210742 9.1024711 0.99508008 8.59375 1.09375 C 8.4407896 1.0545469 8.1411289 1.1064219 8.125 1.4375 C 8.125 1.6154043 8.1683438 1.7626973 8.28125 1.84375 C 8.2979349 1.8556668 8.419282 1.9630938 8.46875 2 C 7.9198262 1.9684541 7.1843467 2.3501738 6.625 2.375 C 6.3912191 2.385346 6.1652612 2.4120521 5.9375 2.4375 C 5.9105943 2.0851383 5.8977485 1.7082546 5.90625 1.4375 C 7.0516082 0.79109766 9.2452738 0.30469727 10.75 0.28125 L 11.03125 0.28125 C 11.252294 0.27980273 11.270234 0.12224414 11.0625 0.09375 C 10.595315 0.030199707 10.127963 -0.010257171 9.6875 0 z M 10.1875 1.28125 C 12.14608 1.3828916 13.906815 1.9952777 15.25 2.8125 C 15.126276 2.8307335 14.967673 2.8188107 14.78125 2.78125 C 13.813689 2.5869094 13.31362 2.8930569 12.9375 3.3125 C 12.200338 3.245572 11.406959 3.204432 10.90625 3.25 C 10.330274 2.6036406 9.6651367 1.8323594 8.875 1.3125 C 9.3170159 1.2850308 9.7594846 1.2590379 10.1875 1.28125 z M 5.46875 1.625 C 5.4631352 1.7663432 5.5029671 2.158336 5.53125 2.5 C 5.2955813 2.5329093 5.0459787 2.5553384 4.8125 2.59375 C 3.7180638 3.6187165 2.9076019 4.9677277 2.4375 6.5 C 2.3778381 6.5492478 2.3031623 6.6088049 2.25 6.65625 C 2.1600448 5.8690018 2.1212092 5.2050728 2.15625 4.8125 C 3.0837792 3.5211292 4.3222964 2.2525036 5.46875 1.625 z M 9.09375 2.46875 C 9.3993175 2.7250465 9.7319485 3.0262483 10.03125 3.34375 C 9.2779848 3.4261296 8.3862707 3.6298287 7.5625 3.875 C 8.4390344 3.3692681 9.2163059 3.2862824 9.15625 2.6875 C 9.1387511 2.5989824 9.1208375 2.5375998 9.09375 2.46875 z M 15.625 3.03125 C 16.175434 3.4056204 16.649081 3.8215225 17 4.25 C 16.841103 4.1674808 16.582942 4.0609403 16.34375 3.96875 C 16.116103 3.6420254 15.891119 3.3195864 15.625 3.03125 z M 11.34375 3.84375 C 11.701562 3.822026 12.1209 3.8296193 12.53125 3.84375 C 12.439073 3.9955769 12.339873 4.1396817 12.25 4.28125 C 12.169256 4.4085272 12.056609 4.5284592 11.90625 4.625 C 11.739284 4.3703921 11.534511 4.1071763 11.34375 3.84375 z M 10.53125 3.9375 C 10.796288 4.2534793 11.043647 4.5834141 11.28125 4.9375 C 10.837461 5.1418756 10.375287 5.3418712 10.15625 5.6875 C 9.9023121 6.0878199 10.05734 6.8087022 10 7.375 C 8.9777753 7.6125279 8.0708403 7.9204502 7.21875 8.28125 C 6.8248012 7.1258652 6.4941949 5.9578789 6.3125 5 C 6.3163523 4.9944758 6.3398858 5.0054825 6.34375 5 C 7.5716113 4.4959469 8.9783014 4.0616136 10.53125 3.9375 z M 16.75 4.65625 C 17.017229 4.7668755 17.292734 4.9018677 17.53125 5.03125 C 17.821332 5.3952051 18.650584 6.2104453 19.09375 8.5 C 19.492633 10.561488 19.042086 12.1086 18.90625 12.5625 L 18.78125 13.09375 C 18.684805 13.456465 18.355969 14.309787 18.1875 14.65625 C 18.251521 14.18833 18.297676 12.993904 18.28125 12.75 C 18.394238 12.784406 18.647197 12.637172 18.6875 12.5 C 18.727678 12.362457 18.281293 12.15625 18.28125 12.15625 C 18.294655 11.224584 18.172205 9.9230458 17.96875 9 C 17.980857 8.9812114 17.987852 8.9559283 18 8.9375 C 17.994946 8.8111868 17.978555 8.687378 17.96875 8.5625 C 18.192974 8.6375558 18.423147 8.7174372 18.5625 8.71875 C 18.762314 8.7217266 18.782645 8.6072168 18.71875 8.53125 C 18.657055 8.4558282 18.277423 8.2154985 17.9375 8.03125 C 17.772244 6.791937 17.330692 5.6720776 16.75 4.65625 z M 5.9375 5.59375 C 6.1173872 6.6216841 6.3203857 7.3927038 6.625 8.5 C 5.7001104 8.9069891 4.1817578 9.8375609 3.34375 10.4375 C 3.2651261 10.31428 3.2091789 10.205335 3.1875 10.125 C 2.8245047 8.7732781 3.2477891 7.506475 4.15625 7.40625 C 4.828683 7.3318325 5.4277542 6.4073691 5.9375 5.59375 z M 1.53125 5.84375 C 1.53125 5.84375 1.5888434 6.57975 1.625 7.125 C 1.625 7.125 1.0626242 7.7528438 0.78125 8.25 C 0.89303672 7.2314141 1.1292156 6.7155293 1.53125 5.84375 z M 1.6875 7.90625 C 1.7683547 8.6175352 2.0751881 9.9881426 2.4375 11.03125 C 2.3005445 11.145553 1.7128344 11.540141 1.59375 11.625 C 1.3032123 11.831064 1.3244695 12.158857 1.53125 12.34375 C 1.6451516 12.445199 1.883334 12.410783 1.96875 12.34375 C 2.2215557 12.14248 2.4287928 11.96176 2.71875 11.78125 C 3.2206709 13.081826 3.5745664 13.889414 4.3125 14.96875 C 3.9674371 15.235398 3.7239605 15.50892 3.5625 15.71875 C 3.4687906 15.840494 3.3514209 16.026191 3.4375 16.0625 C 3.5236205 16.097691 3.8385533 16.055773 3.96875 16.03125 C 4.2986785 15.968102 4.5534473 15.602611 4.78125 15.46875 C 5.4017578 16.322416 6.8952898 17.737115 7.5 18.1875 C 7.3627957 18.309244 7.0354654 18.681795 6.96875 18.78125 C 4.1066189 17.886105 1.9750937 15.491994 1.21875 12.96875 C 0.77861035 11.502137 0.61200801 9.8817969 0.75 8.40625 C 0.78963945 8.4127344 0.8940459 8.445041 1.03125 8.40625 C 1.1269074 8.3409941 1.4458482 8.1163691 1.6875 7.90625 z M 9.8125 8.09375 C 9.7818715 8.4376572 9.8491789 8.9034422 9.96875 9.09375 C 10.469961 9.8984359 11.310336 9.4608719 11.9375 9.75 C 12.490626 10.004926 12.691694 10.582152 13 11.15625 C 11.565509 11.210633 10.155606 11.520621 8.84375 12.09375 C 8.8291102 12.059982 8.8283773 12.034847 8.8125 12 C 8.7068231 11.96707 8.6568484 11.9669 8.5625 11.9375 C 7.9516794 10.588611 7.4375 8.968789 7.4375 8.96875 C 8.1832484 8.616315 8.9795246 8.3143132 9.8125 8.09375 z M 6.8125 9.21875 C 7.0767008 10.006215 7.4125577 10.926598 7.71875 11.6875 C 7.1841507 11.528817 6.703002 11.398988 5.90625 11.21875 C 5.2453391 11.069742 5.2124891 11.105295 4.46875 11.34375 C 4.3505031 11.381195 4.2344906 11.401344 4.125 11.4375 C 4.0259329 11.310528 3.9213117 11.170928 3.8125 11.03125 C 4.7004098 10.381534 5.6242099 9.8004549 6.8125 9.21875 z M 17.625 9.625 C 17.788393 10.422721 17.86739 11.260036 17.90625 11.96875 C 17.552161 11.813635 17.115069 11.706552 16.6875 11.59375 C 16.922426 11.032825 17.257335 10.310257 17.625 9.625 z M 3.53125 11.25 C 3.6200629 11.356466 3.7204245 11.470636 3.8125 11.5625 C 3.7146734 11.610881 3.6393785 11.678179 3.5625 11.75 C 3.5098172 11.607482 3.4590865 11.494276 3.40625 11.34375 C 3.4474661 11.31209 3.4899838 11.281255 3.53125 11.25 z M 13.46875 11.875 C 13.884369 12.510388 12.946518 13.463559 13.5 15.40625 C 13.264055 15.43228 13.019055 15.468055 12.8125 15.5 C 12.268327 15.585148 11.558726 15.75775 10.90625 16 C 10.548202 15.432314 9.6509073 14.100297 9.125 13.03125 C 9.1168577 12.966823 9.1078531 12.911203 9.09375 12.84375 C 10.180497 12.321776 11.718575 11.932178 13.46875 11.875 z M 16.46875 12.15625 C 16.995896 12.275562 17.500359 12.429446 17.90625 12.59375 C 17.937223 13.02842 17.928711 14.52333 17.84375 15.25 C 17.759414 15.429104 17.55158 15.730055 17.40625 15.875 C 17.005316 15.713093 16.312584 15.568085 15.75 15.46875 C 15.941591 15.249707 16.142037 15.021109 16.3125 14.78125 C 16.47438 13.592486 16.159407 13.121383 16.46875 12.15625 z M 4.71875 14.1875 C 4.898402 14.229998 5.0471418 14.268089 5.15625 14.28125 C 5.0773892 14.34448 4.9724993 14.411307 4.90625 14.46875 C 4.8427332 14.378635 4.7792192 14.281978 4.71875 14.1875 z M 8.96875 14.21875 C 9.3822587 14.919209 9.860706 15.678909 10.25 16.28125 C 9.7015852 16.547004 9.0754196 16.959867 8.46875 17.40625 C 8.5421241 16.498923 8.549912 15.485126 8.71875 15 C 8.8245035 14.696101 8.8957859 14.459536 8.96875 14.21875 z M 5.78125 14.6875 C 5.7916797 14.702499 5.8016092 14.702525 5.8125 14.71875 C 6.0376998 15.05422 6.1230601 15.582526 6.21875 16.0625 C 5.8984744 15.711654 5.5962588 15.354362 5.34375 15.03125 C 5.4954611 14.90441 5.6359013 14.800834 5.78125 14.6875 z M 15.28125 15.96875 C 15.800646 15.953098 16.725672 16.079482 17.15625 16.1875 C 16.632145 16.848666 15.926195 17.396951 15.15625 17.875 C 15.195006 17.198293 15.185998 16.170426 15.1875 16.0625 C 15.21981 16.03213 15.249388 15.999673 15.28125 15.96875 z M 13.71875 16 C 13.749208 16.074558 13.746308 16.141585 13.78125 16.21875 C 13.907711 16.49903 14.060956 16.703545 14.21875 16.84375 C 14.357293 16.748604 14.49235 16.635274 14.625 16.53125 C 14.636492 17.032149 14.6285 17.59273 14.59375 18.15625 C 14.390826 18.289408 13.413672 18.720723 13.03125 18.84375 C 12.446194 18.203799 11.792196 17.36417 11.3125 16.59375 C 11.918324 16.340371 12.857641 16.103683 13.71875 16 z M 10.65625 16.84375 C 10.940527 17.288799 11.87442 18.635605 12.25 19.0625 C 11.56883 19.181393 10.598145 19.251131 9.84375 19.21875 C 9.84375 19.21875 8.723767 18.475984 8.4375 18.1875 C 9.0055559 17.716521 9.9302578 17.147162 10.65625 16.84375 z M 8 18.5625 C 8.3303432 18.781098 8.6860904 19.026551 8.96875 19.1875 C 8.5337934 19.139074 8.0353963 19.129479 7.65625 19 C 7.7659221 18.85733 7.8627543 18.683791 8 18.5625 z ";
  var svgSymbol = new SimpleMarkerSymbol()
    .setOutline(null)
    .setSize(20)
    .setColor("green")
    .setPath(svgPath);

  var svgSymbol2 = new SimpleMarkerSymbol()
    .setOutline(null)
    .setSize(40)
    .setColor("green")
    .setPath(svgPath);

  var svgSymbol3 = new SimpleMarkerSymbol()
    .setOutline(null)
    .setSize(60)
    .setColor("green")
    .setPath(svgPath);

  // long, lat
  var esriOffices = [
    {
      geometry: [-98.490, 29.608],
      attributes: {
        name: "San Antonio",
        main: true
      }
    },
    {
      geometry: [-95.57408, 29.73736],
      attributes: {
        name: "Houston",
      }
    },
    {
      geometry: [-117.19567, 34.05654],
      attributes: {
        name: "Redlands, CA",
        campus: true
      }
    },
    {
      geometry: [-121.48547, 38.57660],
      attributes: {
        name: "Sacaramento, CA",
      }
    },
  ];

  var createDefaultMap = function (id) {
    var map = new Map(id, {
      basemap: "gray",
      showAttribution: false,
      center: [-98.490, 29.608],
      zoom: 4
    });
    // note: force width to fill
    $("#" + id).css({"width": "100%"});
    return map;
  };

/*  var pictureSlide = function () {
    var map = createDefaultMap("map-picturemarkersymbol");
    var layer = new FeatureLayer(incidentsUrl, {
      mode: FeatureLayer.MODE_ONDEMAND
    });
    layer.setDefinitionExpression("req_type = 'Tree Maintenance or Damage'");

    map.addLayer(layer);
    
  };*/

  var initializeSliders = function () {
    $("#scalable-slider").slider({
      value: 24,
      min: 10,
      max: 400,
      slide: function (evt, ui) {
        $("#esri-symbol").attr({
          width: ui.value,
          height: ui.value
        });

        $("#esri-png").attr({
          width: ui.value,
          height: ui.value
        });
      }
    });

    var updateEsriSymbol = function () {
      $("#esri-symbol path").css({
        "fill": "rgb(" + [$("#red-slider").slider("option", "value"), $("#green-slider").slider("option", "value"), $("#blue-slider").slider("option", "value")].join(",") + ")"
      });
    };

    $("#red-slider").slider({
      min: 0,
      max: 255,
      slide: updateEsriSymbol
    });
    $("#green-slider").slider({
      min: 0,
      max: 255,
      slide: updateEsriSymbol
    });
    $("#blue-slider").slider({
      min: 0,
      max: 255,
      slide: updateEsriSymbol
    });
  };

  var map1 = function () {
    var map = createDefaultMap("map");    
    map.on("load", function () {
      esriOffices.forEach(function (office) {
        var point = new Point(office.geometry[0], office.geometry[1]);
        var symbol = simpleMarkerSymbol;
        if (office.attributes.campus) {
          symbol = simpleMarkerSymbol3;
        } else if (office.attributes.main) {
          symbol = simpleMarkerSymbol2;
        }
        var graphic = new Graphic(point, symbol);
        map.graphics.add(graphic);
      });
    });
    
  };

  var map2 = function () {
    var map = createDefaultMap("map");
    window.map2 = map;
    map.on("load", function () {
      esriOffices.forEach(function (office) {
        var point = new Point(office.geometry[0], office.geometry[1]);
        var symbol = esriSymbol;
        if (office.attributes.campus) {
          symbol = esriSymbol3;
        } else if (office.attributes.main) {
          symbol = esriSymbol2;
        }
        var graphic = new Graphic(point, symbol);
        map.graphics.add(graphic);
      });
    });
    
  };

  var map3 = function () {
    var map = createDefaultMap("map");
    map.on("load", function () {
      esriOffices.forEach(function (office) {
        var point = new Point(office.geometry[0], office.geometry[1]);
        var symbol = svgSymbol;
        if (office.attributes.campus) {
          symbol = svgSymbol3;
        } else if (office.attributes.main) {
          symbol = svgSymbol2;
        }
        var graphic = new Graphic(point, symbol);
        map.graphics.add(graphic);
      });
    });
    
  };


  $(function () {

    initializeSliders();

  });

  return {
    createDefaultMap: createDefaultMap,
    map1: map1,
    map2: map2,
    map3: map3
  };
});