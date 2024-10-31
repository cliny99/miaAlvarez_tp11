
// MICRO DESAFÍO Nº1

let usuario = 1;
// let usuario = 2;
// let usuario = 3;
// let usuario = 5;

switch (usuario){
    case 1:
        console.log("Usted sólo tiene permisos de consultar datos.");
        break;
    case 2:
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos.");
        break;
    case 3:
        console.log("Usted tiene todos los privilegios de uso del sistema.");
        break;
    default:
        console.log("Debe especificar un perfil válido.");
}
