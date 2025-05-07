# O que é um objeto?

Um objeto, no mundo real, é tudo que pode ser descrito por características, comportamentos e estados. Uma cadeira é um objeto, pois pode ser de madeira (característica), permitir que pessoas se sentem (comportamento) e sem nenhum ocupante (estado).

Formalmente, objetos são "Instâncias de uma classe".
## Classes

É possível ter diversas cadeiras de diferentes características, comportamentos e estados. Todas as cadeiras possuem um modelo para classificá-las como... cadeiras. Esses "modelos" podem ser chamados de **Classes**.

Classes "definem atributos e métodos comuns que serão compartilhados por um objeto."

Classes são justamente formas de se identificar e gerar, de forma genérica, um objeto. Classes precisam ter, assim como objetos, características (atributos), comportamentos (métodos) e estados possíveis.
 
## Atributos
Atributos são características do objeto. Do que ele é feito, ou o uso apropriado, entre outras características.

Voltando ao exemplo da cadeira, podemos definir uma classe Cadeira, com atributos *material*, *estofado*, *uso externo?*, *vazada*, *número de pés*. Perceba que nem todos os atributos aceitam dados de um mesmo tipo. *material* aceita uma palavra ou frase, como madeira ou plástico. *uso externo* é uma pergunta de sim ou não (booleano). *número de pés* aceita números inteiros.
## Métodos

Métodos são as ações possíveis com aquele objeto. Então é possível que a cadeira tenha um método chamado `sentar()`, que permite que a pessoa se sente, `levantar()`, que permite que a pessoa se levante, ou até mesmo `derrubar()` e `levantarCadeira()`, que permite que a cadeira seja derrubada ou levantada do chão

Dentro dos métodos, haverão algoritmos para a realização dessas ações. Então, para o método `sentar()`, por exemplo, podemos elaborar um algoritmo que determine que, caso ninguém esteja sentado na cadeira, o usuário pode se sentar nela. Ou então, no método `levantarCadeira()`, caso a cadeira esteja no chão, o usuário pode levantá-la. Perceba que é necessário averiguar os **estados** da cadeira para tal
## Estados
O estado dos objetos é determinado em momentos específicos. Uma cadeira pode estar ocupada ou desocupada, pode estar caída no chão ou não. Note a relação que, se a cadeira estiver no chão, ela não pode estar ocupada.
## Instâncias
Ao criar um objeto a partir de uma classe, estamos **Instanciando** esse objeto. A partir disso, podemos definir os valores dos atributos e desses objetos e invocar métodos relacionados a eles e definir os estados desses objetos.
## Abstração
Para criar Classes e objetos em POO, é necessário identificar os atributos e métodos relevantes para o contexto em que esses objetos estão sendo aplicados, afinal, não seria necessário identificar, por exemplo, o peso de uma pessoa para a matrícula em uma faculdade. Essa identificação recebe o nome de **Abstração**, e é um conceito muito importante na Orientação a Objetos.

