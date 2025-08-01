# Árvore AVL

Quando uma subárvore  de uma árvore binária possui muito mais nós em um lado da sua raíz do que em outro, o processo de busca dentro dessa árvore se torna mais lento. Pode-se dizer que essa diminuição da performance ocorre devido ao **desbalanceamento** da árvore.

Para uma árvore com altura $h$, existem $2^{h+1} -1$ nós. Já com o número de nós $n$, uma árvore possui altura entre $log_2\; n-1$ e $n-1$. Qualquer operação na árvore possui custo $O(h)$, o que implica que, no pior dos casos, uma árvore vai possuir custo de operação $O(n)$, pois a altura seria $n - 1$. Para evitar essa degradação de desempenho, é necessário balancear a árvore.

O balanceamento da árvore consiste na aplicação de restrições estruturais ao longo das operações, para garantir que a árvore tenha altura logarítmica ou bem próximo disso (melhor caso), assim garantindo a eficiência nos processos realizados na estrutura.

Uma estrutura de árvore binária balanceada é a **árvore Adelson-Velsky and Landis (AVL)**, que funciona no princípio de controlar a altura das subárvores para que o processo de degeneração da árvore seja evitado.

## Funcionamento

Para cada subárvore, as alturas da esquerda possuem valores negativos. Já os da esquerda possuem valores positivos. **O fator de rebalanceamento** é obtido a partir do cálculo da diferença de altura das subárvores. A partir dele, é possível determinar a operação necessária para balancear a árvore.

### Operações de rotação

As operações utilizadas para balancear a árvore são chamadas de **operações de rotação**. Sempre que o módulo do fator de rebalanceamento é superior a 1, é necessário rotacionar os nós de alguma forma, a fim de ajustar a altura das subárvores.

Os tipos de rotação existentes são:
- L-Rotation (uma rotação simples para a esquerda)
- R-Rotation (uma rotação simples para a direita)
- LR-Rotation (uma rotação para a esquerda, depois para a direita)
- RL-Rotation (uma rotação para a direita, depois para a esquerda)

#### L-Rotation

![L-rotationAVL](L-rotationAVL.png)

A rotação simples para a esquerda transforma um nó filho da direita que possui outro nó filho na direita em um nó pai para ambos esses. Essencialmente, o nó "do meio" vira nó pai dos outros dois. Esse processo de rotação é aplicado quando existe degradação da subárvore direita.


```c
void LRotation(no* raiz){
	no* eixo = raiz->D;
	raiz-> D = eixo->E;
	eixo-> E = raiz;
	raiz = eixo;
	balanceamento(raiz); //???
}

```

#### R-Rotation

![L-rotationAVL](R-rotationAVL.png)

Ocorre de forma similar à L-Rotation, mas com a subárvore da esquerda.

```c
void RRotation(no* raiz) {
	no* eixo = raiz->E;
	raiz->E = eixo->D;
	eixo->D = raiz;
	raiz = eixo;
	balanceamento(raiz);
}
```

#### LR-Rotation

![L-rotationAVL](LR-rotationAVL.png)

É realizada quando há um desbalanceamento negativo e positivo nas subárvores esquerda e direita. Assim, as duas rotações anteriores são aplicadas.

```c
void LRRotation(no* raiz) {
LRotation(raiz->E);
RRotation(raiz);
}
```

#### RL-Rotation

![L-rotationAVL](RL-rotationAVL.png)
Similar à operação anterior, é realizada quando há um desbalanceamento positivo e negativo nas subárvores direita e esquerda

```c
void RLRotation(no* raiz) {
RRotation(raiz->D);
LRotation(raiz);
}
```

### Operações de Inserção, remoção e busca

A operação de busca da árvore AVL funciona de forma similar (ou igual) à da árvore binária. O processo de inserção também, com a etapa adicional de verificação do balanceamento do nó pai do elemento escolhido, e caso esteja desbalanceado, é realizado o rebalanceamento.

Já na operação de remoção, o processo é mais complexo. Caso o nó removido seja uma folha ou possuir apenas uma subárvore, a árvore não é desbalanceada. Caso o nó possua duas subárvores, é necessário fazer o rebalanceamento.

### Complexidade

Devido ao balanceamento, a altura $h$ da árvore é aproximadamente $log_2 \; n$. E assim, a complexidade de tempo é $\Omega(1)$ e $O(log_2 \;n)$ 