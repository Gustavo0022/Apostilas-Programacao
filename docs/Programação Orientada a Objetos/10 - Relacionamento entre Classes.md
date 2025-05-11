# Relacionamento entre classes

O relacionamento entre diferentes classes é essencial para a Orientação a Objetos. É o que permite que os programas funcionem. 

É possível relacionar diversas classes e objetos entre si. Por exemplo, é possível permitir que um objeto pessoa se reúna com um objeto conta para sacar ou depositar dinheiro, ou apenas consultar o salto, por exemplo. É possível que uma classe possua um atributo do tipo de outra classe (tipo não primitivo).

## Relacionamento de agregação

Um relacionamento de agregação é um relacionamento o qual um objeto é parte de outro objeto, configurando um objeto mais complexo.

Por exemplo, dado um objeto `contaDeFulano` da classe `Conta`, que possui um método `consultarSaldo()` ele pode estar contido dentro de um objeto da classe `Banco`, nomeado `bancoBamerindus`. Assim, para acessar o saldo da conta desejada, é necessário escrever:
```c
bancoBamerindus.contadefulano.consultarSaldo();
```

Pois o objeto da conta está contido no banco. Assim, não é possível acessar essa conta a partir do `bancoProduban`, por exemplo