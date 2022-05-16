import {Component, OnInit} from '@angular/core';

import {ProductsService} from "./products.service";
import {ProductsModel} from "./products.model";
import { trigger } from '@angular/animations';
import { fadeIn } from './animation';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations : [
        trigger('fadeIn', fadeIn())
    ],
})
export class ProductsComponent implements OnInit {
    public products: ProductsModel[] = [];
    public itemCount: number = 6;
    public isComplatedData: boolean = false;
    public dataLoaded: boolean = false;
    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productsService.getProducts(this.itemCount).subscribe(data => {
            this.products = data;
            this.isComplatedData = data.length < this.itemCount ? true : false;
            this.itemCount = this.itemCount + 6;
            this.dataLoaded = true;
        });
    }

    getMorePrducts() {
        this.dataLoaded = false;
        this.productsService.getProducts(this.itemCount).subscribe(data => {
            this.products = data;
            this.isComplatedData = data.length < this.itemCount ? true : false;
            this.itemCount = this.itemCount + 6;
            this.dataLoaded = true;
        });
    }

    counter(i: number) {
        return new Array(i);
    }
}
