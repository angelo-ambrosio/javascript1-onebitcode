/*
## Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/

alert("Olá recruta!\n\n Preencha as informações corretamente para criar sua ficha em nossa base de dados.")

let firstName = prompt('Informe o seu primeiro nome');

let surname = prompt('Coloque agora o seu sobrenome:')

let studyTopic = prompt('Qual é o seu campo de estudo?')

let birthYear = prompt('Por último, em qual ano você nasceu?')

let birthYearNumber = parseFloat(birthYear)

alert(`Aqui estão os seus dados:\n
- Nome: ${firstName + ' ' + surname}
- Campo de estudo: ${studyTopic}
- Idade: ${2023 - birthYearNumber}`)