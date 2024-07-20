import Empleado from './Empleado'
class Gerente extends Empleado { //se agrega extends cuando es una clase derivada "extiende a empleado y se le agrega la propiedad deseada"
    bono : number

    constructor(
        nombre : string,
        salario : number,
        bono : number
    ){
        super(// cuando es una clase derivada lleva super
            nombre = nombre,
            salario = salario,
        )
        this.bono = bono// la prop de la clase derivada va con this
    }
    calcular(salario: number): number {
        return (salario * 12) + this.bono// para agregar la prop de la derivada se lama con this
    }
} 

const gerente = new Gerente('Rocio',700 , 300)
const salarioAnualGerente = gerente.calcular(gerente.salario)

console.log(`la gerente ${gerente.nombre} su salario anual mas su bono de gerencia es ${salarioAnualGerente}`);
