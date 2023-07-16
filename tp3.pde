/*
Comision 5 
Isaias Ezequiel Saldivar Rodriguez
legajo : 94756/5
Link video explicativo : https://youtu.be/m99PtiBEkeI
*/

String estado = "inicio";
int cuentaFotograma = 0;
PImage[] imagenes;
String[] textos;

void setup() {
  size(600, 480);
  rectMode(CENTER);
  frameRate(30);

  imagenes = new PImage[16];  
  for (int i = 0; i < 16; i++) {
    imagenes[i] = loadImage("parte" + i + ".png");
  }

  textos = new String[40];
  textos[0] = "Iniciar";
  
  textos[1] = " Asi empieza esta historia, con el nacimiento de unos pollitos amarrilos,muy tiernos y contentos. pero uno de todos ellos se destacaba, era grande y feo.";
  textos[2] = "Él se distinguía de sus hermanitos pollos,su canto no era como el de ellos,era distinto y extraño, sin esplendor.con plumas de otro color.";
  textos[3] = "El patito feo se sentía desafortunado al no poder hacer lo mismo que sus hermanos.";
  textos[4] = "Cuando su madre los llevó a nadar al agua , el no podia.luchaba en el agua perdido y sin planos.";
  textos[5] = "A diferencia de sus hermanos que nadaban con gracia y destreza, mientras él lidiaba por mantenerse a flote.";
  textos[6] = "Después de todas estas situaciones, el patito feo sufrió el acoso y la burla de sus hermanos, otros patos y animales.";
  textos[7] = "Se sentía diferente y excluido, incapaz de poder encajar, y decidió que era hora de buscar su verdadero lugar.";
  textos[8] = "Dejar atrás la familia que no lo entendía ni aceptaba,deseando encontrar un entorno de comprensión y presencia.";
  textos[9] = "Con el corazón lleno de tristeza y anhelo, se aventuró en un viaje en busca de pertenencia.";
  textos[10] = "Caminó por campos, ríos y bosques desconocidos,enfrentando la soledad y la incertidumbre en su camino.";
  textos[11] = "Pero en su interior sabía que debía seguir adelante,confiando en que algún día encontraría su destino.";
  textos[12] = "En su travesía, el patito feo conoció a diferentes animales,cada uno con sus propias historias y peculiaridades.";
  textos[13] = "en un momento se encontró en un gran jardín con manzanos enflor.";
  textos[14] = "Las lilas llenaban el aire con su fragancia y colgaban de verdes ramas que se inclinaban sobre un sinuoso arroyo..";
  textos[15] = "En eso, surgieron de la espesura frente a él tres hermosos cisnes blancos, rizando sus plumas y nadando con suavidad en el arroyo.";
  textos[16] = "El patito feo reconoció a aquellas nobles criaturas que una vez había visto levantar el vuelo, y lo invadió un extraño sentimiento de tristeza.";
  textos[17] = "—¡Volaré cerca de aquellas regias aves! —se dijo—. Me darán picotazossin tregua por haberme atrevido a acercarme a ellas con lo feo que soy.";
  textos[18] = "Pero no me importa. Mejor es que ellas me maten a picotazos, que sufrir los pellizcos de los patos, gallinas o las miserias del invierno.";
  textos[19] = "Así que voló hasta el agua y nadó hacia los hermosos cisnes.Lo vieron y se le acercaron con las plumas en alto.";
  textos[20] = "´´¡Mátenme, mátenme´´, dijo la desdichada criatura, inclinando la cabeza hacia el agua para esperar la muerte.";
  textos[21] = "Pero, ¿qué vio allí reflejado en el límpido arroyo? ¡Era un reflejo de sí mismo, ";
  textos[22] = "pero ya no era la imagen de un pájaro sucio, torpe, gris y repugnante! ¡Era un cisne! ";
  textos[23] = "Ahora se alegraba mucho de haber pasado tantos trabajos y desgracias, pues tenía mucho mayor";
  textos[24] = "entendimiento de su propia buena fortuna y de la belleza cuando la tenía enfrente."; 
  textos[25] = "El patito feo se unió a su nueva familia de cisnes, donde finalmente encontró el amor y la felicidad.";
  textos[26] = "Así, el patito feo aprendió la importancia de ser auténtico, de buscar su lugar en un mundo que valora la diversidad.";
  textos[27] = "Así es, después de tanto caminar, el patito feo llegó a un vasto mar, donde las olas danzaban al ritmo del viento y el sol brillaba con esplendor.";
  textos[28] = "Con sed y agotamiento, se acercó cauteloso para tomar un poco de agua.";
  textos[29] = "Lamentablemente, al acercarse al agua, el patito feo se vio atrapado por olas turbulentas que lo arrastraron hacia el mar profundo.";
  textos[30] = "Aunque intentó nadar, su habilidad limitada y la fuerza de las olas lo superaron, dejándolo vulnerable y solo en medio de la inmensidad acuática.";
  textos[31] = "Después de caminar incansablemente, el patito feo llegó a un extenso campo verde.";
  textos[32] = "Mientras avanzaba por un pequeño camino, divisó a lo lejos una granja con una majestuosa granja.";
  textos[33] = "Un destello de esperanza iluminó sus ojos y decidió dirigirse hacia allá, en busca de un refugio y posiblemente de un lugar al que pertenecer.";
  textos[34] = "A medida que se acercaba, podía escuchar los sonidos de otros animales: gallinas cacareando, cerdos gruñendo y vacas mugiendo.";
  textos[35] = "Finalmente, llegó a la granja y se encontró con una amable granjera. donde le explicó su historia y le pidió un lugar donde pudiera quedarse. ";
  textos[36] = "La granjera, con una sonrisa, acarició al patito feo y le aseguró que sería bienvenido en la granja.";
  textos[37] = "Y así, el patito feo encontró su felicidad, vivió el resto de sus días rodeado de amigos.";
  textos[38] = "Y seres queridos en la granja que se convirtió en su verdadero hogar.";
}

void draw() {
  background(255);
  textSize(20);
  textAlign(LEFT);
  text(cuentaFotograma, 20, 40);
  text(estado, 20, 55);

  if (estado.equals("inicio")) {
    fill(0);
    image(imagenes[0], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(50);
    text(textos[0],  100, height / 2);
      
    text("Creditos",  500, height / 2);

    fill(#BCB6B6);
    ellipse(100, 300, 100, 100);
    ellipse(500, 300, 100, 100);
    
  } else if (estado.equals("pantalla 1")) {
    fill(0);
    image(imagenes[1], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(9);
    text(textos[1], 300,80);
    
    
  } else if (estado.equals("pantalla 2")) {
    fill(0);
    image(imagenes[2], 1, 1, 600, 480);
    fill(0);
    textAlign(CENTER);
    textSize(10);
    text(textos[2], width / 2, height / 15);
    textSize(9);
    text("A medida que crecía, se hacía evidente que su apariencia no era la esperada,Pero a pesar de su apariencia singular,tenía un corazón noble y valiente.",  300, height / 10);
    
    
  } else if (estado.equals("pantalla 3")) {
    fill (0);
    image(imagenes[3], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(17);
    text(textos[3], width / 2, height / 13);
    textSize(15);
    text(textos[4], width / 2, height / 9);
    textSize(13);
    text(textos[5], width / 2, height / 7);
    
    
  } else if (estado.equals("pantalla 4")) {
    fill(0);
    image(imagenes[4], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(12);
    text(textos[6], width / 2, height / 13);
    textSize(13);
    text(textos[7], width / 2, height / 9);
    textSize(12);
    text(textos[8], width / 2, height / 7);
    
    
  } else if (estado.equals("pantalla 5")) {
    fill(0);
    image(imagenes[5], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(16);
    text(textos[9], width / 2, height / 15);
    textSize(13);
    text(textos[10], width / 2, height / 10);
    textSize(14);
    text(textos[11], width / 2, height / 8);
   
   
    fill(200, map(cuentaFotograma, 0, 150, 0, 255));
    ellipse(width / 2, 300, 60, 60);
    ellipse(width / 7, 300, 60, 60);
    ellipse(500, 300, 60, 60);
   
    fill(0, map(cuentaFotograma, 0, 150, 0, 255));
    
    textSize(30);
    text("A", 300,310);
    text("B", 85,310);
    text("C", 500,310);
    cuentaFotograma++;
    
  }else if (estado.equals("pantalla 6")) {
    fill(0);
    image(imagenes[6], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(13);
    text(textos[12], width / 2, height / 15);
    textSize(20);
    text(textos[13], width / 2 , height / 9);
    textSize(12);
    text(textos[14], width / 2 , height / 7);
    
   
   
  } else if (estado.equals("pantalla 7")) {
    fill(255);
    image(imagenes[7], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(11);
    text(textos[15], width /  2, height / 17);
    textSize(10);
    text(textos[16], width / 2, height / 12);
    textSize(10);
    text(textos[17], width / 2, height / 9);
    textSize(10);
    text(textos[18], width / 2, height / 7);
    
   
  } else if (estado.equals("pantalla 8")) {
    fill(#F20000);
    image(imagenes[8], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(13);
    text(textos[19], width / 2, height / 25);
    textSize(12);
    text(textos[20], width / 2, height / 15);
    textSize(15);
    text(textos[21], width / 2, height / 10);
    textSize(15);
    text(textos[22], width / 2, height / 8);
    
   
  } else if (estado.equals("pantalla 9")) {
    fill(#030303);
    image(imagenes[9], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(14);
    text(textos[23], width / 2, height / 25);
    textSize(16);
    text(textos[24], width / 2, height / 16);
    textSize(14);
    text(textos[25], width / 2, height / 12);
    textSize(12);
    text(textos[26], width / 2, height / 9);
    
     
    fill(200, map(cuentaFotograma, 0, 150, 0, 255));
    ellipse(width / 2, 300, 100, 100);
    fill(0, map(cuentaFotograma, 0, 150, 0, 255));
    text("Click para reiniciar", width / 2, height / 2);
    cuentaFotograma++;
    
  } else if (estado.equals("pantalla 10")) {
    fill(0);
    image(imagenes[10], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(10);
    text(textos[27], width / 2, height / 25);
    textSize(16);
    text(textos[28], width / 2, height / 14);
  
   
    
  } else if (estado.equals("pantalla 11")) {
    fill(0);
    image(imagenes[11], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(11);
    text(textos[29], width / 2, height / 25);
    textSize(10);
    text(textos[30], width / 2, height / 14);
   
    
    fill(200, map(cuentaFotograma, 0, 150, 0, 255));
    ellipse(width / 2, 300, 100, 100);
    fill(0, map(cuentaFotograma, 0, 150, 0, 255));
    textSize(25);
    text("Click para reiniciar", width / 2, height / 2);
    cuentaFotograma++;
    
  }else if (estado.equals("pantalla 12")) {
    fill(0);
    image(imagenes[12], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(16);
    text(textos[31], width / 2, height / 25);
    textSize(14);
    text(textos[32], width / 2, height / 14);
    textSize(10);
    text(textos[33], width / 2, height / 10);
    
  }else if (estado.equals("pantalla 13")) {
    fill(0);
    image(imagenes[13], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(11);
    text(textos[34], width / 2, height / 25);
    textSize(10);
    text(textos[35], width / 2, height / 15);
    textSize(13);
    text(textos[36], width / 2, height / 10);
   
  } else if (estado.equals("pantalla 14")) {
    fill(0);
    image(imagenes[14], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(15);
    text(textos[37], width / 2, height / 25);
    textSize(15);
    text(textos[38], width / 2, height / 15);
    
    fill(200, map(cuentaFotograma, 0, 150, 0, 255));
    ellipse(width / 2, 300, 100, 100);
    fill(0, map(cuentaFotograma, 0, 150, 0, 255));
    text("Click para reiniciar", width / 2, height / 2);
    cuentaFotograma++;
    
  } else if (estado.equals("pantalla 15")) {
    
    image(imagenes[15], 1, 1, 600, 480);
    textAlign(CENTER);
    textSize(20);
    fill(200, map(cuentaFotograma, 0, 150, 0, 255));
    ellipse(width / 2, 300, 100, 100);
    fill(0, map(cuentaFotograma, 0, 150, 0, 255));
    text("Volver", width / 2, height / 2);
    cuentaFotograma++;  
  } 
}

void mousePressed() {
  if (estado.equals("inicio")) {
    if (dist(mouseX, mouseY, width / 6, 300) < 50) {
      estado = "pantalla 1";
      cuentaFotograma = 0;
    } else if (dist(mouseX, mouseY, 500, 300) < 50) {
      estado = "pantalla 15";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 1")) {
    estado = "pantalla 2";
    cuentaFotograma = 0;
  } else if (estado.equals("pantalla 2")) {
    estado = "pantalla 3";
    cuentaFotograma = 0;
  } else if (estado.equals("pantalla 3")) {
    estado = "pantalla 4";
    cuentaFotograma = 0;
  } else if (estado.equals("pantalla 4")) {
    
      estado = "pantalla 5";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 5")) {
    if (dist(mouseX, mouseY, width / 2, 300) < 50) {
      estado = "pantalla 6";
      cuentaFotograma = 0;
    } else if (dist(mouseX, mouseY, width / 7, 300) < 50) {
      estado = "pantalla 10";
      cuentaFotograma = 0;
    } else if (dist(mouseX, mouseY, 500, 300) < 50) {
      estado = "pantalla 12";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 6")) {
    
      estado = "pantalla 7";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 7")) {
    
      estado = "pantalla 8";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 8")) {
    
      estado = "pantalla 9";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 9")) {
    if (dist(mouseX, mouseY, width / 2, 300) < 50) {
      estado = "inicio";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 10")) {
    
      estado = "pantalla 11";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 11")) {
    if (dist(mouseX, mouseY, width / 2, 300) < 50) {
      estado = "pantalla 5";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 12")) {
    
      estado = "pantalla 13";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 13")) {
    
      estado = "pantalla 14";
      cuentaFotograma = 0;
    
  } else if (estado.equals("pantalla 14")) {
    if (dist(mouseX, mouseY, width / 2, 300) < 50) {
      estado = "pantalla 5";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 15")) {
    if (dist(mouseX, mouseY, width / 2, 300) < 50) {
      estado = "inicio";
      cuentaFotograma = 0;
    }
  }
}
