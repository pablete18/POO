import IVehiculo from "../Interfaces/IVehiculo";

class Moto implements IVehiculo{
     marca : string
    modelo : string
    anio : number 
    cilindrada : number 

    constructor(
        marca : string,
        modelo : string,
        anio : number,
        cilindrada : number
    ){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada        
    }

    acelerar: () => void;
    frenar: () => void;
    repostar: () => void;
}