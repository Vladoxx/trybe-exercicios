// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contador = 0

for (let i = 0; i < numbers.length; i++) {
    
    const itemArray = numbers[i];

    if (itemArray % 2 !== 0) {
        contador += 1
    }
}

if (contador === 0){
    console.log('nenhum valor ímpar encontrado');
}

console.log('A quantidade de números impares é: ' + contador);