class Box{
  constructor(x, y, width, height){
    var options ={
       restitution : 0.95
    } 
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle; // guarda en una variable
       
    push();  // captura la nueva configuración
    translate(pos.x, pos.y);   //Cambia las posiciones (0,0) 
         //de (pos.x, pos.y) //del rectángulo, y asigna los valores 
         //(x,y) del cuerpo. Por eso debemos cambiar a (0,0) en
         //rect()
    rotate(angle);  // permite que el rectángulo tenga rotación         de acuerdo al cambio que tenga el cuerpo*/
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
     pop();
    /*pop();  --- Vuelve a la configuración anterior para que 
    podamos tener los valore originales cada vez que se dibuje 
    el rectángulo*/
  }
}

