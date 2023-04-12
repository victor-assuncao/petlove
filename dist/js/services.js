export class Services {
    constructor() {
        this.selectedService = 0;
        this.changeIconState();
    }
    ;
    changeIconState() {
        const icons = document.querySelectorAll('[data-service]');
        icons.forEach((element) => {
            element.addEventListener('click', () => {
                icons[this.selectedService].classList.remove('selected');
                element.classList.add('selected');
                this.selectedService = Number(element.getAttribute('data-service'));
                this.changeContent();
            });
        });
    }
    ;
    changeContent() {
    }
    ;
}
