/* Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda. */ 

alert('Seja bem-vindo ao programa DETECTA PALÍNDROMO.\n\nPreste atenção para seguir os passos corretamente.')

let palavra = prompt('Digite uma palavra no campo abaixo:')
let palavraInvertida = ''


for(let i = 1; i <= palavra.length; i++){
    palavraInvertida += palavra[palavra.length - i]; 
}

if (palavra == palavraInvertida) {
    alert('Palíndromo detectado!\n\n' + palavra + ' é um palíndromo')
} else {
    alert('Opa! Não temos um palíndromo aqui :(\n\n' + palavra + ' é diferente de ' + palavraInvertida + '.')
}