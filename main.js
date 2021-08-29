//Create map and add basemaps

let map = L.map('map').setView([-4.5, 55.7], 9.5);

let Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});


let Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
Esri_WorldImagery.addTo(map);



// add Sand sample data with markers and popups

let sandIcon = L.icon({
    iconUrl: 'sample.png',
    iconSize:     [30, 30],
    iconAnchor:   [0, 0],
    popupAnchor:  [15, 5]
});

let sandSamplesLayer = L.geoJson(sandSamples, {
    pointToLayer: function(feature,latlng){
      return L.marker(latlng,{icon: sandIcon});
    }
  })

sandSamplesLayer.bindPopup(function (layer) {
    return 'Sample date: '+layer.feature.properties.date;
}).addTo(map);


// add Dive site data with markers and popups

let diveIcon = L.icon({
    iconUrl: 'dive.png',
    iconSize:     [30, 30],
    iconAnchor:   [0, 0],
    popupAnchor:  [15, 5]
});


let diveSitesLayer = L.geoJSON(diveSites, {
	pointToLayer: function(feature,latlng){
		return L.marker(latlng,{icon: diveIcon});
	  }
})

diveSitesLayer.bindPopup(function (layer) {
    return 'Dive date: '+layer.feature.properties.date;
}).addTo(map);


// add legend and scale

let baseMaps = {
    "Satellite": Esri_WorldImagery,
	"Streets": Esri_WorldStreetMap,
};

let dataLayers = {
    "Dives": diveSitesLayer,
	"Sand Samples": sandSamplesLayer,
};

L.control.layers(baseMaps, dataLayers, {
	collapsed: false,
	position: 'topleft',
}).addTo(map);

L.control.scale().addTo(map);
