# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Interface do usuário](#3-interface-do-usuário)
* [4. Estrutura de organização dos arquivos](#4-estrutura-de-organização)
* [5. Ferramentas utilizadas no projeto](#5-ferramentas-utilizadas)
* [6. Ferramentas de programação utilizadas no projeto](#6-ferramentas-de-programação-utilizadas-no-projeto)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Este projeto foi o primeiro dos projetos desenvolvidos durante o Bootcamp da turma SAP008, da Laboratória Brasil.

Se trata de uma aplicação web de cifragem utilizando HTML, CSS e JavaScript como ferramentas de programação. A lógica do projeto teve como base o sistema de cifragem da Cifra de César, possibillitando que o usuário cifre ou decifre um texto indicando uma chave de deslocamento.
Foi desenvolvido com base em um protótipo de baixa fidelidade produzido utilizando a ferramenta Figma. Como pode ser observado na imagem abaixo:

![Protótipo Projeto 1](https://github.com/fbasoni/SAP008-cipher/blob/main/Prot%C3%B3tipo%20projeto%20cifra%20de%20c%C3%A9sar.png?raw=true)

O tema foi pensado como um "jogo" de enigma; o usuário digita um texto na caixa de texto e a aplicação fornece a versão cifrada do texto, e decifrada caso o texto já esteja cifrado. E o resultado retornado pode ser compartilhado, com outras pessoas, pelo usuário, a modo de que elas possam tentar decifrar o texto. E, caso não consigam, a aplicação também fornece a possibilidade de decifragem. 

Considerando que o tema do projeto foi pensado para a aplicação ser um tipo de "brincadeira", o nome do projeto foi baseado em um trocadilho relacionado ao mundo Harry Potter ("Harry Potter e o Enigma do Princípe"). Embora alguns elementos de design (cores, imagem de fundo) e o próprio nome do projeto façam alusão a este mundo, o público-alvo deste projeto pode ser qualquer pessoa que gostaria de utilizar um mecanismo de cifragem de textos, com opção de decifragem.

### 3. Interface do usuário (UI)

A interface do projeto foi pensada a modo de permirtir que o usuário:

* Escolha um número indicando quantas posições de deslocamento de caracteres a cifragem deve utilizar;
* Insira uma mensagem (texto) para ser cifrada;
* Consiga ver o resultado da mensagem cifrada ao apertar o botão de cifrar.
* Insira uma mensagem (texto) para ser decifrada;
* Consiga ver o resultado da mensagem decifrada ao apertar o botão decifrar.
Além disso, caso o usuário tente digitar número ao invés de letras de A a Z, ele recebe uma mensagem de alerta pedindo que seu texto apenas contenha letras.

Pensando em uma melhor experiência para o usuário, a interface do projeto final se diferenciou do protótipo de baixa fidelidade nos seguintes pontos:

- Incremento de um novo botão, ficando um para cifrar e um para decifrar, ficando claros a ação desejada (cifrar ou decifrar) e o resultado retornado;
- Área de caixa de texto maior, para melhor visualização do próprio texto escrito;
- Mudança da descrição, a modo de abranger um público-alvo maior que o conhecedor do mundo Harry Potter, uma vez que essa aplicação pode atender a necessidade de qualquer usuário que precise utilizar um mecanismo de cifragem de texto. 

### 4. Estrutura de organização dos arquivos
A estruturação dos arquivos da aplicação web se dá da seguinte forma:
* index.html contém o código de estruturação da página web;
* style.css contém o código de estilização da página web;
* cipher.js contém a lógica do código para o mecanismo de cifragem e de decifragem;
* index.js contém a lógica do código de manipulação do DOM com interação do usuário na página.

### 5. Ferramentas utilizadas no projeto
* Figma (para o protótipo);
* Visual Studio Code (para desenvolver o código);
* Notion (para o planning);
* Git

### 6. Ferramentas de programação utilizadas no projeto 
* HTML;
* CSS;
* JavaScript (vanilla).