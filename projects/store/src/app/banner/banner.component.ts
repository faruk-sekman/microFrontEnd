import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {BannerService} from "./banner.service";
import {BannerModel} from "./banner.model";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public banners: BannerModel[] = [];
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
  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
      this.bannerService.getBanners("?page=6&limit=3").subscribe(data => {
        this.banners = data;
      });
  }
}
