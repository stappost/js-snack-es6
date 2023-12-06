// creare array di oggetti
//  per ogni oggetto/bici mettere nome e peso
const bikes =[
    {
        nome: "pokemon-corsa",
        peso: 12
    },
    {
        nome: "bmx",
        peso: 9
    },
    {
        nome: "pokemon-cross",
        peso: 18
    },
    {
        nome: "AX super-mega-ultra-fotonica",
        peso: 7
    },
    {
        nome: "graziella",
        peso: 16
    },
]

// VARIABILE PESO-MIN 
let peso_min = bikes[0].peso;
// ciclare gli oggetti confrontando il loro peso e determinare il minore
bikes.forEach((elem) =>{
    if(peso_min > elem.peso){
        peso_min = elem.peso
    }
})
console.log(peso_min)
//  creare due variabili con gli elementi dell'oggetto con minor peso
//  stampare le variabili con il template literal
bikes.forEach((elem) =>{
    if(peso_min == elem.peso){
        let { nome, peso} = elem
        console.log(`la bici più leggera è ${nome} con un peso di ${peso}kg`)
    }
})
