function escrever(elemento) {
  // Dessa forma pega o HTML que está dentro do elemento
  // Para separar as letras, utilizamos o método split
  // Como foi colocado as aspas simples, ele vai dividir letra por letra
  // Se colocasse um espaço entre as aspas, ele iria dividir palavra por palavra
  const textoArray = elemento.innerHTML.split('')
  // Para limpar o texto
  elemento.innerHTML = ''
  // Usamos o forEach para interagir com cada letra
  textoArray.forEach((letra, index) => {
    // Para colocar um tempo para adicionar cada item
    // No preimeiro parâmetro é a função, e no segundo é o tempo que eu quero que ela ocorra
    setTimeout(function () {
      // Para cada letra que tem, 0 "+=" vai adicionar uma seguida da outra
      elemento.innerHTML += letra
      // Para não adicionar todas as letras ao mesmo tempo, utilizamos o "75 * o nosso index"
    }, 75 * index)
  })
}
function escreverLento(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, index) => {
    setTimeout(function () {
      elemento.innerHTML += letra
    }, 500 * index)
  })
}

const texto = document.querySelector('#apresentacao')
// A const texto se transforma no elemento dentro da function escrever
escrever(texto)
escreverLento(document.querySelector('#nome'))
