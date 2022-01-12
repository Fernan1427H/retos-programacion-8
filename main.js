const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'flexbox',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  cosasQueAprendimos.forEach(cosa => {
    const nuevoItem = document.createElement('li');
    nuevoItem.innerText = cosa.tema
    cosa.class && nuevoItem.classList.add(item.class)
    document.querySelector('.lista').appendChild(nuevoItem);
  })
}

main();
