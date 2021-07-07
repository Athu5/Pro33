class Snow{
  constructor(x,y,r){

    var options={
  'restitution':0.5,
  'friction':0.2,
  'density':1

      
    }
    
  

 this.x=x;

  this.body = Bodies.circle(x, y, r, options);
  this.image = loadImage("snow5.webp");
  this.r=r;

  }

 display(){
  
     push();

     imageMode(CENTER);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     
     pop();
   }
  }


