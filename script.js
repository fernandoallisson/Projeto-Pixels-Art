// ------------------------------------------[EX01]-----------------------------------------------
// Aqui vou criar uma função para gerar cores aleatórias e posteriormente usar em uma das divs criadas. 

const GerarCorAleatória = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return (`rgb(${red}, ${green}, ${blue})`)
}
const corBranca = 'rgb(255, 255, 255)'
// As cores geradas. Agora vou pegar as divs das cores que têm a classe color para adicionar a cada uma, uma das cores assim que recarregar a página, menos a cor branca.

const divCor = document.querySelectorAll('.color');
for (const div of divCor) {
  div.style.backgroundColor = GerarCorAleatória() != corBranca ? GerarCorAleatória(): GerarCorAleatória();
}
// As cores foram geradas automaticamente, então eu vou atribuir ao botão sortear, as cores em formato aleatório. 


// console.log(divCor);

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
