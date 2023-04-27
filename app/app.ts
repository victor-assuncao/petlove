import { Customers } from "./customers.js";
import { Header } from "./header.js";
import { Services } from "./services.js";

new Services();

const customers = new Customers();

document.querySelector('#form').addEventListener('submit', (event) => {

    event.preventDefault();

    const name: HTMLInputElement = document.querySelector('#name');
    const number: HTMLInputElement = document.querySelector('#number');
    const message: HTMLTextAreaElement = document.querySelector('#message');
    const submit: HTMLButtonElement = document.querySelector('#submit');

    name.value = '';
    number.value = '';
    message.value = '';

    submit.classList.toggle('sent');
    submit.innerText = 'Enviado!'

    setTimeout(() => {

        submit.innerText = 'Enviar'
        submit.classList.toggle('sent');
    }, 3000);
    
});

new Header();