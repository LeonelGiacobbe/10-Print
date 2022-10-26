let x = 0
let y = 0
let size = 20
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
}

function draw() {
  if(random(1) < 0.5) {
    strokeWeight(4)
    stroke(255,0,random(255))
    line(x,y,x+size,y+size)
  } else {
    stroke(random(255),0,255)
    line(x,y+size,x+size,y)
  }
  if(x > width) {
    x = 0
    y += size
  } else {
    x += size
  }
}

function mouseClicked() {
  size = random(10,50)
  clear()
  x = 0
  y = 0
  background(0)
}
 
