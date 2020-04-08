//String[] listaPalabras1, listP1;
// listaaa

let listaPalabras1= new Array();
let listP1= new Array();
let Pmico = new Personaje(0,0,300,300,false,"mico",'image/mico.png',0);
//LinkedList<Perro> listaPerros;


function setup(){

    createCanvas(1000,800);

    listaPalabras1 = loadStrings("texto/momotaro.txt");

    for ( i = 0; i < listaPalabras1.length; i++) {
      listP1.push(listaPalabras1[i].split(","));
    }
    

    //listaPerros = new LinkedList<Perro>();
    // Crear personajes de la escena
    //Pmico = new Personaje(0,0,300,300,false,"mico",'image/mico.png',0)
    mico = loadImage(Pmico.getRuta());
}

function draw (){

    background(0);
    image(mico,Pmico.getPosx(),Pmico.getPosy(),Pmico.getAncho(),Pmico.getAlto());




}



function mousePressed(){





   
}