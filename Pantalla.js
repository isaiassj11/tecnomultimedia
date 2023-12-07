class Pantalla {
  constructor(imagen, texto) {
    this.imagen = imagen;
    this.texto = texto;
    this.botones = [];
    this.textos = [];
  }

  agregarBoton(boton) {
    this.botones.push(boton);
  }

  agregarTexto(texto, x, y) {
    this.textos.push({ texto, x, y });
  }

 mostrar() {
  background(0);

  // Verifica si la pantalla actual es la de "Perdiste"
  if (aventura.pantallaActual === 16) {
    const imagen3 = loadImage('data/imagen3.png');
    image(imagen3, 0, 0, width, height);
  } else {
    image(this.imagen, 0, 0, width, height);
   
    if (aventura.pantallaActual >= 1 && aventura.pantallaActual <= 12) {
        fill(0, 0, 0, 150); // Ajusta el color y la opacidad del rectángulo
        rect(50, 10, width - 100, 75); // Ajusta las coordenadas y el tamaño del rectángulo
      }
  }

  fill(255);
  textAlign(CENTER, CENTER);

  if (this.texto === "El Gato con Botas") {
    textSize(40);
    text(this.texto, width / 2, 50);
  } else {
    textSize(18);
    
    
    let textos = this.texto.split('/n');
      for (let i = 0; i < textos.length; i++) {
        text(textos[i], width / 2, 30 + i * 15); // Ajusta la posición vertical
      }
  }

  for (let boton of this.botones) {
    boton.mostrar();
  }

  for (let textoInfo of this.textos) {
    text(textoInfo.texto, textoInfo.x, textoInfo.y);
  }
}

  clicEnBoton() {
    for (let boton of this.botones) {
      if (boton.clicEnBoton()) {
        return boton.pantallaDestino;
      }
    }
    return -1;
  }
}
