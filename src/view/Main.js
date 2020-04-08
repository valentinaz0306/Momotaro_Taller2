//String[] listaPalabras1, listP1;
// listaaa

let listaPalabras1= new Array();
let listP1= new Array();

//LinkedList<Perro> listaPerros;


function preload(){

mico= loadImage('image/mico.png');


}

function setup(){

    createCanvas(1000,800);

    listaPalabras1 = loadStrings("texto/momotaro.txt");

    for ( i = 0; i < listaPalabras1.length; i++) {
      listP1.push(listaPalabras1[i].split(","));
    }

    //listaPerros = new LinkedList<Perro>();

}

function draw (){

    background(0);
    image(mico,0,0,300,300);




}



function mousePressed(){





   
}