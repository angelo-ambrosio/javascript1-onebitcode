/*Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

alert('Seja bem-vindo ao CALCULA DANO!\n\n Aqui você pode simular combates e saber como seria o confronto entre os grandes heróis em diferentes cenários.\n\n Preparado?')

let damage

let attackHero = prompt('Qual o nome do primeiro herói?')
let infoAttackPower1 = prompt('Qual é o seu poder de ataque?')
let attackPower1 = parseFloat(infoAttackPower1)

let defenseHero = prompt('Qual o nome do segundo herói?')
let infoLife2 = prompt('Quantos pontos de vida o ' + defenseHero + ' tem?')
let life2 = parseFloat(infoLife2)
let shield = prompt('O ' + defenseHero + ' possui um escudo?\n\n Digite yes ou no')


if (attackPower1 > life2 && shield == 'no') {
    damage = attackPower1 - life2
    alert(`Vitória do ${attackHero}! Sem o escudo, o ${defenseHero} sofre um dano de ${damage}.`)
} else if (attackPower1 > life2 && shield == 'yes') {
    damage = (attackPower1 - life2) / 2
    alert(`Vitória do ${attackHero}! Mas com o escudo, o dano no ${defenseHero} que seria de ${damage*2}, foi de apenas ${damage}.`)
} else if (attackPower1 <= life2) {
    damage = 0
    alert(`Vitória do ${defenseHero}! As forças do ${attackHero} não foram suficientes para derrotar o ${defenseHero}.`)
} else {
    alert('Os dados não foram inseridos corretamente. Recarregue a página e tente outra vez')
    console.error('Algo deu errado')
}


