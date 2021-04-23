class Paper
 {
    constructor() 
    {
      var options = {
          isStatic:false,
          friction:0.5,
          density:1.2,
          restitution:1
      }
      
      this.body=Bodies.circle(300,200,60,options);
      World.add(world,this.body);
      this.Image = loadImage("paper.png");
    }
    
    display(){
        var pos=this.body.position;
        fill("violet");
        ellipseMode(CENTER);
        image(this.Image,pos.x, pos.y,70,70);
        
    }
}

