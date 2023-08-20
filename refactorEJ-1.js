
function main() {
    const resultFlujoCaja = calcularFlujoDato(flujoDeCaja)

    const sonIguales = resultFlujoCaja == 0
    if( sonIguales ) {
        alert('Los ingresos son iguales a las ganancias.')
        return
    }

    const hayGanancias = resultFlujoCaja == 1
    if( hayGanancias ) {
        alert('Hay ganancias!!')
        return
    }

    const noHayGanancias = resultFlujoCaja == -1
    if( noHayGanancias ) {
        alert('Hay PERDIDAS!')
        return
    }

}

function calcularFlujoDato( flujoDeCaja ){
    
    let totalIngreso = 0
    let totalEgreso = 0

    for (const registro of flujoDeCaja) {
        totalIngreso += registro.ingreso
        totalEgreso += registro.egreso
    }

    const resultado = totalIngreso - totalEgreso

    const sonIguales = resultado == 0
    if( sonIguales ) return 0

    const hayGanancias = resultado > 0
    if( hayGanancias ) {
        return 1
    } else {
        return -1
    }
}
