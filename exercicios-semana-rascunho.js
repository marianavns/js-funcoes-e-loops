console.log("Digite 3 números e diremos qual é o maior! Caso deseje sair, digite SAIR em qualquer momento.")

let primeiroNumero = input.question ("Primeiro numero: ")
    if (primeiroNumero === "SAIR"){
        console.log("APLICACAO ENCERRADA")
        tentativa = -1
        } else {
        let segundoNumero = input.question ("Segundo numero: ")
        if (segundoNumero === "SAIR"){
            console.log("APLICACAO ENCERRADA")
            tentativa = -1
} else {
} let terceiroNumero = input.question ("Segundo numero: ")
if (terceiroNumero === "SAIR"){
    console.log("APLICACAO ENCERRADA")
    tentativa = -1

} else {

let terceiroNumero = input.question ("Terceiro numero: ")
for (let tentativa = 1; tentativa > 0; tentativa++){
        if (parseInt(primeiroNumero)>parseInt(segundoNumero) && parseInt(primeiroNumero)>parseInt(terceiroNumero)){
        console.log("O maior número é " + primeiroNumero)
        tentativa = -1
        } else {
            if (parseInt(segundoNumero)>parseInt(primeiroNumero) && parseInt(segundoNumero)>parseInt(terceiroNumero)){
            console.log("O maior número é " + segundoNumero)
            tentativa = -1
            } else {
                if (parseInt(terceiroNumero)>parseInt(primeiroNumero) && parseInt(terceiroNumero)>parseInt(segundoNumero)){
                    console.log("O maior número é " + terceiroNumero)
            tentativa = -1
                }
            }
        }
    }
}
}