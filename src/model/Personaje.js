class Personaje extends Elemento {
    constructor(px,py,ancho,alto,estado,texto,propiedad){
        super(px,py,ancho,alto);
        //areibutos de la imagen 
        this.px=px;
        this.py=py;
        this.ancho=ancho;
        this.alto=alto;
        // para saber cuando el usuario interactuo con el objeto
        this.estado=estado;
        //asociar texto con la imagen 
        this.texto=texto;
        // propiedad es el tipo de interaccion (cambio de posicion, color etc..)
        this.propiedad=propiedad;

    }

    cambiarEstado(){    
        this.estado= true;

    }

    interaccion(){    

        switch (this.propiedad){

            //movimiento
            case 0:

            this.px= this.px + 100;
            this.cambiarEstado();

            break;







        }



    }
    
    getPosx(){
        return this.px;
    }
    
    getPosy(){
        return this.py;
    }
    
    getRuta(){
        return this.ruta;
    }
    getAncho(){
        return this.ancho;
    }
    
    getAlto(){
        return this.alto;
    }

    getEstado(){
        return this.estado;
    }

    getTexto(){
        return this.texto;
    }

    getPropiedad(){
        return this.propiedad;
    }

    }

    