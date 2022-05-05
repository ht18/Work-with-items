class Receipt{
    constructor(name, sugar, speculos, apple, cheese, tomatoe){ /* trying something with constructor */
    this.name = name;
    this.sugar = sugar;
    this.speculos = speculos;
    this.apple = apple;
    this.cheese = cheese;
    this.tomatoe = tomatoe;
}
}

let applePie = new Receipt("Apple Pie", 300, 0, 0, 3, 0, 0);

let cheeseCake = new Receipt("Cheesecake", 300, 2, 0, 0, 1, 0);

let tiramisu = new Receipt("Tiramisu", 300, 0, 0, 0, 0)

console.log(applePie.Receipt.speculos)