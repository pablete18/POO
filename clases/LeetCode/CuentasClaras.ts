class Amigo {
    public nombre : string;
    public puso : number
    public debeRecibir : number
    public debePagar : number 

    constructor(
        nombre : string,
        puso : number
    ){
        this.nombre = nombre;
        this.puso = puso;
        this.debeRecibir = 0;
        this.debePagar = 0
    }
}

class CuentasClaras{
   public totalAmigos : Amigo[]
    
   constructor(  
    totalAmigos : Amigo[]){
    

    this.totalAmigos = totalAmigos
   }
    totalGastado(): number {

       const total = this.totalAmigos.reduce((total, amigos)=> total + amigos.puso, 0)
       return total
    }
    
    dividirTotal(): number{
        return this.totalGastado() / this.totalAmigos.length
    }
    
    cuentasClaras(): any {
        this.totalAmigos.forEach(amigo=> {
            if(amigo.puso < this.dividirTotal()){
                amigo.debePagar = this.dividirTotal() - amigo.puso
            }else {
                amigo.debeRecibir = amigo.puso - this.dividirTotal()
            }
        }) 

        
        
    }

}


const amigo1 = new Amigo('Pablo',2340)
const amigo2 = new Amigo ('Rocio', 35)
const amigo3 = new Amigo ('Rufina',23) 



const cuentasClaras = new CuentasClaras([amigo1,amigo2,amigo3])

console.log(cuentasClaras.totalGastado());
console.log(cuentasClaras.dividirTotal());
cuentasClaras.cuentasClaras();




cuentasClaras.totalAmigos.forEach(amigo=>{
    console.log(`${amigo.nombre} debe recibir ${amigo.debeRecibir}, debe pagar : ${amigo.debePagar}`);
    
})

