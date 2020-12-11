import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class MyComponent {

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {slidesPerView: 4},
      500: { slidesPerView: 3},
      400: { slidesPerView: 2 }, 300: { slidesPerView: 1 }
      },
    spaceBetween: 50}

}
