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

let sandSamples = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"type": "sample",
				"date": "2021-04-13"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.722291469573978,
					-4.344250280136306
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "sample",
				"date": "2021-04-13"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.72958707809448,
					-4.349909506900781
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "sample",
				"date": "2021-04-22"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.446356534957889,
					-4.677193291718538
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "sample",
				"date": "2021-04-21"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.251754224300388,
					-4.492036685566651
				]
			}
		}
	]
}

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


// add Dive dite data with markers and popups

let diveSites = {
	"type": "FeatureCollection",
	"features": [
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-15"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.487823486328128,
					-4.276571639716837
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-14"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.377960205078128,
					-4.314915763836039
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-16"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.49468994140625,
					-4.349149953414805
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-16"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.614166259765628,
					-4.432674823020449
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-17"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.69793701171875,
					-4.509345086962858
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-18"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.754241943359378,
					-4.561366738166861
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-19"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.677337646484378,
					-4.633916949794763
				]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"type": "dive",
				"date": "2021-04-22"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [
					55.358734130859378,
					-4.744781151396054
				]
			}
		}
	]
}

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
}).addTo(map);

L.control.scale().addTo(map);
