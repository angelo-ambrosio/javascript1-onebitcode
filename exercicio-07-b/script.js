/* Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

let initialCards = ['4 vermelho', 'UNO', '2 verde', '9 amarelo', '+4', '+2 azul', '7 azul'];
let newCard;
let removedCard;



let menu = prompt('Ei, jogador!\n' + 
'Aqui está a sua quantidade de cartas: ' + initialCards.length +
'\n\nPara ADICIONAR uma carta, digite 1' +
'\nPara PUXAR uma carta, digite 2' + 
'\nPara SAIR, digite 3'
)

function voltaMenu(){
    menu = prompt('Ei, jogador!\n' + 
    'Aqui está a sua quantidade de cartas: ' + initialCards.length +
    '\n\nPara ADICIONAR uma carta, digite 1' +
    '\nPara PUXAR uma carta, digite 2' + 
    '\nPara SAIR, digite 3'
    )
}

while(true){
    if (menu == 1){
        newCard = prompt('Informe qual é a nova carta:')
        initialCards.unshift(newCard);
        voltaMenu();
    } else if (menu == 2) {
        if (initialCards.length > 0){
            removedCard = initialCards.shift();
            alert('Aqui está a carta que você puxou: ' + removedCard);
            voltaMenu();
        } else {
            alert('VOCÊ NÃO TEM MAIS CARTAS!\n\nAdicione algumas para continuar jogando');
            voltaMenu();
        }
        
    } else if (menu == 3) {
        alert('Finalizando o jogo...');
        break
    } else {
        alert('Opção inválida. Clique em ok para voltar ao menu.')
        voltaMenu();
    }
}
