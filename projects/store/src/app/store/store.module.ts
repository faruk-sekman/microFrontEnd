import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {StoreRoutingModule} from './store-routing.module';
import {StoreComponent} from './store.component';
import {BannerComponent} from "../banner/banner.component";
import {ProductsComponent} from "../products/products.component";
@NgModule({
    imports: [
        CommonModule,
        StoreRoutingModule,
        CarouselModule,
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
    ]
})
export class StoreModule {
}