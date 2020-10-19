class Bob {
constructor(x,y,width,height,radius){
var options ={
    restituion : 0.8,
    friction : 0.5,
    density : 1.2
}
 this.width = width
 this.height = height
 this.radius = radius
 Matter.Bodies.circle(x,y,radius,options) 

}
Display(){
    
}


}