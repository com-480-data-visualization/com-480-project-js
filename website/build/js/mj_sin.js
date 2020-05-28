var colors = ["#581845" , "#900c3f", "#c70039" , "#ff5733", "#FF6363", "#ffbd69"];

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg_mj_sin = d3.select("#mj_sin_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
					// Add X axis --> it is a date format
var features = ["acousticness", "danceability",
"energy","loudness", "tempo","valence"]

var x_mj_sin = d3.scaleOrdinal()
		.domain(features)
		.range([0, width / 6, 2 * width / 6, 3 * width / 6, 4 * width / 6, 5 * width / 6]);

svg_mj_sin.append("g")
	.attr("transform", "translate(0," + height + ")")
	.attr("class", "axis")
	.call(d3.axisBottom(x_mj_sin));

// Add Y axis
var y_mj_sin = d3.scaleLinear()
	.domain([0, 1])
	.range([ height, 0 ]);
svg_mj_sin.append("g")
	.attr("class", "axis")
	.call(d3.axisLeft(y_mj_sin));

function display_conf_interval_mj_sin(file, color){
	d3.csv(file,function(data) {
	    // Show confidence interval
	    svg_mj_sin.append("path")
	      .datum(data)
	      .attr("fill", color)
        .attr("data-legend", "bla")
	      .attr("d", d3.area()
	        .x(function(d) { return x_mj_sin(d.group) })
	        .y0(function(d) { return y_mj_sin(d.ci_lb) })
	        .y1(function(d) { return y_mj_sin(d.ci_ub) })
	      ).style("opacity", 0.5);
	})
}

function display_song_mj_sin(file, color) {
	d3.csv(file,function(data) {
		    svg_mj_sin
		      .append("path")
		      .datum(data)
		      .attr("class","song")
          .transition()
          .duration(1000)
		      .attr("fill", "none")
		      .attr("stroke", color)
		      .attr("stroke-width", 2)
		      .attr("d", d3.line()
		        .x(function(d) { return x_mj_sin(d.group) })
		        .y(function(d) { return y_mj_sin(d.mean) })
		      )
		})
}

display_conf_interval_mj_sin("/data/Michael Jackson_mean_std.csv", colors[0])
display_conf_interval_mj_sin("/data/Frank Sinatra_mean_std.csv", colors[2])
display_song_mj_sin("/data/mj_quincy.csv", colors[5])
display_song_mj_sin("/data/sinatra_quincy.csv", colors[4])
