let color1 = 0.2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  const amount = 100;

  translate(width/2, height/2);
  for (let i = 1; i <= amount; i++) {

   const angle = 10 * i + frameCount;
   const rotation = sin(angle) * 20;
   const rotation1 = cos(angle) * 30;
   const op = -sin(angle) * 300;
   const op1 = cos(angle) * 300;

   const x = 0;
   const y = 0;
   const rectwidth = 30*i;
   const rectheight = 30*i;


  push();
   noFill();
   stroke(i*15, i*5, 120, op);

   rotate(rotation);
   rect(x, y, rectwidth, rectheight)
  pop();

push();
  noFill();
  stroke(120, i*5, i*15, op1);
  rotate(rotation1);
  rect(x, y, rectwidth, rectheight)
 pop();

/*
  if (frameCount < 255) {
      color1+=0.004;
  } else {
    color1-=1;
  }
  console.log(color1); */
}
}

