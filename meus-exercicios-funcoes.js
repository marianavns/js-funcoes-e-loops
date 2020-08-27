
/*
Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado */

/*####### SOMA #######*/

    const input = require('readline-sync')
    console.log("#### Somando dois numeros ####")
    let valor1 = parseInt(input.question ("Digite o primeiro numero: "))
    let valor2 = parseInt(input.question ("Digite o segundo numero: "))
        function soma (num1, num2){
            return num1 + num2
        }
    console.log("O valor da soma dos números " + valor1 + " e " + valor2 + " é igual a " + soma(valor1,valor2))  */


/*####### SUBTRAÇÃO #######*/

    const input = require('readline-sync')
    console.log("#### Subtraindo dois numeros ####")
    let valor1 = parseInt(input.question ("Digite o primeiro numero: "))
    let valor2 = parseInt(input.question ("Digite o segundo numero: "))
        function subtrai (num1, num2){
            return num1 - num2
        }
    console.log("A diferença entre o primeiro número (" + valor1 + ") e o segundo (" + valor2 + ") é igual a " + subtrai(valor1,valor2)) */

/*####### MULTIPLICACAO #######*/
    
    const input = require('readline-sync')
    console.log("#### Multiplicando dois numeros ####")
    let valor1 = input.question("Digite o primeiro numero: ")
    let valor2 = input.question("Digite o segundo numero: ")
        const multiplica = function (num1, num2){
            return num1 * num2
        }
    console.log("A multiplicacao dos numeros " + valor1 + " e " + valor2 + " é igual a " + multiplica(valor1, valor2)) */

/*####### DIVISAO #######*/

    const input = require('readline-sync')
    console.log("#### Dividindo dois numeros ####")
    let valor1 = parseInt(input.question ("Digite o primeiro numero: "))
    let valor2 = parseInt(input.question ("Digite o segundo numero: "))
        function divide (num1, num2){
            return num1 / num2
        }
    console.log("A divisao do primeiro número (" + valor1 + ") pelo segundo (" + valor2 + ") é igual a " + divide(valor1,valor2)) 

 /* 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

 3) crie uma função que chame internamente qualquer uma das funções acima e imprima o resultado no formato de String. Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

 4) utilizando as funções de soma e multiplicação já feitas nos exercícios anteriores, crie uma nova função que chame essas funções e resolva a conta 36325 * (9824 + 777).

 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100 (por exemplo, 54 e 12). Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

 6) Crie uma função com as seguintes características:
 1. A função deve receber 3 números
 2. Se qualquer um dos três números não forem informados, a função deve retornar a string: "Preencha todos os valores corretamente!"
 3. O retorno da função deve ser a multiplicação dos 3 números, somando `2` ao resultado da multiplicação. DICA: pesquise o que aparece no console.log caso uma função precise de um parâmetro, mas não receba nenhum.  */

/* const input = require('readline-sync')

let valor1 = parseInt(input.question ("Digite o primeiro numero: "))
let valor2 = parseInt(input.question ("Digite o segundo numero: "))
let valor3 = parseInt(input.question ("Digite o terceiro numero: "))

function multiplicaMais2(par1, par2, par3){

    for (let contador = 0; contador >= 0; contador++){
        if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
            console.log("Preencha todos os valores corretamente!")
            break
            } else {   
            return (par1 * par2 * par3 + 2)
                }
        }
    }

console.log(multiplicaMais2(valor1, valor2, valor3)) */

/* 7) Crie uma função com as seguintes características:
 1. A função deve receber 3 parâmetros.
 2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
 5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

 9) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate" */ 


