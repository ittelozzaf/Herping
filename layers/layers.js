var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Herpetologicalrecords_1 = new ol.format.GeoJSON();
var features_Herpetologicalrecords_1 = format_Herpetologicalrecords_1.readFeatures(json_Herpetologicalrecords_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Herpetologicalrecords_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Herpetologicalrecords_1.addFeatures(features_Herpetologicalrecords_1);
var lyr_Herpetologicalrecords_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Herpetologicalrecords_1, 
                style: style_Herpetologicalrecords_1,
                interactive: false,
                title: '<img src="styles/legend/Herpetologicalrecords_1.png" /> Herpetological records'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Herpetologicalrecords_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Herpetologicalrecords_1];
lyr_Herpetologicalrecords_1.set('fieldAliases', {'RasterVal': 'RasterVal', 'Species': 'Species', });
lyr_Herpetologicalrecords_1.set('fieldImages', {'RasterVal': 'Range', 'Species': 'TextEdit', });
lyr_Herpetologicalrecords_1.set('fieldLabels', {'RasterVal': 'no label', 'Species': 'no label', });
lyr_Herpetologicalrecords_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});