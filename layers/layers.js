var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_HasilLCPA_1 = new ol.format.GeoJSON();
var features_HasilLCPA_1 = format_HasilLCPA_1.readFeatures(json_HasilLCPA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HasilLCPA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HasilLCPA_1.addFeatures(features_HasilLCPA_1);
var lyr_HasilLCPA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HasilLCPA_1, 
                style: style_HasilLCPA_1,
                popuplayertitle: 'Hasil LCPA',
                interactive: true,
                title: '<img src="styles/legend/HasilLCPA_1.png" /> Hasil LCPA'
            });
var format_OriginDestination_2 = new ol.format.GeoJSON();
var features_OriginDestination_2 = format_OriginDestination_2.readFeatures(json_OriginDestination_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OriginDestination_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OriginDestination_2.addFeatures(features_OriginDestination_2);
var lyr_OriginDestination_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OriginDestination_2, 
                style: style_OriginDestination_2,
                popuplayertitle: 'Origin Destination',
                interactive: true,
                title: '<img src="styles/legend/OriginDestination_2.png" /> Origin Destination'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_3_0.png" /> primary<br />\
    <img src="styles/legend/Jalan_3_1.png" /> residential<br />\
    <img src="styles/legend/Jalan_3_2.png" /> secondary<br />\
    <img src="styles/legend/Jalan_3_3.png" /> tertiary<br />\
    <img src="styles/legend/Jalan_3_4.png" /> trunk<br />\
    <img src="styles/legend/Jalan_3_5.png" /> unclassified<br />' });
var lyr_LST_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LST<br />\
    <img src="styles/legend/LST_4_0.png" /> 32.9251<br />\
    <img src="styles/legend/LST_4_1.png" /> 37.6010<br />\
    <img src="styles/legend/LST_4_2.png" /> 42.2768<br />\
    <img src="styles/legend/LST_4_3.png" /> 46.9527<br />\
    <img src="styles/legend/LST_4_4.png" /> 51.6285<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LST_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12550369.490174, -820076.487385, 12559219.287561, -807317.296662]
        })
    });
var lyr_NDVI_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_5_0.png" /> 1.0000<br />\
    <img src="styles/legend/NDVI_5_1.png" /> 1.3900<br />\
    <img src="styles/legend/NDVI_5_2.png" /> 1.7800<br />\
    <img src="styles/legend/NDVI_5_3.png" /> 2.1700<br />\
    <img src="styles/legend/NDVI_5_4.png" /> 2.5600<br />\
    <img src="styles/legend/NDVI_5_5.png" /> 2.9500<br />\
    <img src="styles/legend/NDVI_5_6.png" /> 3.3400<br />\
    <img src="styles/legend/NDVI_5_7.png" /> 3.7000<br />\
    <img src="styles/legend/NDVI_5_8.png" /> 4.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12550339.995448, -820085.740552, 12559236.923891, -807299.588233]
        })
    });
var lyr_NDWI_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDWI<br />\
    <img src="styles/legend/NDWI_6_0.png" /> 1.0000<br />\
    <img src="styles/legend/NDWI_6_1.png" /> 1.3900<br />\
    <img src="styles/legend/NDWI_6_2.png" /> 1.7800<br />\
    <img src="styles/legend/NDWI_6_3.png" /> 2.1700<br />\
    <img src="styles/legend/NDWI_6_4.png" /> 2.5600<br />\
    <img src="styles/legend/NDWI_6_5.png" /> 2.9500<br />\
    <img src="styles/legend/NDWI_6_6.png" /> 3.3400<br />\
    <img src="styles/legend/NDWI_6_7.png" /> 3.7000<br />\
    <img src="styles/legend/NDWI_6_8.png" /> 4.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDWI_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12550339.995448, -820085.740552, 12559236.923891, -807299.588233]
        })
    });
var format_BatasAnalisis_7 = new ol.format.GeoJSON();
var features_BatasAnalisis_7 = format_BatasAnalisis_7.readFeatures(json_BatasAnalisis_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAnalisis_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAnalisis_7.addFeatures(features_BatasAnalisis_7);
var lyr_BatasAnalisis_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAnalisis_7, 
                style: style_BatasAnalisis_7,
                popuplayertitle: 'Batas Analisis',
                interactive: true,
                title: '<img src="styles/legend/BatasAnalisis_7.png" /> Batas Analisis'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_HasilLCPA_1.setVisible(true);lyr_OriginDestination_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_LST_4.setVisible(true);lyr_NDVI_5.setVisible(true);lyr_NDWI_6.setVisible(true);lyr_BatasAnalisis_7.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_HasilLCPA_1,lyr_OriginDestination_2,lyr_Jalan_3,lyr_LST_4,lyr_NDVI_5,lyr_NDWI_6,lyr_BatasAnalisis_7];
lyr_HasilLCPA_1.set('fieldAliases', {'start poin': 'start poin', 'end point': 'end point', 'total cost': 'total cost', 'layer': 'layer', 'path': 'path', });
lyr_OriginDestination_2.set('fieldAliases', {'nama': 'nama', 'Tipe': 'Tipe', 'layer': 'layer', 'id': 'id', 'nama jalan': 'nama jalan', 'path': 'path', 'Foto': 'Foto', });
lyr_Jalan_3.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'cat__1': 'cat__1', 'cat_': 'cat_', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'oneway': 'oneway', 'name': 'name', 'motorcyc_1': 'motorcyc_1', 'lanes': 'lanes', 'DN': 'DN', 'ID': 'ID', });
lyr_BatasAnalisis_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'K': 'K', 'KODE': 'KODE', 'LUAS_KM': 'LUAS_KM', 'LUAS_HA': 'LUAS_HA', 'Keterangan': 'Keterangan', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_HasilLCPA_1.set('fieldImages', {'start poin': 'TextEdit', 'end point': 'TextEdit', 'total cost': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OriginDestination_2.set('fieldImages', {'nama': 'TextEdit', 'Tipe': 'TextEdit', 'layer': 'TextEdit', 'id': 'TextEdit', 'nama jalan': 'TextEdit', 'path': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Jalan_3.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'cat__1': 'TextEdit', 'cat_': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'motorcyc_1': 'TextEdit', 'lanes': 'TextEdit', 'DN': 'TextEdit', 'ID': 'TextEdit', });
lyr_BatasAnalisis_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'K': 'TextEdit', 'KODE': 'TextEdit', 'LUAS_KM': 'TextEdit', 'LUAS_HA': 'TextEdit', 'Keterangan': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HasilLCPA_1.set('fieldLabels', {'start poin': 'no label', 'end point': 'no label', 'total cost': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_OriginDestination_2.set('fieldLabels', {'nama': 'no label', 'Tipe': 'hidden field', 'layer': 'hidden field', 'id': 'hidden field', 'nama jalan': 'hidden field', 'path': 'hidden field', 'Foto': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'cat__1': 'no label', 'cat_': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'name': 'no label', 'motorcyc_1': 'no label', 'lanes': 'no label', 'DN': 'no label', 'ID': 'no label', });
lyr_BatasAnalisis_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'K': 'no label', 'KODE': 'no label', 'LUAS_KM': 'no label', 'LUAS_HA': 'no label', 'Keterangan': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAnalisis_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});