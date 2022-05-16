import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import {ProductsService} from "./products/products.service";
import {BannerService} from "./banner/banner.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        StoreModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    exports: [
        StoreModule
    ],
    providers: [
        ProductsService,
        BannerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
