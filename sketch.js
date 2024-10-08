function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  for (let d = 0;d < windowWidth;d += 100){
  for(let c = 0;c < windowHeight;c += 100){
    fill(2,254,255);
    rect(d,c,100,100);
    fill(0,255,5);
    triangle(d, c, d + 100,c, d + 100, c + 100);
    fill(255,255,255);
    rect(d,c + 50,50,50)
    fill(255,254,3);
    ellipse(d + 75, c + 75, 50, 50);
    fill(255);
    ellipseMode(DEGREES); 
    arc(d + 75, c + 75, 50, 50, 0.8, 3.93);

  }
  }

//Another color scheme
for (let x = 100;x < windowWidth;x += 200){
  for(let y = 0;y < windowHeight;y += 200){
  fill(0,0,254);
  rect(x,y,100,100);
  fill(0,0,0);
  triangle(x, y, x + 100,y, x + 100, y + 100);
  fill(255,255,255);
  rect(x,y + 50,50,50)
  fill(255,1,1);
  ellipse(x + 75, y + 75, 50, 50);
  fill(255,1,253);
  ellipseMode(DEGREES); 
  arc(x + 75, y + 75, 50, 50, 0.8, 3.93);
}
}
for (let x = 0;x < windowWidth;x += 200){
  for(let y = 100;y < windowHeight;y += 200){
  fill(0,0,254);
  rect(x,y,100,100);
  fill(0,0,0);
  triangle(x, y, x + 100,y, x + 100, y + 100);
  fill(255,255,255);
  rect(x,y + 50,50,50)
  fill(255,1,1);
  ellipse(x + 75, y + 75, 50, 50);
  fill(255,1,253);
  ellipseMode(DEGREES); 
  arc(x + 75, y + 75, 50, 50, 0.8, 3.93);
}
}

}