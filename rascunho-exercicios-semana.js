
/* APRIMORAMENTOS A FAZER: 
Qual a resposta se o usuário nao digitar números?
É possível configurar se ele digitar 2 numeros e uma palavra? */

const input = require('readline-sync')

console.log("Digite 3 NÚMEROS e diremos qual é o maior! Caso deseje sair, digite SAIR em qualquer momento.")
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
           
            for (let tentativa = 1; tentativa > 0; tentativa++){
                if (parseInt(num1)>parseInt(num2) && parseInt(num1)>parseInt(num3)){
                console.log("O maior número é " + num1)
                tentativa = -1
                    } else {
                if (parseInt(num2)>parseInt(num1) && parseInt(num2)>parseInt(num3)){
                console.log("O maior número é " + num2)
                tentativa = -1
                    } else {
                if (parseInt(num3)>parseInt(num1) && parseInt(num3)>parseInt(num2)){
                console.log("O maior número é " + num3)
                tentativa = -1
                }
                    }
                    }
            }
        }
        }
        }