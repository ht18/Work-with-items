let receipts = [
    {name:'Tiramisu', sugar:35, tomatoe:0, cheese:300, speculos:0, apple:0}, 
    {name:'Cheesecake', sugar:35, tomatoe:0, cheese:300, speculos:10, apple:0},
    {name:'Apple Pie', sugar:35,tomatoe:0, cheese:0, speculos:0, apple:4}
]; 

for (let receipt of receipts){
    console.log(receipt.name);
}

/* autre possibilité :
receipts.forEach(element => {
    console.log(element.name);
})
*/