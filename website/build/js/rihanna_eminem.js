var colors = ["#581845" , "#900c3f", "#c70039" , "#ff5733", "#FF6363", "#ffbd69"];

var songs_rih_em=[
	"Love The Way You Lie",
	"Love The Way You Lie (Part II) - Pt. 2",
	"The Monster", "Numb"];

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg_rih_em = d3.select("#rih_em_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
					// Add X axis --> it is a date format
var features = ["acousticness", "danceability",
"energy","loudness", "tempo","valence"]

var x_rih_em = d3.scaleOrdinal()
		.domain(features)
		.range([0, width / 6, 2 * width / 6, 3 * width / 6, 4 * width / 6, 5 * width / 6]);

svg_rih_em.append("g")
	.attr("transform", "translate(0," + height + ")")
	.attr("class", "axis")
	.call(d3.axisBottom(x_rih_em));

// Add Y axis
var y_rih_em = d3.scaleLinear()
	.domain([0, 1])
	.range([ height, 0 ]);
svg_rih_em.append("g")
	.attr("class", "axis")
	.call(d3.axisLeft(y_rih_em));

function display_conf_interval_rih_em(file, color){
	d3.csv(file,function(data) {
	    // Show confidence interval
	    svg_rih_em.append("path")
	      .datum(data)
	      .attr("fill", color)
        .attr("data-legend", "bla")
	      .attr("d", d3.area()
	        .x(function(d) { return x_rih_em(d.group) })
	        .y0(function(d) { return y_rih_em(d.ci_lb) })
	        .y1(function(d) { return y_rih_em(d.ci_ub) })
	      ).style("opacity", 0.5);
	})
}

function display_song_rih_em(file, song_rih_em) {
	d3.csv(file,function(data) {
		    svg_rih_em
		      .append("path")
		      .datum(data)
		      .attr("class","song_rih_em")
          .attr("data-legend", song_rih_em)
          .transition()
          .duration(1000)
		      .attr("fill", "none")
		      .attr("stroke", colors[3])
		      .attr("stroke-width", 2)
		      .attr("d", d3.line()
		        .x(function(d) { return x_rih_em(d.group) })
		        .y(function(d) { return y_rih_em(d[song_rih_em]) })
		        )
		})
}

function update_rih_em(selectedVar) {
    d3.select(".song_rih_em").remove();
    display_song_rih_em("/data/rihanna-eminem.csv", selectedVar)
}

display_conf_interval_rih_em("/data/Rihanna_mean_std.csv", colors[0])
display_conf_interval_rih_em("/data/Eminem_mean_std.csv", colors[2])

