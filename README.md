# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Guias, dicas e leituras complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)

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

Se trata de uma aplicação web de cifragem utilizando HTML, CSS e JavaScript como ferramentas. A lógica do projeto seguiu o sistema de cifragem da Cifra de César, possibillitando que o usuário cifre ou decifre um texto indicando uma chave de deslocamento.
Foi desenvolvido com base em um protótipo de baixa fidelidade produzido utilizando a ferramenta Figma. Como pode ser observado na imagem abaixo.

O tema foi pensado como uma "brincadeira" de cifragem, de modo que a aplicação fornece ao usuário o resultado cifrado do texto digitado, pelo usuário, na área de texto, para que o ele possa enviar o texto cifrado para outra pessoa tentar decifrar. Além disso, a aplicação também fornece a decifragem do texto digitado, caso o usuário, ou a outra pessoa participante da "brincadeira", necessitarem. 

Considerando que o tema do projeto foi pensado para a aplicação ser um tipo de "brincadeira", o nome do projeto foi baseado em um trocadilho relacionado ao mundo "Harry Potter" (Harry Potter e o Enigma do Princípe). Embora os elementos de design (cores, imagem de fundo) e o próprio nome do projeto façam alusão a este mundo, o público-alvo deste projeto pode ser qualquer pessoa que gostaria de utilizar um mecanismo de cifragem de textos.


### Interface do usuário (UI)

O a interface do projeto foi pensada a modo de permirtir que o usuário:

* Escolha um número indicando quantas posições de deslocamento de caracteres a cifragem deve utilizar;
* Insira uma mensagem (texto) para ser cifrada;
* Consiga ver o resultado da mensagem cifrada ao apertar o botão de cifrar.
* Insira uma mensagem (texto) para ser decifrada;
* Consiga ver o resultado da mensagem decifrada ao apertar o botão decifrar.
A interface deve permitir ao usuário:

### Estrutura de organização dos arquivos
A estruturação dos arquivos da aplicação web se dá da seguinte forma:
* index.html contém o código de estruturação da página web;
* style.css contém o código de estilização da página web;
* cipher.js contém a lógica do código para o mecanismo de cifragem e de decifragem;
* index.js contém a lógica do código de manipulação do DOM com interação do usuário na página.
### Ferramentas Utilizadas

* Figma (protótipo);
* HTML;
* CSS;
* Vanilla JavaScript.