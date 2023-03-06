/* Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar. */ 

alert('Seja bem-vindo ao programa TABUADA NA HORA!\n\nPreencha as informações atentamente para obter os resultados que deseja.\n\n Vamos?')

let number = parseFloat(prompt('Digite um número abaixo:'))

let result = '';

for(let i = 1; i <= 20; i++) {
    result += number + ' x ' + i + ' = ' + (number * i) + '\n'
}

alert('Aqui está a tabuada do número ' + number +
"\n\n" + result);