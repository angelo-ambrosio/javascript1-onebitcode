//========EXERCÍCIO 1==============

/* alert("Bem vindo!\n\nA seguir pediremos que informe alguns dados")

let name = prompt("Informe o seu nome completo:")
let age = prompt("Qual é a sua idade?")

function confirmAge (){
    let ageconfirmed = confirm(`Você confirma que tem ${age} anos?`)

    if (ageconfirmed == false){
        age = prompt("Qual é a sua idade?")
        confirmAge()
    } 
}

confirmAge()

alert(`Aqui estão as suas informações:

Nome: ${name}
Idade: ${age}`) */

//============EXERCÍCIO 2===================

/* alert("Vamos comparar as idades de duas pessoas?")

let olderPersonName = prompt("Qual o nome da pessoa mais velha?")
let olderPersonAge = prompt("Qual é a idade dela?")

let youngerPersonName = prompt("Qual o nome da pessoa mais nova?")
let youngerPersonAge = prompt("Qual a idade dela?")

let ageGap = olderPersonAge - youngerPersonAge

alert(`Aqui estão as informações:

${olderPersonName} tem ${olderPersonAge} anos.
${youngerPersonName} tem ${youngerPersonAge} anos.

A diferença de idade entre eles é de ${ageGap}.`) */

//=============EXERCÍCIO 3=====================

/* let name = prompt("Qual é o nome do piloto?")
let initialShipSpeed = 0
let shipSpeed;
let shipSpeedConfirmation;

function accelerateShip(){
    shipSpeed = prompt("A que velocidade você deseja acelerar a nave?")
    shipSpeedConfirmation = confirm(`Você confirma que deseja acelerar a nave a uma velecidade de ${shipSpeed} km/s?`)

    if (shipSpeedConfirmation == false){
        alert("Aceleração cancelada. Estabeleça uma nova velocidade")
        accelerateShip()
    } else {
        return Number(shipSpeed)
    }

}

accelerateShip();

if (shipSpeed == 0){ 
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (shipSpeed > 0 && shipSpeed < 40){
    alert("Você está devagar, podemos aumentar mais")
} else if (shipSpeed >= 40 && shipSpeed < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (shipSpeed >= 80 &&  shipSpeed < 100) {
    alert("Velocidade alta. Considere diminuir")
} else if (shipSpeed >= 100) {
    alert("Velocidade perigosa. Controle automático forçado")
    shipSpeed = 60;
}

alert(`Nome do piloto: ${name}
Velocidade atual: ${shipSpeed} km/s`) */

//===============EXERCÍCIO 4===============
