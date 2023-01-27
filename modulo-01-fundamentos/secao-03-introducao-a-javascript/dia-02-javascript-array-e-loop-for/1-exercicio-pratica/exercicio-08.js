// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

const arrNumeros = []

for (let i = 1; i <= 25; i += 1) {
    
    arrNumeros.push(i)
}

console.log(arrNumeros);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos poNumeros2.

for (let i = 0; i < arrNumeros.length; i += 1) {

    const arrItem = arrNumeros[i];
    const divisao = arrItem / 2
    
    console.log(divisao);
}