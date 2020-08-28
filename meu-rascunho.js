
console.log("Esta aplicacao captura 3 numeros informados pela usuaria, multiplica e adiciona 2")
console.log("Se algum numero nao for informado, a funcao nao é acionada")

const input = require('readline-sync')
let valor1 = parseInt(input.question ("Digite o primeiro numero: "))
let valor2 = parseInt(input.question ("Digite o segundo numero: "))
let valor3 = parseInt(input.question ("Digite o terceiro numero: "))

function multiplicaMais2(par1, par2, par3){

      if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        console.log("Por favor, preencha todos os valores corretamente.")
        } else {   
            let resultado = (par1 * par2 * par3 + 2)
            console.log(resultado)
            }
    }

multiplicaMais2(valor1, valor2, valor3)