import {Component, OnInit} from '@angular/core';

import {ProductsService} from "./products.service";
import {ProductsModel} from "./products.model";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    public products: ProductsModel[] = [];
    public itemCount: number = 6;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productsService.getProducts(this.itemCount).subscribe(products => {
            this.products = products;
            this.itemCount = this.itemCount + this.products.length;
        });
    }

}
