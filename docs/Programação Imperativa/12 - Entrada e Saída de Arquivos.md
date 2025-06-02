# Entrada e Saída de Arquivos

## O que são arquivos

Arquivos são dados ou coleções de dados guardados em disco (ou qualquer armazenamento não volátil, cuja informação armazenada é permanente) , sendo conservados mesmo após a execução do programa. Exemplos de arquivos são os arquivos `.c` escritos até aqui, um pdf contendo um documento. O texto que você está lendo aqui está armazenado em um arquivo.


Memória RAM, um tipo de memória volátil
<img src="/docs/Programação Imperativa/assets/DDR2_ram_mounted.jpg" height=200>

HDs, um tipo de memória não volátil
<img src="/docs/Programação Imperativa/assets/wdfMobile_Blue_img5.webp" height=250>


Apesar de possuírem como ponto positivo a conservação dos dados a longo prazo, uma desvantagem do armazenamento de tudo em arquivos é a velocidade de acesso, afinal acessar arquivos em disco é mais lento que acessar da memória RAM ou do cache do processador, por exemplo.

## Acesso de arquivos em C

É possível acessar arquivos em C utilizando um ponteiro do tipo `FILE`, definido na biblioteca `<stdio.h>`.





#PI