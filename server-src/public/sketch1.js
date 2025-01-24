let pnts1 = [];
let rotationSlider;
let rSlider;
let angleSlider;
let spiralSlider;
let stepSlider;
let translateYSlider;
let t = 0;
let tSliser;
let wid = 1684;
let heig = 1038;
let tValue = 0.00001, stepValue = 4, stickangleValue = 1.40, coilValue = 600, rotatesValue = 0, angleValue = 0.001;

let val1 = tValue;
let val2 = stepValue;
let val3 = stickangleValue;
let val4 = coilValue;
let val5 = rotatesValue;
let val6 = angleValue;


function setup() {
  createCanvas(2000, 1500);
}



function draw() {

  background(0);
  
  translate(width/2,height/2);
  
  noFill();
  stroke(255);
  
  if( abs(val1 - values.s1) > 100) val1 = values.s1;
  if( abs(val2 - values.s2) > 10) val2 = values.s2;
  if( abs(val3 - values.s3) > 100) val3 = values.s3;
  if( abs(val4 - values.s4) > 2) val4 = values.s4;
  if( abs(val5 - values.s5) > 2) val5 = values.s5;
  if( abs(val6 - values.s6) > 2) val6 = values.s6;

  tValue = lerp(tValue, map(val1, 0, 1024, 0.000001, 0.0001), 0.3);
  stepValue = lerp(stepValue, map( val2, 0, 1024, 1.58, 4.24), 0.1);
  stickangleValue = lerp(stickangleValue, map(val3, 0, 1024, 1.36, 1.42), 0.3);
  coilValue = lerp(coilValue,  map(val4, 0, 1024, 10, 2000), 0.3);
  rotatesValue = lerp(rotatesValue,map(val5, 0, 1024, -3, 3), 0.3);
  angleValue = lerp(angleValue,map(val6, 0, 1024, 0.0001, 0.2), 0.3);
  
  // tValue = lerp(tValue, map(values.s1, 0, 1024, 0.000001, 0.0001), 0.3);
  // stepValue = lerp(stepValue, map( values.s2, 0, 1024, 1.58, 4.24), 0.3);
  // stickangleValue = lerp(stickangleValue, map(values.s3, 0, 1024, 1.36, 1.42), 0.3);
  // coilValue = lerp(coilValue, map(values.s4, 0, 1024, 10, 2000), 0.3);
  // rotatesValue = lerp(rotatesValue, map(values.s5, 0, 1024, -3, 3), 0.3);
  // angleValue = lerp(angleValue, map(values.s6, 0, 1024, 0.0001, 0.2), 0.1);

  for(let i=0; i<width; i+=stepValue){
    
       
    let anglePrev = i * angleValue + rotatesValue;
    let rPrev = (1 - i/width);
    let rotPrev = i*stickangleValue;
    let sPrev = (1 - i/width);
 
    let angleNext = (i+stepValue) * angleValue + rotatesValue;
    let rNext = (1 - (i+stepValue)/width);
    let rotNext = (i+stepValue)*stickangleValue;
    let sNext = (1 - (i+stepValue)/width);
    
    let angle = lerp(anglePrev, angleNext, t);
    let r =  lerp(rPrev, rNext, t);
    let rot =  lerp(rotPrev, rotNext, t);
    let s = lerp(sPrev, sNext, t);
    
    t += tValue;
    if(t > 1) t = 0;
    
    
    
    complexShape(
                 -coilValue*r * cos( angle), coilValue*r * sin( angle) , 
                  rot,
                  s
                );
                
  }
}

function complexShape(x,y,angle=0,zoom=1){
    push();
    translate(x,y);
    rotate(angle);
    scale(zoom);
    
    fill(255);
    stroke(255);
    line(0, -100, 0, 100);
    circle(0,-100,10);
    circle(0,100,10);
    
    
   // circle(0,0,10);
    pop();
  }