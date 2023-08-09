
let ingresoTotal = 0
let noEsNumero = true
let esNumeroValido = true

do {

    ingresoTotal = Number(prompt('Ingrese el valor del ingreso total:'))    
    noEsNumero = !noEsNumero
    esNumeroValido = ingresoTotal >= 0

}while(noEsNumero || !esNumeroValido)

const porcentajeGastosNecesarios = 0.50
const gastosNecesarios = calcularPorcentaje(ingresoTotal, porcentajeGastosNecesarios)

const porcentajeGastosOpcionales = 0.30
const gastosOpcionales = calcularPorcentaje(ingresoTotal, porcentajeGastosOpcionales)

const porcentajeAhorroInversion = 0.20
const ahorroInversion = calcularPorcentaje(ingresoTotal, porcentajeAhorroInversion)

alert(`Gastos necesarios:  $${ gastosNecesarios }.\nGastos opcionales:  $${ gastosOpcionales }.\nGastos para ahorro e inversion:  $${ ahorroInversion }.`)




function calcularPorcentaje( ingresoTotal, porcentaje ) {
    return ingresoTotal * porcentaje
}