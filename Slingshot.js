class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20)
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push()
            strokeWeight(5);
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
            stroke(48,22,8);
            if(posA.x<220){
            line(posA.x-30,posA.y,posB.x-10,posB.y)
            line(posA.x-30,posA.y,posB.x+30,posB.y-3)

            image(this.sling3,posA.x-40,posB.y-11,15,30)
            }
            else{
                strokeWeight(3);
                line(posA.x+30,posA.y,posB.x-10,posB.y);
                line(posA.x+30,posA.y,posB.x+3,posB.y-3);

                image(this.sling3,posA.x+30,posA.y-10,15,30);
            }
            pop();

        }
    }
    
}