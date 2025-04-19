# Matrizes com mais de uma dimensão

Matrizes em C podem ser declaradas com qualquer quantidade de dimensões

```c

int matriz1[3][3]; //Matriz bidimensional
int matriz2[4][2][5]; //Matriz tridimensional
int matriz3[5][12][20][24][15]; //Matriz de dimensão 5
```

O uso de matrizes com mais de uma dimensão já podia ser visto com a declaração de listas de strings:

```c
char nomes[15][30];
```

No exemplo de variável declarada acima, o primeiro valor entre colchetes representa o número de linhas. O segundo, o número de colunas. Nesse caso, o número de colunas é o número de caracteres de cada linha da lista, ou melhor ainda, de cada nome.

#PI 