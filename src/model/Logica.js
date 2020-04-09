
let lista = [];
let listaPalabras1=[];
let listP1=[];

class Logica{
   
    constructor(){
      this.cargarTxt();

    }

    cargarTxt() {
      var cuento = "Nuestro capitán no es otro que el valiente Momotaro, el faisan, con su pico , el perro, con los dientes, el mono, con las uñas, Momotaro, con sus brazos luchan denodadamente, los demonios, al verse perdidos se lamentan y dicen:¡Nos rendimos!";
        lista = cuento.split(",");
        
    }

    ajustarTexto(){

        if(Pbird.getEstado()){

        var texto= lista[1];
        var texto1= texto.replace("el faisan","EL FAISAN");
        lista[1]=texto1;
        console.log(texto1);
        
        }

        if(Pmico.getEstado()){

            var texto= lista[5];
            var texto1= texto.replace("el mono","EL MONO");
            lista[5]=texto1;
            console.log(texto1);
            
    
        }

        if(Pdemon.getEstado()){

            var texto= lista[9];
            var texto1= texto.replace("los demonios","LOS DEMONIOS");
            lista[9]=texto1;
            console.log(texto1);
        
            }

            if(Pdog.getEstado()){

                var texto= lista[3];
                var texto1= texto.replace("el perro","EL PERRO");
                lista[3]=texto1;
                console.log(texto1);
            
                }

                if(Pmomo.getEstado()){

                    var texto= lista[7];
                    var texto1= texto.replace("Momotaro","MOMOTARO");
                    lista[7]=texto1;
                    console.log(texto1);
                
                    }
                    
                   
                    
    }

   


}