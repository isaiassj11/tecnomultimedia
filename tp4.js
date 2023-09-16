/*
Comision 5 
Isaias Ezequiel Saldivar Rodriguez
legajo : 94756/5
Link video explicativo : https://youtu.be/W4-C0sf2F74
*/

let pantalla = 0;
let puntos = 0;
let clicEnPantalla = false;
let estrellas = [];
let circulos = [];
let circulosAbajo = [];
let circuloJugador;
let cuadradosAmarillosRecolectables = [];
let imagenInicio, imagenCreditos, imagenGanar, imagenPerder;
let limitePuntos = 350;
let vida = 500;
let tiempoUltimoCirculo = 0;
let tasaAparicionCirculos = 2000;

function preload() {
  imagenInicio = loadImage('data/1.png');
  imagenCreditos = loadImage('data/2.png');
  imagenGanar = loadImage('data/3.png');
  imagenPerder = loadImage('data/4.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    circulos.push(new Circulo());
  }
  circuloJugador = new CirculoJugador();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (pantalla === 0) {
    pantallaInicio();
  } else if (pantalla === 1) {
    jugar();
  } else if (pantalla === 2) {
    pantallaGanar();
  } else if (pantalla === 3) {
    pantallaPerder();
  } else if (pantalla === 4) {
    pantallaCreditos();
  }
}

function pantallaInicio() {

  image(imagenInicio, 0, 0, width, height);
  fill(0, 11, 206);
  rect(width / 2 - 100, height / 2 + 40, 200, 50);

  if (
    mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 &&
    mouseY >= height / 2 + 40 && mouseY <= height / 2 + 90
  ) {
    if (mouseIsPressed && !clicEnPantalla) {
      pantalla = 1; 
      puntos = 0;
      clicEnPantalla = true; 
    }
  }

  fill(0, 11, 206);
  rect(width / 2 - 100, height / 2 + 120, 200, 50);

 
  if (
    mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 &&
    mouseY >= height / 2 + 120 && mouseY <= height / 2 + 170
  ) {
    if (mouseIsPressed && !clicEnPantalla) {
      pantalla = 4; 
      clicEnPantalla = true; 
    }
  }

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textSize(16);
  text("Haz clic para comenzar", width / 2, height / 2 + 65);

  fill(255);
  textSize(16);
  text("Créditos", width / 2, height / 2 + 148);
}

function jugar() {
  background('#030A40');

  if (millis() - tiempoUltimoCirculo > tasaAparicionCirculos) {
    circulos.push(new Circulo());
    tiempoUltimoCirculo = millis();
  }

  textSize(24);
  fill(255);
  text("Puntos: " + puntos, width / 5 - 200, height / 9 + 5);
  text("Vida: " + vida, width / 1 - 100, height / 9 + 10);

  circuloJugador.actualizarPosicion();

  if (random(1) < 0.02) {
    estrellas.push(new Estrella());
  }

  for (let estrella of estrellas) {
    estrella.mostrar();

    let distancia = dist(
      circuloJugador.x,
      circuloJugador.y,
      estrella.x,
      estrella.y
    );

    if (distancia < circuloJugador.diameter / 2 + estrella.diameter / 2) {
      estrella.recolectar();
      puntos++;
    }
  }

  for (let circulo of circulos) {
    circulo.mover();
    circulo.mostrar();

    let distancia = dist(
      circuloJugador.x,
      circuloJugador.y,
      circulo.x,
      circulo.y
    );

    if (distancia < circuloJugador.diameter / 2 + circulo.diameter / 2) {
      vida -= 10;
      circuloJugador.x = width / 2;
      circuloJugador.y = height - 50;
    }
  }

  if (puntos >= limitePuntos) {
    pantalla = 2;
  }

  if (vida <= 0) {
    pantalla = 3;
  }

  for (let circulo of circulos) {
    circulo.mover();
    circulo.mostrar();
  }

  for (let circuloAbajo of circulosAbajo) {
    circuloAbajo.mover();
    circuloAbajo.mostrar();
  }

  circuloJugador.mostrar();

  for (let i = 0; i < 5; i++) {
    circulos.push(new CirculoAbajo());
  }

  for (let circuloAbajo of circulosAbajo) {
    circuloAbajo.mover();
    circuloAbajo.mostrar();
  }

  if (puntos >= limitePuntos) {
    pantalla = 2;
  }

  circuloJugador.mostrar();
}

class Estrella {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 30;
    this.color = color(255, 255, 0);
    this.recolectada = false;
  }

  mostrar() {
    if (!this.recolectada) {
      fill(this.color);
      noStroke();
      beginShape();
      for (let i = 0; i < 5; i++) {
        let angle = TWO_PI * i / 5 - HALF_PI;
        let x = this.x + cos(angle) * this.diameter / 2;
        let y = this.y + sin(angle) * this.diameter / 2;
        vertex(x, y);
        angle += TWO_PI / 10;
        x = this.x + cos(angle) * this.diameter / 4;
        y = this.y + sin(angle) * this.diameter / 4;
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }

  recolectar() {
    this.recolectada = true;
  }
}

function pantallaGanar() {
  image(imagenGanar, 0, 0, width, height);

  fill(0, 11, 206);
  rect(width / 2 - 120, height / 2 + 100, 240, 40);

  fill(0, 11, 206);
  rect(width / 2 - 120, height / 2 + 180, 240, 40);

  fill(0, 0, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("Puntos: " + puntos, width / 2 - 170, height / 2 + 50);
  text("Vida: " + vida, width / 2 + 50, height / 2 + 50);
  noStroke();
  fill(255);
  textSize(16);
  text("Haz click para jugar de nuevo", width / 2 - 4, height / 2 + 120);
  noStroke();
  text("Volver al menu", width / 2 - 4, height / 2 + 200);

  if (
    mouseX >= width / 2 - 120 && mouseX <= width / 2 + 120 &&
    mouseY >= height / 2 + 100 && mouseY <= height / 2 + 140
  ) {
    if (mouseIsPressed) {
      pantalla = 1;
      puntos = 0;
    }
  }

  if (
    mouseX >= width / 2 - 120 && mouseX <= width / 2 + 120 &&
    mouseY >= height / 2 + 180 && mouseY <= height / 2 + 220
  ) {
    if (mouseIsPressed) {
      pantalla = 0;
      puntos = 0;
      clicEnPantalla = false;
      cuadradosAmarillosRecolectables = [];
      circulos = [];
      circulosAbajo = [];
      estrellas = [];
      for (let i = 0; i < 5; i++) {
        circulos.push(new Circulo());
      }
      circuloJugador = new CirculoJugador();
    }
  }
}

function pantallaPerder() {
  image(imagenPerder, 0, 0, width, height);

  fill(0, 11, 206);
  rect(width / 2 - 120, height / 2 + 100, 240, 40);

  fill(0, 11, 206);
  rect(width / 2 - 120, height / 2 + 180, 240, 40);

  noStroke();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);

  textSize(32);

  text("Puntos: " + puntos, width / 2 - 185, height / 2 + 50);
  text("Vida: " + vida, width / 3 + 20, height / 2 + 0);

  textSize(16);
  text("Haz click para jugar de nuevo", width / 2 - 4, height / 2 + 120);
  text("Volver al menu", width / 2 - 4, height / 2 + 200);

  
  if (
    mouseX >= width / 2 - 120 && mouseX <= width / 2 + 120 &&
    mouseY >= height / 2 + 100 && mouseY <= height / 2 + 140
  ) {
    if (mouseIsPressed) {
      
      puntos = 0;
      vida = 500;
      circulos = [];
      circulosAbajo = [];
      estrellas = [];
      for (let i = 0; i < 5; i++) {
        circulos.push(new Circulo());
      }
      circuloJugador = new CirculoJugador();
      pantalla = 1; 
    }
  }

 
  if (
    mouseX >= width / 2 - 120 && mouseX <= width / 2 + 120 &&
    mouseY >= height / 2 + 180 && mouseY <= height / 2 + 220
  ) {
    if (mouseIsPressed) {
      pantalla = 0;
      puntos = 0;
      clicEnPantalla = false;
      circulos = [];
      circulosAbajo = [];
      estrellas = [];
      for (let i = 0; i < 5; i++) {
        circulos.push(new Circulo());
      }
      circuloJugador = new CirculoJugador();
    }
  }
}

function pantallaCreditos() {

  image(imagenCreditos, 0, 0, width, height);

  fill(0, 11, 206);
  noStroke();
  let rectWidth = 260;
  let rectHeight = 40;
  rect(width / 2 - rectWidth / 2, height / 2 + 100, rectWidth, rectHeight);

  fill(255);
  textSize(20);
  text("Gracias por jugar", width / 2, height / 2 + 80);
  text("Haz clic para volver al inicio", width / 2, height / 2 + 120);

 
  if (
    mouseX >= width / 2 - rectWidth / 2 && mouseX <= width / 2 + rectWidth / 2 &&
    mouseY >= height / 2 + 100 && mouseY <= height / 2 + 140
  ) {
    if (mouseIsPressed && pantalla === 4) {
     
      if (random(1) < 0.5) {
        pantalla = 0; 
      } else {
        pantalla = 3; 
      }
      clicEnPantalla = true; 
    }
  }
}

function mouseClicked() {
  clicEnPantalla = false;

  if (pantalla === 0) {
   
    if (
      mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 &&
      mouseY >= height / 2 + 40 && mouseY <= height / 2 + 90
    ) {
      if (!clicEnPantalla) {
        pantalla = 1;
        puntos = 0;
        clicEnPantalla = true;
      }
    }

    
    if (
      mouseX >= width / 2 - 100 && mouseX <= width / 2 + 100 &&
      mouseY >= height / 2 + 120 && mouseY <= height / 2 + 170
    ) {
      if (!clicEnPantalla) {
        pantalla = 4;
        clicEnPantalla = true;
      }
    }
  } else if (pantalla === 2 || pantalla === 3) {
   
    if (
      mouseX >= width / 2 - 120 && mouseX <= width / 2 + 120 &&
      mouseY >= height / 2 + 100 && mouseY <= height / 2 + 140
    ) {
      if (!clicEnPantalla) {
        pantalla = 1;
        puntos = 0;
        vida = 500;
        circulos = [];
        circulosAbajo = [];
        estrellas = [];
        for (let i = 0; i < 5; i++) {
          circulos.push(new Circulo());
        }
        circuloJugador = new CirculoJugador();
        clicEnPantalla = true;
      }
    }

  
    if (
      mouseX >= width / 2 - 120 && mouseX <= width / 2 + 120 &&
      mouseY >= height / 2 + 180 && mouseY <= height / 2 + 220
    ) {
      if (!clicEnPantalla) {
        pantalla = 0;
        puntos = 0;
        clicEnPantalla = true;
      }
    }
  }
}
