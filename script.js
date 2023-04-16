// Aqui vou criar uma função para gerar cores aleatórias e posteriormente usar em uma das divs criadas. 

const gerCorAleatoria = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return (`rgb(${red}, ${green}, ${blue})`)
}
const corBranca = 'rgb(255, 255, 255)';
// As cores geradas. Agora vou pegar as divs das cores que têm a classe color para adicionar a cada uma, uma das cores assim que recarregar a página, menos a cor branca. E o primeiro elemento com a cor Preta.

const divCor = document.querySelectorAll('.color');
for (const div of divCor) {
  div.style.backgroundColor = gerCorAleatoria() != corBranca ? gerCorAleatoria(): gerCorAleatoria();
  divCor[0].style.backgroundColor = 'black'
}
// As cores foram geradas automaticamente, então eu vou atribuir ao botão sortear, as cores em formato aleatório. E adicionando à primeira div a cor preta.

const sortear = document.querySelector('#rand');

sortear.addEventListener('click', () => {
  divCor.forEach(div => {
    let corGerada = gerCorAleatoria();
    if (corGerada !== corBranca) {
      div.style.backgroundColor = corGerada;
      divCor[0].style.backgroundColor = 'black'
    } else {
      corGerada = gerCorAleatoria();
      div.style.backgroundColor = corGerada;
    }
  });
});











// divCor.forEach(div => {
//   div.addEventListener('click', () => {
//     let corGerada = GerarCorAleatória()
//     if (corGerada !== corBranca) {
//       div.style.backgroundColor = corGerada;
//     } else {
//       corGerada = GerarCorAleatória();
//       div.style.backgroundColor = corGerada;
//     }
//   }) 
// });
