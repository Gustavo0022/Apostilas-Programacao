#PI 

[<- Voltar](./Menu.md)
## Operadores relacionais

A linguagem C possui operadores chamados, operadores relacionais, que servem para comparar dados (variáveis, inteiros, strings, etc.).

Alguns operadores relacionais são:

* < (Menor que)
* \> (Maior que)
* <= (Menor ou igual)
* \>= (Maior ou igual)
* == (igual)
* != (diferente de)

Baseado nisso, podemos realizar operações de comparação em chamadas **estruturas de decisão**.

## Estruturas de decisão simples

As estruturas de decisão simples interrompem o fluxo de tempo de execução do programa a depender dos valores passados. Elas são representadas pelas palavras ```if```

```C
...
if ("condição"){
    print("condição satisfeita");
}
...
```

No código acima, a palavra "condição" pode ser substituida por alguma comparação, e caso satisfeita, ela executará o código determinado, nesse caso ```print("Condição satisfeita");```. Veja o exemplo abaixo

```c
   int x, y, z;
    printf("Bem vindo");
    printf("\nInsira o primeiro valor:");
    scanf("%i", &x);
    printf("\nInsira o segundo valor:");
    scanf("%i", &y);

    z = x+y;

    if(z > 10){
        printf("A soma dos dois  números é %i",z);
    }
```

O código acima recebe dois números digitados pelo usuário, e os soma. Caso a soma desses números seja superior a 10, ele exibe o resultado.

## Estruturas de decisão compostas

Em comparação com as estruturas de decisão simples, aqui, possuímos a condicional ```else```

```c
int x, y, z;
    printf("Bem vindo");
    printf("\nInsira o primeiro valor:");
    scanf("%i", &x);
    printf("\nInsira o segundo valor:");
    scanf("%i", &y);

    z = x+y;

    if(z > 10){
        printf("A soma dos dois numeros e %i",z);
    }
    else{
        printf("numero menor que 10 :(\n");
    }
```

Diferente da primeira vez que vimos este bloco de código, com o uso do ```else```, podemos definir uma ação para o caso de a condição não ser satisfeita. Nesse caso, caso a entrada não corresponda à condição definida (se a soma dos dois números não for maior que 10), o programa retorna que o número é menor que 10.

É possível aninhar condicionais e estabelecer diferentes condições a serem verificadas

```c
int x;

printf("\nNumero maior, menor ou igual a 20");
printf("\nInsira um numero: ");
scanf("%d", &x);

if(x == 20){
    printf("\nIgual a 20.\n");
}
else if(x> 20){
    printf("\nMaior que 20\n");
}
else if(x< 20){
    printf("\nMenor que 20\n");
}
```

No caso acima, 3 condições podem ser possivelmente satisfeitas (o número ser igual a 20, maior que 20 ou menor que 20)

```c
int x;
printf("\nInsira um numero: ");
scanf("%d", &x);

if (x<20){
    if(x<30){
        printf("numero maior que 30");
    }
    else{
        printf("numero maior que 20, mas menor que 30");
    }
}
else{
    printf("numero menor que  ou igual a 20");
}

```

Agora, ele testa a primeira condição (numero maior que 20), e se satisfeita, testa a segunda (numero maior que 30). Caso a segunda não seja satisfeita, ele retorna que o número é maior que 20, e caso nenhuma delas seja satisfeita, ele retorna que o número é menor que 20.
## O switch case

Além das estruturas de decisão ```if ``` e ```else```, existe a estrutura de decisão múltipla ```switch```:
```c
switch(variável){
    case constante1:
        comando;
        break;
    case constante2:
        comando;
        break;
    default:
        comando;
}
```

A palavra ```switch``` é acompanhada de uma variável discreta (char ou int e derivados), a qual a condição será testada. O uso da palavra ```case``` determina os casos a serem testados, isto é, os casos em que o valor da variável corresponde ao valor desejado.

A palavra ```default``` representa o conjunto de ações que será executado caso nenhuma das condições testadas seja satisfeita. Seu uso é opcional.

OBS¹: Para executar apenas o primeiro ```case``` correspondente a um valor, é necessário utilizar a palavra reservada ```break```

OBS²: O ```switch``` não aceita strings ou floats. Para testar condições com variáveis desses tipos, é necessário utilizar ```ìf``` e ```else```.