# Recursividade


<img src="/docs/Programação Funcional/assets/galshir-babushka.gif" height="400">

## Conceito

Recursividade é o ato de resolver um problema por meio da repetição de uma mesma função, chamada de **passo indutivo**, invocada por ela mesma, até que se chegue ao chamado **caso base**

O **CASO BASE** é o valor inicial de uma sequência recursiva. Ele é responsável por definir o fim da cadeia recursiva.

Já o **PASSO INDUTIVO** é o passo necessário para transitar até o caso base, assim obtendo o resultado esperado.

Ex.: Definindo uma sequência aritmética $ \{3,5,7,9,11,13...\}$, podemos obter qualquer valor dela por meio da função recursiva a seguir

$f(0) = 3 $  
$ f(n-1) + 2$  

A primeira linha é o Caso Base (que indica que $3$ é o elemento inicial da sequência e que, se o "contador" chegar a 0, o valor será $3$ ) e a segunda é o passo indutivo (que indica que, enquanto $f(n)$ for diferente de zero, subtri-se o n em 1 e soma-se 2 ao resultado de $f(n-1)$ ). Assim, para chegar ao quarto elemento da sequência, seriam feitos a seguintes iterações:

"Ida" até o caso base

$f(3)$ =  
=$f(2) + 2$  
=$f(1) + 2$  
=$f(0)$ → 3

"Volta" solucionando os passos indutivos recursivamente

$f(1) + 2$ → $3 + 2 $ = 5  
$f(2) + 2$ → $5 + 2$ = 7  
$f(3) + 2$ → $7 + 2$ = 9

Logo, o quarto elemento da lista é $9$

Outro exemplo de função recursiva é a famosa **Sequência de Fibbonacci**, que pode ser representada da seguinte forma:

$f(0) = 1$       (caso base 1)  
$f(1) = 1$        (caso base 2)  
$f(n-1) + f(n-2)$ (passo indutivo)

Traduzindo em palavras, os casos base são os primeiros números da sequência $(1,1)$ e todos os outros derivam desses, nesse caso, o elemento $f(3)$ é definido por $f(2) + f(1)$, ou melhor, $3 = 2+1$

Na programação, utilizando JavaScript essa função pode ser representada por:

```js
const fib = (n) => {
    if (n == 0) return 1
    else if (n == 1) return 1
    else return fib(n - 1) + fib(n-2)
}
```

Note que a função é chamada dentro dela mesma, e isso é um dos aspectos que caracteriza uma função recursiva. Note também que, caso não existissem casos base, a função nunca terminaria de ser executada, resultando em uma "stack overflow" ou sobrecarga de pilha.

Outro exemplo é uma função de potência

```js
const potencia = (b,e) => {
    if (e == 0) {return 1} 
    else return b*potencia(b,e-1)
}
```

Aqui, o caso base é o caso de o expoente ser $0$ (o resultado é $1$), e o passo indutivo é que, caso o expoente seja diferente de 0, faz-se o produto da base com a função, até que se chegue no caso base.

//fazer o de mdc e o de string

## Recursividade em lista

Até agora, vimos a recursividade com casos que não envolvem listas, mas essa funcionalidade é extremamente útil para a manipulação de listas com o paradigma funcional.

Para a recursividade em lista, é necessário **desestruturar*** a lista em dois elementos:
* Head (ou cabeça): é o elemento a ser operado na operação recursiva atual. Geralmente, mas não para todos os casos, é o primeiro elemento da lista
* Tail (ou cauda): é o resto da lista, em que as próximas operações recursivas ocorrerão, com um dos elementos (novamente, geralmente o primeiro) da tail sendo a head da próxima iteração recursiva.

*A desestruturação de parâmetros é a separação de certos parâmetros de um objeto, uma lista ou algum outro tipo de dado:

```js
const lista = [1,2,3,5]
const [x,...xs] = lista //desestruturação da lista, consistindo nesse caso de pegar o primeiro elemento e associá-lo à constante x, e o resto da lista associado à constante xs. Assim, x = 1 e xs = [2,3,5].

console.log(x)
console.log(xs)
```
Voltando à recursividade, abaixo temos uma função que retorna a soma de todos os elementos da lista:

```js 
const somaLista = ([x,...xs]) => {
    if (typeof x == 'undefined') return 0
    else return x + somaLista(xs)
}

console.log(somaLista([3,4,12,15])) //retorna 34
```


A depender da função, é possível ter duas cabeças em uma mesma operação recursiva, como no exemplo abaixo, que retorna o maior 

```js
const maior = ([x,y,...xs]) => {
    if (typeof y == 'undefined') return x
    else if (x>y) return maior([x,...xs])
    else return maior([y,...xs]) 
}
console.log(`O maior número da lista é ${maior([3,4,12,15])}`) 
//retorna "O maior número da lista é 15"
```

*OBS: Como é possível ver, utilizamos em praticamente todas as funções de recursividade em lista a condição ```typeof x == 'undefined'```, pois, caso a lista esteja vazia, o tipo dela é indefinido, ou ```'undefined'```. Não é possível realizar operações úteis com isso. Para facilitar o trabalho, é possível identificar se certo elemento da lista (a "cabeça") está vazio, pois se estiver, a lista está vazia (ou no caso acima, resta apenas um elemento, que é o que queremos). Assim, é possível definir uma função de uso geral:

```js
const undef = (x) => typeof x == 'undefined'
```
Essa função verifica se o tipo da constante selecionada é ```undefined``` e retorna um valor do tipo bool ```true``` ou ```false``` caso seja ou não seja.


A partir da recursividade, é possível criar funções já existentes, a fim de entender como elas funcionariam no paradigma funcional. Abaixo, temos a função ```map```, implementada em JS:

```js
const lista1 = [2,3,8,10]
const lista2 = lista1.map((x) => x**2)

console.log(lista2) // retorna [4,9,64,100]
```

Como explicado no documento de <ins>Listas e registros </ins> a função ```map``` retorna uma nova lista com os elementos modificados de acordo com a função definida na sua declaração. Podemos criar uma função ```map``` com recursividade, da seguinte forma:

```js 
const meuMap = ([x,...xs], f) => {
    if (typeof x == 'undefined') return []
    else return [f(x), ...meuMap(xs,f)] 
}
```

#PF