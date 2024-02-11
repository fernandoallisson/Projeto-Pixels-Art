# :construction: Projeto Pixels Art :construction:
Este projeto consiste em uma aplicação de desenho de pixels, onde o usuário pode selecionar cores da paleta, pintar os pixels e salvar suas criações. Aqui está uma visão geral do que o código realiza:

## Inicialização e Recuperação de Dados:

O código inicializa variáveis e recupera dados do localStorage, como a paleta de cores e as cores dos pixels previamente salvadas.
## Geração de Cores Aleatórias:

Uma função gerCorAleatoria é definida para gerar cores RGB aleatórias, exceto a cor branca, que é reservada para o fundo da paleta de cores.
## População da Paleta de Cores:

As cores da paleta são preenchidas automaticamente com cores aleatórias, exceto a primeira, que é definida como preta. Essas cores são então armazenadas no localStorage.
## Seleção de Cores e Pintura de Pixels:

O usuário pode clicar em uma cor na paleta para selecioná-la. Quando um pixel é clicado, ele é pintado com a cor selecionada e essa informação é armazenada no localStorage.
## Limpeza do Quadro de Pixels:

Um botão permite que o usuário limpe o quadro de pixels, retornando todos os pixels para a cor branca e atualizando o localStorage correspondente.
## Sorteio de Novas Cores:

Um botão permite que o usuário sorteie novas cores para a paleta. Isso é feito gerando novamente as cores aleatórias, exceto a cor branca, e atualizando o localStorage.
## Recuperação de Estado Anterior:

Se houver dados previamente salvos no localStorage, como cores da paleta ou cores dos pixels, essas informações são recuperadas e aplicadas na inicialização da página.

## Conclusão
A aplicação oferece uma experiência interativa onde o usuário pode criar desenhos simples utilizando uma variedade de cores disponíveis na paleta. As cores selecionadas e os desenhos criados são salvos localmente, permitindo que o usuário continue trabalhando em suas criações mesmo após recarregar a página.