export interface CartItem {
    productId: string;
    quantity: number;
    price: number;
    title: string;
}

export interface Cart {
    items: CartItem[];
    total: number;
}