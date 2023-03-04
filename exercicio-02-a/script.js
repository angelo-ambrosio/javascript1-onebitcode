/*Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/

alert('Seja bem-vindo ao comparador de velocidades. Vamos começar?')

let firstCar = prompt('Qual é o primeiro carro?')
let secondCar = prompt('Qual é o segundo carro?')

let infoCar1 = prompt('Qual é a velocidade do ' + firstCar + '?')
let infoCar2 = prompt('Qual é a velocidade do ' + secondCar
 + '?')

let speedCar1 = parseFloat(infoCar1)
let speedCar2 = parseFloat(infoCar2)

if (speedCar1 > speedCar2){
    alert('O ' + firstCar + " é mais rápido que o " + secondCar + ".")
} else if (speedCar2 > speedCar1) {
    alert('O ' + secondCar + " é mais rápido que o " + firstCar + ".")
} else {
    alert('As velocidades são iguais')
}