function Pantallas(fondos, texto) {
  image(fondos, 0, 0, 800, 450);
  fill(169, 213, 255, 80);
  rect(30, 320, 690, 120, 20);
  fill(0);
  textAlign(LEFT);
  textSize(12);
  stroke(0);

  //Inicio
  if (pantallaActual === 0) {
    if (parrafo === 0) {
      text(textos[0], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[1], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[2], posXtexto, 340, 650, 80);
    }
  }

  //Saliente Seeker - Calamar
  if (pantallaActual === 11) {
    if (parrafo === 0) {
      text(textos[3], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[4], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[5], posXtexto, 340, 650, 80);
    } else if (parrafo === 3) {
      text(textos[6], posXtexto, 340, 650, 80);
    }
  }

  //Abandonas Seeker
  if (pantallaActual === 5) {
    if (parrafo === 0) {
      text(textos[7], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      textSize(10);
      text(textos[8], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      textSize(12);
      text(textos[9], posXtexto, 340, 650, 80);
    }
  }

  //FINAL MALO - TIBURONES
  if (pantallaActual === 2) {
    if (parrafo === 0) {
      text(textos[10], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[11], posXtexto, 340, 650, 80);
    }
  }

  //FINAL NEUTRAL - ABANDONAR EL PROYECTO
  if (pantallaActual === 3) {
    if (parrafo === 0) {
      text(textos[12], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[13], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[14], posXtexto, 340, 650, 80);
    }
  }

  //Esperas escondido - Bucear con el Seeker
  if (pantallaActual === 8) {
    if (parrafo === 0) {
      text(textos[15], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[16], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[17], posXtexto, 340, 650, 80);
    }
  }

  //Decides adentrarte
  if (pantallaActual === 6) {
    if (parrafo === 0) {
      text(textos[18], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[19], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[20], posXtexto, 340, 650, 80);
    } else if (parrafo === 3) {
      text(textos[21], posXtexto, 340, 650, 80);
    } else if (parrafo === 4) {
      text(textos[22], posXtexto, 340, 650, 80);
    }
  }

  //FINAL BUENO
  if (pantallaActual === 4) {
    if (parrafo === 0) {
      text(textos[23], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[24], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[25], posXtexto, 340, 650, 80);
    } else if (parrafo === 3) {
      text(textos[26], posXtexto, 340, 650, 80);
    }
  }

  //Fama y Traición
  if (pantallaActual === 9) {
    if (parrafo === 0) {
      text(textos[27], posXtexto, 340, 650, 80);
    } else if (parrafo === 1) {
      text(textos[28], posXtexto, 340, 650, 80);
    } else if (parrafo === 2) {
      text(textos[29], posXtexto, 340, 650, 80);
    } else if (parrafo === 3) {
      text(textos[30], posXtexto, 340, 650, 80);
    }
  }

  BotonesDecision();
}

function BotonesDecision() {

  //Primera pantalla
  if (pantallaActual == 0 && parrafo < 2) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 0 && parrafo == 2) {
    fill(255);
    stroke(0);
    rect(40, 250, 350, 50, 8);
    rect(410, 250, 350, 50, 8);

    fill(0);
    noStroke();
    textSize(13);
    textAlign(CENTER, CENTER);
    text("Explorar la saliente cerca del seeker", 40, 250, 350, 50);
    text("Soltarte del Maray y bucear con el Seeker", 410, 250, 350, 50);
  }

  //Saliente Seeker
  if (pantallaActual == 11 && parrafo < 3) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 11 && parrafo == 3) {
    fill(255);
    stroke(0);
    rect(40, 250, 350, 50, 8);
    rect(410, 250, 350, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Esperar a que se vaya", 40, 250, 350, 50);
    text("Abandonar el Seeker", 410, 250, 350, 50);
  }

  //Abandonas Seeker
  if (pantallaActual == 5 && parrafo < 2) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 5 && parrafo == 2) {
    fill(255);
    stroke(0);
    rect(40, 250, 350, 50, 8);
    rect(410, 250, 350, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Esperar inmóvil a que se alejen", 40, 250, 350, 50);
    text("Vuelves a la superficie rápidamente", 410, 250, 350, 50);
  }

  //FINAL MALO
  if (pantallaActual == 2 && parrafo < 1) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 2 && parrafo == 1) {
    fill(255);
    stroke(0);
    rect(300, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Volver al inicio", 300, 250, 200, 50);
  }

  // FINAL NEUTRAL
  if (pantallaActual == 3 && parrafo < 2) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 3 && parrafo == 2) {
    fill(255);
    stroke(0);
    rect(300, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Volver al inicio", 300, 250, 200, 50);
  }

  // Soltar Maray - Esperas Escondido
  if (pantallaActual == 8 && parrafo < 2) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 8 && parrafo == 2) {
    fill(255);
    stroke(0);
    rect(40, 250, 350, 50, 8);
    rect(410, 250, 350, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Sí, me adentro", 40, 250, 350, 50);
    text("No, me vuelvo", 410, 250, 350, 50);
  }

  // Explorar cueva - Decides adentrarte
  if (pantallaActual == 6 && parrafo < 4) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 6 && parrafo == 4) {
    fill(255);
    stroke(0);
    rect(40, 250, 350, 50, 8);
    rect(410, 250, 350, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Sí, lo hago público", 40, 250, 350, 50);
    text("No, me lo guardo", 410, 250, 350, 50);
  }

  // FINAL BUENO
  if (pantallaActual == 4 && parrafo < 3) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 4 && parrafo == 3) {
    fill(255);
    stroke(0);
    rect(300, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Volver al inicio", 300, 250, 200, 50);
  }

  //Traición y fama
  if (pantallaActual == 9 && parrafo < 3) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }

  if (pantallaActual == 9 && parrafo == 3) {
    fill(255);
    stroke(0);
    rect(550, 250, 200, 50, 8);

    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Siguiente", 550, 250, 200, 50);
  }
}
