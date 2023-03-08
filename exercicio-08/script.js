/* Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos. */


// -------- RESOLUÇÃO COM ARRAYS ---------

alert('Seja bem-vindo ao CADASTRO DE IMÓVEIS!\n\nSiga as instruções com atenção.')

let numeroImoveis = []
let imovel = []
let imovelMenu = '';

let nome = '';
let quartos;
let banheiros;
let garagem = ''

let menu = prompt("Quantidade de imóveis cadastrados: " + numeroImoveis.length + 
"\n\nPara SALVAR um imóvel, digite 1" +
"\nPara VER todos os imóveis salvos, digite 2" + 
"\nPara SAIR, digite 3")

function mostraMenu(){
    menu = prompt("Quantidade de imóveis cadastrados: " + numeroImoveis.length + 
    "\n\nPara SALVAR um imóvel, digite 1" +
    "\nPara VER todos os imóveis salvos, digite 2" + 
    "\nPara SAIR, digite 3")
}

function salvaImovel(){
   imovel = [];
   nome = prompt('Qual o nome do proprietário?');
   imovel.push(nome)
   quartos = prompt('Qual a quantidade de quartos?')
   imovel.push(quartos)
   banheiros = prompt ('Quantos banheiros o imóvel tem?')
   imovel.push(banheiros)
   garagem = prompt ('Possui garagem? (sim/não)')
   imovel.push(garagem)
   numeroImoveis.push(imovel) 
}

function mostraImovel(){
    for(i = 0; i < numeroImoveis.length; i++){
        imovelMenu += '\nImóvel ' + (i + 1) + ':' +
        "\n - Nome do proprietário: " + numeroImoveis[i][0] +
        "\n - Quartos: " + numeroImoveis[i][1] +
        "\n - Banheiros: " + numeroImoveis[i][2] +
        "\n - Garagem: " + numeroImoveis[i][3] + '\n'
    }
}

while (true) {
    if (menu == 1){
        alert('Siga as próximas instruções para cadastrar um imóvel')
        salvaImovel();
        mostraMenu();
    } else if (menu == 2) {
        if (numeroImoveis.length < 1) {
            alert('Ainda não há imóveis cadastrados!');
            mostraMenu();
        } else {
            mostraImovel();
            alert(imovelMenu);
            mostraMenu();
        }
    } else if (menu == 3) {
        alert('Finalizando...')
        break
    } else {
        alert('Opção inválida. Clique em ok para voltar ao menu')
        mostraMenu();
    }
}



// ------------------ RESOLUÇÃO COM OBJETOS ---------------


/*
alert('Seja bem-vindo ao CADASTRO DE IMÓVEIS!\n\n Siga as instruções atentamente.')

let listaImoveis = [];
let imovel = {}
let opcao2 = '';

let menu = prompt("Quantidade de imóveis cadastrados: " + listaImoveis.length + 
"\n\nPara SALVAR um imóvel, digite 1" +
"\nPara VER todos os imóveis salvos, digite 2" + 
"\nPara SAIR, digite 3")

function mostraMenu () {
    menu = prompt("Quantidade de imóveis cadastrados: " + listaImoveis.length + 
    "\n\nPara SALVAR um imóvel, digite 1" +
    "\nPara VER todos os imóveis salvos, digite 2" + 
    "\nPara SAIR, digite 3")
}

function adicionaImovel () {
    imovel = {}
    imovel.nome = prompt('Qual o nome do proprietário?')
    imovel.quartos = prompt ('Quantos quartos tem o imóvel?')
    imovel.banheiros = prompt ('Quantos banheiros?')
    imovel.garagem = prompt ('Tem garagem? (sim/não)')
    listaImoveis.push(imovel);
}

//preciso saber como conseguir acessar uma propriedade de um objeto que está dentro de um array.
function mostraImovel(){
    for (i = 0; i < listaImoveis.length; i++){
        opcao2 += 'Imóvel ' + (i + 1) + ':\n' + 
        '  - Nome: ' + listaImoveis[i]['nome'] + '\n' +
        '  - Quartos: ' + listaImoveis[i]['quartos'] + '\n' +
        '  - Banheiros: ' + listaImoveis[i]['banheiros'] + '\n' +
        '  - Garagem: ' + listaImoveis[i]['garagem'] + '\n'
    }
}

while(true) {
    if (menu == 1) {
        alert('Siga as instruções com atenção para cadastrar o imóvel.')
        adicionaImovel();
        mostraMenu();
    } else if (menu == 2) {
        if (listaImoveis.length < 1) {
            alert('Ainda não há imóveis cadastrados');
            mostraMenu();
        } else {
            mostraImovel();
            mostraMenu();
        }        
    } else if (menu == 3) {
        alert('Saindo...')
        break
    } else {
        alert('Opção inválida. Aperte ok para voltar ao menu');
        mostraMenu();
    }
}
*/