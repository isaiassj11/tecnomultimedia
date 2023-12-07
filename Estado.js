class Estado {
  constructor(pantalla) {
    this.pantallaActual = pantalla;
  }

  manejarMousePresionado() {
    for (let boton of this.pantallaActual.botones) {
      if (boton.fueClickeado()) {
        aventura.transicion(boton.estadoSiguiente);
        break;
      }
    }
  }

  manejarTeclaPresionada() {
  }

  actualizar() {
    this.pantallaActual.mostrar();
    this.pantallaActual.mostrarTexto();
  }
}
