//TODO: style the chart. Make the grid lines thicker and make it update the color of the line each time it is refreshed. 
//      for colors of graph, just make an array of colors and access with a random number.
//TODO: Style buttons and fix into a responsive div / modal
//TODO: look into obfuscation.


//TODO: Can add vertical shift to have users enter slope and vertical shift. Should be easy to implement. 




let chart = document.getElementById("theChart").getContext("2d");
let slopeField = document.getElementById("slopeAnswer")
let shiftField = document.getElementById("shiftAnswer")

let shift = 0;
let slope = 0;
let chartData = [];
let slopeAnswer


let currentChart = new Chart(chart, {
  type: "line",
  data: {
    labels: [-2, -1, 0, 1, 2],
    datasets: [
      {
        label: "",
        data: [slope * -2, slope * -1, 0, slope, slope * 2],
        borderWidth: 8,
      },
    ],
  },
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function refreshGraph() {
  currentChart.destroy();
  slope = randomNumber(1, 6); // 1 through 5
  shift = randomNumber(-5,6); // -5 through 5
  let coin = randomNumber(1, 3); //1 or 2
  if (coin == 1) {
    slope -= slope * 2; //Make slope negative
  }
  buildGraph(slope)
  slopeAnswer = slope
}


function buildGraph(slope) {
  currentChart = new Chart(chart, {
    type: "line",
    data: {
      labels: [-2, -1, 0, 1, 2],
      datasets: [
        {
          label: "CapChart",
          data: [slope * -2 + shift, slope * -1 + shift, 0 + shift, slope + shift, slope * 2 + shift],
          borderWidth: 6,
        },
      ],
    },
    options: {
        layout: {
            padding: 10
        }
    }
  });
}

function verify() {
  //Parse int in order for calculations to be made. 6/2 === 3
  const ans = parseInt(document.getElementById("slopeAnswer").value);
  console.log(ans)
  if (ans === slopeAnswer) {
    alert("lets goo");
  } else {
    slopeField.style.borderColor = "red"
    shiftField.style.borderColor = "red"
    slopeField.value = ""
    shiftField.value = ""
    refreshGraph();
  }
}


buildGraph(refreshGraph())


