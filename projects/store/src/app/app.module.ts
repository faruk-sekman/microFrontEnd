import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        StoreModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports: [
        StoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
