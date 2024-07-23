class Producto{
    nombre : string;
    precio: number;
    stock: number

    constructor(
        nombre : string,
        precio : number,
        stock : number
    ){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock
    }
}

class Cliente {
    nombre : string;
    direccion : string ; 
    telefono : string
    
    constructor(
        nombre : string,
        direccion : string,
        telefono : string
    ){
        this.nombre = nombre,
        this.direccion = direccion,
        this.telefono = telefono
    }
}

class Pedido {
    cliente : Cliente;
    producto : Producto[];
    estado : boolean

    constructor(
        cliente : Cliente,
        producto : Producto[],
        estado : boolean
    ){
       this.cliente = cliente;
       this.producto = producto;
       this.estado = estado
    }

    agregarProducto (producto : Producto) : Producto[] {

         producto.stock -= 1

         this.producto.push(producto)
       
         return this.producto // restar producto del stock
    }

    removerProducto (producto : Producto) : Producto[]{

        this.producto = this.producto.filter((item )=> item !== producto)

        return this.producto

    }

    calcularTotal () : number{

        return this.producto.reduce((total , item) =>total + item.precio,0)
        
    }
    
    
}

const producto1 = new Producto('Televisor',2000,10)
const producto2 = new Producto('COsopene', 298, 1)

const cliente1 = new Cliente('Rocio','JJ Diaz 980','2804257977')

const pedido1 = new Pedido(cliente1,[producto1],true)

const productoAgregado = pedido1.agregarProducto(new Producto('Computadora',3000,100))

/* const productoEliminado = pedido1.removerProducto(producto1) */
const totalCarrito = pedido1.calcularTotal() 

console.log(productoAgregado);
