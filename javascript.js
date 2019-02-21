
		function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
var countDownDate = new Date("apr 5, 2019 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
  	backgroundColor: "#333333",
	title:{
		text: "Fuel tank",
		horizontalAlign: "center",
      	fontFamily: "Arial",
      	fontColor: "white",
      	fontSize: "20",
      	fontWeight: "bold"

	},
	data: [{
      	indexLabelFontColor: "white",
      	indexLabelFontFamily: "Arial",
		type: "doughnut",
		startAngle: 0,
		indexLabelFontSize: 13,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 67, label: "Full",color: "#005288" },
			{ y: 28, label: "Empty", color: "white" }
		]
	}]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	backgroundColor: "#333333",
	theme: "dark1",
	title:{
		text: "Food and water Supplies",
      	fontSize: "20",
      	fontFamily: "Arial",
      	fontWeight: "bold"
	},
	axisY: {
		title: "Reserves(Days)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "Caculated based on avarage daily consumption",
		dataPoints: [      
			{ y: 57, label: "Food", color: "#39B54A"},
			{ y: 69,  label: "Water", color: "#005288"},
		]
	}]
});
chart.render();
var chart = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
 	 backgroundColor: "#333333",
	title: {
		text: "Energy usage per day",
      	fontColor: "White",
      	fontFamily: "Arial",
      	fontSize: "20",
      	fontWeigt: "bold"
	},
	axisX: {
      labelFontColor: "white",
      fontFamily: "Arial",
	},
	axisY: {
		title: "Energy usage",
		titleFontColor: "#fff",
      	labelFontColor: "white",
    	fontFamily: "Arial",
		suffix: "kwh"
	},
	data: [{
		indexLabelFontColor: "#fff",
      	lineColor: "#005288",
      	color: "#005288",
		name: "usage",
		type: "area",
		yValueFormatString: "#,##0.0KwH",
		dataPoints: [
			{  y: 274.4, label: "Fed 3" },
			{  y: 341.1, label: "Feb 4" },
			{  y: 247.0, label: "Feb 5" },
			{  y: 348.0, label: "Feb 6" },
			{  y: 274.8, label: "Feb 7" },
			{  y: 351.1, label: "Feb 8",indexLabel: "Highest", markerColor: "red" },
			{  y: 340.4, label: "Feb 9" },
			{  y: 245.5, label: "Feb 10"},
			{  y: 278.3, label: "Feb 11"}
		]
	}]
});
chart.render();

FusionCharts.ready(function() {
  var updateAnnotation,
    chart = new FusionCharts({
      type: 'thermometer',
      renderAt: 'chartContainer4',
      id: 'myThm',
      height: '100%',
      width: '50%',
      dataFormat: 'json',
      dataSource: {
        "chart": {
       	  "baseFontColor": "#ffffff",
       	  "toolTipBgColor": "#000000",
       	  "toolTipBgAlpha": "80",
       	  "outCnvBaseFontSize": "10",
       	  "baseFont": "Arial",
       	  "baseFontSize": "20",
          "theme": "fusion",
          "caption": "Outside temperature",
          "lowerLimit": "-10",
          "upperLimit": "0",
          "bgColor": '#333333',
          "decimals": "1",
          "numberSuffix": "°C",
          "showhovereffect": "1",
          "thmFillColor": "#005288",
          "showGaugeBorder": "1",
          "gaugeBorderColor": "#008ee4",
          "gaugeBorderThickness": "2",
          "gaugeBorderAlpha": "30",
          "thmOriginX": "100",
          "chartBottomMargin": "20",
          "valueFontColor": "#000000",
          "theme": "fusion"
        },
        "value": "-6",
        "annotations": {
          "showbelow": "0",
          "groups": [{
            "id": "indicator",
            "items": [
              {
                "id": "background",
                "type": "rectangle",
                "alpha": "50",
                "fillColor": "#000000",
                "x": "$gaugeEndX-40",
                "tox": "$gaugeEndX",
                "y": "$gaugeEndY+54",
                "toy": "$gaugeEndY+65"
              }
            ]
          }]
        },
      },
      "events": {
        "initialized": function(evt, arg) {
          var dataUpdate = setInterval(function() {
            var value,
              prevTemp = FusionCharts.items["myThm"].getData(),
              mainTemp = (Math.random() * 10) * (-1),
              diff = Math.abs(prevTemp - mainTemp);

            diff = diff > 1 ? (Math.random() * 1) : diff;
            if (mainTemp > prevTemp) {
              value = prevTemp + diff;
            } else {
              value = prevTemp - diff;
            }

            FusionCharts.items["myThm"].feedData("&value=" + value);

          }, 3000);
          updateAnnotation = function(evtObj, argObj) {
            var code,
              chartObj = evtObj.sender,
              val = chartObj.getData(),
              annotations = chartObj.annotations;

            if (val >= -4.5) {
              code = "#333333";
            } else if (val < -4.5 && val > -6) {
              code = "#333333";
            } else {
              code = "#333333";
            }
            annotations.update("background", {
              "fillColor": code
            });
          };
        },
        "renderComplete": function(evt, arg) {
          updateAnnotation(evt, arg);
        },
        "realtimeUpdateComplete": function(evt, arg) {
          updateAnnotation(evt, arg);
        }
      }
    })
    .render();
});
FusionCharts.ready(function() {
  var updateAnnotation,
    chart = new FusionCharts({
      type: 'thermometer',
      renderAt: 'chartContainer5',
      id: 'myThm2',
      height: '100%',
      width: '50%',
      dataFormat: 'json',
      dataSource: {
        "chart": {
       	  "baseFontColor": "#ffffff",
       	  "toolTipBgColor": "#000000",
       	  "toolTipBgAlpha": "80",
       	  "outCnvBaseFontSize": "10",
       	  "baseFont": "Arial",
       	  "baseFontSize": "20",
          "theme": "fusion",
          "caption": "Inside temperature",
          "lowerLimit": "-10",
          "upperLimit": "40",
          "bgColor": '#333333',
          "decimals": "1",
          "numberSuffix": "°C",
          "showhovereffect": "1",
          "thmFillColor": "#005288",
          "showGaugeBorder": "1",
          "gaugeBorderColor": "#008ee4",
          "gaugeBorderThickness": "2",
          "gaugeBorderAlpha": "30",
          "thmOriginX": "100",
          "chartBottomMargin": "20",
          "valueFontColor": "#000000",
          "theme": "fusion"
        },
        "value": "20",
        "annotations": {
          "showbelow": "0",
          "groups": [{
            "id": "indicator",
            "items": [
              {
                "id": "background",
                "type": "rectangle",
                "alpha": "50",
                "fillColor": "#000000",
                "x": "$gaugeEndX-40",
                "tox": "$gaugeEndX",
                "y": "$gaugeEndY+54",
                "toy": "$gaugeEndY+65"
              }
            ]
          }]
        },
      },
     "events": {
        "initialized": function(evt, arg) {
          var dataUpdate = setInterval(function() {
            var value,
              prevTemp = FusionCharts.items["myThm2"].getData(),
              mainTemp = (Math.random() * 10) * (-1),
              diff = Math.abs(prevTemp - mainTemp);

            diff = diff > 1 ? (Math.random() * 1) : diff;
            if (mainTemp > prevTemp) {
              value = prevTemp + diff;
            } else {
              value = prevTemp - diff;
            }

            FusionCharts.items["myThm2"].feedData("&value=" + value);

          }, 3000);
          updateAnnotation = function(evtObj, argObj) {
            var code,
              chartObj = evtObj.sender,
              val = chartObj.getData(),
              annotations = chartObj.annotations;

            if (val >= -4.5) {
              code = "#333333";
            } else if (val < -4.5 && val > -6) {
              code = "#333333";
            } else {
              code = "#333333";
            }
            annotations.update("background", {
              "fillColor": code
            });
          };
        },
        "renderComplete": function(evt, arg) {
          updateAnnotation(evt, arg);
        },
        "realtimeUpdateComplete": function(evt, arg) {
          updateAnnotation(evt, arg);
        }
      }
    })
    .render();
});


}

