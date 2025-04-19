# Ponteiros

Ponteiros são tipos de dados que armazenam endereços de memória.

## Declaração de variáveis

Em C, o operador ```&``` retorna um endereço de memória:

```c
scanf("%d",&num);
//         ^
//   Operador unário 


```

Esse operador é necessário para informar que a informação armazenada naquela variável está em determinado local da memória.

## Declaração de ponteiros

O operador unário ```*``` é utilizado para a declaração e o acesso de variáveis ponteiro:

```c

int num, cont;
num = 6;

int *pont;   //  <--- Ponteiro
pont = &num; //  <--- Ponteiro recebendo o endereço de memória da variável num
cont = *pont;//  <--- Variável recebendo o valor "desreferenciado", ou seja, o valor armazenado no endereço de memória armazenado pelo ponteiro
```

## Matrizes e ponteiros

Na linguagem C, matrizes e ponteiros estão intimamente relacionados. Aqui, matrizes e vetores são considerados ponteiros. Isso significa que os nomes das matrizes são ponteiros que apontam para a posição de memória do primeiro elemento desta matriz. 

#PI 