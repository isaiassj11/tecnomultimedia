String estado = "inicio";
int cuentaFotograma= 0;
PImage imagen0, imagen1, imagen2, imagen3, imagen5;
float x=0,velx=3;
float y=0;
void setup () {
  size(600,480);
  frameRate (30);
}

void draw (){
  println (frameRate);
  background(255); 
  textSize(20);
  textAlign(LEFT);
  text( cuentaFotograma , 20,40);
  text (estado, 20,55);
  
  imagen0 = loadImage("imagen0.png");
  imagen1 = loadImage("imagen1.png");
  imagen2 = loadImage("imagen2.png");
  imagen3 = loadImage("imagen3.png");
  imagen5 = loadImage("imagen5.png");
  
  
  
 
 if ( estado.equals("inicio") ) {
  //pantalla de inicio
  fill(0);
  image(imagen0, 1,1,600,480);
  textAlign(CENTER);
  textSize(60);
  text("click para iniciar", width/2, height/3);
  
  
  fill(#FF0303);
  ellipse(width/2,300, 100,100);
 }
 
 
  else if ( estado.equals("pantalla 1") ){
  // pantalla 1 
  fill(0);
  image(imagen1, 1,1,600,480);
  textAlign(CENTER);
  textSize (28);
  
  text("Los destornilladores son herramientas diseñadas",width/2, cuentaFotograma);
   textSize (26);
  text("para apretar o aflojar tornillos ranurados de fijación", width/2, cuentaFotograma+20);
  text("sobre materiales de madera, metálicos, plásticos etc.", width/2, cuentaFotograma+40);
  
  cuentaFotograma++;
  if( cuentaFotograma>= 300 ) {
    estado= "pantalla 2";
    cuentaFotograma = 0 ;
  }
  
  
  }
  
  else if ( estado.equals("pantalla 2") ){
  //pantalla 2 
  
  fill(0);
  image(imagen2, 1,1,600,480);
  fill(#FF3131);
  textAlign(CENTER);
  textSize(2+cuentaFotograma/10);
  
  text("Las partes principales de un destornillador son el mango, la cuña o vástago y la hoja o boca. ", width/2, height/8);
  
  cuentaFotograma++;
  if( cuentaFotograma>= 200 ) {
    estado= "pantalla 3";
    cuentaFotograma = 0 ;
  }

  }
  
   else if ( estado.equals("pantalla 3") ){
     //pantalla 3 
     fill(255);
     image(imagen3, 1,1,600,480);
  textAlign(CENTER);
  textSize(21);
  fill(255,map(cuentaFotograma,0,150,0,255));
  text("se dice que se originaron en Europa durante la edad media tardia. ", width/2, height/4);
   textSize(18);
  text(" muy proablemente en alemania o en francia y se les conocia como tournevis", width/2, height/3);
  
  cuentaFotograma++;
  if( cuentaFotograma>= 220 ) {
    estado= "pantalla 4";
    cuentaFotograma = 0 ;
    
  }
  
  
   }
   else if (estado.equals ("pantalla 4") ) {
     //pantalla4
     fill(0);
     image(imagen5, 1,1,600,480);
     textAlign(CENTER);
     textSize(18);
     text("existen vareos destornilladores segun su punta o su mango, que pueden ser", cuentaFotograma+2, height/4); 
     textSize(20);
     text("de punta plana, de philips, torx, tubo o de alien, etc.", cuentaFotograma+2, height/3);
     
     
    
     fill(200,map(cuentaFotograma,0,150,0,255));
     ellipse(width/2,300, 100,100);
     fill(0,map(cuentaFotograma,0,150,0,255));
     text("click para reiniciar", width/2, height/2);
        
 cuentaFotograma++;
  if( cuentaFotograma>= 600 ) {
    estado= "pantalla 1";
     cuentaFotograma = 0 ;
    
  }
     
   }
   //termina void draw
}


 void mousePressed () { 
   if ( estado.equals("inicio") ) {
     if ( dist(mouseX,mouseY,width/2,300)<50 ) {
     
      estado= "pantalla 1" ; 
     cuentaFotograma = 0 ;
     }
     
   }
  else if (estado.equals("pantalla 1") ) {
    estado= "pantalla 2" ;
    cuentaFotograma = 0 ;
  }
   else if (estado.equals("pantalla 2") ) {
     estado= "pantalla 3" ;
     cuentaFotograma = 0 ;
   }
   else if ( estado.equals("pantalla 3") ) {
      
       
      estado= "pantalla 4";
     cuentaFotograma = 0 ;
     
   }
   else if ( estado.equals("pantalla 4") ) {
     
      if ( dist(mouseX,mouseY,width/2,300)<50 ) {
        
     estado= "pantalla 1";
     
     cuentaFotograma = 0 ;
      }
   }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
