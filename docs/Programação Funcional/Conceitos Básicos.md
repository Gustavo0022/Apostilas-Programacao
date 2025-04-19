
# Conceitos Básicos
#PF 

[<- Voltar](./Menu.md)

## Definição e aplicação de uma função

Uma função é definida utilizando a palavra ```function``` ou a notação arrow (como demonstrado em _funções como expressões_).

A aplicação é o uso dessa função. Exemplo:

```js
function areaCirc(r){      /*###############*/
    const pi = 3.14        /*## DEFINIÇÃO ##*/
    return pi*r**2         /*##############*/
}

console.log(areacirc(3)) // ## APLICAÇÃO ## */
```

## Pureza

```js
const pi = 3.14
function areaCirc(r){
    return pi*r**2
}
```
Uma função é pura quando recebe todas as constantes no escopo local.

A função acima é **IMPURA**, pois recebe um parâmetro (pi) do escopo global.

Essa função pode ser considerada pura como abaixo

```js
function areaCircPura(r){
    const pi = 3.14
    return pi*r**2
}
```

acima, a constante pi é definida no escopo LOCAL da função

```js
function areaCircImpEst(r){
    return Math.PI*r**2
}
```
Essa outra função pode ser considerada **IMPURA ESTÁVEL**, pois recebe uma constante não definida no escopo (```Math.PI```), mas que existe na própria linguagem.


## Função como Expressão
As funções declaradas usando a palavra function (como todas acima) não são consideradas "Cidadãs de primeira classe", não estando no mesmo nível de uma constante ou um valor qualquer.

para elevar o nível da função ao mesmo de outro, utiliza-se a chamada **NOTAÇÃO ARROW** (```=>```),
podendo ser utilizada da seguinte forma:

```js
const areaCircArrow = (r) => 3.14*r**2 //<-- representação da função como expressão
// ^constante ^nome    ^expressão de mapeamento
```

agora a função é uma **"Cidadã de primeira classe"**

a aplicação da função ocorre da mesma forma [```areaCircArrow()```].

no caso de a função ter uma linha, não é necessário usar "return".

```js
const areaCircArrowchaves = (r) =>{
    return 3.14*r**2
}
```

mas no caso acima(entre chaves e com mais de uma linha), é obrigatório.

A partir de agora, usaremos apenas funções desse jeito.


## Funções como Argumento

funções podem ser passadas como argumento em outras funções.

funções que recebem e/ou retornam outras funções são chamadas de **FUNÇÕES DE ALTA ORDEM**.

```js
const exec = (f,x,y) => f(x,y)
const pot = (b,e) => b**e

console.log(exec(pot,2,3))
```

A função ```exec()``` acima recebe uma função e dois parâmetros para aplicar na função escolhida, no caso ```pot()```.

## Funções como retorno, currying e aplicação parcial

Funções também podem ser retornadas por outras funções, a exemplo do uso de currying junto à aplicação parcial.

**CURRYING** é a organização de funções para que seus parâmetros (ou argumentos) sejam passados de forma gradual/desagregada (ou seja, com **APLICAÇÃO PARCIAL** da função).

Função não "currificada"
```js
const pot = (b,e) => b**e

console.log(pot(5,2))
```

A função que define a potência de forma geral, dessa forma, não pode ser utilizada para fazer uma nova função para calcular o quadrado ou o cubo, etc.

Agora, vamos ver a versão "currificada" e apresentando aplicação parcial.

```js
const potCurry = (e) => (b) => b**e //parâmetros desagregados
const quad = potCurry(2) //exemplos de aplicação parcial
const cubo = potCurry(3)

const base = 5
console.log(quad(base), cubo(base))
```
Aqui, a função utiliza tanto currying quanto aplicação parcial, mas é possível fazer a aplicação total da função.

```js
const potCurry = (e) => (b) => b**e //parâmetros desagregados

console.log(potCurry(5)(2)) //aplicação total de uma função desagregada
```

## Funções Anônimas

São funções sem nome, podendo ser definidas na execução.

```js
const exec = (f, ...nconst) => f(...nconst)

console.log(exec((x,y) => x**y,5,2))
console.log(exec((a,b,c)=> a+b+c , 3,4,5))
console.log(exec((a,b,c,d)=> a+b+c+d , 3,4,5,6))
```

A função ```exec```, que recebe n parâmetros (uma função, qualquer número de parâmetros*), é aplicada utilizando funções anônimas, a exemplo de ```(x,y) => x**y```.

*A aplicação para receber qualquer número de parâmetros (denominada parâmetro REST) pode ser representada por ```...nomeDaConst```, sendo ```nomeDaConst``` qualquer nome para o conjunto de parâmetros recebidos. ATENÇÃO! Por meio disso, não é possível utilizar aplicação parcial.