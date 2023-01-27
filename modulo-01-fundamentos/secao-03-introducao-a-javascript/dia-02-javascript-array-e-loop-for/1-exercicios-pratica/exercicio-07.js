// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    const itemDoArray = numbers[i];

    if(menorValor > itemDoArray) {
        menorValor = itemDoArray
    }
}

console.log(menorValor);