var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_0_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/_0_1.png" /> Rendah<br />\
    <img src="styles/legend/_0_2.png" /> Sedang<br />\
    <img src="styles/legend/_0_3.png" /> Tinggi<br />\
    <img src="styles/legend/_0_4.png" /> Sangat Tinggi<br />'
        });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'DESANO': 'DESANO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'IDDESA': 'IDDESA', 'sra': 'sra', 'Energi (W)': 'Energi (W)', });
lyr__0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'DESANO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'IDDESA': 'TextEdit', 'sra': 'TextEdit', 'Energi (W)': 'Range', });
lyr__0.set('fieldLabels', {'PROVNO': 'hidden field', 'KABKOTNO': 'hidden field', 'KECNO': 'hidden field', 'DESANO': 'hidden field', 'PROVINSI': 'header label - always visible', 'KABKOT': 'header label - always visible', 'KECAMATAN': 'header label - always visible', 'DESA': 'hidden field', 'IDDESA': 'hidden field', 'sra': 'hidden field', 'Energi (W)': 'header label - always visible', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});