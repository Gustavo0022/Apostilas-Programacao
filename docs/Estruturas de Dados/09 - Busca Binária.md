# Busca Binária

Dada uma determinada estrutura de dados não ordenada, a busca de um elemento nessa lista possui complexidade $O(n)$. Buscar elementos não ordenados pode ser custoso se aplicado com uma busca sequencial. Ordenar os dados seria uma solução, e os algoritmos eficientes de ordenação podem possuir complexidade entre $\Omega(n)$ e $O(n \;log \, n)$, a depender do tipo de dado. Para uma busca mais eficiente, a ordenação dos elementos pode reduzir o número de comparações.

A aplicação de uma ordenação antes de da busca pode fazer sentido caso o custo da ordenação seja menor que o custo da busca. Por exemplo, valeria mais a pena utilizar a busca sequencial em uma busca única, mas para dados que serão buscados recorrentemente, a ordenação junto à aplicação de um algoritmo de busca que utiliza de tal é mais vantajoso.

Um algoritmo de busca que usufrui da ordenação é a **Busca binária**.

## Como funciona a busca binária

A busca binária divide um vetor ordinário em 2, comparando o elemento desejado ao elemento do meio (chamado pivô). Se o elemento desejado for maior que o pivô, o elemento está na segunda metade da lista, e essa parte é dividida em 2, de forma que um novo pivô é escolhido, e assim por diante, até que se encontre a posição do elemento desejado.

No caso de o pivô ser o elemento desejado, a busca acaba, tornando isso um caso de busca $\Omega(1)$. 

Tome como exemplo a lista:

| 1   | 4   | 8   | 17  | 25  | 34  | 40  | 42  |
| --- | --- | --- | --- | --- | --- | --- | --- |
Queremos encontrar a posição do elemento **40**
O tamanho da lista ($\frac{0+8}{2} = 4$) (primeiro elemento + o último)

A lista será dividida em 2, sendo a primeira antes do elemento de posição 4, e a segunda após esse.

| 1   | 4   | 8   | 7   |
| --- | --- | --- | --- |
e 

| 34  | 40  | 42  |
| --- | --- | --- |

Após isso, será comparado se o elemento de posição 4 (25) é maior ou menor que o elemento desejado.
$$25< 40$$
Assim, o elemento desejado está localizado após o pivô. Será selecionada a segunda lista, de forma que o mesmo processo se repetirá, mas o pivô será 40, então a posição do pivô (6) é a posição do elemento desejado.

### Implementação recursiva em C

```c
int bbr(int* Vetor, int início, int final, int32_t
elem) {
	int pivo = (inicio + final) / 2;
	// Casos bases
	if(final < inicio)
		return -1;
	else if(Vetor[pivo] == elem)
		return pivo;
	// Casos recursivos
	else if(Vetor[pivo] < elem)
		return bbr(Vetor, pivo + 1, final, elem);
	else
		return bbr(Vetor, inicio, pivo - 1, elem);
	}
```

A complexidade desse algoritmo é de:
$$T(N) = \begin{cases} 1 & n=1 \\T(\frac{n}{2}) +1 & n>1\end{cases}$$
Espaço: $\Theta(n)$; Tempo $\Omega(1)$ e $O(log_2 \;n)$ 

### Implementação iterativa

```c
int bbi(int* vetor, int tamanho, int elemento) {
// Índices de partições
	int inicio = 0, final = tamanho - 1;
	int pivo = (inicio + final) / 2;
	// Iterações de 1 -> k
	while(final >= inicio && vetor[pivo] != elemento) {
		if(vetor[pivo] > elemento)
			final = pivo - 1;
		else
			inicio = pivo + 1;
		pivo = (inicio + final) / 2;
		}
	return (vetor[pivo] == elemento) ? (pivo) : (-1);
	}
```

 A complexidade desse algoritmo é de:
* Espaço: $\Theta(n)$; Tempo $\Omega(1)$ e $O(log_2 \;n)$ 

