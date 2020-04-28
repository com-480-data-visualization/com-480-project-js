// taken from https://www.chartjs.org/docs/latest/charts/scatter.html

var config = {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        },
      pointBackgroundColor: 'red'
    }
}

// A plugin to draw the background color
Chart.plugins.register({
  beforeDraw: function(chartInstance) {
    var ctx = chartInstance.chart.ctx;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
  }
})

window.myScatter = new Chart(document.getElementById("lyrics"), config);
