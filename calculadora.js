
// MICRO DESAFÍO Nº5

let calculo = 1; //SUMA
// let calculo = 2; RESTA
// let calculo = 3; MULTIPLICACIÓN
// let calculo = 4; DIVISIÓN
// let calculo = 5; OPCIÓN NO VÁLIDA
let num1 = 10;
let num2 = 2;

switch (calculo){
    case 1:
        console.log(`El resultado de sumar ${num1} + ${num2} es: `,num1 + num2);
    break;
    case 2:
        console.log(`El resultado de restar ${num1} + ${num2} es: `,num1 - num2);
    break;
    case 3:
        console.log(`El resultado de multiplicar ${num1} + ${num2} es: `,num1 * num2);
    break;
    case 4:
        console.log(`El resultado de dividir ${num1} + ${num2} es: `,num1 / num2);
    break;
    default:
        console.log("Por favor, ingrese una opción válida.")
}