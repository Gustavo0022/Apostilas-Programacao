# Exemplo prático com objetos

Suponha que tenhamos que criar uma aplicação de banco. Suponha que uma pessoa tenha uma conta corrente, deposite R$ 850,00, mas depois, tenha que retirar R$200,00 para pagar uma conta. 

Primeiro, temos que criar uma classe com o nome conta. Essa classe deve conter os atributos
- Agência (inteiro)
- Número da conta (inteiro)
* Tipo da conta (corrente (CC) ou poupança (CP)) (string)
- Titular (string)
- Saldo atual (float)
- Status (se está aberta ou fechada) (Booleano)
Também devemos atribuir alguns métodos:
* Abrir conta
* Fechar conta
* Depositar dinheiro
* Sacar dinheiro
* Pagar anuidade

Esses são apenas alguns atributos e métodos que utilizaremos neste exemplo. 

## Regras para métodos

- Para o método `abrirConta()`, precisamos definir o tipo da conta e o nome do titular.
- Para `fecharConta()`, não podemos permitir que a conta seja fechada com `saldoAtual` negativo.
- Não podemos permitir que `sacar()` retire mais dinheiro que o que há na conta.
- `pagarAnuidade()` será chamado 