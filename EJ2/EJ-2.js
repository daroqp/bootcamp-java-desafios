function main() {

    const creditos = [
        {
            nombre: 'Plan 001',
            capital: 150000,
            plazo: 30,
            tasa: 0.15,
        },
        {
            nombre: 'Plan 002',
            capital: 300000,
            plazo: 180,
            tasa: 0.10,
        },
        {
            nombre: 'Plan 003',
            capital: 485000,
            plazo: 60,
            tasa: 0.23,
        },
    ]

    const rowTitulo = document.getElementById("titulo")
    const th = document.createElement("th")
    th.textContent = "Interes"
    
    rowTitulo.appendChild(th)

    const intereses = obtenerIntereses(creditos)
    agregarInteresesALaTabla(intereses)
    
    return
}

function obtenerIntereses(creditos){

    const intereses = []

    for (const credito of creditos) {
        const nombre = credito.nombre
        const capital = credito.capital
        const plazo = credito.plazo
        const tasa = credito.tasa
    
        const interesGenerado = calcularInteres(capital, plazo, tasa)
        intereses.push({interesGenerado, nombre })
    }
    
    return intereses
}

function agregarInteresesALaTabla(intereses) {

    for (const interes  of intereses) {
        const idRow = interes.nombre
        const row = document.getElementById(idRow)
    
        const td = document.createElement("td")
        td.textContent = interes.interesGenerado
    
        row.appendChild(td)
    }
    return
}
function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100
}
