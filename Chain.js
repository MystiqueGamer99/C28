class Chain{
    constructor(bodyA,bodyB){
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:10
        }
this.chain = Constraint.create(option);
World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }

    }
    fly(){
        this.chain.bodyA = null;
    }
}
