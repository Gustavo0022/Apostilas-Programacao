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

## Exemplo de código

Podemos ter uma interface e sua classe encapsulada como no código abaixo. Primeiro, a interface:
```Java
public interface Controlador {
    public abstract void ligar();
    public abstract void desligar();
    public abstract void abrirMenu();
    public abstract void fecharMenu();
    public abstract void maisVolume();
    public abstract void menosVolume();
    public abstract void ligarMudo();
    public abstract void desligarMudo();
    public abstract void play();
    public abstract void pause();
}


```

A interface utiliza métodos abstratos, isto é, que não possuem função definida. Essas funções serão definidas na classe em que ela será implementada, disposta abaixo. `implements` representa a interface que será implementada pela classe. Os métodos da interface, agora, terão suas funções definidas. Isso implica que quaisquer classes que implementem a interface podem realizar ações da interface de maneiras diferentes. 

```Java
public class ControleRemoto implements Controlador {
    private int volume;
    private boolean ligado;
    private boolean tocando;

    public ControleRemoto() {
        this.volume = 50;
        this.ligado = false;
        this.tocando = false;
    }

    private int getVolume() {
        return volume;
    }

    private void setVolume(int volume) {
        this.volume = volume;
    }
	//...
	//Outros métodos getters e setters

	//Métodos abstratos

    @Override
    public void ligar() {
        this.setLigado(true);
    }

    @Override
    public void desligar() {
        this.setLigado(false);
    }

    @Override
    public void abrirMenu() {
        System.out.println("A tv está ligada?:" + this.isLigado());
        System.out.println("Algo está em reprodução?: "+ this.isTocando());
        System.out.print("Volume: ");
        for(int i = 0; i<=this.getVolume(); i+=10){
            System.out.print("|");
        }
    }

    @Override
    public void fecharMenu() {
        System.out.println("Fechando Menu");
    }

    @Override
    public void maisVolume() {
        if(this.isLigado()){
            this.setVolume(this.getVolume()+5);
        }
    }

    @Override
    public void menosVolume() {
        if(this.isLigado()){
            this.setVolume(this.getVolume()-5);
        }
    }

    @Override
    public void ligarMudo() {
        if(this.isLigado() && this.getVolume() >0){
            this.setVolume(0);
        }
    }

    @Override
    public void desligarMudo() {
        if(this.isLigado() && this.getVolume() == 0){
            this.setVolume(50);
        }
    }

    @Override
    public void play() {
        if(this.isLigado() && !this.isTocando()){
            this.setTocando(true);
        }
    }

    @Override
    public void pause() {
        if(this.isLigado() && this.isTocando()){
            this.setTocando(false);
        }
    }
```

Note que, na seção de métodos abstratos, todos os métodos estão com `@Override`, que garante que você está sobrescrevendo o método da interface.