class bob {
    constructor(x,y) {
      var options = {
        restitution:0.8,
        friction:1,
      density:0.5,
      mass:10,
      }
      this.body = Bodies.circle(x,y,35,options);
      //this.radius = radius;
      Bodies.circle.x=this.body.position.x;
      Bodies.circle.y=this.body.position.y;

      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      
    ellipseMode(CENTER);
      
     
      ellipse(0, 0,70);
      pop();
    }
  };