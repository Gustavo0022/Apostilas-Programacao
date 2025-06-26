# Hash

Hash é uma das operações que mais possuem usos .......

É possível realizar buscas com hash, de forma que o elemento pode ser encontrado em tempo constante (comparado ao tempo linear da busca sequencial). Isso é possível pois a entrada (o elemento) passa por uma função hash que **indexa** (mapeia) o elemento procurado no vetor, permitindo o seu acesso sem busca.

Para a implementação de uma busca indexada, não é prático mapear os elementos de uma lista forma injetora, ou seja, de forma que cada elemento seja identificado pelo seu valor próprio, pois as possíveis combinações poderiam chegar a valores absurdos, quase impossíveis de se armazenar ou se processar.

A implementação adequada de uma função hash é o mapeamento de entradas em um espaço cujos valores possuem tamanho fixo e reduzido. Nesse caso, um possível espaço é o tamanho do vetor, associado à uma função qualquer que processa e modifica esse valor.

## Função hash

É a indexação de um conjunto de dados em um vetor de tamanho limitado (fixo). A aplicação dessa função permite o armazenamento e acesso dos dados em tempo constante.

É ideal que a função hash gere valores cuja distribuição é o mais uniforme possível, evitando colisões (a indexação de mais de um elemento para uma posição do vetor).

A função hash, idealmente, possui comportamento injetivo (um elemento do domínio se relaciona a um único elemento do contradomínio), evitando que duas entradas sejam armazenadas no mesmo índice.

Também é importante que os valores de mapeamento sejam limitados ao tamanho do vetor, evitando que algum elemento seja adicionado a um espaço não alocado e que ocorra uma falha de segmentação.

Um modelo de função hash é abaixo:

$$H(x) = F(x)\: mod\; T$$
Sendo $F(x)$ uma função uniforme qualquer e $T$ o tamanho da lista. $mod\;T$ é a operação de resto com a divisão por $T$.
## Tratando colisões de mapeamento

### Endereçamento fechado

No endereçamento fechado, o tratamento de colisão é feito através da utilização de uma estrutura de dados auxiliar que permita o ajuste incremental de capacidade. Caso uma lista encadeada, por exemplo, seja utilizada para tratar as colisões, cada posição do vetor é a cabeça de uma lista, sendo inseridos nela novos elementos em caso de colisão. 

### Endereçamento aberto

Aqui,uma das técnicas possíveis é o **linear probing**, em que, caso a função hash retorne uma posição já ocupada, é realizado um novo cálculo com um incremento nas posições até que se encontre uma posição livre.

$$ LP(x,i) = H(x) + i \, mod \;T , \; (0<i<(T-1))$$
Aqui,  $0<i<(T-1)$

Outra técnica utilizada é o **Double hashing**, que funciona utilizando duas funções hash, para o caso de a primeira gerar uma colisão de mapeamento, a segunda ser responsável por esse mapeamento.
$$DH(x,i) = (H_1(x) + iH_2(x)) \,mod \;T $$
 Esse processo funciona de forma que o valor de $i$ inicialmente é $0$ (assim $H_2(x)$ é desconsiderado) , mas caso haja uma colisão, $i$ aumenta até que a função de Double hashing retorne uma posição livre no vetor.

## Complexidade

A complexidade de espaço da busca por hashing é de $\Theta (n)$, devido ao tamanho do vetor. Já a complexidade de tempo é $\Omega(1)$ e $O(n)$, podendo ser linear caso hajam colisões sucessivas até que se encontre uma posição adequada.

## Considerações

O tempo possui mais chance de ser constante caso os dados sejam distribuídos uniformemente no vetor e a capacidade do vetor não seja utilizada completamente, diminuindo o número de colisões. Por isso, é ideal que o vetor tenha mais espaços que a quantidade de itens a serem armazenados.
