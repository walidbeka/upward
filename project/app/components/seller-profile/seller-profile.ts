import { Observable } from '@nativescript/core';
import { Product } from '../../shared/models/product.model';
import { ApiService } from '../../shared/services/api.service';

export class SellerProfileViewModel extends Observable {
    private apiService: ApiService;
    private _seller: any;
    private _products: Product[] = [];

    constructor(sellerId: string) {
        super();
        this.apiService = new ApiService();
        this.loadSellerData(sellerId);
    }

    private async loadSellerData(sellerId: string) {
        // سيتم استبدال هذا بطلب API حقيقي
        this._seller = {
            id: sellerId,
            name: 'اسم البائع',
            avatar: 'https://example.com/avatar.jpg',
            followersCount: 1000,
            rating: 4.5
        };
        
        this._products = await this.apiService.getSellerProducts(sellerId);
        
        this.notifyPropertyChange('seller', this._seller);
        this.notifyPropertyChange('products', this._products);
    }

    get seller() {
        return this._seller;
    }

    get products() {
        return this._products;
    }

    get productsCount() {
        return this._products.length;
    }

    get followersCount() {
        return this._seller?.followersCount || 0;
    }

    get rating() {
        return this._seller?.rating || 0;
    }

    followSeller() {
        // سيتم تنفيذ متابعة البائع
        console.log('تمت متابعة البائع:', this._seller.id);
    }
}