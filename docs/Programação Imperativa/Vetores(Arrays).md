#PI 

[<- Voltar](./Menu.md)
# Vetores e Matrizes

Vetores e Matrizes são conjuntos de dados homogêneos (de um mesmo tipo). Esses dados 



**terminar**


## Vetor de strings

Como em C, o tipo string não é definido, um vetor de strings é um vetor bidimensional. Isso significa que ele funciona como uma matriz (sintaxe abaixo). Com isso, ele também possui algumas limitações, como a seguinte:
* O número de caracteres em cada string tem que ser igual para todos os itens da lista

O exemplo abaixo demonstra o uso de strings
```c
//Número de strings armazenadas na lista
//              v   v tamanho das strings
char listaNomes[6][10]; //

listaNomes[0] = 'Luiz'; //<--- Sintaxe para atribuir uma string a um lugar na lista (neste caso, no índice 0)

printf("%s",listanomes[0]); //<-- Imprime o nome naquele índice

```
