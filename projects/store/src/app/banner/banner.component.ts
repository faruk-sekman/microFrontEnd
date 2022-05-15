import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public slidesStore:any = [
    {
      src: 'https://source.unsplash.com/1600x400/?nature,water',
      id: '1s',
      title: 'Lorem Ipsum 1'
    },
    {
      src: 'https://source.unsplash.com/1600x1400/?nature,forest',
      id: '2s',
      title: 'Lorem Ipsum 2'
    },
    {
      src: 'https://source.unsplash.com/1600x400/?nature,forest',
      id: '3s',
      title: 'Lorem Ipsum 3'
    }
  ]
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="icon icon_left"></i>', '<i class="icon icon_right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
