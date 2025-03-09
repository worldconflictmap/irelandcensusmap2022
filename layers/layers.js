var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_2 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_English_Other_30s_4 = new ol.format.GeoJSON();
var features_English_Other_30s_4 = format_English_Other_30s_4.readFeatures(json_English_Other_30s_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_Other_30s_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_Other_30s_4.addFeatures(features_English_Other_30s_4);
var lyr_English_Other_30s_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_Other_30s_4, 
                style: style_English_Other_30s_4,
                popuplayertitle: 'English_Other_30s',
                interactive: true,
                title: '<img src="styles/legend/English_Other_30s_4.png" /> English_Other_30s'
            });
var format_English_Other_40s_5 = new ol.format.GeoJSON();
var features_English_Other_40s_5 = format_English_Other_40s_5.readFeatures(json_English_Other_40s_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_Other_40s_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_Other_40s_5.addFeatures(features_English_Other_40s_5);
var lyr_English_Other_40s_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_Other_40s_5, 
                style: style_English_Other_40s_5,
                popuplayertitle: 'English_Other_40s',
                interactive: true,
                title: '<img src="styles/legend/English_Other_40s_5.png" /> English_Other_40s'
            });
var format_Irish_English_40s_6 = new ol.format.GeoJSON();
var features_Irish_English_40s_6 = format_Irish_English_40s_6.readFeatures(json_Irish_English_40s_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_English_40s_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_English_40s_6.addFeatures(features_Irish_English_40s_6);
var lyr_Irish_English_40s_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_English_40s_6, 
                style: style_Irish_English_40s_6,
                popuplayertitle: 'Irish_English_40s',
                interactive: true,
                title: '<img src="styles/legend/Irish_English_40s_6.png" /> Irish_English_40s'
            });
var format_Other_30s_7 = new ol.format.GeoJSON();
var features_Other_30s_7 = format_Other_30s_7.readFeatures(json_Other_30s_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_30s_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_30s_7.addFeatures(features_Other_30s_7);
var lyr_Other_30s_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_30s_7, 
                style: style_Other_30s_7,
                popuplayertitle: 'Other_30s',
                interactive: true,
                title: '<img src="styles/legend/Other_30s_7.png" /> Other_30s'
            });
var format_Other_40s_8 = new ol.format.GeoJSON();
var features_Other_40s_8 = format_Other_40s_8.readFeatures(json_Other_40s_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_40s_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_40s_8.addFeatures(features_Other_40s_8);
var lyr_Other_40s_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_40s_8, 
                style: style_Other_40s_8,
                popuplayertitle: 'Other_40s',
                interactive: true,
                title: '<img src="styles/legend/Other_40s_8.png" /> Other_40s'
            });
var format_Other_50s_9 = new ol.format.GeoJSON();
var features_Other_50s_9 = format_Other_50s_9.readFeatures(json_Other_50s_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_50s_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_50s_9.addFeatures(features_Other_50s_9);
var lyr_Other_50s_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_50s_9, 
                style: style_Other_50s_9,
                popuplayertitle: 'Other_50s',
                interactive: true,
                title: '<img src="styles/legend/Other_50s_9.png" /> Other_50s'
            });
var format_Other_60s_10 = new ol.format.GeoJSON();
var features_Other_60s_10 = format_Other_60s_10.readFeatures(json_Other_60s_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_60s_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_60s_10.addFeatures(features_Other_60s_10);
var lyr_Other_60s_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_60s_10, 
                style: style_Other_60s_10,
                popuplayertitle: 'Other_60s',
                interactive: true,
                title: '<img src="styles/legend/Other_60s_10.png" /> Other_60s'
            });
var format_Other_70s_11 = new ol.format.GeoJSON();
var features_Other_70s_11 = format_Other_70s_11.readFeatures(json_Other_70s_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_70s_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_70s_11.addFeatures(features_Other_70s_11);
var lyr_Other_70s_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_70s_11, 
                style: style_Other_70s_11,
                popuplayertitle: 'Other_70s',
                interactive: true,
                title: '<img src="styles/legend/Other_70s_11.png" /> Other_70s'
            });
var format_Other_80s_12 = new ol.format.GeoJSON();
var features_Other_80s_12 = format_Other_80s_12.readFeatures(json_Other_80s_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_80s_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_80s_12.addFeatures(features_Other_80s_12);
var lyr_Other_80s_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_80s_12, 
                style: style_Other_80s_12,
                popuplayertitle: 'Other_80s',
                interactive: true,
                title: '<img src="styles/legend/Other_80s_12.png" /> Other_80s'
            });
var format_Polish_40s_13 = new ol.format.GeoJSON();
var features_Polish_40s_13 = format_Polish_40s_13.readFeatures(json_Polish_40s_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polish_40s_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polish_40s_13.addFeatures(features_Polish_40s_13);
var lyr_Polish_40s_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polish_40s_13, 
                style: style_Polish_40s_13,
                popuplayertitle: 'Polish_40s',
                interactive: true,
                title: '<img src="styles/legend/Polish_40s_13.png" /> Polish_40s'
            });
var format_English_30s_14 = new ol.format.GeoJSON();
var features_English_30s_14 = format_English_30s_14.readFeatures(json_English_30s_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_30s_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_30s_14.addFeatures(features_English_30s_14);
var lyr_English_30s_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_30s_14, 
                style: style_English_30s_14,
                popuplayertitle: 'English_30s',
                interactive: true,
                title: '<img src="styles/legend/English_30s_14.png" /> English_30s'
            });
var format_English_40s_15 = new ol.format.GeoJSON();
var features_English_40s_15 = format_English_40s_15.readFeatures(json_English_40s_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_40s_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_40s_15.addFeatures(features_English_40s_15);
var lyr_English_40s_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_40s_15, 
                style: style_English_40s_15,
                popuplayertitle: 'English_40s',
                interactive: true,
                title: '<img src="styles/legend/English_40s_15.png" /> English_40s'
            });
var format_English_50s_16 = new ol.format.GeoJSON();
var features_English_50s_16 = format_English_50s_16.readFeatures(json_English_50s_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_50s_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_50s_16.addFeatures(features_English_50s_16);
var lyr_English_50s_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_50s_16, 
                style: style_English_50s_16,
                popuplayertitle: 'English_50s',
                interactive: true,
                title: '<img src="styles/legend/English_50s_16.png" /> English_50s'
            });
var format_English_60s_17 = new ol.format.GeoJSON();
var features_English_60s_17 = format_English_60s_17.readFeatures(json_English_60s_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_60s_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_60s_17.addFeatures(features_English_60s_17);
var lyr_English_60s_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_60s_17, 
                style: style_English_60s_17,
                popuplayertitle: 'English_60s',
                interactive: true,
                title: '<img src="styles/legend/English_60s_17.png" /> English_60s'
            });
var format_English_70s_18 = new ol.format.GeoJSON();
var features_English_70s_18 = format_English_70s_18.readFeatures(json_English_70s_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_70s_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_70s_18.addFeatures(features_English_70s_18);
var lyr_English_70s_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_70s_18, 
                style: style_English_70s_18,
                popuplayertitle: 'English_70s',
                interactive: true,
                title: '<img src="styles/legend/English_70s_18.png" /> English_70s'
            });
var format_English_80s_19 = new ol.format.GeoJSON();
var features_English_80s_19 = format_English_80s_19.readFeatures(json_English_80s_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_80s_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_80s_19.addFeatures(features_English_80s_19);
var lyr_English_80s_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_80s_19, 
                style: style_English_80s_19,
                popuplayertitle: 'English_80s',
                interactive: true,
                title: '<img src="styles/legend/English_80s_19.png" /> English_80s'
            });
var format_English_90s_20 = new ol.format.GeoJSON();
var features_English_90s_20 = format_English_90s_20.readFeatures(json_English_90s_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_90s_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_90s_20.addFeatures(features_English_90s_20);
var lyr_English_90s_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_90s_20, 
                style: style_English_90s_20,
                popuplayertitle: 'English_90s',
                interactive: true,
                title: '<img src="styles/legend/English_90s_20.png" /> English_90s'
            });
var format_English_100_21 = new ol.format.GeoJSON();
var features_English_100_21 = format_English_100_21.readFeatures(json_English_100_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_English_100_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_English_100_21.addFeatures(features_English_100_21);
var lyr_English_100_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_English_100_21, 
                style: style_English_100_21,
                popuplayertitle: 'English_100',
                interactive: true,
                title: '<img src="styles/legend/English_100_21.png" /> English_100'
            });
var format_Irish_40s_22 = new ol.format.GeoJSON();
var features_Irish_40s_22 = format_Irish_40s_22.readFeatures(json_Irish_40s_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_40s_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_40s_22.addFeatures(features_Irish_40s_22);
var lyr_Irish_40s_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_40s_22, 
                style: style_Irish_40s_22,
                popuplayertitle: 'Irish_40s',
                interactive: true,
                title: '<img src="styles/legend/Irish_40s_22.png" /> Irish_40s'
            });
var format_Irish_50s_23 = new ol.format.GeoJSON();
var features_Irish_50s_23 = format_Irish_50s_23.readFeatures(json_Irish_50s_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_50s_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_50s_23.addFeatures(features_Irish_50s_23);
var lyr_Irish_50s_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_50s_23, 
                style: style_Irish_50s_23,
                popuplayertitle: 'Irish_50s',
                interactive: true,
                title: '<img src="styles/legend/Irish_50s_23.png" /> Irish_50s'
            });
var format_Irish_60s_24 = new ol.format.GeoJSON();
var features_Irish_60s_24 = format_Irish_60s_24.readFeatures(json_Irish_60s_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_60s_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_60s_24.addFeatures(features_Irish_60s_24);
var lyr_Irish_60s_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_60s_24, 
                style: style_Irish_60s_24,
                popuplayertitle: 'Irish_60s',
                interactive: true,
                title: '<img src="styles/legend/Irish_60s_24.png" /> Irish_60s'
            });
var format_Irish_70s_25 = new ol.format.GeoJSON();
var features_Irish_70s_25 = format_Irish_70s_25.readFeatures(json_Irish_70s_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irish_70s_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irish_70s_25.addFeatures(features_Irish_70s_25);
var lyr_Irish_70s_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irish_70s_25, 
                style: style_Irish_70s_25,
                popuplayertitle: 'Irish_70s',
                interactive: true,
                title: '<img src="styles/legend/Irish_70s_25.png" /> Irish_70s'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleRoad_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_English_Other_30s_4.setVisible(true);lyr_English_Other_40s_5.setVisible(true);lyr_Irish_English_40s_6.setVisible(true);lyr_Other_30s_7.setVisible(true);lyr_Other_40s_8.setVisible(true);lyr_Other_50s_9.setVisible(true);lyr_Other_60s_10.setVisible(true);lyr_Other_70s_11.setVisible(true);lyr_Other_80s_12.setVisible(true);lyr_Polish_40s_13.setVisible(true);lyr_English_30s_14.setVisible(true);lyr_English_40s_15.setVisible(true);lyr_English_50s_16.setVisible(true);lyr_English_60s_17.setVisible(true);lyr_English_70s_18.setVisible(true);lyr_English_80s_19.setVisible(true);lyr_English_90s_20.setVisible(true);lyr_English_100_21.setVisible(true);lyr_Irish_40s_22.setVisible(true);lyr_Irish_50s_23.setVisible(true);lyr_Irish_60s_24.setVisible(true);lyr_Irish_70s_25.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_GoogleRoad_2,lyr_OSMStandard_3,lyr_English_Other_30s_4,lyr_English_Other_40s_5,lyr_Irish_English_40s_6,lyr_Other_30s_7,lyr_Other_40s_8,lyr_Other_50s_9,lyr_Other_60s_10,lyr_Other_70s_11,lyr_Other_80s_12,lyr_Polish_40s_13,lyr_English_30s_14,lyr_English_40s_15,lyr_English_50s_16,lyr_English_60s_17,lyr_English_70s_18,lyr_English_80s_19,lyr_English_90s_20,lyr_English_100_21,lyr_Irish_40s_22,lyr_Irish_50s_23,lyr_Irish_60s_24,lyr_Irish_70s_25];
lyr_English_Other_30s_4.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_Other_40s_5.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_English_40s_6.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_30s_7.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_40s_8.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_50s_9.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_60s_10.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_70s_11.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Other_80s_12.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Polish_40s_13.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_30s_14.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_40s_15.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_50s_16.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_60s_17.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_70s_18.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_80s_19.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_90s_20.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_100_21.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_40s_22.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_50s_23.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_60s_24.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_Irish_70s_25.set('fieldAliases', {'SA_PUB2022': 'SA_PUB2022', 'ED_ENGLISH': 'ED_ENGLISH', 'ED_GAEILGE': 'ED_GAEILGE', 'COUNTY_ENGLISH': 'COUNTY_ENGLISH', 'COUNTY_GAEILGE': 'COUNTY_GAEILGE', 'Irish': 'Irish', 'English': 'English', 'Polish': 'Polish', 'French': 'French', 'Spanish': 'Spanish', 'Other': 'Other', 'Total': 'Total', });
lyr_English_Other_30s_4.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_Other_40s_5.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_English_40s_6.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_30s_7.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_40s_8.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_50s_9.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_60s_10.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_70s_11.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Other_80s_12.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Polish_40s_13.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_30s_14.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_40s_15.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_50s_16.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_60s_17.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_70s_18.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_80s_19.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_90s_20.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_100_21.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_40s_22.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_50s_23.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_60s_24.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_Irish_70s_25.set('fieldImages', {'SA_PUB2022': '', 'ED_ENGLISH': '', 'ED_GAEILGE': '', 'COUNTY_ENGLISH': '', 'COUNTY_GAEILGE': '', 'Irish': '', 'English': '', 'Polish': '', 'French': '', 'Spanish': '', 'Other': '', 'Total': '', });
lyr_English_Other_30s_4.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_Other_40s_5.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_English_40s_6.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_30s_7.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_40s_8.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_50s_9.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_60s_10.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_70s_11.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Other_80s_12.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Polish_40s_13.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_30s_14.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_40s_15.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_50s_16.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_60s_17.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_70s_18.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_80s_19.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_90s_20.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_English_100_21.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_40s_22.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_50s_23.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_60s_24.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_70s_25.set('fieldLabels', {'SA_PUB2022': 'inline label - visible with data', 'ED_ENGLISH': 'inline label - visible with data', 'ED_GAEILGE': 'inline label - visible with data', 'COUNTY_ENGLISH': 'inline label - visible with data', 'COUNTY_GAEILGE': 'inline label - visible with data', 'Irish': 'inline label - visible with data', 'English': 'inline label - visible with data', 'Polish': 'inline label - visible with data', 'French': 'inline label - visible with data', 'Spanish': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Total': 'inline label - visible with data', });
lyr_Irish_70s_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});