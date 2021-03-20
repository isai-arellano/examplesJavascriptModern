//Promise
/*
const getImagepromesa = ()=>{
    const promesa = new Promise((resolve,reject)=>{
        resolve('http://lalala.com')
    })

    return promesa
}
getImagepromesa().then(console.log)
*/
//Async
const getImageAsync = async () =>{
    try{
    const apiKey = '8EqRefM4tthlTWLjQFUARIh9W6BgV6BF'
    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await response.json()
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src=url
    document.body.append(img)
    }catch(error){
        console.error(error)
    }
    
}

getImageAsync()

/*
const apiKey = '8EqRefM4tthlTWLjQFUARIh9W6BgV6BF'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original
    
    const img = document.createElement('img')
    img.src=url

    document.body.append(img)


})
.catch(err=>{
    console.log(err)
})
*/