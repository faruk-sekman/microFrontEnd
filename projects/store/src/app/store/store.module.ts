import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {StoreRoutingModule} from './store-routing.module';
import {StoreComponent} from './store.component';
import {BannerComponent} from "../banner/banner.component";
import {ProductsComponent} from "../products/products.component";

import {ProductsService} from '../products/products.service';
import {BannerService} from '../banner/banner.service';

@NgModule({
    imports: [
        CommonModule,
        StoreRoutingModule,
        CarouselModule,
        HttpClientModule
    ],
    declarations: [
        StoreComponent,
        BannerComponent,
        ProductsComponent
    ],
    exports: [
        StoreComponent,
    ],
    providers: [
        ProductsService,
        BannerService
    ]
})
export class StoreModule {
}