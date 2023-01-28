let palavra = "Tryber";
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i -= 1) {
  palavraInvertida += palavra[i];
}

console.log(palavraInvertida);