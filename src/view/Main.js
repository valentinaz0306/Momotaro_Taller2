//String[] listaPalabras1, listP1;
// listaaa

let listaPalabras1= new Array();
let listP1= new Array();
let Pmico = new Personaje(0,400,300,300,false,"mico",'image/mico.png',0);

//Se cargan las fotos del fondo;
let BG;
let BG2;
let BG3;
let BG4;
let BG5;

let plx;




function setup(){

    createCanvas(1200,700);

    listaPalabras1 = loadStrings("texto/momotaro.txt");

    for ( i = 0; i < listaPalabras1.length; i++) {
      listP1.push(listaPalabras1[i].split(","));
    }
    

 
    mico = loadImage(Pmico.getRuta());

    BG = loadImage('image/BG/BG.png');
    BG2 = loadImage('image/BG/BG2.png');
    BG3 = loadImage('image/BG/BG3.png');
    BG4 = loadImage('image/BG/BG4.png');
    BG5 = loadImage('image/BG/BG5.png');


    plx=0;
}

function draw (){

    background(0);
    image(BG,-200+(plx),0);
    image(BG2,-200+(plx*2),0);
    image(BG3,-200+(plx*3),0);
    image(BG4,-200+(plx*5),0);
    image(BG5,0,0);

    image(mico,Pmico.getPosx(),Pmico.getPosy(),Pmico.getAncho(),Pmico.getAlto());


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