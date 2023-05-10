export class Customers {
    constructor() {
        this.selected = 0;
        this.setHeight();
        this.bulletEvent();
    }
    setHeight() {
        const height = this.height;
        const slider = document.querySelector('#customers__slider');
        slider.style.height = `${height + 10}px`;
    }
    setMargin() {
        const slides = document.querySelector('#customers__slides');
        slides.style.marginTop = `-${(this.height + 10) * this.selected}px`;
    }
    bulletEvent() {
        const bullets = document.querySelectorAll('[data-customers-bullet]');
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].addEventListener('click', () => {
                bullets[this.selected].classList.remove('active');
                bullets[i].classList.add('active');
                this.selected = i;
                this.setMargin();
            });
        }
        ;
    }
    get height() {
        return document.querySelector('#customers__card').clientHeight;
    }
}
