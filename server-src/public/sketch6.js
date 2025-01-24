let movingCircles = [];
let movingCirclesL = [];

let tStep = 0.02;
let fade = 255;
let fadeStep = -0.5;

let sceneScale;
let lineWeight = 3;

let slider1, slider2, slider3;

function setup() {
createCanvas(1920, 1080);
  // slider1=createSlider(20, 200, 200);
  // slider2=createSlider(0.3,3,1,0.01);
  // slider3=createSlider(0,3,0);

  slider1 = {value: () => {return map(values.s1, 0, 1024, 20, 200)}}
  slider2 = {value: () => {return map(values.s2, 0, 1024, 0.3, 3)}}
  slider3 = {value: () => {return floor(map(values.s3, 0, 1024, 0, 3))}}

sceneScale = createVector(1,1);
  movingCircles.push(  new MovingCircle(-190, 200, -160, 130, -120, 70, -48, 0) );
movingCircles.push(  new MovingCircle(-170, 200, -140, 130, -100, 70, -46, 3) );
movingCircles.push(  new MovingCircle(-150, 200, -120, 130, -80, 70, -43, 6) );
movingCircles.push(  new MovingCircle(-130, 200, -100, 130, -70, 70, -37, 7) );
movingCircles.push(  new MovingCircle(-110, 200, -80, 130, -60, 70, -30, 8) );
movingCircles.push(  new MovingCircle(-90, 200, -60, 130, -50, 70, -25, 8) );
movingCircles.push(  new MovingCircle(-70, 200, -50, 130, -40, 70, -20, 8) );
movingCircles.push(  new MovingCircle(-50, 200, -40, 130, -30, 70, -15, 9) );
movingCircles.push(  new MovingCircle(-30, 200, -30, 130, -20, 70, -10, 9) );
movingCircles.push(  new MovingCircle(-10, 200, -15, 130, -10, 70, -5, 9) );
movingCircles.push(  new MovingCircle(10, 200, 10, 130, 0, 70, 0, 9) );
movingCircles.push(  new MovingCircle(30, 200, 30, 130, 10, 70, 10, 9) );
movingCircles.push(  new MovingCircle(50, 200, 50, 130, 20, 70, 15, 9) );
movingCircles.push(  new MovingCircle(70, 200, 70, 130, 30, 70, 20, 8) );
movingCircles.push(  new MovingCircle(90, 200, 90, 130, 40, 70, 25, 8) );
movingCircles.push(  new MovingCircle(110, 200, 110, 130, 50, 70, 30, 8) );
movingCircles.push(  new MovingCircle(130, 200, 130, 130, 60, 70, 35, 7) );
movingCircles.push(  new MovingCircle(150, 200, 150, 130, 70, 70, 40, 5) );
movingCircles.push(  new MovingCircle(170, 200, 170, 130, 80, 70, 45, 5) );
movingCircles.push(  new MovingCircle(190, 200, 190, 130, 90, 70, 50, 5) );
movingCircles.push(  new MovingCircle(200, 170, 80, 15, 100, 70, 50, 5) );
movingCirclesL.push(  new MovingCircle(200, 170, 80, 15, 100, 70, 50, 5) );
movingCircles.push(  new MovingCircle(200, 130, 80, 10, 100, 50, 50, 5) );
movingCirclesL.push(  new MovingCircle(200, 130, 80, 10, 100, 50, 50, 5) );
movingCircles.push(  new MovingCircle(200, 110, 80, 20, 100, 30, 50, 4) );
movingCirclesL.push(  new MovingCircle(200, 110, 80, 20, 100, 30, 50, 4) );
movingCircles.push(  new MovingCircle(200, 90, 80, 15, 100, 30, 50, 3) );
movingCirclesL.push(  new MovingCircle(200, 90, 80, 15, 100, 30, 50, 3) );
movingCircles.push(  new MovingCircle(200, 70, 80, 5, 100, 20, 50, 2) );
movingCirclesL.push(  new MovingCircle(200, 70, 80, 5, 100, 20, 50, 2) );
movingCircles.push(  new MovingCircle(200, 50, 80, 0, 100, 15, 50, 1) );
movingCirclesL.push(  new MovingCircle(200, 50, 80, 0, 100, 15, 50, 1) );
movingCircles.push(  new MovingCircle(200, 20, 80, -5, 100, 10, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, 20, 80, -5, 100, 10, 50, 0) );
movingCircles.push(  new MovingCircle(200, -5, 80, -20, 100, -5, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -5, 80, -20, 100, -5, 50, 0) );
movingCircles.push(  new MovingCircle(200, -30, 80, -30, 100, -15, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -30, 80, -30, 100, -15, 50, 0) );
movingCircles.push(  new MovingCircle(200, -55, 80, -35, 100, -30, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -55, 80, -35, 100, -30, 50, 0) );
movingCircles.push(  new MovingCircle(200, -80, 80, -45, 100, -35, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -80, 80, -45, 100, -35, 50, 0) );
movingCircles.push(  new MovingCircle(200, -110, 80, -45, 100, -55, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -110, 80, -45, 100, -55, 50, 0) );
movingCircles.push(  new MovingCircle(200, -130, 80, -60, 100, -65, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -130, 80, -60, 100, -65, 50, 0) );
movingCircles.push(  new MovingCircle(200, -155, 80, -75, 100, -70, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -155, 80, -75, 100, -70, 50, 0) );
movingCircles.push(  new MovingCircle(200, -175, 80, -85, 100, -85, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -175, 80, -85, 100, -85, 50, 0) );
movingCircles.push(  new MovingCircle(200, -200, 80, -85, 100, -100, 50, 0) );
movingCirclesL.push(  new MovingCircle(200, -200, 80, -85, 100, -100, 50, 0) );
movingCircles.push(  new MovingCircle(190, -215, 80, -95, 95, -115, 50, 3) );
movingCirclesL.push(  new MovingCircle(190, -215, 80, -95, 95, -115, 50, 3) );
movingCircles.push(  new MovingCircle(170, -215, 75, -95, 85, -115, 48, 4) );
movingCirclesL.push(  new MovingCircle(170, -215, 75, -95, 85, -115, 48, 4) );
movingCircles.push(  new MovingCircle(155, -215, 65, -95, 85, -115, 45, 4) );
movingCirclesL.push(  new MovingCircle(155, -215, 65, -95, 85, -115, 45, 4) );
movingCircles.push(  new MovingCircle(140, -215, 55, -95, 85, -115, 43, 5) );
movingCirclesL.push(  new MovingCircle(140, -215, 55, -95, 85, -115, 43, 5) );
movingCircles.push(  new MovingCircle(125, -215, 55, -95, 70, -115, 40, 6) );
movingCirclesL.push(  new MovingCircle(125, -215, 55, -95, 70, -115, 40, 6) );
movingCircles.push(  new MovingCircle(110, -215, 50, -95, 55, -115, 37, 8) );
movingCirclesL.push(  new MovingCircle(110, -215, 50, -95, 55, -115, 37, 8) );
movingCircles.push(  new MovingCircle(100, -215, 45, -95, 35, -115, 33, 8) );
movingCirclesL.push(  new MovingCircle(100, -215, 45, -95, 35, -115, 33, 8) );
movingCircles.push(  new MovingCircle(80, -215, 20, -95, 35, -115, 28, 8) );
movingCirclesL.push(  new MovingCircle(80, -215, 20, -95, 35, -115, 28, 8) );
movingCircles.push(  new MovingCircle(64, -215, 20, -95, 27, -115, 22, 9) );
movingCirclesL.push(  new MovingCircle(64, -215, 20, -95, 27, -115, 22, 9) );
movingCircles.push(  new MovingCircle(50, -215, 20, -95, 22, -115, 19, 9) );
movingCirclesL.push(  new MovingCircle(50, -215, 20, -95, 22, -115, 19, 9) );
movingCircles.push(  new MovingCircle(35, -215, 20, -95, 17, -115, 15, 9) );
movingCirclesL.push(  new MovingCircle(35, -215, 20, -95, 17, -115, 15, 9) );
movingCircles.push(  new MovingCircle(15, -215, 10, -95, 10, -115, 9, 9) );
movingCirclesL.push(  new MovingCircle(15, -215, 10, -95, 10, -115, 9, 9) );
movingCircles.push(  new MovingCircle(5, -215, 0, -95, 0, -115, 0, 9) );
  
  
  let copyCount = 20;
  let count = movingCircles.length;
  for(let j = 0; j < copyCount; j++){
    for(let i  = 0; i < count; i++){
      movingCircles.push( movingCircles[i].copy() );
    }
  }
  
  count = movingCirclesL.length;
  for(let j = 0; j < copyCount; j++){
    for(let i  = 0; i < count; i++){
      movingCirclesL.push( movingCirclesL[i].copy() );
    }
  }
  
  
}

function draw() {
//  colorMode(HSB)
// background(slider4.value(), 50,50, slider1.value());
  background(0,slider1.value())
//  colorMode(RGB)
  
  push();
translate(width/2, height/2 - 150)
  
  if(sceneScale.x < 4){
    sceneScale.x += 0.0002 * 10;  
    sceneScale.y += 0.0001 * 10; 
  }
scale(sceneScale.x*width/400,sceneScale.y*height/400);
  
lineWeight = 1/sceneScale.x;

translate(0, 150);

  for(let mc of movingCircles) mc.draw();
  
  push();
  scale(-1,1);
 for(let mc of movingCirclesL) mc.draw();
  pop();
//  colorMode(HSB)
  
  noFill();
stroke(50);
strokeCap(SQUARE)
  strokeWeight(lineWeight);
  let maxR = 20;
  for( let i = 0; i < maxR; i++ ){
    
    // stroke(slider4.value(),50,100, max(0, 100 - i*20));
    stroke(0,0,0,max(0, 100 - i*3));
    // stroke(0,0,0,max(0, 255));
    arc(0,0,100,maxR-i,0,PI);
  }
//  colorMode(RGB)
  
  
  
  
  
  
  tStep -= 0.00002;
  if(tStep < -0.02) tStep = 0.02;
  
  pop();
  fill(0, 0, 0, fade);
  rect(0, 0, width, height);
  
  if(sceneScale.x >= 4){
    fadeStep = 2;
  }
  else {
    fadeStep = -1;
  }
  
  fade += fadeStep;
  
  if(fade < 0) fade = 0;
  else if(fade > 255){
    fade =255;
    fadeStep = -1;
    sceneScale.x = 1;
    sceneScale.y = 1;
    tStep = 0.02;
  }
  
}

function MovingCircle(x1, y1, cx1, cy1, cx2, cy2, x2, y2 ){
  this.t = -0.2;
  this.time = 0;
  this.alpha = random(80, 200);
  this.delay = random(0, 3000);
  this.r = random(10, 40);
  // this.delay = 0;
  this.lastStartTime = 0;
  
  this.type = random([0,3]);
  
  this.draw = function(){
    let r = this.r * slider2.value();
    noFill()
   //  stroke("red");
   // bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
    fill(255,255,255,this.alpha);
    noStroke();
    let x = bezierPoint( x1, cx1, cx2, x2, this.t);
    let y = bezierPoint( y1, cy1, cy2, y2, this.t);
    let tx = bezierTangent(x1, cx1, cx2, x2, this.t);
    let ty = bezierTangent(y1, cy1, cy2, y2, this.t);
    let a = atan2(ty, tx);

    push()
    translate(x,y);
    rotate(a);
    scale(1, 0.3 * (1.1-this.t))
    scale(pow(1-this.t,0.5))
    rectMode(CENTER)
    let tp = this.type;
    if(slider3.value() === 1) tp = 0;
    if(slider3.value() === 2) tp = 1;
   // if(slider3.value() === 3) tp = 2;
    if(slider3.value() === 3) tp = 3;
    if(tp === 0) circle(0,0,r);
    else if(tp === 1) square(0, 0, r);
    else if(tp === 2) {
      stroke(255,255,255,this.alpha);
      strokeWeight(5);
      line(-r, -r, r, r);
    }
    else if(tp === 3){
      triangle(-this.r, 0, 0, r, r, r);
    }
    pop()
    
    this.time = millis();
    if(this.lastStartTime + this.delay < this.time){
      this.t += tStep;
      if(this.t > 1) {
        this.t = -0.2;
        this.lastStartTime = this.time;
      }
      if(this.t < -0.2){
        this.t = 1;
        this.lastStartTime = this.time;
      }
      
      
    }

    
  }
  
  this.copy = function(){
    return new MovingCircle(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
  }
  
}