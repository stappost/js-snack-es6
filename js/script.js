// ----------------------SNACK 1 -------------------------

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
// ciclo 
bikes.forEach((elem) =>{
    if(peso_min == elem.peso){
        let { nome, peso} = elem
        console.log(`la bici più leggera è ${nome} con un peso di ${peso}kg`)
    }
})

// ----------------------SNACK 2------------------ 

// creare array di oggetti di squadre di calcio
// per ogni oggetto definire nome. punti fatti e falli subiti settarli a 0
const teams=[
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "AlbinoLeffe",
        punti_fatti: 0,
        falli_subiti: 0
    },
]
// creare funzione che crea numeri casuali 
function random_number(){
    return  Math.floor(Math.random() * 20 + 1);
}
// utilizzare funzione di numeri casuali per assegnarli a falli subiti e punti fatti
teams.forEach((elem) =>{
    elem.punti_fatti = random_number();
    elem.falli_subiti = random_number();
})

// destrutturando l'array ne creiamo un'altro con solo nomi e falli subiti


let withoutscore = teams.map( (elem) =>{
    let { nome , falli_subiti } = elem
    let obj = {nome, falli_subiti};
    return obj
})
// stampiamo tutto in console
console.log(teams);
console.log(withoutscore)

// ----------------------SNACK 3------------------ 

// creare un array di oggetti con la lista che ci è stata data
const articles =[
    {
        name: "Poppy",      
        type: "tshirt",
        color: "red"
    },
    {
        name: "Jumping",      
        type: "occhiali",
        color: "blue"
    },
    {
        name: "CrissCross",      
        type: "scarpe",
        color: "black"
    },
    {
        name: "Jenny",      
        type: "borsa",
        color: "pink"
    },
]
// creare funzione che genera casualmente una lettera
// si può utilizzare charAt() per semplificare  
function letter_random(){
    let letters =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

    let letter = letters[Math.floor(Math.random() * 26)];

    return letter
}


// aggiungere agli oggetti un cartellino con una lettera casuale
// creare un nuovo array con gli stessi oggetti compresi di cartellino

const articles_complete = articles.map((elem) =>{ 
    let article={...elem, position: letter_random()}
    return article
})

console.log(articles_complete)
console.log(articles)

