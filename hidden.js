let chart = document.getElementById("theChart").getContext("2d");
let slopeField = document.getElementById("slopeAnswer")
let shiftField = document.getElementById("shiftAnswer")
let completedButton = document.getElementById("submitForm")
const possibleColors = ["#38a4ec", "#ff6484", "#a064fc", "#ff9c44", "#ffcc54"]


let verified = false
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
  let color = possibleColors[randomNumber(0,6)] // 0 through 5
  slope = randomNumber(1, 6); // 1 through 5
  shift = randomNumber(-5,6); // -5 through 5
  let coin = randomNumber(1, 3); //1 or 2
  if (coin == 1) {
    slope -= slope * 2; //Make slope negative
  }
  
  buildGraph(slope, color)
  correctSlope = slope
  correctShift = shift
}


function buildGraph(slope, color) {
  currentChart = new Chart(chart, {
    type: "line",
    data: {
      labels: [-2, -1, 0, 1, 2],
      datasets: [
        {
          label: "CapChart",
          data: [slope * -2 + shift, slope * -1 + shift, 0 + shift, slope + shift, slope * 2 + shift],
          borderWidth: 6,
          borderColor: color
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
  let slopeAnswer = eval(document.getElementById("slopeAnswer").value);
  let shiftAnswer = eval(document.getElementById("shiftAnswer").value);
  if (slopeAnswer === correctSlope && shiftAnswer === correctShift)  {
    slopeField.style.borderColor = "green"
    shiftField.style.borderColor = "green"
    completedButton.classList.remove("d-none")
    verified = true
  } else {
    slopeField.style.borderColor = "red"
    shiftField.style.borderColor = "red"
    slopeField.value = ""
    shiftField.value = ""
    refreshGraph();
  }
}




buildGraph(refreshGraph())
