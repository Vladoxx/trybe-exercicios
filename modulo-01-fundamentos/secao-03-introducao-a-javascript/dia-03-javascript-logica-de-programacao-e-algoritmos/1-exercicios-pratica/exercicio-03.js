// Maior Palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1) {
    const arrItem = array[i];
    if (arrItem.length > maiorPalavra.length) {
        maiorPalavra = arrItem;
    }
}

console.log(maiorPalavra);

// Menor Palavra

for (let i = 0; i < array.length; i += 1) {
    const arrItem = array[i];
    if (arrItem.length < menorPalavra.length) {
        menorPalavra = arrItem;
    }
}

console.log(menorPalavra);