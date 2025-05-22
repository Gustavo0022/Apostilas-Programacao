# Aula 1 - Conceitos Básicos

## Características do paradigma imperativo

O paradigma imperativo possui características como
- Estruturas de controle (escolha e repetição)
- Entrada e saída de dados
- Tratamento de erros e de exceções (retornos, etc)
- Abstração procedural
- Expressões e comandos de atribuição (definição de variáveis, funções, etc)
- Bibliotecas de apoio (bibliotecas como `stdio.h`)

### Programação estruturada

Com a programação estruturada, o fluxo de execução ocorre de forma organizada, sem comandos como `goto`, que permitiam que a execução pulasse entre diferentes linhas do código, deixando o código desorganizado e caótico.
.
.
.

Apesar de o código ser mais organizado, a programação imperativa possui um problema: **o foco em funções e não nos dados**, o que gerava um código difícil de manter, de entender e de reaproveitar. Além disso, não havia proteção de dados robusta entre escopos de execução. 

## Surgimento da Orientação a Objetos

Com a necessidade de um novo paradigma, novas linguagens foram desenvolvidas:

A linguagem *Simula 67* idealizada por Ole-Johan Dahl e Kristen Nygaard, na Noruega. Ela possuía características que permitiam a abstração de procedimentos e de dados, de forma que novos tipos de dados poderiam ser criados, além do encapsulamento e da visibilidade desses dados. 

Os conceitos aplicados foram refinados e nomeados por Alan Kay, um matemático, informático e biólogo estadunidense, com a linguagem *Smalltalk*. Várias outras linguagens como Java, PHP, C++, utilizam hoje a Orientação a Objetos, o que facilita o desenvolvimento de novos programas e aplicativos.

## Encapsulamento e visibilidade

Um dos pilares da POO, encapsulamento é o isolamento de componentes da implementação, permitindo que esses componentes sejam utilizados, mas sem que o seu interior seja exposto. Em outras palavras, é o ato de esconder o interior de algum objeto ou função, impedindo que programas que os acessem vejam o interior desses componentes.

Os modificadores de visibilidade indicam o nível de acesso de partes do programa a determinados elementos de uma classe. Esses níveis de acesso são:
- Público (+): Os atributos podem ser acessados e modificados fora da classe que ele pertence
- Privado (-): Os atributos só podem ser acessados ou modificados dentro da própria classe, por métodos
- Protegido(#): Os atributos podem ser acessados ou modificados pela classe que ele pertence e por suas subclasses

Por meio dos modificadores de visibilidade, é possível encapsular partes do código, de forma que eles fiquem isolados de outras partes do código.

Algumas das vantagens do encapsulamento são:
* As mudanças realizadas no objeto encapsulado são invisíveis ao exterior, de forma que mesmo com alterações a ele, sua funcionalidade permanece a mesma.
* É possível reaproveitar melhor o código de componentes encapsulados entre diferentes projetos
* A redução de possíveis erros e alterações durante a escrita ou a execução do código, pois evita a modificação indesejada de valores nessas ocasiões.

## A linguagem Java

-Escrever depois-





