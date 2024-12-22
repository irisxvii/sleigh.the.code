let angle = 0;
let size = 160;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25, 25, 70);
  translate(width/2, height/2);
  rotate(angle);
  
  // making the snowflake shine
  let shimmer = sin(frameCount * 0.05) * 30 + 200;
  stroke(shimmer, shimmer + 20, 255);
  strokeWeight(2);
  
  // drawing snowflake arms
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * PI/6);
    drawArm();
    pop();
  }
  
  angle += 0.005;
}

function drawArm() {
  line(0, 0, size, 0);
  
  for (let i = 1; i <= 4; i++) {
    let pos = (size/4) * i;
    let len = size/3 * (1 - i/5);
    
    push();
    translate(pos, 0);
    
    let branchAngle = PI/4;
    
    push();
    rotate(branchAngle);
    line(0, 0, len, 0);

    if (i < 4) {
      translate(len * 0.6, 0);
      rotate(branchAngle);
      line(0, 0, len * 0.4, 0);
    }
    pop();
    
    push();
    rotate(-branchAngle);
    line(0, 0, len, 0);
    
    if (i < 4) {
      translate(len * 0.6, 0);
      rotate(-branchAngle);
      line(0, 0, len * 0.4, 0);
    }
    pop();
    
    // crystals
    noStroke();
    fill(200 + sin(frameCount * 0.1 + i) * 55);
    circle(0, 0, 6);
    
    pop();
  }
  
  noStroke();
  fill(255);
  circle(0, 0, 12);
}