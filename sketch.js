var x = 0;
var y = 225;
var tearY = y + 1;
var waterHeight = 400;

function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
}

function draw() {
  background(150);
  strokeWeight(0);
  textSize(35);
  x = mouseX;

  /////////////////// ceiling/floor /////////////////////
  fill(100);
  rect(0, 0, width, 100); // ceiling
  rect(0, height - 80, width, height); // floor

  /////////////////// vent /////////////////////////////
  fill(60); // vent colour
  beginShape(); // vent
  vertex(width / 2 - 75, 30); // top left
  vertex(width / 2 - 95, 80); // bottom left
  vertex(width / 2 + 55, 80); // bottom right
  vertex(width / 2 + 75, 30); // top right
  endShape();

  fill(200); // outside colour
  beginShape(); // vent
  vertex(width / 2 - 75 + 20, 30); // top left
  vertex(width / 2 - 95 + 28, 80 - 20); // bottom left
  vertex(width / 2 + 63, 80 - 20); // bottom right
  vertex(width / 2 + 75, 30); // top right
  endShape();

  fill(80);
  beginShape();
  vertex(width / 2 - 75, 30); // top left
  vertex(width / 2 - 95, 80); // bottom left
  vertex(width / 2 - 95 + 28, 80 - 20); // bottom right
  vertex(width / 2 - 75 + 20, 30); // top right
  endShape();

  /////////////////// body /////////////////////////////
  fill(252, 223, 156); // Skin colour
  rect(x - 5, y, x + 5, y + 20); // Neck
  ellipse(x, y, 25, 30); // Face
  fill(0); // Mouth colour
  rect(x - 4, y + 8, x + 4, y + 9); // Mouth
  rect(x - 2, y - 8, x + 2, y - 22); // Hair

  /////////////////// outfit ///////////////////////////

  fill(241, 91, 40); // Outfit colour
  beginShape(); // make outfit
  // Left side
  vertex(x - 13, y + 20); // Shoulder
  vertex(x - 35, y + 40); // upper arm
  vertex(x - 25, y + 65); // lower arm
  vertex(x - 20, y + 65); // sleeve hole
  vertex(x - 28, y + 40); // inner lower arm
  vertex(x - 13, y + 28); // inner upper arm
  vertex(x - 13, y + 120); //pants
  vertex(x - 5, y + 120); //foot hole
  vertex(x - 5, y + 70); //inner leg
  // Right side
  vertex(x + 5, y + 70); //inner leg
  vertex(x + 5, y + 120); //foot hole
  vertex(x + 13, y + 120); //pants
  vertex(x + 13, y + 28); // inner upper arm
  vertex(x + 28, y + 40); // inner lower arm
  vertex(x + 20, y + 65); // sleeve hole
  vertex(x + 25, y + 65); // lower arm
  vertex(x + 35, y + 40); // upper arm
  vertex(x + 13, y + 20); //shoulder
  endShape();

  /////////////////// tears ///////////////////////////

  fill(0);
  rect(x - 10, y, x - 3, y + 3); // left eye
  rect(x + 10, y, x + 3, y + 3); // right eye

  fill(0, 0, 255); // Tear colour
  rect(x - 12, y + 3, x - 9, tearY); // left tear

  rect(x + 12, y + 3, x + 9, tearY); // right tear

  rect(0, waterHeight, width, height); // water level

  /////////////////// interactive /////////////////////////

  if (mouseIsPressed) {
    if (tearY < height) {
      tearY += 1;
    } else if (waterHeight > y + 100 && y > 45) {
      waterHeight -= 1;
    } else if (y > 45) {
      y -= 1;
      waterHeight -= 1;
    } else if (x > width / 2 - 75 && x < width / 2 + 75) {
      y -= 1;
      waterHeight -= 1;
    }
  }

  /////////////////// ceiling top //////////////////////
  fill(100); // ceiling colour
  rect(0, 0, width, 30);

  /////////////////// bars /////////////////////////////
  fill(50); // Bar colour
  rect(width / 6 - 10, 0, width / 6, height);
  rect((width * 2) / 6 - 10, 0, (width * 2) / 6, height);
  rect((width * 3) / 6 - 10, 0, (width * 3) / 6, height);
  rect((width * 4) / 6 - 10, 0, (width * 4) / 6, height);
  rect((width * 5) / 6 - 10, 0, (width * 5) / 6, height);

  ////////////////// text /////////////////////////////
  fill(0, 255, 255);
  if (y < 0) {
    fill(255);
    triangle(200, 175, 170, 160, width / 2, 110);
    ellipse(110, 175, 200, 55);
    fill(0, 200, 255);
    text("I'm free!", 50, 190);
  } else if (y < 45) {
    fill(255);
    ellipse(110, 175, 200, 55);
    triangle(200, 175, 170, 160, width / 2, 110);
    fill(0, 200, 255);
    text("A hole?", 50, 190);
  } else {
    strokeWeight(3);
    stroke(255);
    text("Move mouse to escape!", 10, 190);
    text("Press to cry...", 100, 230);
  }
}
