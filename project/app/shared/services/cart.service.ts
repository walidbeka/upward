import { Observable } from '@nativescript/core';
import { Cart, CartItem } from '../models/cart.model';

export class CartService extends Observable {
    private _cart: Cart = {
        items: [],
        total: 0
    };

    addToCart(item: CartItem) {
        const existingItem = this._cart.items.find(i => i.productId === item.productId);
        
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this._cart.items.push(item);
        }
        
        this.calculateTotal();
        this.notifyPropertyChange('cart', this._cart);
    }

    removeFromCart(productId: string) {
        this._cart.items = this._cart.items.filter(item => item.productId !== productId);
        this.calculateTotal();
        this.notifyPropertyChange('cart', this._cart);
    }

    private calculateTotal() {
        this._cart.total = this._cart.items.reduce((sum, item) => 
            sum + (item.price * item.quantity), 0);
    }

    getCart(): Cart {
        return this._cart;
    }

    clearCart() {
        this._cart.items = [];
        this._cart.total = 0;
        this.notifyPropertyChange('cart', this._cart);
    }
}