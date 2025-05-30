# Classes e objetos

## Classes

Classes "definem atributos e métodos comuns que serão compartilhados por um objeto."

Classes são justamente formas de se identificar e gerar, de forma genérica, um objeto. Classes precisam ter, assim como objetos, características (atributos), comportamentos (métodos) e estados possíveis.

>[!Dica]
>Classes funcionam de forma similar (mas não igual) a `structs` da linguagem C. A diferença é que, enquanto `structs` possuem apenas `atributos`, classes também incorporam os métodos e conceitos essenciais da Orientação a objetos, como os 3 pilares (Encapsulamento, Herança e polimorfismo), que serão abordados nos documentos seguintes.

## Objetos
Objetos são **instâncias** de uma classe, com valores de atributos e comportamentos definidos, e podendo usar  métodos de sua classe, podendo utilizar esses métodos e atributos para interagir com outros objetos.

### Atributos
Atributos são características do objeto. Do que ele é feito, ou o uso apropriado, entre outras características.

Voltando ao exemplo da cadeira, podemos definir uma classe Cadeira, com atributos *material*, *estofado*, *uso externo?*, *vazada*, *número de pés*. Perceba que nem todos os atributos aceitam dados de um mesmo tipo. *material* aceita uma palavra ou frase, como madeira ou plástico. *uso externo* é uma pergunta de sim ou não (booleano). *número de pés* aceita números inteiros.
### Métodos
Métodos são as ações possíveis com aquele objeto. Então é possível que a cadeira tenha um método chamado `sentar()`, que permite que a pessoa se sente, `levantar()`, que permite que a pessoa se levante, ou até mesmo `derrubar()` e `levantarCadeira()`, que permite que a cadeira seja derrubada ou levantada do chão

Dentro dos métodos, haverão algoritmos para a realização dessas ações. Então, para o método `sentar()`, por exemplo, podemos elaborar um algoritmo que determine que, caso ninguém esteja sentado na cadeira, o usuário pode se sentar nela. Ou então, no método `levantarCadeira()`, caso a cadeira esteja no chão, o usuário pode levantá-la. Perceba que é necessário averiguar os **estados** da cadeira para tal
### Estados
O estado dos objetos é determinado em momentos específicos. Uma cadeira pode estar ocupada ou desocupada, pode estar caída no chão ou não. Note a relação que, se a cadeira estiver no chão, ela não pode estar ocupada.
