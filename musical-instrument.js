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
  textAlign(CENTER);
  
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
    fill(255, 251, 244);
    noStroke();
    rect(0, 0, 400, 400);
  }
  if (playingA) {
    fill(255, 228, 214);
    noStroke();
    quad(350,200,200,50,200,350,50,200);
  }
  if (playingS) {
    fill(214, 225, 255);
    noStroke();
    rect(90,90,60,60);
  }
  if (playingD) {
    fill(255, 247, 210);
    noStroke();
    rect(250,250,60,60);
  }
  if (playingF) {
    fill(254, 221, 194);
    noStroke();
    quad(200,50,50,200,200,350,350,200);
//quad(350,200,200,50,200,350,50,200);
  }
    if (playingE) {
    fill(255, 205, 180);
    noStroke();
    quad(350,200,200,50,200,350,50,200);
  }
  if (playingR) {
    fill(231, 227, 255);
    noStroke();
    rect(90,90,60,60);
  }
    if (playingW) {
    fill(255, 237, 227);
    noStroke();
    rect(250,250,60,60);
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
    playingA = false;
    playingS = false;
    playingD = false;
    playingF = false;
    playingW = false;
    playingE = false;
    playingR = false;
  }
}
