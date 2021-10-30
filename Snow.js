class Snow {
    constructor(x, y, r) {
     
      //add bounciness property
     
      this.r = r;
      this.image = loadImage("snow4.webp")
      this.body = Bodies.circle(x, y, this.r);
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      
      rotate(angle)
      fill("white")
      imageMode(CENTER);
      
      //write the image() to display the body
      pop();
    }
  };
  