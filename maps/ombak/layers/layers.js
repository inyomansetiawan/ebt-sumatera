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
                title: '<img src="styles/legend/_0.png" /> '
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/_1_1.png" /> Rendah<br />\
    <img src="styles/legend/_1_2.png" /> Sedang<br />\
    <img src="styles/legend/_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/_1_4.png" /> Sangat Tinggi<br />'
        });

lyr__0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr__0,lyr__1];
lyr__0.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'DESANO': 'DESANO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'IDDESA': 'IDDESA', 'TAHUN': 'TAHUN', 'SUMBER': 'SUMBER', 'id': 'id', });
lyr__1.set('fieldAliases', {'fid': 'fid', 'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'DESANO': 'DESANO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'IDDESA': 'IDDESA', 'TAHUN': 'TAHUN', 'SUMBER': 'SUMBER', 'kode_kombinasi': 'kode_kombinasi', 'rata_rata': 'rata_rata', 'Energi (W)': 'Energi (W)', });
lyr__0.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'DESANO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'IDDESA': 'TextEdit', 'TAHUN': 'TextEdit', 'SUMBER': 'TextEdit', 'id': '', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'DESANO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'IDDESA': 'TextEdit', 'TAHUN': 'TextEdit', 'SUMBER': 'TextEdit', 'kode_kombinasi': 'TextEdit', 'rata_rata': 'TextEdit', 'Energi (W)': '', });
lyr__0.set('fieldLabels', {'PROVNO': 'hidden field', 'KABKOTNO': 'hidden field', 'KECNO': 'hidden field', 'DESANO': 'hidden field', 'PROVINSI': 'hidden field', 'KABKOT': 'hidden field', 'KECAMATAN': 'hidden field', 'DESA': 'hidden field', 'IDDESA': 'hidden field', 'TAHUN': 'hidden field', 'SUMBER': 'hidden field', 'id': 'hidden field', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'PROVNO': 'hidden field', 'KABKOTNO': 'hidden field', 'KECNO': 'hidden field', 'DESANO': 'hidden field', 'PROVINSI': 'header label - always visible', 'KABKOT': 'header label - always visible', 'KECAMATAN': 'header label - always visible', 'DESA': 'hidden field', 'IDDESA': 'hidden field', 'TAHUN': 'hidden field', 'SUMBER': 'hidden field', 'kode_kombinasi': 'hidden field', 'rata_rata': 'hidden field', 'Energi (W)': 'header label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});