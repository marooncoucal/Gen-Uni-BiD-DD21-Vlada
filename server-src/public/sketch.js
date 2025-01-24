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





function setup() {
  createCanvas(2000, 1500);
}



function draw() {

  background(0);
  
  translate(width/2,height/2);
  
  noFill();
  stroke(255);
  
  
  let tValue = map(values.s1, 0, 1024, 0.000001, 0.0001);
  let stepValue = map( values.s2, 0, 1024, 1.58, 4.24);
  let stickangleValue = map(values.s3, 0, 1024, 1.36, 1.42);
  let coilValue = map(values.s4, 0, 1024, 10, 2000);
  let rotatesValue = map(values.s5, 0, 1024, -3, 3);
  let angleValue = map(values.s6, 0, 1024, 0.0001, 0.2);

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