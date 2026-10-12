//https://youtu.be/d8dJOzo5ngQ

function preload() {
  Precarga();
}

//Es un montón, pero todo ese texto es la narrativa
function setup() {
  createCanvas(800, 450);
  fondos = [Propuesta, Maray, Malo, Neutral, Bueno, Abandonar, ExplorarCueva, Cofres, DejasMaray, Traicion, Vuelta, Calamar];
  textos = ["Eres un/a renombrado/a explorador/a marino a pesar de tu poca experiencia en el ámbito laboral, pero un día al terminar una expedición de tres meses una agencia privada se te acerca con una propuesta… Interesante, si crees que tus grandes capacidades pueden ayudarte a encontrar la ciudad perdida de Atlantis. Te encuentras perplejo/a por la propuesta, dado que muchos en tu ámbito se han burlado de la posibilidad de la existencia del Atlantis, pero en el fondo tú crees en esa pequeña posibilidad; esa esperanza de que hay algo en el mar esperando a ser descubierto.",
    "Accedes a la misión con gusto y emoción, y pronto te embarcas en las profundidades del mar Atlántico, sujeto/a al Maray mediante un cable, la embarcación que se encargará de tu seguridad. Aunque por petición de la compañía llevas puesto un traje especial que te permitirá explorar y caminar en las profundidades del mar sin mayor dificultad.",
    "¿Qué deseas hacer?",
    "Exploras la saliente cercana al Seeker, no vale la pena arriesgarse de maneras innecesarias al soltarse del Maray, aún no has visto nada que valga la pena tomar ese riesgo, todavía. La saliente es increíblemente bella, llena de vida marina de todo tipo, pero la formación rocosa impide explorar más a profundidad sin las herramientas apropiadas. Las cuales no sacaste porque habría sido increíblemente inconveniente.",
    "Te tomas la vuelta, viendo una luz en la lejanía sospechosa, lo cual llama tu atención, nadas lo más rápido que puedes pero antes de acercarte a esta luz llamativa ves a tu alrededor. No hay ningún pez o tiburón, nada, solo estás tú, lo cual nunca es una buena señal, hasta que te das cuenta el motivo, un pulpo gigantesco tiene entre sus tentáculos al Seeker, tu única opción.",
    "Antes que descubra tu presencia te escondes detrás de unas formaciones rocosas, con miedo de que aquella criatura descubra tu presencia. Es bestial, y los ataques en contra del Seeker son brutales, no crees que resista por mucho más tiempo.",
    "¿Esperas a que se vaya o abandonas el Seeker?",
    "No vale la pena esperar a que esa criatura termine por destruir el Seeker, lo prioritario aquí es tu única supervivencia, por lo que decides abandonar el Seeker a su suerte, seguramente encontrarás una forma de comunicarte con el Maray; pero te das cuenta que tu única radio la dejaste dentro del Seeker por miedo a que se dañe con las formaciones rocosas.",
    "Pero antes de que comiences a subir a través del cable que te conecta al Maray, sientes el agua moverse a tu alrededor; al inicio no ves nada por la oscuridad, pero pronto caes en la realización de que es un tiburón circulando alrededor tuyo. Debió haber reconocido tu movimiento de desesperación al querer huir de ese pulpo.. Calamar, lo que sea, de tamaños gigantescos. Tienes una cámara de presión que te permitirá subir a la superficie si es necesario, pero te han dejado claramente explícito que simbolizaría el final de este proyecto ahora y en adelante. Parece solo uno, increíblemente. Luego dos, tres…",
    "¿Qué haces?",
    "Poco a poco te rodean los tiburones, y tú crees que con mucha esperanza se irán, no les atraería una presa como tú, ¿Verdad? Eso es lo que crees, al menos. Pero no se alejan, es más, incluso se acercan. Sabes que es muy tarde para tomar un plan diferente, y estás en su territorio.",
    "Este es tu final, tú lo sabes, ¿Pero estás dispuesto/a a aceptarlo? Puede que no, podrías haber tomado decisiones más inteligentes.",
    "No tienes el equipamiento ni el tiempo necesario para lidiar con esta situación, así que decides sabiamente volver a la superficie lo más rápido que puedas. Activas el protocolo de emergencia y eres disparado hacia la superficie, tu equipo queda obsoleto en el proceso, seguramente te enfermes al salir, pero ya nada importa.",
    "Ya en la superficie encuentras que no estabas tan alejado/a del Maray como originalmente pensabas, por lo que eres rescatado/a rápidamente por la tripulación del Maray, siendo llevado/a de emergencia hacia un hospital. En tu estadía allí viene aquel agente del inicio preguntándote tus motivos para abandonar este proyecto, tu le explicas tu travesía, él lo entiende y te ofrece una segunda oportunidad por las situaciones excepcionales.",
    "Te niegas, y no por falta de amor a este proyecto, sino porque tu doctor te ha recomendado cambiar de rubro, por tu salud.",
    "Te sueltas del Maray luego de avisar tu situación y los planes que deseas realizar, no quieres arriesgar daños al Seeker por un mero cable, ellos te dicen que tengas cuidado, dado que detectaron movimientos extraños en el radar, y tu cuelgas la comunicación para explorar la zona.",
    "Llena de vida marina, ves a los peces rodear el Seeker, pero poco a poco la cantidad de animales va disminuyendo mientras más profundo te metes, lo cual es interesante. Hasta que llegas a una formación rocosa, la cual tiene una forma redondeada, casi perfecta, para que el Seeker se adentre, pero una vez entres no está asegurado que puedas salir por donde volviste, y no sabes qué te espera al final de este túnel.",
    "¿Te adentras?",
    "Decides adentrarte en este túnel sospechoso, dado que no estás listo/a para rendirte justo ahora, no después de todo lo que has vivido. La luz rápidamente se vuelve un privilegio, viéndote obligado/a a usar una linterna del Seeker, que agraciadamente funciona bastante bien.",
    "Se sienten milenios hasta que descubres que este túnel en la prontitud se acabará, dando lugar a una caverna marítima, y vas a toda velocidad, hasta que pasas por este túnel y ves las paredes de este sitio… No es una caverna, no una común por decir lo menos. Alrededor tuyo, en las paredes, hay un mapa detallado de Atlantis, la ciudad perdida, con cofres alrededor.",
    "Sales rápidamente del Seeker para investigar dichos cofres, y al abrirlos descubres que son runas, mapas, indicaciones, coordenadas. Información verídica de la civilización perdida. No estabas loco/a. Tenías razón. ",
    "Pero ahora tienes una problemática; todos los cofres tienen las palabras “Por favor, no lo hagas” en distintos idiomas, algunos muertos, otros vigentes aún. Crees que los Atlantes no querían que se hiciera conocida su existencia, su prevalencia, por el motivo que fuere, y debes tomar una decisión importante.",
    "¿Lo haces público?",
    "Ves todo el esfuerzo de los Atlantes por ocultar su civilización, su vida, su cultura, y crees fervientemente en seguir aquellos ideales que ellos lucharon por mantener. Por más que la tentación te gane, decides no llevarte nada más que el recuerdo y conocimiento de su existencia, vuelves al Seeker; afortunadamente hay suficiente espacio en la caverna para dar la vuelta y volver por dónde viniste.",
    "Vuelves por el túnel, y solo una vez cruzaste por todo este recorrido es que te das cuenta que has perdido tu manual de expediciones, la cual se encontraba en el Seeker; se debió haber salido en tu desesperación por abrir aquellos cofres. Estaba en una bolsa de consorcio, por miedo a esta misma situación de que se escape y se moje. Pero no importa.",
    "Vuelves al Maray, avisando a la tripulación del Maray y a la agencia que la travesía se acaba, ya que te bajas de la investigación. Todos te preguntan e instigan acerca del cambio tan repentino de parecer, pero no respondes, y ellos acceden a abandonar el proyecto; de todas formas, era muy costoso.",
    "Has dejado la vida de explorador marino/a profesional y te has convertido en un/a profesor/a de buceo, en defensa de la vida marítima. En una exploración con un grupo de principiantes encuentras entre las rocas algo interesante, aquel manual de exploraciones en esa bolsa de hace tantos años, ahora ligeramente erosionada por el tiempo. La roca tiene escrito en su exterior “Gracias”.",
    "Sientes los pedidos y las lágrimas de los Atlantes, pero hay un motivo por el cual embarcaste este viaje, descubrir la ciudad perdida de Atlantis y volver con ese descubrimiento a casa, posiblemente ser famoso/a. Ignoras las palabras escritas y comienzas a colocar los contenidos más importantes de los cofres en el Seeker, hasta que ya no hay espacio para más.",
    "Sacas foto del mapa y prendes la radio, la cual anda débilmente, anunciando tu vuelta y tu descubrimiento. Vuelves a la superficie y haces público tus conocimientos junto a la agencia privada que te contrató, con esto tu nombre está enmarcado en la historia como la primera persona en encontrar pruebas de la existencia de Atlantis.",
    "Eres invitado/a a un evento en un barco, con gente rica y famosa, para hablar de tu experiencia en esta investigación, y accedes con mucha emoción. Te encuentras en la popa del barco tomando martini, cuando sientes que alguien se te acerca por detrás.  Te das la vuelta, seguro es alguien que quiere un autógrafo, pero esta persona está tapada de pies a cabeza… De un momento a otro, eres empujado/a hacia el mar, y sientes cómo eres arrastrado/a hacia el fondo del mar.",
    "Solo tienes que subir, puedes mantener la respiración hasta entonces. Pero antes de seguir, sientes cómo el agua se mueve a tu alrededor, y en la oscuridad divisas un tiburón; solo es uno, dos, tres… Ninguno parece interesado en tu martini.",


  ];
}


function draw() {
  background(0);

  if (fase < 4) {
    Animacion();
    tiempoActual = frameCount;
    Boton();
  }

  if (fase == 4) {
    if (pantallaActual !== pantallaAnterior) {
      parrafo = 0;
      pantallaAnterior = pantallaActual;
    }
    Pantallas(fondos[pantallaActual], textos[pantallaActual]);
  }
}

function mousePressed() {

  //Control de inicio de historia
  if (fase == 3) {
    if (dist(mouseX, mouseY, botonposX, botonposY) < 40) {
      pantallaActual = 0;
      parrafo = 0;
      fase = 4;
    }
  }

  //Permiten el cambio de pantalla
  if (fase == 4 && pantallaActual == 0) {
    if (parrafo < 2) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 40 && mouseX <= 390 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 11;
        parrafo = 0;
      } else if (mouseX >= 410 && mouseX <= 760 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 8;
        parrafo = 0;
      }
    }
  }

  //Saliente Seeker - cambio pantalla
  if (fase == 4 && pantallaActual == 11) {
    if (parrafo < 3) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 40 && mouseX <= 390 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 8;
        parrafo = 0;
      } else if (mouseX >= 410 && mouseX <= 760 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 5;
        parrafo = 0;
      }
    }
  }

  //Abandonas Seeker - cambio pantalla
  if (fase == 4 && pantallaActual == 5) {
    if (parrafo < 2) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 40 && mouseX <= 390 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 2;
        parrafo = 0;
      } else if (mouseX >= 410 && mouseX <= 760 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 3;
        parrafo = 0;
      }
    }
  }

  //Final Malo - Cambio pantalla y reinicio
  if (fase == 4 && pantallaActual == 2) {
    if (parrafo < 1) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 300 && mouseX <= 500 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 0;
        fase = 1;
        opacidad = 0;
        fondoY = 0;
        tiempoActual = 0;
        parrafo = 0;
      }
    }
  }

  //Final Neutral - Cambio pantalla y reinicio
  if (fase == 4 && pantallaActual == 3) {
    if (parrafo < 2) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 300 && mouseX <= 500 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 0;
        fase = 1;
        opacidad = 0;
        fondoY = 0;
        tiempoActual = 0;
        parrafo = 0;
      }
    }
  }

  //No - cambio pantalla
  if (fase == 4 && pantallaActual == 8) {
    if (parrafo < 2) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 40 && mouseX <= 390 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 6;
        parrafo = 0;
      } else if (mouseX >= 410 && mouseX <= 760 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 3;
        parrafo = 0;
      }
    }
  }

  //Si - Decides adentrarte
  if (fase == 4 && pantallaActual == 6) {
    if (parrafo < 4) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 40 && mouseX <= 390 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 9;
        parrafo = 0;
      } else if (mouseX >= 410 && mouseX <= 760 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 4;
        parrafo = 0;
      }
    }
  }

  //Final Bueno - Cambio pantalla y reinicio
  if (fase == 4 && pantallaActual == 4) {
    if (parrafo < 3) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 300 && mouseX <= 500 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 0;
        fase = 1;
        opacidad = 0;
        fondoY = 0;
        tiempoActual = 0;
        parrafo = 0;
      }
    }
  }

  //Traición - Cambio de pantalla
  if (fase == 4 && pantallaActual == 9) {
    if (parrafo < 3) {
      if (mouseX >= 550 && mouseX <= 750 && mouseY >= 250 && mouseY <= 300) {
        parrafo++;
      }
    } else {
      if (mouseX >= 410 && mouseX <= 760 && mouseY >= 250 && mouseY <= 300) {
        pantallaActual = 2;
        parrafo = 0;
      }
    }
  }
}
