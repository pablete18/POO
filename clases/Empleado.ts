import ICalcularSalario from "../Interfaces/calcularSalario";

export default class Empleado implements ICalcularSalario{
    nombre : string;
    salario : number;


    constructor(
        nombre : string,
        salario : number
    ){
        this.nombre = nombre,
        this.salario = salario
    }

    calcular(salario : number):number{
        return salario * 12
    }
}

const empleado = new Empleado('Pablo',550)
const salarioAnual = empleado.calcular(empleado.salario)

console.log(`El empleado ${empleado.nombre} por año su salario es ${salarioAnual}`);
