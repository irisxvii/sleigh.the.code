let armAngle = 0;
let bodySway = 0;
let snowflakes = []; 

function setup() {
  createCanvas(300, 400);
  
  for (let i = 0; i < 100; i++) { 
    snowflakes.push({
      x: random(width),         
      y: random(height),        
      speed: random(1, 3),     
      size: random(2, 5),       
    });
  }
}

function draw() {
  background(180, 200, 255);
  
  drawSnow();
  
  translate(width / 2, height / 2);

  let sway = sin(bodySway) * 10;
  translate(sway, 0);
  bodySway += 0.05;
  
  // bottom snowball
  fill(255);
  stroke(200);
  strokeWeight(2);
  ellipse(0, 80, 100, 100);
  
  // middle
  ellipse(0, 0, 80, 80);
  
  // head 
  ellipse(0, -60, 60, 60);
  
  // arms
  stroke(101, 67, 33);
  strokeWeight(5);
  
  push();
  translate(-30, -20);
  rotate(sin(armAngle) * 0.9 - 0.1);
  line(0, 0, -30, -20);
  line(-30, -20, -40, -10);  
  line(-30, -20, -40, -30);
  pop();
  
  push();
  translate(30, -20);
  rotate(-sin(armAngle) * 0.5 + 0.5);
  line(0, 0, 30, -20);
  line(30, -20, 40, -10); 
  line(30, -20, 40, -30);
  pop();
  
  armAngle += 0.1;
  
  // face
  fill(0);
  noStroke();
  // eyes
  ellipse(-15, -65, 8, 8);
  ellipse(15, -65, 8, 8);
  
  // nose
  fill(255, 150, 0);
  triangle(0, -60, 0, -55, 20, -57.5);
  
  // smile
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(0, -50, 30, 20, 0, PI);
  
  // buttons
  fill(0);
  ellipse(0, -20, 8, 8);
  ellipse(0, 0, 8, 8);
  ellipse(0, 20, 8, 8);
  
  // scarf
  stroke(255, 0, 0);
  strokeWeight(10);
  noFill();
  arc(0, -35, 40, 20, 0, PI);
  line(20, -35, 30, -20);
}

function drawSnow() {
  fill(255);
  noStroke();

  for (let flake of snowflakes) {
    ellipse(flake.x, flake.y, flake.size, flake.size); 
    
    flake.y += flake.speed; 
    flake.x += sin(frameCount * 0.01) * 0.5; 

    if (flake.y > height) {
      flake.y = 0;
      flake.x = random(width);
    }
  }
}
function mouseDragged() {
  snowflakes.push({
    x: mouseX,
    y: mouseY,
    speed: random(1, 3),
    size: random(10),
    color: color(random(255), random(255), random(255)) 
  });
}