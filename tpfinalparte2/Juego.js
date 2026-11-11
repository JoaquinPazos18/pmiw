
class Juego {
  constructor(){
    this.crearEnemigo();
    this.crearPersonaje();
    this.obstaculos = []; // Los mini pulpitos van acá
    this.proyectiles = [];
    this.estado = "jugando";
  }

  dibujar(){
    imageMode(CORNER);
    image(fondoMarino,0,0,width, height);
   
    if(this.estado !== "jugando"){
      textAlign(CENTER,CENTER);
      textSize(40);
      fill(255);
      
      if(this.estado === "ganaste"){
        text("Ganaste :D", width / 2, height / 2);
      }
      
      if(this.estado === "perdiste"){
        text("Perdiste :(", width / 2, height / 2);
      }
      return; //impide continuar
    }

    this.personaje.mover();
    this.personaje.dibujar();
    this.dibujarVidaPersonaje();

    this.enemigo.dibujar();
    this.dibujarVidaEnemigo();
    


    if(frameCount % 90 === 0){
      this.crearObstaculo();
    }

    // Mini pulpitos: movimiento y colisión
    for(let i = this.obstaculos.length - 1; i >= 0; i--){
      this.obstaculos[i].mover();
      this.obstaculos[i].dibujar();

      // Calcular distancia entre pulpito y buzo
      let distancia = dist(
        this.obstaculos[i].posX,
        this.obstaculos[i].posY,
        this.personaje.posX + 20,
        this.personaje.posY + 30
      );

      // Restar vida si el buzo sigue vivo
      if(distancia < 35){
        if(this.personaje.vida > 0){
          this.personaje.vida -= 1;
        }

        // Eliminar pulpito impactado
        this.obstaculos.splice(i, 1);

      } else {
        // Eliminar los que se van de pantalla
        if(this.obstaculos[i].fueraDePantalla()){
          this.obstaculos.splice(i, 1);
        }
      }
    } // Esta llave cierra el recorrido de los obstáculos

    // Dibujar y mover los proyectiles
    for(let i = this.proyectiles.length - 1; i >= 0; i--){

      this.proyectiles[i].mover();

      // Calcular distancia entre proyectil y enemigo
      let distancia = dist(
        this.proyectiles[i].posX,
        this.proyectiles[i].posY,
        this.enemigo.posX,
        this.enemigo.posY
      );

      // Comprobar si hubo un impacto
      if(distancia < 50){
        if(this.enemigo.vida > 0){
          this.enemigo.recibirImpacto();
        }

        // Eliminar proyectil que impactó
        this.proyectiles.splice(i, 1);

      } else {
        this.proyectiles[i].dibujar();

        // Eliminar proyectiles que salen de pantalla
        if(this.proyectiles[i].fueraDePantalla()){
          this.proyectiles.splice(i, 1);
        }
      }
    }
   // Comprobar si alguien ganó o perdió
    if(this.enemigo.vida <= 0){
        this.estado = "ganaste";
    }

if(this.personaje.vida <= 0){
  this.estado = "perdiste";
}
  }

  crearEnemigo(){
    this.enemigo = new Enemigo();
  }

  crearPersonaje(){
    this.personaje = new Personaje();
  }

  crearObstaculo(){
    let nuevoObstaculo = new Obstaculo(
      this.enemigo.posX,
      this.enemigo.posY
    );

    this.obstaculos.push(nuevoObstaculo);
  }

  crearProyectil(){
    let nuevoProyectil = new Proyectil(
      this.personaje.posX + 40,
      this.personaje.posY + 30
    );

    this.proyectiles.push(nuevoProyectil);
  }

  dibujarVidaEnemigo(){
    // Fondo de la barra
    fill(100);
    rect(580, 30, 150, 15);

    // Barra que representa la vida actual
    fill(255, 50, 50);
    rect(580, 30, this.enemigo.vida * 15, 15);

    // Texto
    fill(255);
    textSize(14);
    text("Vida del calamar: " + this.enemigo.vida, 580, 65);
  }
  
  dibujarVidaPersonaje(){
  // Fondo de la barra
  fill(100);
  rect(30, 30, 60, 15);

  // Barra que representa las vidas actuales
  fill(0, 255, 100);
  rect(30, 30, this.personaje.vida * 20, 15);

  // Texto
  fill(255);
  textSize(14);
  text("Vida del buzo: " + this.personaje.vida, 30, 65);
}

reiniciar(){
  this.crearEnemigo();
  this.crearPersonaje();

  // Vaciar los arrays de objetos
  this.obstaculos = [];
  this.proyectiles = [];

  // Volver al estado inicial
  this.estado = "jugando";
}
 
}
