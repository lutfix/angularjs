// =============================================
// canvas 1 
// =============================================
var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 250;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("column chart, just block", canvas.width/3, 10);
// setting variable
var data = [10, 80, 60, 90, 60, 120, 70, 40, 68, 97]; //for block chart
var x = 10; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// draw chart
context.fillStyle = 'rgb(0,122,125)';
for (var i = 0; i < data.length; i++) {
  var v = data[i];
  context.fillRect(x, canvas.height - (v + 10), width, v);
  x += width + 10;
}

// =============================================
// canvas 2 
// =============================================
var canvas = document.getElementById('canvas2');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 250;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("column chart with value show", canvas.width/3, 10);
// setting variable
var data = [10, 80, 60, 90, 60, 120, 70, 40, 68, 97]; //for block chart
var x = 10; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// draw chart
for (var i = 0; i < data.length; i++) {
  context.fillStyle = 'rgb(99,50,178)';
  var v = data[i];
  context.fillRect(x, canvas.height - (v + 10), width, v);
  // show value
  context.textAlign='center';
  context.fillStyle = 'orange';
  context.fillText(v, (width * i) + (width / 2) + (margin * (i + 1)), canvas.height - (v + 15));
  x += width + 10;
}

// =============================================
// canvas 3 
// =============================================
var canvas = document.getElementById('canvas3');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("column chart with ruler", canvas.width/3, 10);
// setting data
var data = [10, 80, 60, 90, 60, 100, 70, 40, 68];
// setting variable
var x = 30; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// grid
var grid = 1
context.strokeStyle='rgb(180,180,180)';
context.fillStyle='rgb(180,180,180)';
// base ruler
context.beginPath();
context.moveTo(28.5, 59);
context.lineTo(28.5, canvas.height - (20 * grid) - 20.5);
context.lineTo(canvas.width-100, canvas.height - (20 * grid) - 20.5);
context.stroke();
while (grid < 12) {
  context.beginPath();
  context.moveTo(25.5, canvas.height - (20 * grid) - 20.5);
  context.lineTo(28, canvas.height - (20 * grid) - 20.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.textBaseline='middle';
  context.fillText((grid - 1)*10, 23, canvas.height - (20 * grid)-20);
  grid++;
}
// draw chart
for (var i = 0; i < data.length; i++) {
  context.fillStyle = 'rgb(31,72,124)';
  var v = data[i];
  // new value x = 40
  context.fillRect(x, canvas.height - (v*2 + 40), width, v*2);
  // show value
  context.textAlign='center';
  context.fillStyle = 'white';
  context.fillText(v, (width * i) + (width / 2) + (margin * (i + 1)+ 20), canvas.height - (v + 45)); //30 refers to x - 10 (margin)
  x += width + 10;
}

// =============================================
// canvas 4 
// =============================================
var canvas = document.getElementById('canvas4');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("multi color block", canvas.width/3, 10);
// setting data
var data = [10, 80, 60, 90, 60, 100, 70, 40, 68];
// setting variable
var x = 30; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// grid
var grid = 1
context.strokeStyle='rgb(180,180,180)';
context.fillStyle='rgb(180,180,180)';
// base ruler
context.beginPath();
context.moveTo(28.5, 59);
context.lineTo(28.5, canvas.height - (20 * grid) - 20.5);
context.lineTo(canvas.width-100, canvas.height - (20 * grid) - 20.5);
context.stroke();
while (grid < 12) {
  context.beginPath();
  context.moveTo(25.5, canvas.height - (20 * grid) - 20.5);
  context.lineTo(28, canvas.height - (20 * grid) - 20.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.textBaseline='middle';
  context.fillText((grid - 1)*10, 23, canvas.height - (20 * grid)-20);
  grid++;
}
// draw chart
for (var i = 0; i < data.length; i++) {
  var v = data[i];
  // new value x = 40
  switch (i) {
    case 0:
      context.fillStyle = 'rgb(0,122,125)';
      break;
    case 1:
      context.fillStyle = 'rgb(230,80,60)';
      break;
    case 2:
      context.fillStyle = 'rgb(250,150,80)';
      break;
    case 3:
      context.fillStyle = 'rgb(100,75,123)';
      break;
    case 4:
      context.fillStyle = 'rgb(79,129,200)';
      break;
    case 5:
      context.fillStyle = 'rgb(79,129,80)';
      break;
    case 6:
      context.fillStyle = 'rgb(200,20,80)';
      break;
    case 7:
      context.fillStyle = 'rgb(220,220,80)';
      break;
    case 8:
      context.fillStyle = 'rgb(50,20,80)';
      break;
    default:
      context.fillStyle = 'black';
      break;
  }
  context.fillRect(x, canvas.height - (v * 2 + 40), width, v * 2);

  // show value
  context.textAlign='center';
  context.fillStyle = 'white';
  context.fillText(v, (width * i) + (width / 2) + (margin * (i + 1)+ 20), canvas.height - (v + 45)); //30 refers to x - 10 (margin)
  x += width + 10;
}


// =============================================
// canvas 5 
// =============================================
var canvas = document.getElementById('canvas5');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("chart with grid", canvas.width/3, 10);
// setting data
var data = [10, 80, 60, 90, 60, 100, 70, 40, 68];
// setting variable
var x = 30; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// grid
var grid = 1
context.strokeStyle='rgb(180,180,180)';
context.fillStyle='rgb(180,180,180)';
// base ruler
context.beginPath();
context.moveTo(28.5, 59);
context.lineTo(28.5, canvas.height - (20 * grid) - 20.5);
context.lineTo(canvas.width-100, canvas.height - (20 * grid) - 20.5);
context.stroke();
while (grid < 12) {
  context.beginPath();
  context.moveTo(25.5, canvas.height - (20 * grid) - 20.5);
  context.lineTo(canvas.width-100, canvas.height - (20 * grid) - 20.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.textBaseline='middle';
  context.fillText((grid - 1)*10, 23, canvas.height - (20 * grid)-20);
  grid++;
}
// draw chart
for (var i = 0; i < data.length; i++) {
  var v = data[i];
  // new value x = 40
  switch (i) {
    case 0:
      context.fillStyle = 'rgb(0,122,125)';
      break;
    case 1:
      context.fillStyle = 'rgb(230,80,60)';
      break;
    case 2:
      context.fillStyle = 'rgb(250,150,80)';
      break;
    case 3:
      context.fillStyle = 'rgb(100,75,123)';
      break;
    case 4:
      context.fillStyle = 'rgb(79,129,200)';
      break;
    case 5:
      context.fillStyle = 'rgb(79,129,80)';
      break;
    case 6:
      context.fillStyle = 'rgb(200,20,80)';
      break;
    case 7:
      context.fillStyle = 'rgb(220,220,80)';
      break;
    case 8:
      context.fillStyle = 'rgb(50,20,80)';
      break;
    default:
      context.fillStyle = 'black';
      break;
    }
    context.fillRect(x, canvas.height - (v * 2 + 40), width, v * 2);
  // show value
  context.textAlign='center';
  context.fillStyle = 'white';
  context.fillText(v, (width * i) + (width / 2) + (margin * (i + 1)+ 20), canvas.height - (v + 45)); //30 refers to x - 10 (margin)
  x += width + 10;
}


// ==================================================
// canvas 6
// ==================================================

// data max = 10
var data = [
  ['Data1', 5.3, 2, 4],
  ['Data2', 3, 5, 2],
  ['Data3', 9, 6.7, 8.2],
  ['Data4', 1, 7, 8],
  ['Data5', 8.6, 4.1, 2.9]
]
var canvas = document.getElementById('canvas6');
canvas.width = 500;
canvas.height = 260;
canvas.style.border = '1px rgb(190,190,190) solid';
var context = canvas.getContext('2d');
// grid
// set line width with 1 and +0.5 to make line width 1px thickness
context.lineWidth = 1;
context.strokeStyle = 'rgb(190,190,190)';
context.fillStyle = 'rgb(120,120,120)';
context.font = '8 sans-serif';
context.textBaseline = "middle";
// make line 10 grid line start in 0
// each line 1 = 20
var grid = 1
while (grid < 12) {
  context.beginPath();
  context.moveTo(30.5, canvas.height - (20 * grid) - 0.5);
  context.lineTo(canvas.width - 100.5, canvas.height - (20 * grid) - 0.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.fillText(grid - 1, 25, canvas.height - (20 * grid));
  grid++;
}
// make diagram
var x = 40; //30 + 10 for indent
var w = 17; //15 for width block 2 for space
for (var i = 0; i < data.length; i++) {
  for (var j = 1; j < data[i].length; j++) {
    var element = data[i][j];
    // coloring block
    // height 1 = 20
    context.textAlign = 'center';
    switch (j) {
      case 1:
        context.fillStyle = 'rgb(91,155,213)';
        context.fillRect(x, canvas.height - ((element * 20) + 20), 15, element * 20);
        // show value at the top of block
        context.fillText(element, x + 7, canvas.height - ((element * 20) + 25));
        break;
      case 2:
        context.fillStyle = 'rgb(237,125,49)';
        context.fillRect(x, canvas.height - ((element * 20) + 20), 15, element * 20);
        // show value at the top of block
        context.fillText(element, x + 7, canvas.height - ((element * 20) + 25));
        // show value of data[i][0] = text value
        context.fillStyle = 'black';
        context.fillText(data[i][0], x + 8, canvas.height - 13);
        break;
      case 3:
        context.fillStyle = 'rgb(165,165,165)';
        context.fillRect(x, canvas.height - ((element * 20) + 20), 15, element * 20);
        // show value at the top of block
        context.fillText(element, x + 7, canvas.height - ((element * 20) + 25));
        x += w; //space in the end of block group
        break;
      default:
        context.fillStyle = 'black';
        context.fillRect(x, canvas.height - ((element * 20) + 20), 15, element * 20);
        break;
    }
    x += w;
  }
}

// legenda
context.textBaseline = 'top';
context.textAlign = 'left';
context.font = '10px sans-serif';
// legenda 1
context.fillStyle = 'rgb(91,155,213)';
context.fillRect(canvas.width - 70, 35, 10, 10);
context.fillText("Series 1", canvas.width - 55, 35);
// legenda 2
context.fillStyle = 'rgb(237,125,49)';
context.fillRect(canvas.width - 70, 55, 10, 10);
context.fillText("Series 2", canvas.width - 55, 55);
// legenda 3
context.fillStyle = 'rgb(165,165,165)';
context.fillRect(canvas.width - 70, 75, 10, 10);
context.fillText("Series 3", canvas.width - 55, 75);

// title on the top
context.fillStyle = 'green';
context.fillText("multidimension array chart", (canvas.width / 2) - 50, 15);

// ==================================================
// canvas 7
// ==================================================

// data max = 10
var datax = [
  ['Data1', 5.3, 2, 4],
  ['Data2', 3, 5, 2],
  ['Data3', 9, 6.7, 8.2],
  ['Data4', 1, 7, 8],
  ['Data5', 8.6, 4.1, 2.9]
]
var canvas = document.getElementById('canvas7');
canvas.width = 500;
canvas.height = 260;
canvas.style.border = '1px rgb(190,190,190) solid';
var context = canvas.getContext('2d');
// grid
// set line width with 1 and +0.5 to make line width 1px thickness
context.lineWidth = 1;
context.strokeStyle = 'rgb(190,190,190)';
context.fillStyle = 'rgb(120,120,120)';
context.font = '8px sans-serif';
context.textBaseline = "middle";
// make line 10 grid line start in 0
// each line 1 = 20
var grid = 1
while (grid < 12) {
  context.beginPath();
  context.moveTo(30.5, canvas.height - (20 * grid) - 0.5);
  context.lineTo(canvas.width - 100.5, canvas.height - (20 * grid) - 0.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.textBaseline='middle';
  context.fillText((grid - 1) * 10 + '%', 25, canvas.height - (20 * grid));
  grid++;
}
// make diagram
// height 1 = 20
var x = 40; //30 + 10 for indent
var w = 17; //15 for width block 2 for space
for (var i = 0; i < datax.length; i++) {
  for (var j = 1; j < datax[i].length; j++) {
    var element = datax[i][j];
    var sum = datax[i][1] + datax[i][2] + datax[i][3]; //get persen
    var result1 = (datax[i][1] / sum) * 200;
    var result2 = (datax[i][2] / sum) * 200;
    var result3 = (datax[i][3] / sum) * 200;
    var y_basic1 = canvas.height - (result1 + 20);
    var y_basic2 = canvas.height - (result2 + result1 + 20);
    var y_basic3 = canvas.height - (result3 + result2 + result1 + 20);
    context.textAlign = 'center';
    switch (j) {
      case 1:
        context.fillStyle = 'rgb(91,155,213)';
        context.fillRect(x, y_basic1, 25, result1);
        // show value inside the block
        context.fillStyle = 'black';
        context.fillText(element, x + 12, y_basic1 + 10);
        break;
      case 2:
        context.fillStyle = 'rgb(237,125,49)';
        context.fillRect(x, y_basic2, 25, result2);      // show value at the top of block
        context.fillStyle = 'black';
        context.fillText(element, x + 12, y_basic2 + 10);
        // show value of datax[i][0] = text value
        // context.fillStyle = 'black';
        context.textAlign='center';
        
        context.fillText(datax[i][0], x + 13, canvas.height - 13);
        break;
      case 3:
        context.fillStyle = 'rgb(165,165,165)';
        context.fillRect(x, y_basic3, 25, result3);       // show value at the top of block
        context.fillStyle = 'black';
        context.fillText(element, x + 12, y_basic3 + 10);
        x += w; //space in the end of block group
        break;
      default:
        context.fillStyle = 'black';
        context.fillRect(x, canvas.height - ((element * 20) + 20), 15, element * 20);
        break;
    }
  }
  x += w;
}

// legenda
context.textBaseline = 'top';
context.textAlign = 'left';
context.font = '10px sans-serif';
// legenda 1
context.fillStyle = 'rgb(91,155,213)';
context.fillRect(canvas.width - 70, 35, 10, 10);
context.fillText("Series 1", canvas.width - 55, 35);
// legenda 2
context.fillStyle = 'rgb(237,125,49)';
context.fillRect(canvas.width - 70, 55, 10, 10);
context.fillText("Series 2", canvas.width - 55, 55);
// legenda 3
context.fillStyle = 'rgb(165,165,165)';
context.fillRect(canvas.width - 70, 75, 10, 10);
context.fillText("Series 3", canvas.width - 55, 75);

// title on the top
context.fillStyle = 'green';
context.fillText("100% chart model", (canvas.width / 2) - 50, 15);

// =============================================
// canvas 8 
// =============================================
var canvas = document.getElementById('canvas8');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("custom", canvas.width / 3, 10);
// setting data
var data = [10, 80, 60, 90, 60, 100, 70, 40, 68];
// setting variable
var x = 30; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// coloring with gradient
var gradient = context.createLinearGradient(30, 0, canvas.width, 0);
gradient.addColorStop(0, 'rgb(0, 122, 125)');
gradient.addColorStop(1 / 7, 'rgb(230, 80, 60)');
gradient.addColorStop(2 / 7, 'rgb(250, 150, 80)');
gradient.addColorStop(3 / 7, 'rgb(100, 75, 123)');
gradient.addColorStop(4 / 7, 'rgb(79, 129, 200)');
gradient.addColorStop(5 / 7, 'rgb(79, 129, 80)');
gradient.addColorStop(6 / 7, 'rgb(200, 20, 80)');
gradient.addColorStop(7 / 7, 'rgb(220, 220, 80)');
gradient.addColorStop(1, 'rgb(50, 20, 80)');
// draw chart
for (var i = 0; i < data.length; i++) {
  var v = data[i];
  // new value x = 40
  context.fillStyle = 'black';
  context.fillRect(x, canvas.height - 240, width, 200); // set background
  context.fillStyle = gradient;
  context.fillRect(x, canvas.height - (v * 2 + 40), width, v * 2);
  context.strokeStyle = 'white';

  // show value
  context.textAlign = 'center';
  context.fillStyle = 'white';
  context.fillText(v, (width * i) + (width / 2) + (margin * (i + 1) + 20), canvas.height - (v + 40)); //30 refers to x - 10 (margin)
  context.fillStyle = 'black';
  context.fillText(i + 1, (width * i) + (width / 2) + (margin * (i + 1) + 20), canvas.height - 25);
  x += width + 10;
}

// =============================================
// canvas 9 
// =============================================
var canvas = document.getElementById('canvas9');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 400;
canvas.style.border = '1px orange solid';
// title chart
context.fillText("column chart horizongal mode", canvas.width / 3, 10);
// setting variable
var data = [10, 81, 56, 90, 60, 120, 70, 47, 68, 97]; //for block chart
var x = 10; //x axis
var width = 30; // width block
var margin = 10; // set space between block
// make grid
context.strokeStyle = 'rgb(200,200,200)';
context.beginPath();
context.moveTo(canvas.width - 60, canvas.height - 40.5);
context.lineWidth = '2';
context.lineTo(50.5, canvas.height - 40.5);
context.lineTo(50.5, canvas.height - 330.5);
context.lineTo(canvas.width - 60, canvas.height - 330.5);
context.stroke();
context.lineWidth = '1';
for (var grid = 0; grid < 14; grid++) {
  context.beginPath();
  context.moveTo(50.5 + (grid * 30), canvas.height - 330.5);
  context.lineTo(50.5 + (grid * 30), canvas.height - 37.5);
  context.stroke();
  context.textAlign='center';
  context.fillText(grid*10, 50.5 + (grid * 30), canvas.height - 27.5);
}
// draw chart
for (var i = 0; i < data.length; i++) {
  var v = data[i];
  context.fillStyle = 'rgb(0,122,125)';
  context.fillRect(50, canvas.height - 60 - (width * i), data[i]*3, 20);
  context.textAlign='right';
  context.textBaseline = 'top';
  context.fillText('Data '+(i+1), 45, canvas.height - 55 - (width * i));
  context.beginPath();
  context.moveTo(47, canvas.height - 50.5 - (width * i));
  context.lineTo(50, canvas.height - 50.5 - (width * i));
  context.stroke();
  context.fillStyle='yellow';
  context.fillText(v, (data[i] * 3)+40 , canvas.height - 55 - (width * i));
}

// =============================================
// canvas 10 
// =============================================
var canvas = document.getElementById('canvas10');
var context = canvas.getContext('2d');
// setting canvas
canvas.width = 500;
canvas.height = 250;
canvas.style.border = '1px orange solid';
// title chart
context.textAlign='center';
context.fillText("column chart split center", canvas.width / 2, 10);
var data = [
  [20,180],
  [160,150],
  [190,100],
  [160,10],
  [80,30],
  [144,178]
];
context.fillStyle = 'black';
context.strokeStyle = 'rgb(220,220,220)';
for (var k = 1; k < 8; k++) {
  // male ruler
  context.beginPath();
  context.moveTo((canvas.width / 2) + (30 * k) + 1.5, canvas.height - 210.5);
  context.lineTo((canvas.width / 2) + (30 * k) + 1.5, canvas.height - 37);
  context.stroke();
  context.textAlign = 'center';
  context.fillText(30 * k, (canvas.width / 2) + (30 * k) + 1.5, canvas.height - 27);
  // female ruler
  context.beginPath();
  context.moveTo((canvas.width / 2) - (30 * k) - 1.5, canvas.height - 210.5);
  context.lineTo((canvas.width / 2) - (30 * k) - 1.5, canvas.height - 37);
  context.stroke();
  context.textAlign = 'center';
  context.fillText(30 * k, (canvas.width / 2) - (30 * k) - 1.5, canvas.height - 27);
}
// zero
context.fillText(0, (canvas.width / 2), canvas.height - 27);
// legenda
var width = 25; 
for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].length; j++) {
    // male
    // 60 = margin chart from bottom
    context.fillStyle = 'blue';
    context.fillRect((canvas.width / 2) + 1, canvas.height - 60 - (width * i), data[i][0], 20);
    context.beginPath();
    context.moveTo((canvas.width / 2) + 1, canvas.height - 38.5);
    context.lineTo(canvas.width-38, canvas.height - 38.5);
    context.stroke();
    context.textBaseline = 'middle';
    context.textAlign = 'left';
    context.fillText(data[i][0], (canvas.width / 2) + data[i][0] + 10, canvas.height - 50 - (width * i));

    // female
    context.fillStyle = 'red';
    context.lineWidth='2';
    context.fillRect((canvas.width / 2) - data[i][1] - 1, canvas.height - 60 - (width * i), data[i][1], 20);
    context.beginPath();
    context.moveTo((canvas.width / 2) - 1, canvas.height - 38.5);
    context.lineTo(38, canvas.height - 38.5);
    context.stroke();
    context.textBaseline = 'middle';
    context.textAlign = 'right';
    context.fillText(data[i][1], (canvas.width / 2) - data[i][1] - 10, canvas.height - 50 - (width * i));
  }
}
// =============================================
// canvas 11 
// =============================================
var canvas = document.getElementById('canvas11');
canvas.width = 500;
canvas.height = 200;
canvas.style.border = '1px orange solid'
var context = canvas.getContext('2d');
// title chart
context.textAlign = 'center';
context.fillText("basic line chart", canvas.width / 2, 10);
var data = [10, 80, 60, 90, 60, 120, 70, 40, 68, 97];
var width = 30;
context.strokeStyle = 'blue';
context.beginPath();
for (var j = 0; j < data.length; j++) {
  var v = data[j];
  var margin = 10;
  context.lineTo((width * j) + (width / 2) + (margin * (j + 1)), canvas.height - (v + 10));
}
context.stroke();
// =============================================
// canvas 12 
// =============================================
var canvas = document.getElementById('canvas12');
canvas.width = 500;
canvas.height = 200;
canvas.style.border = '1px orange solid'
var context = canvas.getContext('2d');
// title chart
context.textAlign = 'center';
context.fillText("line chart with point and value", canvas.width / 2, 10);
var data = [10, 80, 60, 90, 60, 120, 70, 40, 68, 97];
var width = 30;
context.strokeStyle = 'green';
context.lineWidth=3;

context.beginPath();
for (var j = 0; j < data.length; j++) {
  var v = data[j];
  var margin = 10;
  context.lineTo((width * j) + (width / 2) + (margin * (j + 1)), canvas.height - (v + 10));
  // text on top
  context.textBaseline = "middle";
  context.textAlign = 'center';
  context.fillText(v, (width * j) + (width / 2) + (margin * (j+1)), canvas.height - (v + 25));
  // add point
  context.fillStyle='green';
  context.fillRect((width * j) + (width / 2) + (margin * j)+8, canvas.height - (v + 12),5,5);
  
}
context.stroke();
// =============================================
// canvas 13 
// =============================================
var canvas = document.getElementById('canvas13');
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '1px orange solid'
var context = canvas.getContext('2d');
// title chart
context.textAlign = 'center';
context.fillText("line chart with grid", canvas.width / 2, 10);
var data = [10, 80, 60, 90, 60, 120, 70, 40, 68, 97];
// make line 10 grid line start in 0
// each line 1 = 20
context.lineWidth = 1;
context.strokeStyle = 'rgb(190,190,190)';
context.fillStyle = 'rgb(120,120,120)';
var grid = 1;
context.textBaseline='middle';
while (grid < 12) {
  context.beginPath();
  context.moveTo(30.5, canvas.height - (20 * grid) - 30.5);
  context.lineTo(canvas.width - 50.5, canvas.height - (20 * grid) - 30.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.fillText((grid-1)*20, 25, canvas.height - (20 * grid) - 30.5);
  grid++;
}
// draw chart
var width = 30;
context.strokeStyle = 'purple';
context.lineWidth=3;
context.beginPath();
for (var j = 0; j < data.length; j++) {
  var v = data[j];
  var margin = 10;
  context.lineTo((width * j) + (width / 2) + (margin * (j + 5)), canvas.height - (v + 50));
  // text on top
  context.textBaseline = "middle";
  context.textAlign = 'center';
  context.fillText(v, (width * j) + (width / 2) + (margin * (j+5)), canvas.height - (v + 60));
  // add point
  context.fillStyle='purple';
  context.fillRect((width * j) + (width / 2) + (margin * (j+4)+8), canvas.height - (v + 52),5,5);
  // horizontal explanation
  context.fillStyle = 'rgba(0,0,0,0.1)'; 
  context.fillRect((width * j) + (width / 2) + (margin * (j+4)+10), canvas.height - 250,1,200);
  context.fillStyle='green';
  context.textAlign = 'center';
  context.fillText('data'+(j+1), (width * j) + (width) + (margin * (j + 4)), canvas.height - 40);
}
context.stroke();
// =============================================
// canvas 14 
// =============================================
var canvas = document.getElementById('canvas14');
canvas.width = 500;
canvas.height = 300;
canvas.style.border = '1px orange solid'
var context = canvas.getContext('2d');
// title chart
context.textAlign = 'center';
context.fillText("line chart with grid", canvas.width / 2, 10);
var data = [
  [10, 40, 60], 
  [90, 60, 120],
  [70, 40, 100], 
  [97, 66, 154], 
  [50, 34, 88], 
  [90,76,113]
];
// make line 10 grid line start in 0
// each line 1 = 20
context.lineWidth = 1;
context.strokeStyle = 'rgb(190,190,190)';
context.fillStyle = 'rgb(120,120,120)';
var grid = 1;
context.textBaseline='middle';
while (grid < 12) {
  context.beginPath();
  context.moveTo(30.5, canvas.height - (20 * grid) - 30.5);
  context.lineTo(canvas.width - 100.5, canvas.height - (20 * grid) - 30.5);
  context.stroke();
  // text in left line
  context.textAlign = 'right';
  context.fillText((grid-1)*20, 25, canvas.height - (20 * grid) - 30.5);
  grid++;
}
// draw chart
var width = 40;
var tahun = 2010;
context.strokeStyle = 'purple';
context.lineWidth=3;
for (var i = 0; i < data.length; i++) {
  context.beginPath();
  for (var j = 0; j < data.length; j++) {
    switch (i) {
      case 0:
      context.strokeStyle ='rgb(91, 155, 213)';
      context.fillStyle ='rgb(91, 155, 213)';
      break;
    case 1:
      context.strokeStyle ='rgb(237, 125, 49)';
      context.fillStyle ='rgb(237, 125, 49)';
      break;
    case 2:
      context.strokeStyle ='rgb(165, 165, 165)';
      context.fillStyle ='rgb(165, 165, 165)';
      break;
    default:
      context.strokeStyle = 'black';
      break;
  }
  context.lineTo((width * j) + (width) + (margin * (j + 5)), canvas.height - (data[j][i] + 50));
  // node
  context.fillRect((width * j) + (width) + (margin * (j + 5)-2), canvas.height - (data[j][i] + 53),5,5);
  // grid vertical
  context.fillStyle = 'rgba(190,190,190,0.1)'; 
  context.fillRect((width * j) + (width) + (margin * (j + 5)), 50,1,200);
  // horizontal explanation
  context.textAlign='center';
  context.fillStyle='grey';
  context.fillText(tahun+j, (width * j) + (width) + (margin * (j + 5)),canvas.height - 40);
  // top explanation
    context.fillStyle = 'black';
    context.fillText(data[j][i], (width * j) + (width) + (margin * (j + 5)), canvas.height - (data[j][i] + 57));
}
context.stroke();

}
// legenda
context.textBaseline = 'top';
context.textAlign = 'left';
context.font = '10px sans-serif';
// legenda 1
context.fillStyle = 'rgb(91,155,213)';
context.fillRect(canvas.width - 70, 35, 10, 10);
context.fillText("Series 1", canvas.width - 55, 35);
// legenda 2
context.fillStyle = 'rgb(237,125,49)';
context.fillRect(canvas.width - 70, 55, 10, 10);
context.fillText("Series 2", canvas.width - 55, 55);
// legenda 3
context.fillStyle = 'rgb(165,165,165)';
context.fillRect(canvas.width - 70, 75, 10, 10);
context.fillText("Series 3", canvas.width - 55, 75);
