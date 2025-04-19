# Apêndice - Algoritmos de ordenação


Um algoritmo de ordenação possibilita a organização de vetores ou matrizes de acordo com determinados critérios. Aqui, criaremos o algoritmo **bubble sort**.

O bubble sort funciona ...

É possível implementar o bubble sort de forma a ordenar um vetor de valores inteiros em C da seguinte maneira:

```c

//definição do algoritmo de ordenação 
void bubbleSort(int matriz[], int tamanho){
	int aux;
	for(int i = 0; i< tamanho-1; i++){
		for(int j = i+1; j<tamanho; j++){
			if(matriz[i]> matriz[j]){ //ordem crescente
				aux = matriz[i];
				matriz[i] = matriz[j];
				matriz[j] = aux; 
			}
		}
	}
}

//execução
int main(){
	int matriz[8] = {0,2,20,4,3,1,5,8}; //lista declarada na declaração da propria variavel
	int tamanho = 8;
	bubbleSort(matriz,tamanho);
	printf("\n A lista ordenada e:");
	for(int i = 0; i< tamanho; i++){
		printf("%d ", matriz[i]);
	}
}
```

O código contido na função `bubbleSort()`ordena números inteiros em ordem crescente. Para ordená-los em ordem decrescente, basta modificar o trecho `if(matriz [i] > matriz[j]){...` para `if(matriz [i] < matriz[j]){...`.

### Ordenação de Strings

Também é possível ordenar strings em ordem alfabética, utilizando este mesmo algoritmo junto a funções contidas na biblioteca `string.h` ... (continuar depois)

#PI 
#Extra