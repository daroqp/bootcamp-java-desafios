const edadMinima = 18
let numeroIngresado = 0

do {
    numeroIngresado = Number(prompt('Ingrese su edad: '))
    numeroIngresadoValido = numeroIngresado > 0
}while(!numeroIngresado || !numeroIngresadoValido)

if( numeroIngresado >= edadMinima ) {
    alert('Bienvenido user!')
} else {
    alert('Debes ser mayor a 18 para ingresar.')
}