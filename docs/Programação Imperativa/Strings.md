#PI 

[<- Voltar](./Menu.md)

## O que são strings?

Strings são cadeias de caracteres utilizadas para a entrada e saída de texto no programa. Um exemplo de string é ```"Eu amo macarrão com queijo"```. Note que a frase está entre aspas, pois strings sempre são passadas com aspas duplas. Algumas linguagens, como Python, suportam a passagem de strings com aspas simples, mas no C, não.
## Strings em C

Na linguagem C, o tipo string não é definido. Para contornar isso, é possível declarar uma "string" como uma cadeia de caracteres, isto é, uma matriz unidimensional de caracteres. Ao declarar uma cadeia de caracteres dessa forma, é necessário ter em mente que o último caractere da cadeia é o ```\0```, que indica a terminação da string.

```c
char nome[30]; //note que a matriz unidimensional recebe o tamanho máximo da string, nesse caso, 30 caracteres. Como o \0 ocupa a última posição, o tamanho máximo da string neste caso é 29 caracteres.
```

## ```scanf``` e biblioteca <string.h>

Observe o código abaixo:

```c
char nome[30]; 

scanf("%s", &nome); 
printf("Nome: %s", nome); //Utiliza-se a máscara %s para capturar strings
```

Neste excerto de código, o uso de `scanf` não gera erros. O problema é que o ```scanf``` vai capturar o texto digitado apenas até o primeiro espaço. Então caso seja digitado ```Pedro Luiz da Costa```, o `scanf` armazenará apenas ```"Pedro"```.

Para contornar essa limitação, é necessário utilizar uma função da biblioteca <string.h>, que adiciona funções para o tratamento de strings, como a comparação do conteúdo de strings (```strcmp()```), o comprimento (```strlen()```), a cópia do conteúdo de uma string para outra (```strcpy()```), etc.

Para capturar o texto completo da string, é possível utilizar ```gets``` e ```fgets```. Aqui, utilizaremos ```gets```, mas ```fgets``` é mais seguro.

```c
#include <string,h>

char nome[30];

gets(nome); 
//fgets(nome, 30, stdin); A sintaxe para utilizar o fgets. O 30 é o tamanho máximo a ser capturado

printf("\nNome: %s", nome);

```

OBS: Para utilizar acentuação em C, é necessário incluir a biblioteca `<locale.h>` e chamar a função ```setlocale(LC_ALL,"Portuguese")```.
