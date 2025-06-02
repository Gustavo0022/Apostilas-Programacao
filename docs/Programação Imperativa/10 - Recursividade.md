# Recursividade
## O que é Recursividade?

Recursividade na computação é a definição de uma função ou algoritmo que funciona por meio da invocação de si mesmo. Definições recursivas são poderosas para definições matemáticas e a resolução de problemas como a busca sequencial de arquivos.

Dois exemplos comuns de recursividade são a **sequência de Fibonacci** e a definição de **fatoriais**.

A sequência de Fibonacci é definida por:
$$
Fib(N) = Fib(N-1) + Fib (N-2)
$$

A definição acima é chamada de **Passo recursivo**. Mas precisamos definir um ponto inicial para a chamada recursiva. Chamamos isso de **caso base**. O caso base da sequência é:
$$Fib(1) = Fib(0) = 1$$
Assim, $$Fib(5) = 8  $$
## Regras para a definir funções recursivas

* Uma função recursiva precisa ter, em algum momento, uma chamada a si mesma.
* É necessário pensar no caso base de uma função recursiva, pois isso evita que a função chame a si mesma infinitamente.
* As funções recursivas precisam de **Finitude dinâmica**, ou seja, precisam possuir determinada condição que se torna verdadeira em algum momento (essencialmente, a definição do caso base)

## Na programação

O excerto de código abaixo é uma representação da sequência de Fibonacci escrita na linguagem C:

```c
int fib(int num){
	if(num == 0 || num == 1){ 
		return 1; //caso base.
	}
	else{
		return fib(num-1) + fib(num-2); //passo indutivo
	}
}
```

Similarmente, é possível definir fatorial dessa forma:

```c
int fat(int num){
if (num == 0){
	num = 1;
}
else{
	num *= fat(num-1);
}
return num;
}
```

Matematicamente, fatorial é definido da seguinte forma:

$$
n! = n \cdot (n-1)!
$$
Sendo o caso base $0! = 1$

#PI 