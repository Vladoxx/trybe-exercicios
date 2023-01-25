const nota = 24;

if (nota < 0 || nota > 100) {
    console.log('Nota errada! Verifique novamente.');
} else if (nota >= 90) {
    console.log('Você obteve ' + 'A');
} else if (nota >= 80) {
    console.log('Você obteve ' + 'B');
} else if (nota >= 70) {
    console.log('Você obteve ' + 'C');
} else if (nota >= 60) {
    console.log('Você obteve ' + 'D');
} else if (nota >= 50) {
    console.log('Você obteve ' + 'E');
} else if (nota < 50) {
    console.log('Você obteve ' + 'F');
} else {
    console.log('Os carácteres não são números!!');
}