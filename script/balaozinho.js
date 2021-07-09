// Exercício 1

const markBalloonList = document.querySelectorAll('.marcacao');
const balloon = document.querySelector('#balaozinho');

function returnHTMLBalloon(title, content) {
    return `<h2>${title}</h2>
            <p>${content}</p>`
}

markBalloonList.forEach(markBalloon => {
    markBalloon.addEventListener('mouseover', () => {
        const title = markBalloon.dataset.titulo;
        const content = markBalloon.dataset.conteudo;
        const color = markBalloon.dataset.cor;
        balloon.innerHTML = returnHTMLBalloon(title, content);
        balloon.style.color = color;
    })
    markBalloon.addEventListener('mouseout', () => {
        balloon.innerHTML = '';
    })
    markBalloon.addEventListener('mousemove', (event) => {
        balloon.style.left = `${event.pageX}px`;
        balloon.style.top = `${event.pageY}px`;
    })
})

