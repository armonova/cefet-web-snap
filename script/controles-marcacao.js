
// Exercício 0
const ancestral = document.querySelector('body');
const hiddenMark = document.querySelector('#visibilidade-das-marcacoes');

hiddenMark.addEventListener('input', () => {
    ancestral.classList.toggle(hiddenMark.value, hiddenMark.checked);
})
