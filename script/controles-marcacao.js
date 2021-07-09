// Exercício 0
const ancestral = document.querySelector('body');
const hiddenMark = document.querySelector('#visibilidade-das-marcacoes');

hiddenMark.addEventListener('input', () => {
    ancestral.classList.toggle(hiddenMark.value, hiddenMark.checked);
})


// Megaexercício 2
const markingList = document.querySelectorAll('.marcacao');
let marking = document.querySelector('.selecionada');
const xMarking = document.querySelector('#x-da-marcacao');
const yMarking = document.querySelector('#y-da-marcacao');
const widthMarking = document.querySelector('#largura-da-marcacao');
const heightMarking = document.querySelector('#altura-da-marcacao');
const titleMarking = document.querySelector('#titulo-da-marcacao');
const contentMarking = document.querySelector('#conteudo-da-marcacao');
const colorMarking = document.querySelector('#cor-da-marcacao');
const formatListValues = ['formato-oval', 'formato-retangular'];
const formatList = formatListValues.map(format => document.querySelector(`input[value="${format}"]`));



markingList.forEach(mark => {
    mark.addEventListener('click', () => {
        marking.classList.remove('selecionada');
        marking = mark;
        marking.classList.add('selecionada');
    
        xMarking.value = parseInt(marking.style.left);
        yMarking.value = parseInt(marking.style.top);
        widthMarking.value = parseInt(marking.style.width);
        heightMarking.value = parseInt(marking.style.height);
        titleMarking.value = marking.dataset.titulo;
        contentMarking.value = marking.dataset.conteudo;
        colorMarking.value = marking.dataset.cor;

        formatList.forEach(format => {
            format.checked = marking.classList.contains(format.value);
        });
    });
});

xMarking.addEventListener('input', () => {
    marking.style.left = `${xMarking.value}px`;
});
yMarking.addEventListener('input', () => {
    marking.style.top = `${yMarking.value}px`;
});
widthMarking.addEventListener('input', () => {
    marking.style.width = `${widthMarking.value}px`;
});
heightMarking.addEventListener('input', () => {
    marking.style.height = `${heightMarking.value}px`;
});
titleMarking.addEventListener('input', () => {
    marking.dataset.titulo = titleMarking.value;
});
contentMarking.addEventListener('input', () => {
    marking.dataset.conteudo = contentMarkingEl.value;
});
colorMarking.addEventListener('input', () => {
    marking.dataset.cor = colorMarking.value;
});

formatList.forEach(format => {
    format.addEventListener('input', () => {
        formatListValues.forEach(form => marking.classList.remove(form));
        marking.classList.add(format.value);
    });
});