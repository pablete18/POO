import CuentaBancaria from "./CuentaBancaria";

class CuentaCorriente extends CuentaBancaria{
    limiteDescubierto : number;

    constructor(
        titular: string,
        saldo : number,
        limiteDescubierto : number
    ){
        super(
            titular,
            saldo
        )
        this.limiteDescubierto = limiteDescubierto
    }
    retirar(monto: number) {
        if(monto <= this.limiteDescubierto){
            return "Retiro Exitoso"
        }return "Monto supera el Limite descubierto"
    }
}

const cuentacorriente1 = new CuentaCorriente( 'Pablo', 2000, 1000)

const puedeRetirar = cuentacorriente1.retirar(1500)

console.log(puedeRetirar);
