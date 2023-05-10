export class Services {

    private selectedService = 0;

    constructor() {

        this.setSliderWidth();

        window.addEventListener('resize', () => {

            this.setSliderWidth();
            // this.setSlidesMargin();
        });
    };

    setSliderWidth(): void {

        const slider: any =  document.querySelector('#services__slider');

        slider.style.width = `${this.width}px`

    };

    // setSlidesMargin() {

    //     const slides: any = document.querySelector('#services__slides');
        
    //     slides.style.marginLeft = `-${(this.width) * this.selectedService}px`
    // };

    get width(): number {

        return document.querySelector('[data-services-slide]').clientWidth;
    };

}