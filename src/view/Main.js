//String[] listaPalabras1, listP1;
// listaaa

let listaPalabras1= new Array();
let listP1= new Array();

//Se crea la variable que controla el parallax
let plx=35;

//Se crea el objeto personaje para cada elemento.
let Pmico = new Personaje(-50,300,0,0,false,"mico",0);
let Pbird = new Personaje(0,50,0,0,false,"pajaro",0);
let Pdemon = new Personaje (1000,180,0,0,false,"demonio",1);
let Pmomo = new Personaje (-100,180,0,0,false,"momotaro",0);
let Pdog = new Personaje (150,320,0,0,false,"perro",0);

//Se cargan las fotos del fondo;
let BG;
let BG2;
let BG3;
let BG4;
let BG5;



//Se crean las variables para los areglos de pngs
let Midle;
let Bidle;
let Dempunch;
let MMs;
let Dbark;



function setup(){

    createCanvas(1200,700);

    listaPalabras1 = loadStrings("texto/momotaro.txt");

    for ( i = 0; i < listaPalabras1.length; i++) {
      listP1.push(listaPalabras1[i].split(","));
    }
    

 
    
//Se cargan las imagenes de fondo.
    BG = loadImage('image/BG/BG.png');
    BG2 = loadImage('image/BG/BG2.png');
    BG3 = loadImage('image/BG/BG3.png');
    BG4 = loadImage('image/BG/BG4.png');
    BG5 = loadImage('image/BG/BG5.png');


//Se crea el arreglo de pngs para el mono
 Midle = [];
 mv = 0;
 for (i = 0; i <= 2; i++) {
     Midle.push(loadImage("image/Midle/Mt" + i + ".png"));
 }

//Se crea el arreglo de pngs para el parajo
 Bidle = [];
 bv = 0;
 for (i = 0; i <= 1; i++) {
     Bidle.push(loadImage("image/Bird/Bird" + i + ".png"));
 }

 //Se crea el arreglo de pngs para el demonio
 Dempunch = [];
 dpv = 0;
 for (i = 0; i <= 2; i++) {
     Dempunch.push(loadImage("image/Demon/Demon" + i + ".png"));
 }


//Se crea el arreglo de pngs para momotaro
 MMs = [];
 msv = 0;
 for (i = 0; i <= 1; i++) {
     MMs.push(loadImage("image/MMs/MMs" + i + ".png"));
 }

//Se crea el arreglo de pngs para el perro
 Dbark = [];
 dbv = 0;
 for (i = 0; i <= 1; i++) {
     Dbark.push(loadImage("image/Dbark/Db" + i + ".png"));
 }






}

function draw (){

    background(0);

    //Se pinta el fondo
    image(BG,-200+(plx),0);
    image(BG2,-200+(plx*2),0);
    image(BG3,-200+(plx*3),0);
    image(BG4,-200+(plx*5),0);
    image(BG5,0,0);

   
    //Se pinta el pajaro
            image(Bidle[bv],Pbird.getPosx(),Pbird.getPosy());
            if (frameCount % 15 === 0) {
                bv++;
                if (bv >= 2) {
                    bv = 0;
                }
            }

//Se pinta el demonio
            image(Dempunch[dpv],Pdemon.getPosx()+(plx*5),Pdemon.getPosy());
            if (frameCount % 15 === 0) {
                dpv++;
                if (dpv >= 3) {
                  dpv = 0;
                }
            }


//Se pinta momotaro
            image(MMs[msv],Pmomo.getPosx(),Pmomo.getPosy());
            if (frameCount % 15 === 0) {
                msv++;
                if (msv >= 2) {
                  msv = 0;
                }
            }

//Se pinta el mono
            image(Midle[mv],Pmico.getPosx(),Pmico.getPosy());
            if (frameCount % 25 === 0) {
                mv++;
                if (mv >= 3) {
                    mv = 0;
                }
            }

//Se pinta el perro
            image(Dbark[dbv],Pdog.getPosx(),Pdog.getPosy());
            if (frameCount % 25 === 0) {
                dbv++;
                if (dbv >= 2) {
                    dbv = 0;
                }
            }

//Control de parallax temporal

 if ((mouseX>0 && mouseX < 100)&&(mouseY>0 && mouseY <700)){
     if(plx<=35){
        plx++  ;

    

     }
    
        }
if ((mouseX>1100 && mouseX < 1200)&&(mouseY>0 && mouseY <700)){
    if(plx>=-35){
      plx-- ;
        }}






}



function mousePressed(){

  //Pmico.interaccion();






   
}