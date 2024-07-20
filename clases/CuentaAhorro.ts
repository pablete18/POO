import CuentaBancaria from "./CuentaBancaria";

class CuentaAhorro extends CuentaBancaria{
    tasaInteres : number;
        constructor(
            titular : string,
            saldo : number,
            tasaInteres : number
        ){
            super(
                titular,
                saldo
            )
            this.tasaInteres = tasaInteres
        }
    calcularInteres () : number{
        const interes = this.saldo * this.tasaInteres / 100
        return this.saldo + interes
    }
}

const cuentaAhorro1 = new CuentaAhorro('Rufina',1000, 3)

const saldoConInteres = cuentaAhorro1.calcularInteres()
console.log(saldoConInteres);
