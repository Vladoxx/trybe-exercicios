// Custo de Produto (valorCusto) = Play Station 5

const playStation5 = 5000
const valorDeVenda = 8000

let notificacao;

if (playStation5 >= 0 && valorDeVenda >= 0) {
    const valorCustoTotal = playStation5 + 1000
    const lucro = (valorDeVenda - valorCustoTotal) * 1000

    if (lucro >= 0) {
        notificacao = 'O lucro total é de: ' + lucro + '$RS'
    } else {
        notificacao = 'Erro: Valores de lucro são menores que zero (0).'
    }
} else {
    notificacao = 'Erro: Os valores são menores que zero (0).'
}

console.log(notificacao)