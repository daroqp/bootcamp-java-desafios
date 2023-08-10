const usuarioIngresado = prompt('Ingrese el usuario')
const claveIngresada = prompt('Ingrese la clave')

const esUsuarioValido = usuarioIngresado === 'admin'
const esClaveValida = claveIngresada === '1234'

if( esUsuarioValido && esClaveValida ) {
    alert('Bienvenido ADMIN!')
} else {
    alert('El usuario o clave no son correctas.')
}