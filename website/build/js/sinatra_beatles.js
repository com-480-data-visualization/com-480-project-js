var colors = ["#581845" , "#900c3f", "#c70039" , "#ff5733", "#FF6363", "#ffbd69"];

var songs_sin_beat=["Yesterday", "Something"];

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg_sin_beat = d3.select("#sin_beat_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")

    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

					// Add X axis --> it is a date format
var features = ["acousticness", "danceability",
"energy","loudness", "tempo","valence"]

var x_sin_beat = d3.scaleOrdinal()
		.domain(features)
		.range([0, width / 6, 2 * width / 6, 3 * width / 6, 4 * width / 6, 5 * width / 6]);

svg_sin_beat.append("g")
	.attr("transform", "translate(0," + height + ")")
  .attr("class", "axis")
	.call(d3.axisBottom(x_sin_beat));

// Add Y axis
var y_sin_beat = d3.scaleLinear()
	.domain([0, 1])
	.range([ height, 0 ]);
svg_sin_beat.append("g")
	.call(d3.axisLeft(y_sin_beat))
    .attr("class", "axis");

function display_conf_interval_sin_beat(file, color){
	d3.csv(file,function(data) {
	    // Show confidence interval
	    svg_sin_beat.append("path")
	      .datum(data)
	      .attr("fill", color)
        .attr("data-legend", "bla")
	      .attr("d", d3.area()
	        .x(function(d) { return x_sin_beat(d.group) })
	        .y0(function(d) { return y_sin_beat(d.ci_lb) })
	        .y1(function(d) { return y_sin_beat(d.ci_ub) })
	      ).style("opacity", 0.5);
	})
}

function display_song_sin_beat(file, song) {
	d3.csv(file,function(data) {
		    svg_sin_beat
		      .append("path")
		      .datum(data)
		      .attr("class","song_sin_beat")
          .attr("data-legend", song)
          .transition()
          .duration(1000)
		      .attr("fill", "none")
		      .attr("stroke", colors[3])
		      .attr("stroke-width", 2)
		      .attr("d", d3.line()
		        .x(function(d) { return x_sin_beat(d.group) })
		        .y(function(d) { return y_sin_beat(d['The Beatles']) })
          );
        svg_sin_beat
          .append("path")
          .datum(data)
          .attr("class","song_sin_beat")
          .attr("data-legend", song)
          .transition()
          .duration(1000)
          .attr("fill", "none")
          .attr("stroke", colors[5])
          .attr("stroke-width", 2)
          .attr("d", d3.line()
            .x(function(d) { return x_sin_beat(d.group) })
            .y(function(d) { return y_sin_beat(d['Frank Sinatra']) })
          );
		})
}

function update_sin_beat(selectedVar) {
    d3.selectAll(".song_sin_beat").remove();
    if(selectedVar == "Yesterday"){
      display_song_sin_beat("/data/yesterday_sin_eminem.csv", selectedVar)
    } else {
      display_song_sin_beat("/data/something_sin_eminem.csv", selectedVar)
    }
}

display_conf_interval_sin_beat("/data/Frank Sinatra_mean_std.csv", colors[0])
display_conf_interval_sin_beat("/data/The Beatles_mean_std.csv", colors[2])
update_sin_beat(songs_sin_beat[0])
