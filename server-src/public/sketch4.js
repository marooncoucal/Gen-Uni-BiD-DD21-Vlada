let lines = [];
let linesCount = 12;
let newLinesCount = linesCount;
let t = 0;
let ropeAmp = 300;
let ropeShift;
let amplitudeSlider = {val: 0.1, raw: 0}; //переменная для слайдера
let rFrequencySlider = {val: 1, raw: 0};
let tSlider = {val: 0, raw: 0};
let radiouseSlide = {val: 0.1, raw: 0};
let linesCountSlider = {val: 10, raw: 0};
let strokeWeightSlider = {val: 0.3, raw: 0};
let dotWeightSlider = {val: 2, raw: 0};

function setup() {
  createCanvas(2000, 1420);

  // amplitudeSlider = createSlider(0,PI/10,0.1,0.01);

  // rFrequencySlider = createSlider(0, 10,1,0.01);

  // radiouseSlide = createSlider(0.1, 3,1,0.01);

  // linesCountSlider = createSlider(2, 150, linesCount);

  // strokeWeightSlider = createSlider(0.3, 3,0.7,0.01);

  function getValue(slider, offset, id, min, max, isInteger, t = 0.3) {
    return () => {
      slider.raw = values[id];
      if (abs(slider.raw - slider.val) > offset)
        slider.val = lerp(slider.val, map(slider.raw, 0, 1024, min, max), t);
      if (isInteger) return floor(slider.val);
      return slider.val;
    };
  }

  amplitudeSlider.value = getValue(
    amplitudeSlider,
    100,
    "s2",
    PI / 100,
    PI / 4,
    false,
    0.1
  );
  rFrequencySlider.value = getValue(
    rFrequencySlider,
    100,
    "s1",
    0.4,
    0.9,
    false,
    0.4
  );
  radiouseSlide.value = getValue(radiouseSlide, 50, "s4", 0.1, 3);
  linesCountSlider.value = getValue(
    linesCountSlider,
    1024 / 148,
    "s3",
    4,
    150,
    true
  );
  strokeWeightSlider.value = getValue(strokeWeightSlider, 50, "s5", 0.01, 0.3);
  dotWeightSlider.value = getValue(dotWeightSlider, 50, "s6", 1, 4);

  //  rFrequencySlider = {val:0, raw:0, value: () => {return rFrequencySlider.val=lerp(rFrequencySlider.val,map(values.s2, 0, 1024, 0, 10),0.1)}}
  //   radiouseSlide = {val:0, raw:0, value: () => {return radiouseSlide.val=lerp(radiouseSlide.val,map(values.s3, 0, 1024, 0.1, 3),0.1)}}
  //   linesCountSlider = {val:0, raw:0, value: () => {return linesCountSlider.val=lerp(linesCountSlider.val,floor(map(values.s4, 0, 1024, 2, 150)),0.1)}}
  //   strokeWeightSlider = {val:0, raw:0, value: () => {return strokeWeightSlider.val=lerp(strokeWeightSlider.val,map(values.s5, 0, 1024, 0.3, 3),0.1)}}

  /*

amplitudeSlider = createSlider(0,PI/10,0.1,0.01);
  //amplitudeSlider = {value: () => {return map(values.s1, 0, 1024, 0, PI/10)}}
   rFrequencySlider = createSlider(0, 10,1,0.01);
 // rFrequencySlider = {value: () => {return map(values.s2, 0, 1024, 0, 10)}}
   radiouseSlide = createSlider(0.1, 3,1,0.01);
  //radiouseSlide = {value: () => {return map(values.s3, 0, 1024, 0.1, 3)}}
   linesCountSlider = createSlider(2, 150,linesCount);
  //linesCountSlider = {value: () => {return floor(map(values.s4, 0, 1024, 2, 150))}}
   strokeWeightSlider = createSlider(0.3, 3,0.7,0.01);
  //strokeWeightSlider = {value: () => {return map(values.s5, 0, 1024, 0.3, 3)}}

*/

  restart();
}

function draw() {
  scale(4);
  newLinesCount = linesCountSlider.value();
  if (linesCount != newLinesCount) {
    linesCount = newLinesCount;
    restart();
  }

  t = millis();

  background(0);

  noFill();

  translate(width / 2, height / 2);
  scale(1.06);
  translate(-width / 2, -height / 2);

  translate(300, 95);
  for (let i = 0; i < lines.length; i += 2) {
    let fr = rFrequencySlider.value();

    let rFactor = radiouseSlide.value();

    lines[i].angle =
      lines[i].startAngle +
      lines[i].amplitude * sin(t * lines[i].frequency * fr);
    lines[i + 1].angle =
      lines[i + 1].startAngle +
      lines[i + 1].amplitude * sin(t * lines[i + 1].frequency * fr);
    lines[i].r =
      lines[i].startR +
      lines[i].randomRAmplitude * sin(t * lines[i].rFrequency * fr);
    lines[i + 1].r =
      lines[i + 1].startR +
      lines[i + 1].randomRAmplitude * sin(t * lines[i + 1].rFrequency * fr);

    let x1 = lines[i].r * rFactor * cos(lines[i].angle);
    let y1 = lines[i].r * rFactor * sin(lines[i].angle);
    let x2 = lines[i + 1].r * rFactor * cos(lines[i + 1].angle);
    let y2 = lines[i + 1].r * rFactor * sin(lines[i + 1].angle);

    stroke(255);
    strokeWeight(strokeWeightSlider.value());
    line(0, 0, x1, y1);
    line(0, 0, x2, y2);

    let amplitude = amplitudeSlider.value();

    let angle1 =
      lines[i].startAngle +
      amplitude * sin(t * lines[i].frequency * fr + ropeShift);
    let angle2 =
      lines[i + 1].startAngle +
      amplitude * sin(t * lines[i + 1].frequency * fr + ropeShift);

    let cx1 = lerp(x1, x2, 0.33);
    let cy1 = lerp(y1, y2, 0.33) + ropeAmp * (lines[i].startAngle - angle1);
    let cx2 = lerp(x1, x2, 0.77);
    let cy2 = lerp(y1, y2, 0.77) - ropeAmp * (lines[i + 1].startAngle - angle2);

    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);

    let circle1X = lerp(0, x1, 1);
    let circle1Y = lerp(0, y1, 1);
    strokeWeight(dotWeightSlider.value());
    point(circle1X, circle1Y);

    let circle2X = lerp(0, x1, 0.4);
    let circle2Y = lerp(0, y1, 0.4);
    strokeWeight(dotWeightSlider.value());
    point(circle2X, circle2Y);

    let circle3X = lerp(0, x2, 1);
    let circle3Y = lerp(0, y2, 1);
    strokeWeight(dotWeightSlider.value());
    point(circle3X, circle3Y);

    let circle4X = lerp(0, x2, 0.6);
    let circle4Y = lerp(0, y2, 0.6);
    strokeWeight(dotWeightSlider.value());
    point(circle4X, circle4Y);
  }
}

function restart() {
  lines = [];
  let angleStep = PI / linesCount;
  let randomAngleOffset = angleStep / 3;
  for (let angle = 0; angle < PI; angle += angleStep) {
    let lineAngle = angle + random(-randomAngleOffset, randomAngleOffset);
    let r = random(100, 150);
    lines.push({
      r: r,
      startR: r,
      randomRAmplitude: random(20, 60),
      rFrequency: random(0.001, 0.002),
      angle: lineAngle,
      startAngle: lineAngle,
      amplitude: amplitudeSlider.value(),
      frequency: random(0.001, 0.002),
    });
  }

  ropeShift = PI / 2;
  if (lines.length % 2 !== 0) lines.pop();
}
