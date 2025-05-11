# Herança

## O que é herança em POO?

Assim como encapsulamento, herança é outro dos 3 pilares da Orientação a Objetos. O conceito de herança corresponde à possibilidade de se criar uma nova classe utilizando outra já existente como base. A herança acontece para atributos e métodos da classe original. 

Assim, por exemplo, é possível criar uma classe genérica `Conta`, e a partir daí, a criação de outras classes com mais características, como `ContaUniversitaria`, `ContaCorrente`, `ContaPoupanca`, que possuem os métodos da classe `Conta`, mas acrescentam atributos e métodos próprios a cada uma.

Podemos dizer que as classes "genéricas" são classes **mãe** ou **superclasses**, e as classes derivadas dessa são classes **filhas** ou **subclasses** dessa classe mãe. 

Um fato importante é que subclasses derivadas de uma mesma superclasse não compartilham métodos nem atributos específicos entre si. Os únicos métodos e atributos em comum são os da superclasse a qual elas se derivam

Desenvolvendo o exemplo acima, podemos considerar que a classe `ContaUniversitaria` possui como diferencial o direito a 30 refeições mensais na conta. A `ContaCorrente` possui 6 saques gratuitos por mês. Já a `ContaPoupanca` possui `rendimentoMensal` de 2% ao mês.

Nesse exemplo, a classe `ContaUniversitaria` não vai possuir o atributo `rendimentoMensal`, pois esta é exclusiva da classe `ContaPoupanca` (a menos que esse atributo seja acrescentado na classe).

Podemos escrever isso em Java:

```Java
public class Conta {
    
    private int Agencia;
    private int Conta;
    private String titular;
    private double saldo;
    private boolean ativa;
    private char tipo;

    //getters e setters
    public int getAgencia() {
        return Agencia;
    }

    public void setAgencia(int Agencia) {
        this.Agencia = Agencia;
    }

	//. 
	//. Getters e setters
	//.

	//métodos da classe
    public void estadoAtual(){
        System.out.println("Ag:" + this.getAgencia());
        System.out.println("Conta:" + this.getConta());
        System.out.println("Tipo:" + this.getTipo());
        System.out.println("Titular:" + this.getTitular());
        System.out.println("Saldo:"+ this.getSaldo());
        System.out.println("Aberta? " + this.isAtiva());
        System.out.println("---------------------------------");
    }
    
    public void depositar(double valor){
        this.setSaldo(this.getSaldo()+valor);
    }
    
    public void abrirConta(String titular, String tipo){
        this.setAtiva(true);
        this.setSaldo(0f);
        this.setTitular(titular);   
    }
    
     public void fecharConta(){
        if (this.getSaldo() < 0){
            System.out.println("Ainda há saldo devedor na conta");
        }
        else if(this.getSaldo() > 0){
            System.out.println("Ainda há dinheiro na conta");
        }
        else{
            this.setAtiva(false);
        }
    }
}
```

Aqui, temos a classe mãe, ou superclasse `Conta`. Ela possui alguns atributos e métodos que serão comuns a todas as classes filhas a ela. Agora, vejamos a classe `ContaUniversitaria`:

```Java
public class ContaUniversitaria extends Conta {
    
    //atributos da classe
    private int almocoRestante;

	//Construtor
    public ContaUniversitaria(String titular) {
        this.almocoRestante = 30;
        this.setTitular(titular);
        this.setTipo('U');
        this.setSaldo(0);
        this.setAtiva(true);
        
    }

	//getters e setters da classe
	public int getAlmocoRestante() {
        return almocoRestante;
    }

    public void setAlmocoRestante(int almocoRestante) {
        this.almocoRestante = almocoRestante;
    }

    @Override
    public void estadoAtual(){
        System.out.println("Ag:" + this.getAgencia());
        System.out.println("Conta:" + this.getConta());
        System.out.println("Tipo:" + this.getTipo());
        System.out.println("Titular:" + this.getTitular());
        System.out.println("Saldo:"+ this.getSaldo());
        System.out.println("Aberta? " + this.isAtiva());
        System.out.println("Almoco restante: " + this.getAlmocoRestante());
        System.out.println("---------------------------------");
    }
 
    public void almocar(){
        if(this.isAtiva() && this.getAlmocoRestante() > 0){
            this.setAlmocoRestante(this.getAlmocoRestante() -1);
        }     
    }
}
```

Quanto à declaração da subclasse, observe o uso da palavra reservada `extends`. Ela serve para indicar que a classe a ser definida (`ContaUniversitaria`) é subclasse da sua classe mãe (`Conta`).

Quanto às nuances da classe, note que há um novo atributo `almocoRestante`, que conta justamente a quantidade de almoços restantes. Note também que, no construtor, o tipo já é definido para `'U'`, indicando que a conta é universitária. Também há o método `almocar()`, que diminui em 1 o contador de `almocoRestante`. Por fim, note que há um `@Override` no método `EstadoAtual()`, pois o número de almoços restantes foi acrescentado à lista de informações mostradas, e o método da classe mãe deve ser sobrescrito.

Agora, vejamos a conta corrente:

```Java
public class ContaCorrente extends Conta {
    
    private int saquesRestantes;

	//construtor
    public ContaCorrente(String titular) {
        this.setSaquesRestantes(6);
        this.setTitular(titular);
        this.setTipo('C');
        this.setSaldo(0);
        this.setAtiva(true);
        
    }
    
    //getters e setters da classe
    public int getSaquesRestantes() {
        return saquesRestantes;
    }

    public void setSaquesRestantes(int saquesRestantes) {
        this.saquesRestantes = saquesRestantes;
    }
    
    @Override
    public void estadoAtual(){
        System.out.println("Ag:" + this.getAgencia());
        System.out.println("Conta:" + this.getConta());
        System.out.println("Tipo:" + this.getTipo());
        System.out.println("Titular:" + this.getTitular());
        System.out.println("Saldo:"+ this.getSaldo());
        System.out.println("Aberta? " + this.isAtiva());
        System.out.println("Saques restantes: " + this.getSaquesRestantes());
        System.out.println("---------------------------------");
    } 
    
    public void sacar(double valor){
        if(this.isAtiva() 
        && this.getSaquesRestantes() > 0
        && this.getSaldo()> 0){
            
           this.setSaldo(this.getSaldo() - valor);
        }
    }
    
    public void restaurarSaque(){
        this.setSaquesRestantes(6);
    }
}
```

A classe possui, similar à `ContaUniversitaria`, um construtor que define os atributos como o tipo (`C` para corrente), e o número de saques restantes para o mês. O `estadoAtual()` foi modificado para incluir o número de saques restantes. Há também uma função para saques e uma para restaurar o número de saques restantes ao fim do mês.

Por fim, vamos à classe `ContaPoupanca`:

```Java
public class ContaPoupanca extends Conta {
    
    private double rendimento;

	//construtor
    public ContaPoupanca(String titular) {
        this.setRendimento(0.02);
        this.setTitular(titular);
        this.setTipo('P');
        this.setSaldo(0);
        this.setAtiva(true);
    }

	//getters e setters da classe
    public double getRendimento() {
        return rendimento;
    }

    public void setRendimento(double rendimento) {
        this.rendimento = rendimento;
    }
      
    public void estadoAtual(){
        System.out.println("Ag:" + this.getAgencia());
        System.out.println("Conta:" + this.getConta());
        System.out.println("Tipo:" + this.getTipo());
        System.out.println("Titular:" + this.getTitular());
        System.out.println("Saldo:"+ this.getSaldo());
        System.out.println("Aberta? " + this.isAtiva());
        System.out.println("Rendimento da conta: " + this.getRendimento());
        System.out.println("---------------------------------");
    }

    public void render(){
        if(this.isAtiva() && this.getSaldo() >= 0){
            this.setSaldo(this.getSaldo() * this.getRendimento());
        }
    }   
}
```

Aqui, o diferencial é o atributo `rendimento` e os métodos associados a ele. Similar às outras classes, o `estadoAtual()` é modificado, assim como o construtor