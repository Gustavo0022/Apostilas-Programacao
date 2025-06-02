# Sistemas de numeração

## Sistema Decimal

Possui dez símbolos (0-9), de forma que cada número é um dígito.

Ex: 34,678 possui
* 3 dezenas
* 4 unidades
* 6 décimos
* 7 centésimos
* 8 milésimos
Os valores podem ser representados como potências de 10:

| $10^1$ | $10⁰$ | $10^{-1}$ | $10^{-2}$ | $10^{-3}$ |
| ------ | ----- | --------- | --------- | --------- |
| 3      | 4,    | 6         | 7         | 8         |
Sendo o valor à esquerda o **dígito mais significativo** e o valor mais à direita o **dígito menos significativo**, de forma que esse sistema diz se **posicional**, afinal, a posição claramente importa.

Apesar de ser conveniente para a contagem manual, o sistema decimal não é conveniente para a implementação em sistemas digitais, por isso utiliza-se o sistema binário para tal.

## Sistema binário

Possui apenas dois símbolos (0 e 1), chamados de **bits** (binary digits).

Os valores são representados como potências de 2:

| 8     | 4    | 2       | 1       | 1/2      |
| ----- | ---- | ------- | ------- | -------- |
| $2^3$ | $2²$ | $2^{1}$ | $2^{0}$ | $2^{-1}$ |
| 1     | 0    | 1       | 1,      | 1        |
Esse sistema também é posicional, de forma que o valor à esquerda é o **bit mais significativo** e o valor mais à direita, o **dígito menos significativo**

Para converter um valor do sistema binário para o decimal, basta multiplicar os valores pelas potências equivalentes:

$$1011,1_2^* = 1\times2³ + 0\times 2² + 1 \times 2¹ + 1 \times 2⁰ + 1 \times 2^{-1} = 11,5_{10}^*  $$

(\*Lê-se *1011,1 na base 2* e *11,5 na base 10*)

O maior valor que pode ser representado por uma certa quantidade de bits é dada por $2^n - 1$, sendo n o número de bits usado. Dessa forma, 4 bits podem representar no máximo o número 15.

## Representação de valores binários

Para a conversão e representação de sinais analógicos para digitais pode ser feita tomando amostras do sinal analógico em intervalos regulares, de forma a chegar a uma aproximação do valor real. O intervalo entre as amostras depende da necessidade do circuito, e intervalos pequenos requerem mais processamento