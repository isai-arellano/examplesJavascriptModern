const persona = {
    nombre: 'Tony',
    apellido: 'Martinez',
    edad: 34,
    direccion: {
        calle: 'Montes de oca',
        numero: '300',
        ciudad: 'Guadalajara',
        cp: '444444'
    }
};
//console.log({ persona } );


const persona2 = {
    ...persona
}
persona2.nombre = "Isaí"
console.log(persona);
console.log(persona2)