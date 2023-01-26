// Maior de três números
let a = 16;
let b = 26;
let c = 36;

let t;
let maior;

// Definimos qual número é maior entre (a) e (b) e salvamos na variável temporal (t)
if (a > b) {
    t = a
} else {
    t = b
}

// Aqui comparamos a variável (t) que armazena o número maior do IF da acima com a variável (c)
// O resultado será salvo na variável (maior)
if (t > c) {
    maior = t
} else {
    maior = c
}

// Mostramos o número maior dos três
console.log(maior);






