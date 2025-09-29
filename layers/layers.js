var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Logradouros_1 = new ol.format.GeoJSON();
var features_Logradouros_1 = format_Logradouros_1.readFeatures(json_Logradouros_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Logradouros_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Logradouros_1.addFeatures(features_Logradouros_1);
var lyr_Logradouros_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Logradouros_1, 
                style: style_Logradouros_1,
                popuplayertitle: "Logradouros",
                interactive: true,
                title: '<img src="styles/legend/Logradouros_1.png" /> Logradouros'
            });
var format_blocoscohab_2 = new ol.format.GeoJSON();
var features_blocoscohab_2 = format_blocoscohab_2.readFeatures(json_blocoscohab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blocoscohab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blocoscohab_2.addFeatures(features_blocoscohab_2);
var lyr_blocoscohab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_blocoscohab_2, 
                style: style_blocoscohab_2,
                popuplayertitle: "blocos cohab",
                interactive: true,
                title: '<img src="styles/legend/blocoscohab_2.png" /> blocos cohab'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Logradouros_1.setVisible(true);lyr_blocoscohab_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Logradouros_1,lyr_blocoscohab_2];
lyr_Logradouros_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'quadras': 'quadras', 'objectid': 'objectid', 'logradouro': 'logradouro', 'codlog1': 'codlog1', 'largura': 'largura', 'recuo_eixo': 'recuo_eixo', 'passeio': 'passeio', 'pista': 'pista', 'canteiro': 'canteiro', 'recuo_viar': 'recuo_viar', 'regular': 'regular', 'aux': 'aux', 'cep_par': 'cep_par', 'cep_impar': 'cep_impar', 'matricula': 'matricula', 'area': 'area', 'tipo': 'tipo', 'velocidade': 'velocidade', 'REORDENAMENTO NUMERICO': 'REORDENAMENTO NUMERICO', 'n_inic': 'n_inic', 'n_final': 'n_final', 'CEP': 'CEP', 'pistas': 'pistas', });
lyr_blocoscohab_2.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'id': 'id', 'bloco': 'bloco', 'cep': 'cep', 'logradouro': 'logradouro', 'LOG_BLOCO': 'LOG_BLOCO', 'LOG_BLOCO2': 'LOG_BLOCO2', 'LOGO_BLOCO3': 'LOGO_BLOCO3', 'LOG_BLOCO4': 'LOG_BLOCO4', 'LOG_BLOCO5': 'LOG_BLOCO5', 'LOG_BLOCO6': 'LOG_BLOCO6', 'cep_s_hif': 'cep_s_hif', 'planilhado': 'planilhado', 'BL_COHAB': 'BL_COHAB', });
lyr_Logradouros_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'quadras': 'TextEdit', 'objectid': 'TextEdit', 'logradouro': 'TextEdit', 'codlog1': 'TextEdit', 'largura': 'TextEdit', 'recuo_eixo': 'TextEdit', 'passeio': 'TextEdit', 'pista': 'TextEdit', 'canteiro': 'TextEdit', 'recuo_viar': 'TextEdit', 'regular': 'TextEdit', 'aux': 'TextEdit', 'cep_par': 'TextEdit', 'cep_impar': 'TextEdit', 'matricula': 'TextEdit', 'area': 'TextEdit', 'tipo': 'TextEdit', 'velocidade': 'TextEdit', 'REORDENAMENTO NUMERICO': 'TextEdit', 'n_inic': 'Range', 'n_final': 'Range', 'CEP': 'TextEdit', 'pistas': 'Range', });
lyr_blocoscohab_2.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'id': 'TextEdit', 'bloco': 'TextEdit', 'cep': 'TextEdit', 'logradouro': 'TextEdit', 'LOG_BLOCO': 'TextEdit', 'LOG_BLOCO2': 'TextEdit', 'LOGO_BLOCO3': 'TextEdit', 'LOG_BLOCO4': 'TextEdit', 'LOG_BLOCO5': 'TextEdit', 'LOG_BLOCO6': 'TextEdit', 'cep_s_hif': 'TextEdit', 'planilhado': 'TextEdit', 'BL_COHAB': 'TextEdit', });
lyr_Logradouros_1.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'quadras': 'hidden field', 'objectid': 'hidden field', 'logradouro': 'header label - always visible', 'codlog1': 'hidden field', 'largura': 'hidden field', 'recuo_eixo': 'hidden field', 'passeio': 'hidden field', 'pista': 'hidden field', 'canteiro': 'hidden field', 'recuo_viar': 'hidden field', 'regular': 'hidden field', 'aux': 'hidden field', 'cep_par': 'hidden field', 'cep_impar': 'hidden field', 'matricula': 'hidden field', 'area': 'hidden field', 'tipo': 'hidden field', 'velocidade': 'hidden field', 'REORDENAMENTO NUMERICO': 'hidden field', 'n_inic': 'hidden field', 'n_final': 'hidden field', 'CEP': 'hidden field', 'pistas': 'hidden field', });
lyr_blocoscohab_2.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'id': 'hidden field', 'bloco': 'header label - always visible', 'cep': 'hidden field', 'logradouro': 'hidden field', 'LOG_BLOCO': 'hidden field', 'LOG_BLOCO2': 'hidden field', 'LOGO_BLOCO3': 'hidden field', 'LOG_BLOCO4': 'hidden field', 'LOG_BLOCO5': 'hidden field', 'LOG_BLOCO6': 'hidden field', 'cep_s_hif': 'hidden field', 'planilhado': 'hidden field', 'BL_COHAB': 'hidden field', });
lyr_blocoscohab_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});