const anguloUm = 5;
const anguloDois = 102;
const anguloTres = 73;

const somaDosAngulos = anguloUm + anguloDois + anguloTres;
const resultado = somaDosAngulos;

const verificacaoDosAngulos = anguloUm > 0 && anguloDois > 0 && anguloTres > 0;

if (resultado === 180 && verificacaoDosAngulos) {
    console.log(true);
} else if (resultado !== 180) {
    console.log(false);
} else {
    console.log("Erro: Ângulo Inválido");
}