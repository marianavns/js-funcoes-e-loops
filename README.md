#Resumo #Javascript

# Resumo em Construção sobre a semana 3  <h1>

## Funções <h2>

### Arrow Functions <h3>
Não conseguem acessar atributos fora dela usando o this. 


### Uma variável pode receber uma função! <h3>

Uma variável pode receber diversos tipos de valores, como strings e números. Mas elas podem receber, também, funções! Olha o exemplo:

```js
function imprimeNome (){
    console.log("Meu nome é Mariana")
}

const variavelQueGuardaFuncao = imprimeNome

variavelQueGuardaFuncao()
```
Guarda isso, vai ser útil mais pra frente. ;)


### Observaçoes Aleatórias <h2>

### Escopo no IF <h3>

![warning](https://i.ibb.co/W5byBrZ/shutterstock-389230123-760x400.jpg)
A instrutora falou na aula do dia 06/09 que o IF não tem restrição de escopo. É importante fazer exemplos dessa afirmação em breve. 

### Return <h3>

**Return** é quem manda para fora da função o que queremos. Olha o exemplo em funções:

```js 
function soma (num1, num2){
    return num1 + num2
    }
console.log(soma(20, 444)) //464
```
Se você só digitar "num1 + num2", sem o *return*, o resultado do console.log será "undefined". Por que? Porque a função soma() não retornou absolutamente nada para a console.log.

Para excluir o *return*, você precisa dar um jeito internamente, criando uma variável que dará esse retorno, como no exemplo abaixo:

```js 
function soma (num1, num2){
    var resultado = num1 + num2
    console.log(resultado)
    }
    soma(20, 444) //464
```

Note que nós escrevemos um pouco mais se não usamos o *return*. **Tente usar o return com mais frequência**

## Loops

Toda vez que vamos pensar em um for, pensamos em três perguntas:

O que queremos que seja repetido a cada loop?
Que valor(es) queremos alterar a cada loop?
Quando queremos que o loop pare?
Agora vamos ver um código que calcula 2^10 (2 exponencial 10), usando for:
```js
let resultado = 1
for (let contador = 0; contador < 10; contador++){
  resultado = resultado * 2
}
console.log(resultado)
// → 1024
```
A representação geral do loop for é a seguinte:

```js
for (inicial; condição; incremento){
  Bloco de código a executar
}
```