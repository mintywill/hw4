function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}
var freqA = 400;
var freqS = 200;
var freqD = 260;
var freqF = 390;

var oscA, oscS, oscD, oscF;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

//set value var
var value = 0;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}
//set up sound

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
    
//drawing new background+shapes
function draw() {
  background(0);
  fill(120);
  if (playingA&&mouseIsPressed) {
    fill(210, 255, 247);
    noStroke();
    triangle(23, 75, 51, 20, 79, 75);
  }
  if (playingS&&mouseIsPressed) {
    fill(255, 221, 210);
    triangle(23, 20, 51, 75, 79, 20);
  }
  if (playingD&&mouseIsPressed) {
    fill(255, 247, 210);
    triangle(23, 75, 51, 20, 79, 75);
  }
  if (playingF&&mouseIsPressed) {
    fill(210, 216, 255);
    triangle(23, 20, 51, 75, 79, 20);
  }
}

//set the false function
function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false;
    playingS = false;
    playingD = false;
    playingF = false;
  }
}
