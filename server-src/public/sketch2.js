let t;
let radsX = [];
let radsY = [];
let phaseX = [];
let phaseY = [];
let step = 360 / 10;
let stepY = 12;
let x, y;
let val1 = 0, val2 = 0, val3 = 0, val4 = 0, val5 = 0;
let step2;

document.body.style.backgroundColor = '#2a2c3a'


function setup(){
  createCanvas(2000, 1500);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);

  for(let i = 0; i < 500; i++){
    radsX.push( random(180, 200) );
    radsY.push( random(35, 45) );
    phaseX.push( random(-180, 180) );
    phaseY.push( random(-180, 180) );
  }
}

function draw(){

  val1 = lerp(val1, map(values.s1, 0, 1024, 0, 360), 0.3);
  val2 = lerp(val2, map(values.s2, 0, 1024, 0, 360), 0.3);
  val3 = lerp(val3, map(values.s3, 0, 1024, 0.7, 4), 0.3);
  val4 = lerp(val4, map(values.s4, 0, 1024, 0.6, 5), 0.1);
  val5 = lerp(val5, map(values.s5, 0, 1024, 3, 24), 0.3);

  translate(width/2, height/2);
  scale(0.8);
  translate(-width/2, -height/2)
  stepY=12*val3;
  step2=7*val3;
  t = millis()/20;
  background(230, 30, 23);
  
  for(let i = 0; i < 10; i++){
    push();
    translate(0, -i*step2);
    back(t*val5,i);
    pop();
  }

  noStroke()
  
  let cx = 100 * cos(t) - 100;
  let cy = 200 * sin(t/4) + 50;
  let sat = 20 * sin(t);

  radialGradient(
    width/2-cx, height/2-cy, 0,//Start pX, pY, start circle radius
    width/2-cx, height/2-cy, 380,//End pX, pY, End circle radius
    color(val1, 80 + sat, 100, 80), //Start color
    color(val2, 80 - sat, 100, 80) //End color
  );
  ellipse(width/2, height/2, 400, 400);
  

  for(let i = 0; i < 10; i++){
    push();
    translate(0, -i*step2);
    front(t*val5,i);
    pop();
  }
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}

function back(t,index){
  push();
  noFill();
  // t = millis()/5;
  stroke(50);
  strokeWeight(val4);
  translate(width/2, height/2);
  let yStep, i;
  for(let j = 0; j < 3; j++){
    yStep = (j + 0.5) * 360/step * stepY - stepY;
    i = (j + 0.5) * 360 / step - 1;
    beginShape();
    for(let angle = 180 - step; angle <= 360 + step; angle += step, yStep += stepY, i++){
     addVertex(t,angle,i,yStep,index);
    }  
    endShape();
  }
  pop();
}

function front(t,index){
  push();
  noFill();
  // t = millis()/5;
  stroke(90);
  strokeWeight(val4);
  translate(width/2, height/2);
  let yStep, i;
  for(let j = 0; j < 3; j++){
     yStep = j === 0 ? 0 : j * 360/step * stepY - stepY;
     i = j === 0 ? 0 : j * 360 / step - 1;
    beginShape();
    for(let angle = j === 0 ? 0 : -step; angle <= 180 + step; angle += step, yStep += stepY, i++){
     addVertex(t,angle,i,yStep,index);
    }
    endShape();
  }
  pop();
  //noLoop();
}

function addVertex(t,angle,i, yStep,index){
    let rY = radsY[i] * 1 + 3*map(val5,1,20,1,5)*sin(t/2 + phaseY[i]);
    y = rY * sin(angle) - yStep + stepY * 1.5 * 360/step + 30;
  
    //let rX = radsX[i] * (1 + 0.01*sin(t + phaseX[i])) * (300 - pow((i-15)*0.75,2))/250;
    let rX = 250*map(val3,1,3,1,1.3) * (1-(abs(y - index*step2) / 400))*(1 + 0.01*sin(t + phaseX[i]));
    
    x = rX * cos(angle);
    
    curveVertex(x,y);
}