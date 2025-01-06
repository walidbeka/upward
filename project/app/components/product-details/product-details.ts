import { Observable } from '@nativescript/core';
import { Product } from '../../shared/models/product.model';

export class ProductDetailsViewModel extends Observable {
    private _product: Product;

    constructor(product: Product) {
        super();
        this._product = product;
    }

    get product(): Product {
        return this._product;
    }

    addToCart() {
        // سيتم تنفيذ إضافة المنتج للسلة
        console.log('تمت إضافة المنتج للسلة:', this._product.id);
    }

    buyNow() {
        // سيتم التوجيه لصفحة الدفع
        console.log('شراء المنتج مباشرة:', this._product.id);
    }
}