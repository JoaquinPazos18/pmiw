class Juego {
  constructor(){
    this.crearEnemigo();
    this.crearPersonaje();
    this.proyectiles = []; // Los mini pulpitos van acá
    this.obstaculos = [];
    this.estado = "menu";
    this.submarino = null;
    
    this.tiempo = 0;
    this.crearObstaculos();
  }

  dibujar(){
    imageMode(CORNER);
    
    if(this.estado == "menu") 
     image(menu, 0, 0, width, height);
    
    if(this.estado == "instrucciones"){
       image(fondoMarino, 0, 0, width, height);
       image(instrucciones, 0, 0, width, height);
      
       if(millis() - this.tiempo >= 5000){
          this.estado = "jugando";
       }
       return;
    }
   
    if(this.estado !== "jugando"){
       textAlign(CENTER, CENTER);
       textSize(40);
       fill(255);
       
       if(this.estado === "ganaste"){
         image(gana, 0, 0, width, height);
       }
       if(this.estado === "perdiste"){
         image(pierde, 0, 0, width, height);
       }
       return; // Impide continuar
    }

    // Lógica del juego
    image(fondoMarino, 0, 0, width, height);

     this.personaje.mover();
     this.personaje.dibujar();
     this.dibujarVidaPersonaje();

     this.enemigo.dibujar();

    // Cada cierto tiempo el enemigo genera un mini pulpito
     if(frameCount % 90 === 0){
     this.crearProyectil();
   }

    // Movimiento, dibujo y colisión de los mini pulpitos contra el buzo
     for(let i = this.proyectiles.length - 1; i >= 0; i--){
     this.proyectiles[i].mover();
     this.proyectiles[i].dibujar();

     // Calcular distancia entre el pulpito y el buzo
     let distancia = dist(
       this.proyectiles[i].posX,
       this.proyectiles[i].posY,
       this.personaje.posX + 20,
       this.personaje.posY + 30
     );

     // Restar vida si choca al buzo
     if(distancia < 35){
       if(this.personaje.vida > 0){
         this.personaje.vida -= 1;
         sonidoGolpe.play();
       }
       // Eliminar pulpito
       this.proyectiles.splice(i, 1);
      }else{
       // Eliminar los que se van de pantalla por la izquierda
       if(this.proyectiles[i].fueraDePantalla()){
         this.proyectiles.splice(i, 1);
       }
     }
   }
    
   // Movimiento y hitbox de los objetos
   for(let i = this.obstaculos.length - 1; i >= 0; i--){
     this.obstaculos[i].mover();
     this.obstaculos[i].dibujar();

     // Calcular distancia entre el obstáculo y el buzo
     let distanciaObs = dist(
       this.obstaculos[i].posX + 15,
       this.obstaculos[i].posY + 15,
       this.personaje.posX + 20,
       this.personaje.posY + 30
     );

     // Restar vida si choca al buzo
     if(distanciaObs < 35){
       if(this.personaje.vida > 0){
         this.personaje.vida -= 1;
         sonidoGolpe.play();
       }
       this.obstaculos.splice(i, 1);
     } else {
       // Eliminar los que se van de pantalla por la derecha
       if(this.obstaculos[i].fueraDePantalla()){
         this.obstaculos.splice(i, 1);
       }
     }
   }
    
   // Submarino y Win event
   if(this.obstaculos.length === 0 && this.submarino === null){
     this.submarino = new Submarino();
   }
    
   // Evaluamos el submarino si ya fue creado
   if(this.submarino !== null){
     this.submarino.dibujar();

     let distanciaSub = dist(
       this.submarino.posX + this.submarino.ancho / 2, 
       this.submarino.posY + this.submarino.alto / 2, 
       this.personaje.posX + 20, 
       this.personaje.posY + 30
     );

     // Ganar
     if(distanciaSub < 40){
       this.estado = "ganaste";
       win.play();
       musicaFondo.stop();
     }
   }
    
   // Perder
   if(this.personaje.vida <= 0){
     this.estado = "perdiste";
      lose.play();
      musicaFondo.stop();
   }
 }

  crearEnemigo(){
    this.enemigo = new Enemigo();
  }

  crearPersonaje(){
    this.personaje = new Personaje();
  }

  crearProyectil(){
    // El ataque sale desde la posición del enemigo gigante
    let nuevoAtaque = new Proyectil(
      this.enemigo.posX,
      this.enemigo.posY
    );

    this.proyectiles.push(nuevoAtaque);
    
    this.enemigo.contadorDisparos++;
    
    // Si llega a 4 disparos seguidos cambia de posición a arriba, medio o abajo, aleatoriamente.
    if(this.enemigo.contadorDisparos >= this.enemigo.disparosParaCambiar){
      this.enemigo.cambiarPosicion();
      this.enemigo.contadorDisparos = 0;
   }
  }
  
  crearObstaculos(){
    this.obstaculos = [];
    let separacion = 80;
    for(let i = 0; i < 50; i++){
      let nuevosObstaculos = new Obstaculo();
      nuevosObstaculos.posX = -100 - (i * separacion);
      this.obstaculos.push(nuevosObstaculos);
    }
  }
  
  dibujarVidaPersonaje(){
    // Para evitar que el texto del buzo se mueva al reiniciar
    textAlign(LEFT, BASELINE);
    
    // Fondo de la barra de vida
    fill(100);
    rect(30, 30, 60, 15);

    // Barra verde que representa las vidas actuales
    fill(0, 255, 100);
    rect(30, 30, this.personaje.vida * 20, 15);

    // Texto del Buzo
    fill(255);
    textSize(16);
    text("Vida del Buzo: " + this.personaje.vida, 105, 43);
  }

  reiniciar(){
    this.crearEnemigo();
    this.crearPersonaje();

    this.proyectiles = [];
    this.crearObstaculos();

    // Volver al estado inicial
    this.estado = "menu";
    this.submarino = null;
  }
}
