# 11 - Alocamento de memória
#PI 
## Programa e algoritmo

## Endereços de memória

Toda variável é situada em um endereço (uma posição) da memória. Quando queremos nos referir a um endereço de memória relativo a algo, utilizamos o ```&```, como no scanf.

## Relembrando: Ponteiros

(O conteúdo deste tópico já foi abordado anteriormente)

A variável pontéiro é uma variável que armazena o endereço de outra posição na memória, que pode conter outros dados.
Se um ponteiro não armazena nenhum endereço válido, o valor é ```NULL```

Para declarar um ponteiro em C coloca-se * na frente do nome da variável.

### Desreferenciamento de um ponteiro

Para acessar o conteúdo de uma variável que o ponteiro referencia, utiliza-se * na frente do ponteiro

## Variáveis


### Estáticas: 
Declaradas convencionalmente em tempo de projeto (ao programar)

### Dinâmicas

* Podem ser ciradas e destruídas durante a execução do programa
* A declaração é indireta e a vinculação, por meio de ponteiros
* Elas possuem diversas vantagens em relação às estáticas, como a declaração de variáveis sem desperdício de memória



## Áreas da memória

![áreas da memória](/Programação%20Imperativa/assets/AreasMemoria.png)


## Alocação dinâmica de memória

Para alocar a memória de variáveis estáticas, é necessário saber a quantidade de memória a ser alocada previamente. O problema disso é que, em muitos casos, só é possível saber a quantidade de memória necessária durante a execução do programa.

Um dos maiores usos do alocamento dinâmico é com os blocos de dados (vetores e matrizes), para evitar o desperdício ou a falta de memória.




### Em C

* ```malloc```: recebe como parâmetro a quantidade de memórias que desejamos alocar, reservando a memória perdida e retomando um ponteiro void para o primeiro byte alocado.


```c
ponteiro = (int*) malloc(12); //alocamento de 12 bytes para um ponteiro com cast int (armazena números de t)

```


Para descobrir a quantidade de bytes necessários, existe a função ```sizeof()```, que retorna o número de bytes utlizados para algum elemento (tipo ou struct)

```c
ponteiro = (int*) malloc(sizeof(int)); //alocamento da quantidade de bytes necessários para uma variável int
ponteiro = (int*) malloc(sizeof(int)*4 );//alocamento da quantidade de bytes necessários para 4 variáveis do tipo int

```

Também existe a função calloc, que além de permitir a indicação do número de elementos para alocar memória, define o valor de cada um dos valores para 0.



```c
ponteiro = calloc(3, sizeof(int)); //aloca 3 int e declara todos eles como 0
```

Após utilizar o ponteiro, é ideal utilizar ```free(ponteiro)``` 

## Alocação dinâmica de matrizes de mais de uma dimensão

A forma como declaramos variáveis dinâmicas demonstrada anteriormente cria uma matriz unidimensional para o armazenamento dessas informações. Agora, poderemos criar "matrizes bidimensionais" (com uma pegadinha).

Para declarar matrizes bidimensionais, podemos utilizar o seguinte:

```c


matriz = (int*) malloc(2*3*sizeof(int));
//          ^               ^
//          |               Alocação dos bytes necessários para o tamanho de uma "matriz" 2x3
//         Casting do tipo

//genericamente: 
//matriz = (int*) malloc(linhas*colunas*sizeof(int));
```

Apesar de ser considerada uma matriz 3x2, não é possível utilizar

```c

printf("%d", matriz[1][2]);
//genericamente,
//printf("%d", matriz[x][y]); 
```

para chamar o elemento da 2ª linha e 3ª coluna. Em vez disso, é necessário utilizar aritmética de ponteiros:

```c
printf("%d", matriz[(1*3)+2]);
//genericamente,
//printf("%d", matriz[(x*colunas)+2]);
```

Existe outra maneira de declarar uma matriz, dessa vez no formato convencional. Para tal, utiliza-se um **ponteiro de um ponteiro**

## Alocação dinâmica de estruturas (structs)

A alocação de ```structs``` funciona de forma similar ao de variáveis, utilizando malloc ou calloc:

```c
struct areaRet{
  float altura;
  float comprimento;
  float area;
}

struct s_circulo *p;

p = (struct s_circulo *)malloc(sizeof(struct s_circulo));


//adicionar como acessar depois

```
