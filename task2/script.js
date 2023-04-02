const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Функция в JavaScript, которая используется для печати любых переменных, определенных ранее в ней, или просто для печати любого сообщения, которое должно быть отображено пользователю.');
});

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
    alert('Метод alert() вызывает модальное окно с указанным текстом. Это окно встроено в браузер: мы не можем изменить его стиль.');
});

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {
    alert('Метод prompt() выводит на экран диалоговое окно, которое запрашивает у пользователя информацию.');
});