import Empleado from "./Empleado";

class Desarrolador extends Empleado{
    lenguaje : string

    constructor(
        nombre : string,
        salario : number,
        lenguaje : string
    ){
        super(
            nombre,
            salario
        )
        this.lenguaje = lenguaje
    }

    calcular(salario: number): number {
        return (salario * 12 ) * 2
    }
  
}

const desarrolador = new Desarrolador( 'Pablo', 550, "Typescript")
const salarioAnualDesarrollador = desarrolador.calcular(desarrolador.salario)

console.log(`el desarrolador ${desarrolador.nombre} que trabaja con el lenguaje ${desarrolador.lenguaje} su salario anual es ${salarioAnualDesarrollador}`);
