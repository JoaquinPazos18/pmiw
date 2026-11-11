class Enemigo {
 constructor(){
   this.posX = 700;
   this.posY = 150;
   this.Color = color(180,30,180);
   this.vida = 10; //vida inicial pulpote
 }
 
 dibujar(){
  fill(this.Color);
  ellipse(this.posX, this.posY, 80, 100);
 }
 //elimina vida si le pegamos
 recibirImpacto(){
   this.vida -= 1;
 }
 
 mata(){
  //lógica para que al tocar al jugador lo mate y o pierda una vida, o lo mate instantáneamente
 }
 
}
