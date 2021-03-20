const nombre = "Isai"
const apellido = "Arellano"

const nombreCompleto = `Mi nombre es ${nombre} ${apellido}`

console.log(nombreCompleto)
function getSaludos(nombre,apellido){
    return 'Hola Mundo' + ' ' +  nombre
}

console.log(`Este es un texto:  ${getSaludos(nombre,apellido)}`);
