/* Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

alert ('Seja bem-vindo ao seu Controle Financeiro. Digite os dados corretamente e faça as operações com total atenção.')

let saldoInicial = parseFloat(prompt('Qual é o seu saldo atual?'))
let escolheOperacao;
let valorDepositado;
let valorSacado

do {
    escolheOperacao = prompt (
        'Seu saldo atual é de ' + saldoInicial + ' reais.' +
        '\nO que deseja fazer?' +
        '\n\nDigite 1 para DEPOSITAR.' +
        '\nDigite 2 para SACAR' +
        '\nDigite 3 para SAIR'
    )

    if (escolheOperacao == 1) {
        valorDepositado = parseFloat(prompt('Informe o valor a ser depositado'))
        saldoInicial += valorDepositado
    } else if (escolheOperacao == 2){
        valorSacado = parseFloat(prompt('Informe o valor a ser sacado:'))
        saldoInicial -= valorSacado
    } else if (escolheOperacao < 1 || escolheOperacao > 3) {
        alert('A opção escolhida não é válida. Recarregue a página e tente novamente')
        alert('Finalizando...')
        break
    }

} while (escolheOperacao != 3)