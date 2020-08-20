class chain {
    constructor(bodyA,bodyB,offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{ x:this.offsetX, y:this.offsetY},
       
        }
    this.chain = Constraint.create(options)
    World.add(world, this.chain)
    }
    display(){
        var posa = this.chain.bodyA.position
        var posb = this.chain.bodyB.position
        strokeWeight =3;
        var a1x=posa.x;
        var a1y=posa.y;
        var a2x=posb.x+ this.offsetX;
        var a2y=posb.y+this.offsetY;
     
        line (a1x,a1y,a2x,a2y);
        

    }
}