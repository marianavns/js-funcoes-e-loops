

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um parâmetro for passado, retorne o valor do parâmetro.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum parâmetro for passado, retorne "não recebeu parâmetro"

const input1 = require('readline-sync')

function potenciaDeDois(numero1) {
    return parseInt(numero1) ** 2
  }

let par1 = input1.question("Insira um numero aqui: ")

console.log(potenciaDeDois(par1))

