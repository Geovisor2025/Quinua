var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                popuplayertitle: 'Municipios',
                interactive: false,
    title: 'Municipios<br />\
    <img src="styles/legend/Municipios_1_0.png" /> Producción Alta<br />\
    <img src="styles/legend/Municipios_1_1.png" /> Producción Media<br />\
    <img src="styles/legend/Municipios_1_2.png" /> Producción Baja<br />\
    <img src="styles/legend/Municipios_1_3.png" /> Otros Municipio<br />' });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var lyr_ProduccinQuinuaha_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Producción Quinua (ha.)<br />\
    <img src="styles/legend/ProduccinQuinuaha_3_0.png" /> 0,0000<br />\
    <img src="styles/legend/ProduccinQuinuaha_3_1.png" /> 14766,2080<br />\
    <img src="styles/legend/ProduccinQuinuaha_3_2.png" /> 29532,4160<br />\
    <img src="styles/legend/ProduccinQuinuaha_3_3.png" /> 44298,6240<br />\
    <img src="styles/legend/ProduccinQuinuaha_3_4.png" /> 59064,8320<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ProduccinQuinuaha_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7736384.177925, -2587344.457147, -6946319.692172, -1174490.218906]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_ProduccinQuinuaha_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Municipios_1,lyr_Departamentos_2,lyr_ProduccinQuinuaha_3];
lyr_Municipios_1.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'GRADO': 'GRADO', 'GRADOS2': 'GRADOS2', });
lyr_Departamentos_2.set('fieldAliases', {'departamen': 'departamen', });
lyr_Municipios_1.set('fieldImages', {'DEPTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'GRADO': 'Range', 'GRADOS2': 'Range', });
lyr_Departamentos_2.set('fieldImages', {'departamen': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'GRADO': 'no label', 'GRADOS2': 'no label', });
lyr_Departamentos_2.set('fieldLabels', {'departamen': 'no label', });
lyr_Departamentos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});