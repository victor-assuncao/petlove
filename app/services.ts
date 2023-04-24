export class Services {

    private selectedService = 0;

    constructor() {

        this.changeIconState();
    };

    changeIconState () {
        
        const icons = document.querySelectorAll('[data-service]');

        icons.forEach(

            (element: Element) => {

                element.addEventListener('click', () => {

                    icons[this.selectedService].classList.remove('selected');
                    element.classList.add('selected');
                    
                    this.selectedService = Number(element.getAttribute('data-service'));
                })
            }
        );
    };

}