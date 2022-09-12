const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText 
    .split('') // transforma em array de letras
    .map((letter, idx) => `<span style="transition-delay:${idx * 100}ms">${letter}</span>`) // adiciona span
    .join(''); // transforma em string
    // mais uma linha de código
  });