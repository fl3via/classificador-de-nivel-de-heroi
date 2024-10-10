# ***Classificador de nível de Herói***

## **Objetivo**

Classificar o nível do herói com base na quantidade de **XP** (experiência) acumulada. Cada faixa de XP corresponde a um nível específico, que reflete a progressão e evolução do herói dentro de um sistema de jogo. 

**Tabela de nível**

| Faixa de XP                | Nível         |
|--------------------------- |---------------|
| XP menor do que 1.000      | Ferro         |
| XP entre 1.001 e 2.000     | Bronze        |
| XP entre 2.001 e 5.000     | Prata         |
| XP entre 5.001 e 7.000     | Ouro          |
| XP entre 7.001 e 8.000     | Platina       |
| XP entre 8.001 e 9.000     | Ascendente    |
| XP entre 9.001 e 10.000    | Imortal       |
| XP maior ou igual a 10.001 | Radiante      |


## **Como funciona**

O sistema de classificação funciona de forma simples: você insere o nome do herói e a quantidade de **XP** (pontos de experiência) que ele acumulou. O programa calcula automaticamente em qual faixa de XP o herói se encontra e retorna o **nível correspondente**.