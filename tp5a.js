/*
Comision 5 
Isaias Ezequiel Saldivar Rodriguez
legajo : 94756/5
Link video explicativo : https://youtu.be/H4idbcuFz7E
*/

class Pato {
  constructor() {
    this.patoX = width / 2;
    this.patoY = height / 2;
    this.image = loadImage('78.png'); // Reemplaza con la ruta correcta de tu imagen
  }

  move() {
    // Agrega lógica para mover el pato
    if (keyIsDown(LEFT_ARROW) && this.patoX > 50) {
      this.patoX -= 10;
    }
    if (keyIsDown(RIGHT_ARROW) && this.patoX < width - 50) {
      this.patoX += 10;
    }
    if (keyIsDown(UP_ARROW) && this.patoY > 50) {
      this.patoY -= 10;
    }
    if (keyIsDown(DOWN_ARROW) && this.patoY < height - 50) {
      this.patoY += 10;
    }
  }

  display() {
    image(this.image, this.patoX, this.patoY, 100, 100);
  }
}

class Obstaculo {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  move(speed) {
    this.x += speed;

    if (this.x > width) {
      this.x = -60;
      this.y = random(height);
    }
  }

  display() {
    fill(120, 120, 120);
    beginShape();
    vertex(this.x, this.y - 30);
    vertex(this.x + 30, this.y + 30);
    vertex(this.x - 30, this.y + 30);
    endShape(CLOSE);
  }
}

class Vidas {
  constructor() {
    this.vidas = 2;
  }

  decrease() {
    this.vidas--;

    if (this.vidas <= 0) {
      gameState = "perder";
    }
  }

  display() {
    fill(255);
    text(`Vidas: ${this.vidas}`, width - 160, 50);
  }
}

let gameState = "inicio";
let fondo, inicio, Perder, Creditos, Ganar;
let tiempoJugando = 0;
let tiempoGanar = 2300;
let objetoVelocidad = 10;
let numObstaculos = 5;
let obstaculos = [];
let pato, vidas;

function preload() {
  fondo = loadImage('7.png'); // Carga la imagen de fondo desde la carpeta "data"
  inicio = loadImage('10.png'); // Carga la imagen de inicio desde la carpeta "data"
  Ganar = loadImage('9.png'); // Carga la imagen de créditos desde la carpeta "data"
  Perder = loadImage('11.png'); // Carga la imagen de perder desde la carpeta "data"
  Creditos = loadImage('12.png'); // Carga la imagen de créditos desde la carpeta "data"
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);
  pato = new Pato();
  vidas = new Vidas();

  for (let i = 0; i < numObstaculos; i++) {
    obstaculos.push(new Obstaculo());
  }
}

function draw() {
  if (gameState === "inicio") {
    // Pantalla de inicio
    image(inicio, 0, 0, width, height);
    fill(0);
    textSize(28);
    text("Presiona cualquier tecla para comenzar", width / 2, height / 2 - 25);
    text("Presiona click para Créditos", width / 2 - 10, height / 2 + 130);
  } else if (gameState === "jugar") {
    // Pantalla de juego
    image(fondo, 0, 0, width, height);

    pato.move();
    pato.display();

    for (let i = 0; i < obstaculos.length; i++) {
      obstaculos[i].move(objetoVelocidad);
      obstaculos[i].display();

      if (dist(pato.patoX, pato.patoY, obstaculos[i].x, obstaculos[i].y) < 60) {
        vidas.decrease();
        obstaculos[i].x = -60;
        obstaculos[i].y = random(height);
      }
    }

    tiempoJugando++;
    if (tiempoJugando >= tiempoGanar) {
      gameState = "ganar";
    }

    fill(255);
    textSize(24);
    let tiempoRestante = Math.ceil((tiempoGanar - tiempoJugando) / 60);
    text(`Tiempo para ganar: ${tiempoRestante} s`, width - 220, 90);

    vidas.display();
  } else if (gameState === "ganar") {
    // Pantalla de ganar
    background(0);
    fill(0);
    image(Ganar, 0, 0, width, height);
    text("¡Has ganado!", width / 2 - 10, height / 3 + 125);
    text("Presiona cualquier tecla para volver al menú", width / 2 - 5, height / 2 + 149);
  } else if (gameState === "perder") {
    // Pantalla de perder
    image(Perder, 0, 0, width, height);
    fill(0);
    text("Presiona cualquier tecla para reiniciar", width / 2, height / 2 - 25);
    text("Volver al menú", width / 2 - 10, height / 2 + 135);
    noLoop();
  } else if (gameState === "creditos") {
    // Pantalla de créditos
    background(0);
    fill(0);
    image(Creditos, 0, 0, width, height);
    textSize(25);
    text("Presiona cualquier tecla para volver al menú", width / 2 - 25, height / 2 + 160);
  }
}

function keyPressed() {
  if (gameState === "inicio") {
    vidas.vidas = 2;
    tiempoJugando = 0;
    gameState = "jugar";
  } else if (gameState === "jugar") {
    // Puedes mantener esta función en blanco o personalizarla según tus necesidades
  } else if (gameState === "ganar" || gameState === "perder" || gameState === "creditos") {
    gameState = "inicio";
    setup();
    loop();
  }
}

function mousePressed() {
  if (gameState === "inicio") {
    gameState = "creditos";
  } else if (gameState === "creditos") {
    gameState = "inicio";
    setup();
    loop();
  }
}
