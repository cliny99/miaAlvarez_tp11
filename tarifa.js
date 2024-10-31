
// MICRO DESAFÍO Nº2

let pagoMes = 300;
let consumoKWH = 345;
let resultado = consumoKWH > 300 ? ((pagoMes*20)/100) + pagoMes : 300;

console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}wh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de ${resultado}`);