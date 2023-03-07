/* Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */ 

let pacientes = ['Mateus', 'Marcos', 'Lucas', 'João']
let pacientesMenu = ''
let novoPaciente;
let consultaPaciente;
let pacienteConsultado;


for (i = 0; i < pacientes.length; i++){
    pacientesMenu += (i+1) + ' - ' + pacientes[i] + '\n'
}

let resultadoMenu = prompt('Olá, Dra Natiele. Aqui está a lista de espera dos pacientes:\n\n' +
pacientesMenu + '\n' +
'Para ADICIONAR um novo paciente, digite 1\n' +
'Para CONSULTAR um paciente, digite 2\n' +
'Para SAIR, digite 3');

function menu () {
    resultadoMenu = prompt('Olá, Dra Natiele. Aqui está a lista de espera dos pacientes:\n\n' +
    pacientesMenu + '\n' +
    'Para ADICIONAR um novo paciente, digite 1\n' +
    'Para CONSULTAR um paciente, digite 2\n' +
    'Para SAIR, digite 3');
}

while (resultadoMenu !== 'asdfasdf') {
   
    if (resultadoMenu == 1) {
        novoPaciente = prompt('Informe o nome do novo paciente: ');
        pacientes.push(novoPaciente);
        pacientesMenu += pacientes.length + ' - ' + pacientes[pacientes.length -1] + '\n'
        menu();
    } else if (resultadoMenu == 2) {
        pacienteConsultado = pacientes.shift();
        pacientesMenu = ''
        for (i = 0; i < pacientes.length; i++){
        pacientesMenu += (i+1) + ' - ' + pacientes[i] + '\n'
        }
        alert("Paciente consultado: " + pacienteConsultado)
        menu();
    } else if (resultadoMenu == 3){
        alert('Finalizando o sistema...')
        break
    } else {
        alert('Opção inválida. Aperte ok para voltar ao menu');
        menu();
    }
}