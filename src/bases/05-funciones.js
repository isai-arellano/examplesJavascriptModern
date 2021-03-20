//Funciones JS
const saludar = function(nombre){
    return `Hola, ${nombre}`
}

const saludar2 = ( nombre ) =>{
    return `Hola, ${nombre}`
}
const saludar3 = ( nombre ) =>`Hola, ${nombre}`

const saludar4 = () =>`Hola Mundo`

//console.log(saludar('Goku'))

console.log(saludar('Pepe'))
console.log(saludar2('Isai'))
console.log(saludar3('Lolo'))
console.log(saludar4())

const getUser = () =>({uid: 'ABC123',username: 'Isai_Arellano',})

const user = getUser();

//Tarea
const getUserActive = (name) =>({
        uid: 'ABCD',
        username: name
    })

const userActive = getUserActive('Benjamin')
console.log(userActive)