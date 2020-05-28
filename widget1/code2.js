
var previous_artist = "Frank Sinatra";
var artist = "Rihanna";

var colors = ["#581845" , "#900c3f", "#c70039" , "#ff5733", "#FF6363", "#ffbd69"];

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 100},
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");






function update(artist){

  // Parse the Data
  d3.csv("data.csv", function(data) {


    // Add X axis
    var x = d3.scaleLinear()
      .domain([0, 0.9])
      .range([ 0, width]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))


    // Y axis
    var y = d3.scaleBand()
      .range([ 0, height ])
      .domain(data.map(function(d) { return d.group; }))
      .padding(1);
    svg.append("g")
      .call(d3.axisLeft(y))


    // Lines
    svg.selectAll("myline")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "line")
        .attr("x1", function(d) { return x(d[previous_artist]); })
        .attr("x2", function(d) { return x(d[artist]); })
        .attr("y1", function(d) { return y(d.group); })
        .attr("y2", function(d) { return y(d.group); })
          .attr("stroke-width", 4)
          .attr("opacity" , 0.16)
          .attr("stroke", "white")


    // Circles of variable 1
    svg.selectAll("mycircle1")
      .data(data)
      .enter()
      .append("circle")
        .attr("class", "cirlce1")
        .attr("cx", function(d) { return x(d[previous_artist]); })
        .attr("cy", function(d) { return y(d.group); })
        .attr("r", "8")
        .style("fill", colors[1])
        .attr("opacity" , 1)

    // Circles of variable 2
    svg.selectAll("mycircle2")
      .data(data)
      .enter()
      .append("circle")
        .attr("class", "circle2")
        .attr("cx", function(d) { return x(d[artist]); })
        .attr("cy", function(d) { return y(d.group); })
        .attr("r", "8")
        .style("fill", colors[4])
        .attr("opacity" , 1)




  });

}



update("Eminem")


