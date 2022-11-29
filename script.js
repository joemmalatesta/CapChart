// //TODO: style the chart. Make the grid lines thicker and make it update the color of the line each time it is refreshed. 
// //      for colors of graph, just make an array of colors and access with a random number.
// //TODO: Style buttons and fix into a responsive div / modal
// //TODO: look into obfuscation.


// //TODO: Can add vertical shift to have users enter slope and vertical shift. Should be easy to implement. 




// let chart = document.getElementById("theChart").getContext("2d");
// let slopeField = document.getElementById("slopeAnswer")
// let shiftField = document.getElementById("shiftAnswer")

// let verified = false
// let shift = 0;
// let slope = 0;
// let chartData = [];
// let slopeAnswer


// let currentChart = new Chart(chart, {
//   type: "line",
//   data: {
//     labels: [-2, -1, 0, 1, 2],
//     datasets: [
//       {
//         label: "",
//         data: [slope * -2, slope * -1, 0, slope, slope * 2],
//         borderWidth: 8,
//       },
//     ],
//   },
// });

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function refreshGraph() {
//   currentChart.destroy();
//   slope = randomNumber(1, 6); // 1 through 5
//   shift = randomNumber(-5,6); // -5 through 5
//   let coin = randomNumber(1, 3); //1 or 2
//   if (coin == 1) {
//     slope -= slope * 2; //Make slope negative
//   }
//   buildGraph(slope)
//   correctSlope = slope
//   correctShift = shift
// }


// function buildGraph(slope) {
//   currentChart = new Chart(chart, {
//     type: "line",
//     data: {
//       labels: [-2, -1, 0, 1, 2],
//       datasets: [
//         {
//           label: "CapChart",
//           data: [slope * -2 + shift, slope * -1 + shift, 0 + shift, slope + shift, slope * 2 + shift],
//           borderWidth: 6,
//         },
//       ],
//     },
//     options: {
//         layout: {
//             padding: 10
//         }
//     }
//   });
// }

// function verify() {
//   //Parse int in order for calculations to be made. 6/2 === 3
//   const slopeAnswer = parseInt(document.getElementById("slopeAnswer").value);
//   const shiftAnswer = parseInt(document.getElementById("shiftAnswer").value);
//   if (slopeAnswer === correctSlope && shiftAnswer === correctShift)  {
//     alert("Nice job, Verified.");
//     verified = true
//   } else {
//     slopeField.style.borderColor = "red"
//     shiftField.style.borderColor = "red"
//     slopeField.value = ""
//     shiftField.value = ""
//     refreshGraph();
//   }
// }


// buildGraph(refreshGraph())

const _0xbc1e85=_0x2994;(function(_0x29b3ec,_0xef0dd1){const _0x58bf41=_0x2994,_0x36779a=_0x29b3ec();while(!![]){try{const _0x46e03c=-parseInt(_0x58bf41(0x1a6))/0x1*(parseInt(_0x58bf41(0x19c))/0x2)+-parseInt(_0x58bf41(0x196))/0x3*(-parseInt(_0x58bf41(0x1aa))/0x4)+parseInt(_0x58bf41(0x1a8))/0x5*(parseInt(_0x58bf41(0x19e))/0x6)+parseInt(_0x58bf41(0x19b))/0x7*(-parseInt(_0x58bf41(0x193))/0x8)+-parseInt(_0x58bf41(0x1a7))/0x9*(parseInt(_0x58bf41(0x1a0))/0xa)+parseInt(_0x58bf41(0x19d))/0xb*(-parseInt(_0x58bf41(0x195))/0xc)+-parseInt(_0x58bf41(0x191))/0xd*(-parseInt(_0x58bf41(0x1ab))/0xe);if(_0x46e03c===_0xef0dd1)break;else _0x36779a['push'](_0x36779a['shift']());}catch(_0x4df9a2){_0x36779a['push'](_0x36779a['shift']());}}}(_0x205c,0x4b87f));let chart=document[_0xbc1e85(0x19f)](_0xbc1e85(0x1a3))['getContext']('2d'),slopeField=document['getElementById'](_0xbc1e85(0x19a)),shiftField=document[_0xbc1e85(0x19f)]('shiftAnswer'),verified=![],shift=0x0,slope=0x0,chartData=[],slopeAnswer,currentChart=new Chart(chart,{'type':_0xbc1e85(0x1a9),'data':{'labels':[-0x2,-0x1,0x0,0x1,0x2],'datasets':[{'label':'','data':[slope*-0x2,slope*-0x1,0x0,slope,slope*0x2],'borderWidth':0x8}]}});function _0x205c(){const _0x1e1962=['15xqiybk','line','436JpxKiE','233772PrfPAE','value','1001lFqAPX','CapChart','72NyOLrA','floor','1870116QZUuPc','9939wJxgvf','style','random','Nice\x20job,\x20Verified.','slopeAnswer','330414slHhxD','2uEDcBv','11DjDziq','418926ZGqiyX','getElementById','70YSZGCp','red','shiftAnswer','theChart','destroy','borderColor','351711MdOgra','790173HXkoma'];_0x205c=function(){return _0x1e1962;};return _0x205c();}function randomNumber(_0x378cb5,_0x562cd9){const _0x529655=_0xbc1e85;return Math[_0x529655(0x194)](Math[_0x529655(0x198)]()*(_0x562cd9-_0x378cb5))+_0x378cb5;}function refreshGraph(){const _0x209b7d=_0xbc1e85;currentChart[_0x209b7d(0x1a4)](),slope=randomNumber(0x1,0x6),shift=randomNumber(-0x5,0x6);let _0x5dfcbb=randomNumber(0x1,0x3);_0x5dfcbb==0x1&&(slope-=slope*0x2),buildGraph(slope),correctSlope=slope,correctShift=shift;}function _0x2994(_0x1d47d5,_0x105c6e){const _0x205cf7=_0x205c();return _0x2994=function(_0x29941f,_0x27405a){_0x29941f=_0x29941f-0x190;let _0x153714=_0x205cf7[_0x29941f];return _0x153714;},_0x2994(_0x1d47d5,_0x105c6e);}function buildGraph(_0x883b72){const _0x77e0ef=_0xbc1e85;currentChart=new Chart(chart,{'type':_0x77e0ef(0x1a9),'data':{'labels':[-0x2,-0x1,0x0,0x1,0x2],'datasets':[{'label':_0x77e0ef(0x192),'data':[_0x883b72*-0x2+shift,_0x883b72*-0x1+shift,0x0+shift,_0x883b72+shift,_0x883b72*0x2+shift],'borderWidth':0x6}]},'options':{'layout':{'padding':0xa}}});}function verify(){const _0x3ba873=_0xbc1e85,_0x34da1e=parseInt(document[_0x3ba873(0x19f)](_0x3ba873(0x19a))[_0x3ba873(0x190)]),_0x4bda0d=parseInt(document[_0x3ba873(0x19f)](_0x3ba873(0x1a2))[_0x3ba873(0x190)]);_0x34da1e===correctSlope&&_0x4bda0d===correctShift?(alert(_0x3ba873(0x199)),verified=!![]):(slopeField[_0x3ba873(0x197)]['borderColor']=_0x3ba873(0x1a1),shiftField[_0x3ba873(0x197)][_0x3ba873(0x1a5)]=_0x3ba873(0x1a1),slopeField[_0x3ba873(0x190)]='',shiftField[_0x3ba873(0x190)]='',refreshGraph());}buildGraph(refreshGraph());
