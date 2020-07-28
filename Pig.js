class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblility = 255
  }
display(){

console.log(this.body.speed);
push();
if(this.body.speed >5){
  this.visiblility =this.visiblility-5; 
  tint(255,this.visiblility)
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  World.remove(world,this.body)
}
else{
  super.display();
}
pop();
}

};