#PI 

[<- Voltar](./Menu.md)
## Funções

Apesar de já usarmos funções desde quando começamos a programar, é possível também criarmos nossas próximas funções.

É altamente recomendado criar funções para códigos que se repetem. Também é considerada uma boa pŕatica que funções realizem uma única tarefa, e seu nome reflita essa tarefa.
### Definição e chamada de uma função

Funções podem ser definidas com a seguinte sintaxe

```c
void soma(int x, int y){ //<- Declaração da função com os argumentos a serem manipulados
  int valorSoma;
  valorSoma = x+y;
  printf("%d", valorSoma);
}

int main(){
  soma(3,2); //<- Chamada da função com os parâmetros passados
}
```

A sintaxe de definição de funções deve ter, obrigatoriamente, o tipo do retorno, o nome da função e a lista de parâmetros necessários para executá-la.
Quando a função não necessida de parâmetros, os parênteses ainda são utilizados (a exemplo da função main).

**OBS:** Cada argumento requisitado por uma função deve conter, em sua definição, o tipo da variável a ser recebida. Ex: ```int troca(int x, int y){...}```. Note que, mesmo com os argumentos sendo do mesmo tipo (int), a palavra reservada para esse tipo é utilizada para cada argumento. Caso a função fosse definida como ```int troca(int x, y){...}```, o código não funcionaria.

Variáveis declaradas dentro de funções de forma estática possuem tempo de vida limitado até o fim da execução da função e escopo limitado, não existindo fora da função.

Para chamar uma função, é necessário utilizar o nome desta, junto aos argumentos esperados por ela (definidos quando a função foi definida).

### Passagem de argumentos para funções

Argumentos podem ser passados por valor ou por referência.

Ao passar um argumento por valor,

Ao passar um argumento por referência,

## Escopos

As funções, bem como as diferentes estruturas aprendidas até aqui, podem ter variáveis declaradas durante a sua execução. Essas variáveis **não** podem ser acessadas fora dessas estruturas. Os locais onde essas variáveis podem ser acessadas são chamados de **escopos**.

### Variáveis Locais

Considere o código abaixo:

```C
void contador(){
	int numero = 0; //escopo: função contador
	for(numero; numero <5; numero++){
		printf("\nEsse e o numero %d", numero);
	}
}

int main(){
	int num; //escopo: função main

	printf("\nDigite um número:");
	scanf("%d", &num);
	printf("\nO numero digitado foi: %d", num);
	printf("\nContando ate 4...");
	contador();
	
}
```

No código acima, a variável ```numero```, pertencente à função `contador`, só pode ser usada dentro dessa função. Essencialmente, o **escopo** da `variável` numero é a função `contador`. 
Da mesma forma, o escopo da variável `num` é a função main. Isso não significa que a variável pode ser acessada pela função `contador`, invocada ali. Isso aconteceria apenas se a variável pudesse ser passada como argumento para a função. 

De qualquer forma, as variáveis `num` e `número` são chamadas de **variáveis locais**, pois seu acesso só é possível em determinadas partes do código após sua criação.

As variáveis locais deixam de existir após o escopo em que elas estão situadas deixa de ser executado. Graças a essa característica, é possível criar infinitas variáveis de mesmo nome em escopos diferentes, afinal, quase sempre, elas não gerarão interferência entre si.

Um exemplo básico de uso das variáveis locais é o `for`:
```C
for(int i = 0; i< 5; i++){
	printf(" %d", i);
}
```

A variável `i` é declarada no momento em que o `for` é executado, mas deixa de existir após o loop ser concluído.
### Variáveis Globais

Agora, considere o seguinte caso:

```c
int num = 0; //escopo: global
void contador(){
	int numero = 0; //escopo: função contador
	for(numero; numero < num; numero++){
		printf("\nEsse e o numero %d", numero);
	}
}

int main(){


	printf("\nDigite um número:");
	scanf("%d", &num);
	printf("\nContando ate %d... ", num);
	contador();
	
}
```

No caso acima,