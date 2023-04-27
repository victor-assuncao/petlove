export class Header {
    constructor() {
        this.menu();
    }
    ;
    menu() {
        document.querySelector('#menu').addEventListener('click', () => {
            document.querySelector('#navigation').classList.toggle('show');
        });
    }
}
