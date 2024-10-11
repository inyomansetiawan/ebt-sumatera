var wms_layers = [];

var format_Klaster_0 = new ol.format.GeoJSON();
var features_Klaster_0 = format_Klaster_0.readFeatures(json_Klaster_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klaster_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klaster_0.addFeatures(features_Klaster_0);
var lyr_Klaster_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klaster_0, 
                style: style_Klaster_0,
                popuplayertitle: "Klaster",
                interactive: true,
    title: 'Klaster<br />\
    <img src="styles/legend/Klaster_0_0.png" /> 1<br />\
    <img src="styles/legend/Klaster_0_1.png" /> 2<br />\
    <img src="styles/legend/Klaster_0_2.png" /> 3<br />'
        });

lyr_Klaster_0.setVisible(true);
var layersList = [lyr_Klaster_0];
lyr_Klaster_0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'DESANO': 'DESANO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'IDDESA': 'IDDESA', 'TAHUN': 'TAHUN', 'SUMBER': 'SUMBER', 'id': 'id', 'data_PROVNO': 'data_PROVNO', 'data_PROVINSI': 'data_PROVINSI', 'data_KABKOTNO': 'data_KABKOTNO', 'data_KABKOT': 'data_KABKOT', 'data_KECNO': 'data_KECNO', 'data_KECAMATAN': 'data_KECAMATAN', 'data_SoE': 'data_SoE', 'data_WiE': 'data_WiE', 'data_WaE': 'data_WaE', 'data_cluster': 'data_cluster', });
lyr_Klaster_0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'DESANO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'IDDESA': 'TextEdit', 'TAHUN': 'TextEdit', 'SUMBER': 'TextEdit', 'id': 'TextEdit', 'data_PROVNO': 'TextEdit', 'data_PROVINSI': 'TextEdit', 'data_KABKOTNO': 'TextEdit', 'data_KABKOT': 'TextEdit', 'data_KECNO': 'TextEdit', 'data_KECAMATAN': 'TextEdit', 'data_SoE': 'TextEdit', 'data_WiE': 'TextEdit', 'data_WaE': 'TextEdit', 'data_cluster': 'Range', });
lyr_Klaster_0.set('fieldLabels', {'PROVNO': 'hidden field', 'KABKOTNO': 'hidden field', 'KECNO': 'hidden field', 'DESANO': 'hidden field', 'PROVINSI': 'header label - always visible', 'KABKOT': 'header label - always visible', 'KECAMATAN': 'header label - always visible', 'DESA': 'hidden field', 'IDDESA': 'hidden field', 'TAHUN': 'hidden field', 'SUMBER': 'hidden field', 'id': 'hidden field', 'data_PROVNO': 'hidden field', 'data_PROVINSI': 'hidden field', 'data_KABKOTNO': 'hidden field', 'data_KABKOT': 'hidden field', 'data_KECNO': 'hidden field', 'data_KECAMATAN': 'hidden field', 'data_SoE': 'hidden field', 'data_WiE': 'hidden field', 'data_WaE': 'hidden field', 'data_cluster': 'hidden field', });
lyr_Klaster_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});