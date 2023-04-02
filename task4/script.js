const link = document.querySelector('a.link');
link.addEventListener('click', (event) => {
    event.preventDefault();
    let linkText = prompt('Задайте новый текст ссылке');
    link.textContent = linkText;
});