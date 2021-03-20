
import { getHeroeById } from './bases/08-imp-exp'

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout( () =>{
            const p1 = getHeroeById(id)

            if(p1){
                resolve(p1)
            }else{
                reject('No se encontro el heroe')
            }
        },2000)
    });
}

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn)