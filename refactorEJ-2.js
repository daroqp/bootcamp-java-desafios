function mainEJ2() {
    const creditosConIntereses = agregarInteresALosCreditos( creditos )
    console.log(creditosConIntereses)

    alert('Resultados en CONSOLA!')
}

function agregarInteresALosCreditos( creditos ) {
    
    const creditosConIntereses = []

    for (const credito of creditos) {

        const nombre = credito.nombre
        const capital = credito.capital
        const plazo = credito.plazo
        const tasa = credito.tasa
        const interes = calcularInteres(capital, plazo, tasa)

        const creditoConInteres = {
            nombre: nombre,
            capital: capital,
            plazo: plazo,
            tasa: tasa,
            interes: interes
        }

        creditosConIntereses.push( creditoConInteres )
    }

    return creditosConIntereses
}

function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100
}
