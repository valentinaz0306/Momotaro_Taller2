//String[] listaPalabras1, listP1;
// listaaa

let listaPalabras1= new Array();
let listP1= new Array();
let Pmico = new Personaje(-50,300,0,0,false,"mico",0);
let Pbird = new Personaje(-80,50,0,0,false,"pajaro",0);
let Pdemon = new Personaje (700,180,0,0,false,"demonio",0);

//Se cargan las fotos del fondo;
let BG;
let BG2;
let BG3;
let BG4;
let BG5;

let plx;


let Midle;
let Bidle;
let Dempunch;



function setup(){

    createCanvas(1200,700);

    listaPalabras1 = loadStrings("texto/momotaro.txt");

    for ( i = 0; i < listaPalabras1.length; i++) {
      listP1.push(listaPalabras1[i].split(","));
    }
    

 
    

    BG = loadImage('image/BG/BG.png');
    BG2 = loadImage('image/BG/BG2.png');
    BG3 = loadImage('image/BG/BG3.png');
    BG4 = loadImage('image/BG/BG4.png');
    BG5 = loadImage('image/BG/BG5.png');

 plx=0;



 Midle = [];
 mv = 0;
 for (i = 0; i <= 2; i++) {
     Midle.push(loadImage("image/Midle/Mt" + i + ".png"));
 }


 Bidle = [];
 bv = 0;
 for (i = 0; i <= 1; i++) {
     Bidle.push(loadImage("image/Bird/Bird" + i + ".png"));
 }

 Dempunch = [];
 dpv = 0;
 for (i = 0; i <= 2; i++) {
     Dempunch.push(loadImage("image/Demon/Demon" + i + ".png"));
 }

}

function draw (){

    background(0);
    image(BG,-200+(plx),0);
    image(BG2,-200+(plx*2),0);
    image(BG3,-200+(plx*3),0);
    image(BG4,-200+(plx*5),0);
    image(BG5,0,0);

    

    image(Midle[mv],Pmico.getPosx(),Pmico.getPosy());
            if (frameCount % 25 === 0) {
                mv++;
                if (mv >= 3) {
                    mv = 0;
                }
            }


            image(Bidle[bv],Pbird.getPosx(),Pbird.getPosy());
            if (frameCount % 15 === 0) {
                bv++;
                if (bv >= 2) {
                    bv = 0;
                }
            }


            image(Dempunch[dpv],Pdemon.getPosx(),Pdemon.getPosy());
            if (frameCount % 15 === 0) {
                dpv++;
                if (dpv >= 3) {
                  dpv = 0;
                }
            }

    if ((mouseX>0 && mouseX < 100)&&(mouseY>0 && mouseY <700)){
      plx++;
        }
      
        if ((mouseX>1100 && mouseX < 1200)&&(mouseY>0 && mouseY <700)){
      plx--;
        }

}



function mousePressed(){

  Pmico.interaccion();






   
}