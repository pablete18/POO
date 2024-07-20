import IVehiculo from "../Interfaces/IVehiculo";

class Auto implements IVehiculo{
    marca :string
    modelo : string
    anio: number;
    tipoDeCombustible : string
    
    constructor(
        marca : string,
        modelo : string,
        anio : number,
        tipoDeCombustible : string

    ){
        this.marca = marca,
        this.modelo = modelo,
        this.anio = anio,
        this.tipoDeCombustible = tipoDeCombustible
    }

    acelerar: () => void; 
    frenar: () => void;
    repostar: () => void;
    }

