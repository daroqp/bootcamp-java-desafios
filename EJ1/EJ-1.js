const enunciadoCostoFijo = 'Ingrese el costo fijo total.'
const constoFijo = obtenerValor( enunciadoCostoFijo )

const enunciadoPrecioVenta = 'Ingrese el precio de venta.'
const precioVenta = obtenerValor( enunciadoPrecioVenta )

const enunciadoCostosVariables = 'Ingrese el total de los costos variables.'
const costosVariables = obtenerValor( enunciadoCostosVariables )

const dividendo = precioVenta - costosVariables
const esDivisorValido = dividendo > 0

if( esDivisorValido ) {

    const cantidadVentas = constoFijo  / dividendo
    alert(`El punto de equilibro es de: ${ cantidadVentas }`)

} else {

    alert('Lamentablemente el precio de ventas y los costos varibles dan un numero imposible de dividir')
}

function obtenerValor( enunciado ) {
    let valor = 0
    let noEsNumero = true
    let esNumeroValido = true

    do {
        valor = Number(prompt( enunciado ))
        
        noEsNumero = !valor
        esNumeroValido = valor >= 0

    }while(noEsNumero || !esNumeroValido)

    return valor
}
