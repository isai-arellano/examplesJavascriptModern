// Desestructuración
// Asignación desestructurante

const persona ={
    nombre: 'Isai',
    edad: 27,
    clave: 'El Benji',
    rango: 'capitan'
}

//const {nombre,edad,clave} = persona

//console.log(nombre,edad,clave)

const retornaPersona = ({nombre,edad,rango = 'Capitan',clave}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 1233,
            lng: -123123
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = retornaPersona(persona)
console.log(nombreClave,anios,lat,lng)