let aventura;
let juego;


function setup() {
  createCanvas(800, 600);


  aventura = new Aventura();
  juego = new Juego(aventura);
}

function draw() {
  background(255);

  if (aventura.pantallaActual !== 14) {
    aventura.mostrar();
  } else {
    juego.actualizar();
    juego.mostrar();
  }
}

function keyPressed() {
  if (aventura.pantallaActual !== 14) {
    aventura.keyPresionada();
  }
}

function mousePressed() {
  console.log("Mouse presionado");
  if (aventura.pantallaActual !== 14) {
    aventura.mousePresionado();
  } else {
    if (mouseX > width - 100 && mouseX < width - 20 && mouseY > 10 && mouseY < 40) {
      console.log("Clic en el botón Volver");
      aventura.pantallaActual = 0;
    }
  }
}
