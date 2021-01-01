var rain = [];
var rainingNow = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(60);
  
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(50, width-50), random(0, -3000));
  }
}

function draw() {
  background(255);

  //Check if it's raining or sunny
  if (rainingNow == true) {
    //background(100);
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } 
  noStroke();
  fill(230,230,180);
  ellipse(300,200,190,190);
  
  noStroke();
  fill(0);
  ellipse(340,200,200,200);
}


function Rain(x, y) {
  this.x = x;
  this.y = y;
  //this.gravity = 9.8;
  this.length = 15;
  this.r = 0;
  this.opacity = 100;


  this.dropRain = function() {
    noStroke();
    fill(0);
    //rect(this.x, this.y,3,15);
    ellipse(this.x, this.y, 1.5, this.length);
    this.y = this.y + 6 //+ frameCount/60;
    if (this.y > height-40) {
      this.length = this.length - 5;
      //this.y= random(0,-100);
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(1);
    //stroke(245, 200/frameCount);
    stroke(200, this.opacity);
    fill(0)
    if (this.y > height-40) {
      ellipse(this.x, height-30, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 100;
      }
    }
  }
}