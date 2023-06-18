/*
Comision 5 
Isaias Ezequiel Saldivar Rodriguez
legajo : 94756/5
Link video explicativo : https://youtu.be/VPehML6ClRE
*/

String estado = "inicio";
int cuentaFotograma= 0;
PImage imagen0;
int posX = 0;
int posY = 0;
int cantidad = 22;
int tamaño;


void setup () {
  
  frameRate (30);
  size(800, 400);
  tamaño = width / cantidad;
}

void draw (){
  println (frameRate);
  background(0); 
  tamaño = width / cantidad;
  
  imagen0 = loadImage("imagen1.png");
 
  
 
 if ( estado.equals("inicio") ) {
  //pantalla de inicio
  
  for (int x = 0; x < cantidad; x++) {
    for (int y = 0; y < cantidad; y++) {
      float distan = dist(mouseX, mouseY, x * tamaño, y * tamaño);
      if ((x + y) % 2 == 0) {
        fill(255);
      } else {
        float tono = distan * 255 / dist(width, height, 0, 0);
        fill(255, 255, 255, tono);
      }
      float tono = distan * 255 / dist(width, height, 0, 0);
      fill(255, 255, 255, tono);
      ellipse((x * tamaño + frameCount / 2) % width, (y * tamaño + tamaño / 2) % height, tamaño, tamaño);
    }
  }
   image(imagen0, 0, 0, 360, 400);
  
 }
 
 
  else if ( estado.equals("pantalla 1") ){
  // pantalla 1 
  
  
  for (int x = 0; x < cantidad; x++) {
    for (int y = 0; y < cantidad; y++) {
      float distan = dist(mouseX, mouseY, x * tamaño, y * tamaño);
      if ((x + y) % 2 == 0) {
        fill(255);
      } else {
        float tono = distan * 255 / dist(width, height, 0, 0);
        fill(255, 255, 255, tono);
      }
      float tono = distan * 255 / dist(width, height, 0, 0);
      fill(random(0,255));
      ellipse((x * tamaño + frameCount / 2) % width, (y * tamaño + tamaño / 2) % height, tamaño, tamaño);
    }
  }
  
  
  image(imagen0, 0, 0, 360, 400);
  
  
  cuentaFotograma++;
  if( cuentaFotograma>= 600 ) {
    estado= "inicio";
    cuentaFotograma = 0 ;
  }
  
  
  }
  
 
}

void keyPressed() {
  cantidad = 22;
}

 void mousePressed () { 
   if ( estado.equals("inicio") ) {
      {
     
      estado= "pantalla 1" ; 
     cuentaFotograma = 0 ;
     }
     
   }
  else if (estado.equals("pantalla 1") ) {
    estado= "inicio" ;
    cuentaFotograma = 0 ;
  }
  
 }
