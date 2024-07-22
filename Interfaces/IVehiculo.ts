interface IVehiculo {
    marca : string,
    modelo : string,
    anio : number,

    acelerar : ()=> void,
    frenar : () => void,
    repostar : ()=> void
}

export default IVehiculo