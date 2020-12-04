var data = [];
am4core.ready(function () {

    
    am4core.useTheme(am4themes_animated);


    var chart = am4core.create("chart-aire", am4charts.XYChart);

    reloadAire = function () {
        chart.data = data;
    }

    // Crea los ejes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Crea los valores de los ejes
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Crea las series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Agrega las viñetas simples
    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    var secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
        animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
        var animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function (event) {
            animateBullet(event.target.object);
        })
    }


});