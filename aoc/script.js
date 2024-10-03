const width = window.innerWidth;
const height = window.innerHeight * 0.8;

const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoMercator()
    .scale(15000)
    .center([13.5, 52.5]) // Center on Europe
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// Load GeoJSON data
d3.json("map/europe-1330.geojson").then(data => {
    svg.selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("d", path)
        .attr("class", "county")
        .attr("fill", "#ccc") // Default color
        .on("click", function(event, d) {
            const currentColor = d3.select(this).attr("fill");
            d3.select(this).attr("fill", currentColor === "#ccc" ? "#00f" : "#ccc");
        });
});
