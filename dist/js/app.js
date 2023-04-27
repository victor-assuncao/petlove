import { Customers } from "./customers.js";
import { Header } from "./header.js";
import { Services } from "./services.js";
new Services();
const customers = new Customers();
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const number = document.querySelector('#number');
    const message = document.querySelector('#message');
    const submit = document.querySelector('#submit');
    name.value = '';
    number.value = '';
    message.value = '';
    submit.classList.toggle('sent');
    submit.innerText = 'Enviado!';
    setTimeout(() => {
        submit.innerText = 'Enviar';
        submit.classList.toggle('sent');
    }, 3000);
});
new Header();
