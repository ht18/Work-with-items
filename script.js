let receipts = [ /*création d'un tableau d'objets*/
    {name:'Tiramisu', sugar:35, tomatoe:0, cheese:300, speculos:0, apple:0}, 
    {name:'Cheesecake', sugar:35, tomatoe:0, cheese:200, speculos:10, apple:0},
    {name:'Apple Pie', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4}
]; 

for (let receipt of receipts){  /*affichage de la liste des recettes dans la console */
    console.log(receipt.name);
}

/* FOREACH autre possibilité :
receipts.forEach(element => {
    console.log(element.name);
})
*/


/* MAP création d'une liste des recettes */
let listOfReceipts = receipts.map(element => { 
    if (element.apple != 0){
        return element.name;
    }
    
})

console.log(listOfReceipts);

/* FILTER tri des éléments du tableau en fonction de la présence de fromage */
let receiptsFilter = receipts.filter(element =>{ 
    return element.cheese > 200;
})

console.log(receiptsFilter);

/* SOME vérifier que bien un élément vérifie plus de 9 spec*/
let speculosReceipts = receipts.some(element =>{ 
    return element.speculos > 9;
})

console.log(speculosReceipts);

/* EVERY vérifier que tous ne contiennent pas de pommes */
let appleReceipts = receipts.every(element =>{ 
    return element.apple > 0;
})

console.log(appleReceipts);

/* REDUCE faire la somme de toute la quantité de fromage dans les recettes */
let sommeCheese = receipts.reduce((accumulateur, element) => {
    return accumulateur + element.cheese
}, 0)

console.log(sommeCheese);

