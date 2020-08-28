// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

/* const input = require('readline-sync')
 
function potenciaDeDois(){

    for (let tentativa = 1; tentativa > 0; tentativa++) {
        let entrada = input.question ("Digite um numero e veja seu valor ao quadrado. Caso deseje encerrar a aplicacao, digite SAIR: ")
                if (entrada === "SAIR"){
                console.log("FIM")
                tentativa = -1
                    }else{
                    let numeroValido = (parseInt(entrada))
                    let resultado = numeroValido ** 2
                    console.log(resultado)
                        }
        }
    }
potenciaDeDois(); 
 */
    
// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30


const input = require('readline-sync')

function verificaSair(){
    let num1 = input.question ("Primeiro numero: ")
        if (num1 === "SAIR"){
            console.log("Sentirei saudades :(")
            tentativa = -1
                } else {
                    let num2 = input.question ("Segundo numero: ")
                    if (num2 === "SAIR"){
                        console.log("Sentirei saudades :(")
                        tentativa = -1
                            } else {
                                let num3 = input.question ("Terceiro numero: ")
                                if (num3 === "SAIR"){
                                    console.log("Sentirei saudades :(")
                                    tentativa = -1
                                    } else {
                                        retornaNumMaior()
}

function retornaNumMaior(){

    console.log(" ")
    console.log(" ### Digite 3 NÚMEROS e diremos qual é o maior! ### ")
    console.log("Caso deseje sair, digite SAIR em qualquer momento.")
        verificaSair()
                    for (let tentativa = 1; tentativa > 0; tentativa++){
                    if (parseInt(num1)>parseInt(num2) && parseInt(num1)>parseInt(num3)){
                    console.log("O maior número é " + num1)
                    retornaNumMaior()
                    tentativa = -1
                        } else {
                            if (parseInt(num2)>parseInt(num1) && parseInt(num2)>parseInt(num3)){
                            console.log("O maior número é " + num2)
                            retornaNumMaior()
                            tentativa = -1
                                } else {
                                    if (parseInt(num3)>parseInt(num1) && parseInt(num3)>parseInt(num2)){
                                    console.log("O maior número é " + num3)
                                    retornaNumMaior()
                                    tentativa = -1
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }

    retornaNumMaior()

    /* APRIMORAMENTOS A FAZER: 
Qual a resposta se o usuário nao digitar números?
Qual a resposta se o usuário digitar 2 números iguais?
É possível configurar se ele digitar 2 numeros e uma palavra? */


// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1] */ 