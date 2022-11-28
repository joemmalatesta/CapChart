function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function refreshGraph() {
  let slope = randomNumber(1, 6);
  let coin = randomNumber(1, 3); //1 or 2
if (coin == 1) {
  slope -= slope * 2; //Make slope negative 
}

  const chart = document.getElementById('theChart').getContext('2d');
  new Chart(chart, {
    type: 'line',
    data: {
      labels: [-2,-1,0,1,2],
      datasets: [{
        label: '',
        data: [slope*-2,slope*-1,0,slope, slope*2],
        borderWidth: 8
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });;
  return slope
}


const slope = refreshGraph()


function verify() {
  const ans = document.getElementById('slopeAnswer').value
  if (ans == slope) {
    alert("lets goo")
  }
  else{
    alert("Meow meow meow")
  }
}
