class Producto {
    name : string;
    quantity : number;
    stock : number

    constructor(
        name :string,
        quantity: number,
        stock: number
    ){
        this.name = name;
        this.quantity = quantity;
        this.stock = stock
    }

    cantidadInventario(cantidad : number): void{
        this.stock += cantidad
    } 

    disponible(cantidad : number): boolean{

        if(this.stock >= cantidad){
            return true  
        }  return false
        
    }
}

class Factura extends Producto{
    totalProductos : Producto[]

    constructor(name : string,
            qu
        totalProductos = Producto[]){
        super(name,quantity,stock)
        
    }

}

