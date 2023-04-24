export class Customers {

    private selected = 0;

    constructor() {

        this.setHeight();
        this.bulletEvent();
    }

    setHeight() {

        const height = this.height;
        const slider: any = document.querySelector('#slider');

        slider.style.height = `${height + 10}px`;
    }

    setMargin(multiplier: number) {

        const slides: any = document.querySelector('#slides');
        
        slides.style.marginTop = `-${(this.height + 10) * multiplier}px`
    }

    bulletEvent() {

        const bullets = document.querySelectorAll('[data-customers-bullet]');

        for (let i = 0 ; i < bullets.length ; i++) {

            bullets[i].addEventListener('click', () => {

                bullets[this.selected].classList.remove('active');
                bullets[i].classList.add('active');

                this.selected = i;
                this.setMargin(i);
            });

        };
    }

    get height() {

        return document.querySelector('#customers__card').clientHeight;
    }


}