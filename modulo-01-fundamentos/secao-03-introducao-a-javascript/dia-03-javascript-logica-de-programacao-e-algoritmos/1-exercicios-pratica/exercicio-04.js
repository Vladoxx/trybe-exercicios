// Imprimir na console o maior número primo entre 2 e 50

let numPrimoMaior = 0;

for (let num = 2; num <= 50; num++) {
    let primo = true;
    // console.log(num);
    for (let div = 2; div < num; div++) {
        // console.log(div);
        if (num % div === 0) {
            primo = false;
        }
    }
    if (primo) {
        numPrimoMaior = num;
    }
}

// console.log(numPrimoMaior);