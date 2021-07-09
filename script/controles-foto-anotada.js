// Exercicio 4
const photoFilter = document.querySelector('#filtro-da-foto');
const file = document.querySelector('#imagem');
const selectedPhoto = document.querySelector('.foto-anotada > img');

photoFilter.addEventListener('input', () => {
    selectedPhoto.style.filter = photoFilter.value;
});

file.addEventListener('change', event => {
    readImage(event.target.files[0]);
});


// Desafio
function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.', file.type, file);
        return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        selectedPhoto.src = event.target.result;
    });
    reader.readAsDataURL(file);
}