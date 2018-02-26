//sunset lover-petit biscuit<3
//https://www.youtube.com/watch?v=FzjQS2n1RCQ ref

//Q- A A S D D S A  D AF- F  A A F W   A- A A E D D S A D AF F- A RD S 
//repeat

function setup() { 
  createCanvas(400, 400);
} 

var freqQ = 740;
var freqA = 740;
var freqS = 840;
var freqD = 932;
var freqF = 700;
var freqW = 623;
var freqE = 1120;
var freqR = 1000;
var r=0;

var oscA, oscS, oscD, oscF;

var playingQ = false;
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingW = false;
var playingE = false;
var playingR = false;

//set value var
var value = 0;

function setup() {
  backgroundColor = color(255, 0, 255);

  oscA = new p5.Oscillator();
  oscA.setType('sine');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscQ = new p5.Oscillator();
  oscQ.setType('sine');
  oscQ.freq(freqQ);
  oscQ.amp(0);
  oscQ.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('sine');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('sine');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('sine');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscW = new p5.Oscillator();
  oscW.setType('sine');
  oscW.freq(freqW);
  oscW.amp(0);
  oscW.start();
  
  oscE = new p5.Oscillator();
  oscE.setType('sine');
  oscE.freq(freqE);
  oscE.amp(0);
  oscE.start();
  
  oscR = new p5.Oscillator();
  oscR.setType('sine');
  oscR.freq(freqR);
  oscR.amp(0);
  oscR.start();
}
//set up sound

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'Q') {
    osc = oscQ;
    playingQ = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'W') {
    osc = oscW;
    playingW = true;
  } else if (key == 'E') {
    osc = oscE;
    playingE = true;
  } else if (key == 'R') {
    osc = oscR;
    playingR = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

//drawing new background+shapes
function draw() {
  background(255);
  createCanvas(400, 400);
  fill(120);
//BACKGROUND
  if (playingQ) {
    fill(255, 137, 131);
    translate(200, 200);
    noStroke();
    rect(-400, -400, 800, 800);
  }
  if (playingA) {
    fill(255, 229, 209);
    noStroke();
    rotate(r / 3);
    r += (0.05,0.08)
    quad(150,0,0,-150,0,150,-150,0);
  }
  
  if (playingS) {
    fill(228, 217, 255);
    noStroke();
    rect(-110,-110,60,60);
    
    fill(197, 237, 254);
    noStroke();
    rect(50,50,60,60);
  }
  if (playingD) {
    fill(228, 217, 255);
    noStroke();
    rect(random(-130,-90),random(-130,-90),60,60);
    
    fill(197, 237, 254);
    noStroke();
    rect(50,50,60,60);
    rect(random(30,70),random(30,70),60,60);
  }
  if (playingF) {
    fill(255, 205, 180);
    noStroke();
    rotate(r / 3.0);
    r += 0.1;
  }
    if (playingE) {
    fill(255, 224, 224);
    noStroke();
    quad(0,-150,-150,0,0,150,150,0);
  }
  if (playingR) {
    fill(255, 248, 214);
    noStroke();
    quad(0,-150,-150,0,0,150,150,0);
  }
    if (playingW) {
    fill(211, 254, 243);
    noStroke();
    rect(random(-130,-90),random(-130,-90),60,60);
    
    fill(233, 211, 254);
    noStroke();
    rect(50,50,60,60);
    rect(random(30,70),random(30,70),60,60);
  }
}
//set the false function
function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
 } else if (key == 'Q') {
    osc = oscQ;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  } else if (key == 'W') {
    osc = oscW;
  } else if (key == 'E') {
    osc = oscE;
  } else if (key == 'R') {
    osc = oscR;
  }
  if (osc) {
    osc.amp(0, 0.5);
//   playingA = false;
//   playingS = false;
    playingD = false;
    playingF = false;
    playingW = false;
    playingE = false;
    playingR = false;
  }
}
