#Resumo #Javascript

## Resumo em Construção sobre a semana 3  <h1>

### Observaçoes Aleatórias <h2>

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

