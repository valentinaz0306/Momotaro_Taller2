//String[] listaPalabras1, listP1;
// listaaa

let listaPalabras1 = new Array();
let listP1 = new Array();

//Se crea la variable que controla el parallax
let plx = 35;

let mm = 0;

let b = 0;

let d = 0;

let m = 0;

let dm = 0;



let click = true;
let walk = false;

//Se crea el objeto personaje para cada elemento.
let Pmico = new Personaje(0, 300, 0, 0, false, "mico", 4);
let Pbird = new Personaje(0,-50, 0, 0, false, "pajaro", 2);
let Pdemon = new Personaje(1000, 180, 0, 0, false, "demonio", 0);
let Pmomo = new Personaje(-100, 180, 0, 0, false, "momotaro", 1);
let Pdog = new Personaje(200, 320, 0, 0, false, "perro", 3);

//Se crean las variables de los pngs de fondo;
let BG;
let BG2;
let BG3;
let BG4;
let BG5;

//Se crean las varibales de los personajes quietos
let momo;
let perro;
let mono;
let pajaro;
let demon;


//Se crean las variables para los areglos de pngs
let Midle;
let Mw;
let Bidle;
let Dempunch;
let MMs;
let MMw;
let Dbark;
let Dwalk;



function setup() {

    createCanvas(1200, 700);

    listaPalabras1 = loadStrings("texto/momotaro.txt");

    for (i = 0; i < listaPalabras1.length; i++) {
        listP1.push(listaPalabras1[i].split(","));
    }




    //Se cargan las imagenes de fondo.
    BG = loadImage('image/BG/BG.png');
    BG2 = loadImage('image/BG/BG2.png');
    BG3 = loadImage('image/BG/BG3.png');
    BG4 = loadImage('image/BG/BG4.png');
    BG5 = loadImage('image/BG/BG5.png');


    //se carga las imagenes de los personajes quietos
    momo = loadImage('image/MMW/MMw1.png');
    perro = loadImage('image/Dwalk/Dw0.png');
    mono = loadImage('image/Midle/Mt1.png');
    pajaro = loadImage('image/Bird/Bird0.png');
    demon = loadImage('image/Demon/Demon0.png');


    //Se crea el arreglo de pngs para el mono
    Midle = [];
    mv = 0;
    for (i = 0; i <= 2; i++) {
        Midle.push(loadImage("image/Midle/Mt" + i + ".png"));
    }

    Mw = [];
    mwv = 0;
    for (i = 0; i <= 2; i++) {
        Mw.push(loadImage("image/Mw/Mw" + i + ".png"));
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

    MMw = [];
    mwv = 0;
    for (i = 0; i <= 2; i++) {
        MMw.push(loadImage("image/MMw/MMw" + i + ".png"));
    }

    //Se crea el arreglo de pngs para el perro
    Dbark = [];
    dbv = 0;
    for (i = 0; i <= 1; i++) {
        Dbark.push(loadImage("image/Dbark/Db" + i + ".png"));
    }

    Dwalk = [];
    dwv = 0;
    for (i = 0; i <= 1; i++) {
        Dwalk.push(loadImage("image/Dwalk/Dw" + i + ".png"));
    }






}

function draw() {

    background(0);

    //Se pinta el fondo
    image(BG, -200 + (plx), 0);
    image(BG2, -200 + (plx * 2), 0);
    image(BG3, -200 + (plx * 3), 0);
    image(BG4, -200 + (plx * 5), 0);
    image(BG5, 0, 0);


    //Se pinta el pajaro
    switch (b) {
        case 0:
            image(pajaro, Pbird.getPosx(), Pbird.getPosy());

            break;

        case 1:
            image(Bidle[bv], Pbird.getPosx(), Pbird.getPosy());
            if (frameCount % 15 === 0) {
                bv++;
                if (bv >= 2) {
                    bv = 0;
                }
            }
            break;



    }




    //Se pinta el demonio
    switch (dm) {
        case 0:

            image(demon, Pdemon.getPosx() + (plx * 5), Pdemon.getPosy());

            break;

        case 1:
            image(Dempunch[dpv], Pdemon.getPosx() + (plx * 5), Pdemon.getPosy());
            if (frameCount % 15 === 0) {
                dpv++;
                if (dpv >= 3) {
                    dpv = 0;
                }
            }
            break;

    }






    //Se pinta momotaro
    switch (mm) {
        case 0:
            image(momo, Pmomo.getPosx(), Pmomo.getPosy());

            break;

        case 1:
            image(MMs[msv], Pmomo.getPosx(), Pmomo.getPosy());
            if (frameCount % 15 === 0) {
                msv++;
                if (msv >= 2) {
                    msv = 0;
                }
            }

            break;

        case 2:
            image(MMw[mwv], Pmomo.getPosx(), Pmomo.getPosy());
            if (frameCount % 27 === 0) {
                mwv++;
                if (mwv >= 3) {
                    mwv = 0;
                }
            }

            break;


    }



    //Se pinta el mono

    switch (m) {
        case 0:
            image(mono, Pmico.getPosx(), Pmico.getPosy());

            break;

        case 1:
            image(Midle[mv], Pmico.getPosx(), Pmico.getPosy());
            if (frameCount % 25 === 0) {
                mv++;
                if (mv >= 3) {
                    mv = 0;
                }
            }

            break;
        case 2:
            image(Mw[mwv], Pmico.getPosx(), Pmico.getPosy());
            if (frameCount % 25 === 0) {
                mwv++;
                if (mwv >= 3) {
                    mwv = 0;
                }
            }

            break;


    }



    //Se pinta el perro
    switch (d) {
        case 0:
            image(perro, Pdog.getPosx(), Pdog.getPosy());

            break;

        case 1:
            image(Dbark[dbv], Pdog.getPosx(), Pdog.getPosy());
            if (frameCount % 25 === 0) {
                dbv++;
                if (dbv >= 2) {
                    dbv = 0;
                }
            }
            break;

        case 2:
            image(Dwalk[dwv], Pdog.getPosx(), Pdog.getPosy());
            if (frameCount % 25 === 0) {
                dwv++;
                if (dwv >= 2) {
                    dwv = 0;
                }
            }
            break;


    }


    if (plx == -36) {
        walk = false;
        if (walk == false) {
            (mm = 1) && (m = 1) && (d = 1) && (b = 1);
        }
    }



    //Control de parallax temporal

    // if ((mouseX > 0 && mouseX < 100) && (mouseY > 0 && mouseY < 700)) {
    //    if (plx <= 35) {
    //        plx++;
    //   }
    // }

    if ((mouseX > 1100 && mouseX < 1200) && (mouseY > 0 && mouseY < 700)) {
        walk = true;

        if (walk == true) {
            (mm = 2) && (m = 2) && (d = 2) && (b = 1);
        }

        if (plx >= -35) {
            plx--;

        }


    }


    //Coordenadas x & y 
    fill(255);
    textSize(20);
    text("x=" + mouseX + "y=" + mouseY, mouseX, mouseY);










}



function mousePressed() {

    //Pmico.interaccion();


    if (click == true) {


        if ((mouseX > 70 && mouseX < 158) && (mouseY > 286 && mouseY < 631)) {
            Pmomo.interaccion();
        }


        if ((mouseX > 212 && mouseX < 306) && (mouseY > 178 && mouseY < 250)) {
            Pbird.interaccion();
        }

        if ((mouseX > 230 && mouseX < 320) && (mouseY > 447 && mouseY < 654)) {
            Pmico.interaccion();
        }

        if ((mouseX > 377 && mouseX < 500) && (mouseY > 519 && mouseY < 636)) {
            Pdog.interaccion();
        }

        if (mm == 1 && m == 1 && d == 1 && b == 1) {
            click = false;
        }

    }


    if (plx == -36) {
        if ((mouseX > 1000 && mouseX < 1150) && (mouseY > 266 && mouseY < 650)) {
            Pdemon.interaccion();


        }
    }











}



