export class Services {
    constructor() {
        this.selectedService = 0;
        this.setSliderWidth();
        window.addEventListener('resize', () => {
            this.setSliderWidth();
            // this.setSlidesMargin();
        });
    }
    ;
    setSliderWidth() {
        const slider = document.querySelector('#services__slider');
        slider.style.width = `${this.width}px`;
    }
    ;
    // setSlidesMargin() {
    //     const slides: any = document.querySelector('#services__slides');
    //     slides.style.marginLeft = `-${(this.width) * this.selectedService}px`
    // };
    get width() {
        return document.querySelector('[data-services-slide]').clientWidth;
    }
    ;
}
