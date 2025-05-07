# Visibilidade de um objeto

Nas aulas anteriores, foi apresentado o conceito de objeto, de classes, métodos, atributos e estados (ou status). Agora, aprenderemos sobre os **modificadores de visibilidade** de um objeto.

Os modificadores de visibilidade indicam o nível de acesso de partes do programa a determinados elementos de uma classe. Esses níveis de acesso são:
- Público (+): Os atributos podem ser acessados e modificados fora da classe que ele pertence
- Privado (-): Os atributos só podem ser acessados ou modificados dentro da própria classe, por métodos
- Protegido(#): Os atributos podem ser acessados ou modificados pela classe que ele pertence e por suas subclasses

Então, por exemplo, uma fábrica de carros (a Mazda, por exemplo), quer criar carros com uma classe "Carro". Ela pode criar outras classes que modifiquem a cor do carro, a potência do motor, os modelos das rodas, entre outras características. Esses atributos podem ser "públicos", pois são mudados por funções externas. 

Já um atributo como o modelo do carro só pode ser mudado em caso de modelos especiais (subclasses) (um Mazda RX-7 e um RX-7 Turbo, por exemplo). Esse aí é um atributo protegido. 

Agora, nenhuma classe pode alterar o nome da fabricante (Mazda). E esse é um atributo privado.

O conceito de atributos protegidos e subclasses será melhor explorado em aulas seguintes.