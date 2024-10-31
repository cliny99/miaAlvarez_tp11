let velocidad = 270; 
let altura = 2888;   

let estado = 0; 

let condiciones = (velocidad >= 268 && velocidad <= 278 && altura >= 150 && altura <= 300);

switch (condiciones) {
    case true:
        estado = 1; 
        break;

    default:
        estado = 0; 
}

switch (estado) {
    case 1:
        console.log("El avión está listo para iniciar el aterrizaje.");
        break;

    default:
        console.log("El avión NO está listo para iniciar el aterrizaje.");
}
