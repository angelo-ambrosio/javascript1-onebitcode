/* Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */

alert('Seja bem-vindo ao Registra Viagens!\n Siga as instruções para saber quantas viagens já fez e quais foram essas viagens.')

const nomeTurista = prompt('Qual é o seu primeiro nome?')
let everTraveled = prompt('Vocẽ já viajou alguma vez em sua vida? (sim/não)')

let cidadesVisitadas = ''
let numeroCidades = 0

while (everTraveled == 'sim'){
    numeroCidades += 1
    cidadesVisitadas += prompt('Para qual cidade você foi?') + ', ';
    everTraveled = prompt('Você foi para alguma outra cidade? (sim/não)')
}

alert('Pronto! Aqui estão as suas informações:' + 
'\nNome: ' + nomeTurista +
'\nQuantas cidades visitou: ' + numeroCidades +
'\nCidades visitadas: ' + cidadesVisitadas)

