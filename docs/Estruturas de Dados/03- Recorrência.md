# Recorrência

Anteriormente, foram definidas as noções de complexidade de tempo e de espaço, tal qual suas notações e como calculá-las. Todas elas foram feitas de forma **iterativa**, ou seja, por meio de loops (while ou for). Por exemplo, a função de fatorial:

```c
uint64_t fatorial(uint32_t n) {
	uint64_t r = 1;
	for(uint32_t i = 2; i <= n; i++)
		r = r * i;
	return r;
}
```

Possui complexidade $\Theta(n)$ (complexidade de ordem exata).

Agora, observemos essa função implementada recursivamente:

```c
uint64_t fatorial(uint32_t n) {
	if(n == 0)
		return 1;
	else
		return n * fatorial(n - 1);
}
```

Como determinar a complexidade desse algoritmo? Aprenderemos a determinar a complexidade de funções recursivas nesse documento.

## Relações de recorrência

Uma relação de recorrência é uma relação ou função recursiva que define uma sequência. Uma função recursiva é uma função descrita por si mesma e que possui duas partes: **o caso base** e **o passo recursivo**. Na função de fatorial descrita anteriormente, o caso base é `n == 0`, que retorna `1`. Já o passo recursivo é `n* fatorial(n-1)` para `n > 0`. Dessa forma: $$Fatorial(n) = \begin{cases} 1 & n=0 \\ n \times Fatorial(n-1) & n>0 \end{cases}  $$
Para resolver essas relações de recorrência, utilizamos
- O método da substituição
- O método da árvore de recursão
- O método mestre
### Método da substituição

