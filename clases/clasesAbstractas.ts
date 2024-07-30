/* Clase abstracta:
 Figura

Propiedades: color

Métodos abstractos: 
calcularArea(), calcularPerimetro()
Clase derivada: Circulo

Propiedades adicionales: radio
Implementa los métodos abstractos.
Clase derivada: Rectangulo

Propiedades adicionales: ancho, alto
Implementa los métodos abstractos. */


abstract class Figura {
    color : string;
    constructor(
        color : string
    ){
        this.color = color
    }

    abstract calcularArea():number;
    abstract calcularPerimetro(): number;


}

class Circulo extends Figura{
    diametro : number
    constructor(
        color : string,
        diametro : number        
    )
    {
        super(
            color
            
        )
        this.diametro = diametro
    }
    calcularArea():number{
        return Math.PI * this.diametro
        
    }
    calcularPerimetro(): number  {
        return 2 * Math.PI * (this.diametro/ 2)
    };
    

}

class Rectangulo extends Figura {
    alto : number;
    ancho : number

    constructor(
        color : string,
        alto : number,
        ancho : number
    ){
        super(
            color
        )
        this.alto = alto,
        this.ancho = ancho
    }
    calcularArea(): number {
        return this.ancho * this.alto
    }
    calcularPerimetro(): number {
            return (this.ancho * 2) + (this.alto * 2)        
    }
}

const circulo = new Circulo('Rojo', 35)
const rectangulo = new Rectangulo ('Verde',15,23)

console.log(`El circulo tiene un color: ${circulo.color} y un diametro de: ${circulo.diametro}cm 
    y tiene un area de: ${circulo.calcularArea()} 
    y un perimetro de: ${circulo.calcularPerimetro()}`);

    console.log(`El Rectangulo tiene un color: ${rectangulo.color} y un ancho de: ${rectangulo.ancho}cm, y un alto de: ${rectangulo.alto}cm
        y tiene un area de: ${circulo.calcularArea()} 
        y un perimetro de: ${circulo.calcularPerimetro()}`);
    