/*
Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

alert('Seja bem-vindo ao conversor de medidas!\n Preencha os dados corretamente para obter a conversão')

let infoMedidaMetros = prompt('Qual é a medida inicial em metros?')
let medidaMetros = parseFloat(infoMedidaMetros)

let unidadeEscolhida = prompt(`Para qual unidade de medida você gostaria de converter?
- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)
Por favor digite a abreviação da medida no campo abaixo:`)

switch (unidadeEscolhida) {
    case 'mm':
        alert(`${medidaMetros} metros é igual a ${medidaMetros*1000} milímetros`)
        break
    case 'cm':
        alert(`${medidaMetros} metros é igual a ${medidaMetros*100} centímetros`)
        break
    case 'dm':
        alert(`${medidaMetros} metros é igual a ${medidaMetros*10} decímetros`)
        break
    case 'dam':
        alert(`${medidaMetros} metros é igual a ${medidaMetros/10} decâmetros`)
        break
    case 'hm':
        alert(`${medidaMetros} metros é igual a ${medidaMetros/100} hectômetros`)
        break
    case 'km':
        alert(`${medidaMetros} metros é igual a ${medidaMetros/1000} quilômetros`)
        break
    default:
        alert("Opção inválida. Recarregue a página e tente novamente.")
}
