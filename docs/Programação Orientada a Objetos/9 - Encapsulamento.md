# Introdução a Encapsulamento

## O que é encapsulamento?

Um dos pilares da POO, encapsulamento é o isolamento de componentes da implementação, permitindo que esses componentes sejam utilizados, mas sem que o seu interior seja exposto. Em outras palavras, é o ato de esconder o interior de algum objeto ou função, impedindo que programas que os acessem vejam o interior desses componentes.

Um exemplo disso é: Para sacar dinheiro em um banco, você não precisa saber onde o dinheiro está armazenado. Você basicamente solicita uma quantia de dinheiro e, caso disponível, o caixa eletrônico ou atendente o disponibiliza para você.

Para se comunicar com o exterior, objetos encapsulados possuem **interfaces**. Interfaces são "listas de serviços fornecidos por um componente, permitindo que ele se comunique com o mundo exterior". Essas interfaces definem o que pode ser feito com os objetos encapsulados.

## Vantagens do encapsulamento

Uma das vantagens do encapsulamento é que as mudanças realizadas ao componente encapsulado são invisíveis ao mundo exterior, desde que sua interface opere da mesma forma. Isso significa que, ao atualizações e correções de bugs, a funcionalidade e o modo de operação do componente encapsulado permanecem os mesmos.

A segunda vantagem é a reutilização do código, afinal, é possível reutilizar componentes encapsulados em outros projetos que necessitem realizar procedimentos semelhantes entre programas.

A terceira e última é a redução de efeitos colaterais à execução do código, afinal, objetos encapsulados mantém protegidas as suas partes interiores, impedindo alterações indesejadas na escrita ou durante a execução do programa.

## Como encapsular?

Primeiro, definimos uma interface, que contém todos os métodos necessários para operar sobre o objeto encapsulado. Esses métodos são chamados de **Métodos abstratos**, e são apenas declarados na interface, sem implementar o seu funcionamento. Todos esses métodos são públicos. A interface é definida separadamente da classe

Depois, definimos a classe, contendo os objetos e métodos do objeto encapsulado. Todos os atributos são privados ou protegidos, impedindo que sejam alterados externamente. Os métodos da interface estarão presentes nessa classe, agora com os seus funcionamentos descritos e definidos