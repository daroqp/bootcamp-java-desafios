function calcularGanancia() {

    const flujoDeCaja = [
        {
            periodo:  'enero',
            ingreso:  1500,
            egreso:   1500,
        },
        {
            periodo: 'febrero',
            ingreso: 2500,
            egreso:  2500,
        },
        {
            periodo: 'marzo',
            ingreso: 84683,
            egreso:  1155,
        },
        {
            periodo: 'abril',
            ingreso: 135353,
            egreso:  1533,
        },
        {
            periodo: 'mayo',
            ingreso: 1535,
            egreso:  5434,
        },
        {
            periodo: 'junio',
            ingreso: 4343354,
            egreso:  5434543,
        },
        {
            periodo: 'julio',
            ingreso: 435453,
            egreso:  7816,
        },
        {
            periodo: 'agosto',
            ingreso: 78351,
            egreso:  7816,
        },
        {
            periodo: 'septiembre',
            ingreso: 1878,
            egreso:  95634,
        },
        {
            periodo: 'octubre',
            ingreso: 48483,
            egreso:  9433,
        },
        {
            periodo: 'noviembre',
            ingreso: 35483,
            egreso:  53133,
        },
        {
            periodo: 'diciembre',
            ingreso: 3843,
            egreso:  348133,
        },
    ]

    let totalIngreso = 0
    let totalEgreso = 0
    
    for (const registro of flujoDeCaja) {
        totalIngreso += registro.ingreso
        totalEgreso += registro.egreso
    }
    
    const resultadoFlujoCaja = totalIngreso - totalEgreso
    const hayGanancia = resultadoFlujoCaja > 0
    
    if( hayGanancia ) {
        alert(`El balance dio POSITIVO. Hay ganancias de: ${ resultadoFlujoCaja }`)
    } else {
        alert(`El balance dio NEGATIVO. Perdidas de: ${ resultadoFlujoCaja }`)
    }
}
