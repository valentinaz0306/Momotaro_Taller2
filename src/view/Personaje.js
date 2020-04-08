class Personaje extends Elemento {
    constructor(px,py,ancho,alto,estado,texto,ruta){
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
        // la ruta de la imagen 
        this.ruta=ruta;

    }

    cambiarEstado(){    


    }

    }