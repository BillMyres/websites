
var canvas;
var cols, rows;
var scl = 30;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain;

function setup(){
	w = $("#canvas").width().valueOf();
	h = $("#canvas").height().valueOf();
	canvas = createCanvas(w, h, WEBGL);
	canvas.parent('canvas');
	background(1);
	cols = w / scl;
	  rows = h/ scl;
	
	  terrain = [];
	  for (var x = 0; x < cols; x++) {
		terrain[x] = [];
	  }
}

function draw() {

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(1);
  translate(0, 50);
  rotateX(-PI/3);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    //beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      push();
      translate(x*scl, y*scl, terrain[x][y]);
      box(scl);
      pop();
      //vertex(x*scl, y*scl, terrain[x][y]);
      //vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    //endShape();
  }
}