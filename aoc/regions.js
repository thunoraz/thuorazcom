// Sample GeoJSON regions for Medieval Europe (simplified)
var regions = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "Bavaria" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[10.0, 48.0], [12.0, 48.0], [12.0, 49.5], [10.0, 49.5], [10.0, 48.0]]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Saxony" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[9.0, 50.0], [11.0, 50.0], [11.0, 51.5], [9.0, 51.5], [9.0, 50.0]]]
            }
        }
    ]
};
