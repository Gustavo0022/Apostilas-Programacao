# Métodos Especiais 

Existem métodos específicos em POO que seguem determinadas convenções ou não podem ter seus nomes atribuídos a um método criado pelo programador. Veremos aqui alguns desses métodos.

## Métodos Acessores (Getters)

Os métodos acessores, ou getters, são métodos que dão acesso a algo. Eles são definidos pela palavra chave `get()`. Eles servem como um intermediário entre as informações a serem acessadas e o objeto a acessá-las. Assim, eles evitam um acesso direto a essas informações sem a possibilidade de alterá-las, aumentando a segurança no acesso. Eles permitem, inclusive, o acesso a atributos privados do objeto.

Por exemplo: em vez de ler e obter o saldo de uma conta de banco diretamente, utilizando `conta.saldo`, é mais seguro obter esta informação utilizando `conta.getSaldo()`, pois assim, não será possível alterar o valor do saldo da conta.

## Métodos Modificadores (Setters)

Os métodos modificadores, ou setters, permitem a alteração de algum atributo. Similar aos getters, os métodos modificadores são definidos por `set()`. Eles servem como método para alterar a informação desejada de um objeto, sem que outras classes tenham acesso direto a essa informação, novamente, aumentando a segurança do programa. Eles também permitem a alteração de atributos privados.

Por exemplo: É mais seguro definir que o usuário de uma conta de banco defina o valor a ser transferido para outra conta com `conta.setTransferência(valor)`  do que permitir acesso direto e aberto a todos os usuários à aquela conta.

Note que, para a alteração do valor com um método setter, o método em questão recebe um parâmetro (o novo parâmetro para o atributo).

## Métodos construtores

Os métodos construtores são métodos que, no instanciamento de uma classe (criação de um objeto), realizam ações automáticas nesse objeto. Eles podem até mesmo receber parâmetros para definir atributos na criação do objeto.

Um exemplo é na criação de um objeto carro. Podemos utilizar o método construtor para que, na criação de um novo objeto da classe `Carro` (`Carro c1 = new carro()`) ele receba informações como nome do fabricante, modelo, e peso. Nesse caso, o instanciamento ficaria `Carro c1 = new carro('Ford','Bronco','1965')`. Ele também pode definir que, no ato do instanciamento, o estado do carro é `desligado`.

## Exemplo com os conceitos abordados 

Observe o excerto de código abaixo

```Java
public class Carro {

	//Atributos
    private String fabricante;
    protected String modelo;
    public String cor;
    private boolean eletrico;
    public int potencia;
    public float motor;
    public int peso;
    private boolean ligado;

	//Método construtor
    public Carro(String modelo, String cor, int peso) {
        this.ligado = false;
        this.modelo = modelo;
        this.cor = cor;
        this.peso = peso;
    }

	//Métodos getters e setters
    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public boolean isEletrico() {
        return eletrico;
    }

    public void setEletrico(boolean eletrico) {
        this.eletrico = eletrico;
    }

    public int getPotencia() {
        return potencia;
    }

    public void setPotencia(int potencia) {
        this.potencia = potencia;
    }

    public float getMotor() {
        return motor;
    }

    public void setMotor(float motor) {
        this.motor = motor;
    }

    public int getPeso() {
        return peso;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public boolean isLigado() {
        return ligado;
    }

    public void setLigado(boolean ligado) {
        this.ligado = ligado;
    }

	//Métodos da classe
    public void acelerar(){
        if (this.ligado == false){
            System.out.println("O carro está desligado!");
        }
        else{
            System.out.println("Acelerando...");
        }
    }  
}
```

No código acima, é possível observar os métodos *getters* e *setters*, definidos com `getAlgo` (ou `isAlgo` para tipo lógico ou booleano) e `setAlgo`. Também é possível ver o método construtor, definido logo após os atributos. Observe que, nesse caso, ele recebe alguns atributos ao criar a instância da classe ( o objeto da classe `Carro`), e define o estado de alguns atributos nesse mesmo momento (colocando o atributo `ligado` para `false`).