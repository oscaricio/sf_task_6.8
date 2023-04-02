const input = document.querySelector('input');
const button = document.querySelector('button');
const duplicateField = document.querySelector('#duplicateField');

input.addEventListener('keyup', (event) => {
    duplicateField.textContent = event.target.value;
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
});