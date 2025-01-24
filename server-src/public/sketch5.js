let petalCount = 10;
let countInPetal = 3;
let petalRandomShift = [];
let petalRandomX = [];
let petalRandomY = [];
let innerRadius = 30;
let petalLength = 200;
let Color = 200;
var slider, slider2, slider3, slider4, slider5;
var bgcolor;

let val5 = slider5;

function setup() {
  createCanvas(2000, 1000);
  for(let i = 0; i < petalCount*countInPetal; i++){
    petalRandomShift[i] = random(0, PI);
    petalRandomX[i] = random(-20, 20);
    petalRandomY[i] = random(-20, 20);
    bgcolor = color(200);
  }
  
 // slider = createSlider(10,200,200);
  slider = {value: () => {return map(values.s4, 0, 1024, 10, 500)}}
  //slider.input(updateSize);
  //slider2 = createSlider(10,255,255);
  slider2 = {value: () => {return map(values.s2, 0, 1024, 20, 255)}}
  //slider2.input(updateSize2);

  slider3 = {value: () => {return map(values.s3, 0, 1024, 1, 10)}}

  slider4 = {value: () => {return map(values.s5, 0, 1024, 5, 30)}}



  
  if( abs(val5 - values.s1) > 100) val5 = values.s1;

  slider5 = lerp(slider5, map(val5, 0, 1024, 0.5, 10), 0.3);

  slider5 = {value: () => {return map(values.s1, 0, 1024, 0.5, 10)}}
}


function updateSize()
{
  petalLength = slider.value()
  innerRadius = slider.value()/8
  
}

function updateSize2()
{
  Color = slider2.value()
  
}


function draw() {
  updateSize();
  updateSize2();
  background(0,30);

  translate(width/2,height/2);

  noFill();
  rotate(slider5.value() * millis()/5000)
  
  for(let i = 0; i < petalCount*countInPetal; i+=countInPetal){
    rotate(2*PI/petalCount*countInPetal);
    petal(i);
    push();
    rotate(-PI/24);
    petal(i+1);
    rotate(PI/24);
    petal(i+2);
    pop();
  }
  strokeWeight(1)
  circle(0, 0, innerRadius*2)
  
}

function petal(index){
  stroke(Color);
  strokeWeight(slider3.value());
  beginShape();
  curveVertex(innerRadius,0);
  curveVertex(innerRadius,0);
  let y = 0;
  for(let x = 20; x < petalLength; x+= 20){
    y = slider4.value() * sin( PI * x/200 * 3 + millis() / 1000 + petalRandomShift[index]);
    curveVertex(x + innerRadius,y);
  }  
  y += petalRandomY[index];
  curveVertex(petalLength + petalRandomX[index]  + innerRadius,y);
  curveVertex(petalLength + petalRandomX[index] + innerRadius,y);
  endShape();
  stroke(255)
  strokeWeight(3)
  point(petalLength + petalRandomX[index] + innerRadius,y);
  
}