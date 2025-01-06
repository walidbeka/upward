import { Observable } from '@nativescript/core';
import { CartService } from '../../shared/services/cart.service';
import { formatCurrency } from '../../shared/utils/currency-formatter';

export class CartViewModel extends Observable {
    private cartService: CartService;

    constructor() {
        super();
        this.cartService = new CartService();
    }

    get cartItems() {
        return this.cartService.getCart().items.map(item => ({
            ...item,
            formattedPrice: formatCurrency(item.price),
            decreaseQuantity: () => this.updateQuantity(item.productId, -1),
            increaseQuantity: () => this.updateQuantity(item.productId, 1),
            remove: () => this.removeItem(item.productId)
        }));
    }

    get formattedTotal() {
        return formatCurrency(this.cartService.getCart().total);
    }

    get hasItems() {
        return this.cartItems.length > 0;
    }

    private updateQuantity(productId: string, change: number) {
        // تحديث الكمية وإعادة حساب المجموع
        this.cartService.updateQuantity(productId, change);
        this.notifyPropertyChange('cartItems', this.cartItems);
        this.notifyPropertyChange('formattedTotal', this.formattedTotal);
    }

    private removeItem(productId: string) {
        this.cartService.removeFromCart(productId);
        this.notifyPropertyChange('cartItems', this.cartItems);
        this.notifyPropertyChange('formattedTotal', this.formattedTotal);
        this.notifyPropertyChange('hasItems', this.hasItems);
    }

    async checkout() {
        // سيتم تنفيذ منطق إتمام الشراء
        console.log('بدء عملية الشراء');
    }
}