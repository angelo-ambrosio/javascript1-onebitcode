/* Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
   - área do triângulo: base * altura / 2
   - área do retângulo: base * altura
   - área do quadrado: lado²
   - área do trapézio: (base maior + base menor) * altura / 2
   - área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

alert('Seja bem vindo à CALCULADORA GEOMÉTRICA!\n\nPreencha os dados com atenção para obter os resultados desejados.')

function areaTriangulo (base, altura) {
    return (base * altura) / 2
}

function areaRetangulo (base, altura) {
    return base * altura
}

function areaQuadrado (lado) {
    return lado * lado
}

function areaTrapezio (baseMaior, baseMenor, altura) {
    return (parseFloat(baseMaior) + parseFloat(baseMenor)) * altura / 2
}

function areaCirculo (raio) {
    return 3.14 * (raio * raio)
}

let menu = prompt('Escolha o tipo de área que deseja calcular:' + 
'\n\n1 - Triângulo' + 
'\n2 - Retângulo' +
'\n3 - Quadrado' +
'\n4 - Trapézio' +
'\n5 - Círculo' +
'\n6 - Sair')

function mostraMenu(){
    menu = prompt('Escolha o tipo de área que deseja calcular:' + 
    '\n\n1 - Triângulo' + 
    '\n2 - Retângulo' +
    '\n3 - Quadrado' +
    '\n4 - Trapézio' +
    '\n5 - Círculo' +
    '\n6 - Sair')
}


while (true) {

    if (menu == 1){
        let alturaRebecida = prompt('Informe a altura (em metros) do triângulo:')
        let baseRecebida = prompt('Informe a medida (em metros) base do triângulo:')
        alert('A área do triângulo é de ' + areaTriangulo(alturaRebecida, baseRecebida) + ' metros');
        mostraMenu();
    } else if (menu == 2) {
        let alturaRebecida = prompt('Informe a altura (em metros) do retângulo:')
        let baseRecebida = prompt('Informe a medida (em metros) base do retângulo:')
        alert('A área do retângulo é de ' + areaRetangulo(alturaRebecida, baseRecebida) + ' metros');
        mostraMenu();
    } else if (menu == 3) {
        let ladoRecebido = prompt('Informe a medida do lado (em metros) do quadrado:')
        alert('A área do quadrado é de ' + areaQuadrado(ladoRecebido) + ' metros');
        mostraMenu();
    } else if (menu == 4) {
        let baseMaiorRecebida = prompt('Informe a medida (em metros) da base maior do trapézio:')
        let baseMenorRecebida = prompt('Informe a medida (em metros) da base menor do trapézio:')
        let alturaRecebida = prompt('Informe a medida (em metros) da altura do trapézio:')
        alert('A área do trapézio é de ' + areaTrapezio(baseMaiorRecebida, baseMenorRecebida, alturaRecebida) + ' metros');
        mostraMenu();
    } else if (menu == 5) {
        let raio = prompt('Informe a medida (em metros) do raio do círculo:')
        alert('A área do círculo é de ' + areaCirculo(raio) + ' metros');
        mostraMenu();
    } else if (menu == 6) {
        alert('Saindo...')
        break
    } else {
        alert('Opção inválida. Clique em ok para voltar ao menu')
        mostraMenu();
    }

}