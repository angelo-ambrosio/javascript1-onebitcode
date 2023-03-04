/*
## Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela. */

alert("Seja bem-vindo ao programa CALCULADORA DE 4 OPERAÇÕES!\n\n A seguir, informe dois números para receber o resultado da adição, subtração, multiplicação e divisão destes dois valores.")

let infoNumber1 = prompt('Digite o primeiro número:')

let infoNumber2 = prompt('Digite o segundo número:')

let number1 = parseFloat(infoNumber1)
let number2 = parseFloat(infoNumber2)

alert(`Aqui está o resultado das operações dos números ${number1} e ${number2}:

ADIÇÃO: ${number1 + number2}
SUBTRAÇÃO: ${number1 - number2}
MULTIPLICAÇÃO: ${number1 * number2}
DIVISÃO: ${number1 / number2}`)