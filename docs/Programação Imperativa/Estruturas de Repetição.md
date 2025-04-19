#PI 

[<- Voltar](./Menu.md)

# Loops

Loops (ou repetições) são estruturas que, dada uma uma condição, ele testa uma condição, e enquanto ela for verdadeira, um determinado bloco de código será repetido.

## while

O ```while``` é uma estrutura que testa uma condição ao início da execução de um bloco de código, e se ela for verdadeira, ele será executado. Ao fim de cada execução, essa condição será testada. Se, em determinada execução, esta condição não for satisfeita, o bloco de código deixa  de ser executado.

```c
int x = 1;

while (x < 10){
  printf("%d",x);
  x++;
}
```
O código acima executa a impressão do número da variável x, e acresce 1 a essa variável, enquanto x é menor que 10.

Similar ao conceito de recursividade, aqui, temos um caso base (x menor que 10) e um passo indutivo (x++), além dos comandos envolvidos.

## do-while

Diferente do ```while```, o ```do while``` testa a condição desejada ao fim do loop:

```c
int x = 1;

do{
  printf("%d",x);
  x++;
}while (x < 10)
```

No exemplo acima, o código será executado uma vez **independente** da condição ser satisfeita. Após essa vez, ele testa a condição, e, enquanto for verdadeura, ele a continua executando. Quando ela for falsa, o código deixa de ser executado.

## for

O ```for``` funciona como um contador. Para cada execução do código dentro do seu escopo, a variável utilizada como contador será incrementada ou decrementada.

A sintaxe do for funciona da seguinte forma:

```c

for(contador;teste; modificação no contador){
  comando;

}
```
Aqui, o contador é uma variável, o teste é a condifção que será verificada para que o código continue sendo executado, e a modificação no contador é a operação realizada no contador a cada vez que o código é executado.

Agora, um exemplo prático:

```c
int contador = 0;

for(contador;contador< 10; contador++){
  printf("\nO contador esta no numero %d", contador);
}

printf("\nO contador parou de crescer em %d",contador);
```


