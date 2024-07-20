export default class CuentaBancaria{
    titular : string;
    saldo : number
    
    

    constructor(
        titular :string,
        saldo : number
    ){
        this.titular = titular,
        this.saldo = saldo
    }
    
    depositar(monto : number,): number {
        return this.saldo += monto
    }

    retirar(monto : number) : any {
       if ( monto <= this.saldo){
            this.saldo -= monto
            return "Retiro Exitoso"
       }    return "Saldo Insuficiente" 
    }

     consultarSaldo() {

        return this.saldo

    } 

    
}

const cliente = new CuentaBancaria('Rocio', 1000)

const clienteDeposita = cliente.depositar(1450)

/* const clienteRetira = cliente.retirar(2300) */

const clienteConsulta = cliente.consultarSaldo()

console.log(clienteConsulta);
