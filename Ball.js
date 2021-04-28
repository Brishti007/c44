class Ball{
constructor(x,y,w,h,angle){
var options = {
'density': 2,
'frictionAir' : 0.005
}

this.body = Bodies.rectangle(x,y,w,h,angle);
this.width = w;
this.height = h;
World.add(world , this.body);
}

display(){
var angle = this.body.angle;
push();
translate(this.body.position.x , this.body.position.y);
rotate(angle);
ellipse(0,0,this.width , this.height);
pop();
}    
}
