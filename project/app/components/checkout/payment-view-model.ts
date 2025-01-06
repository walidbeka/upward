import { Observable } from '@nativescript/core';
import { formatCurrency } from '../../shared/utils/currency-formatter';

export class PaymentViewModel extends Observable {
    private _paymentMethods = [
        { id: 'card', name: 'بطاقة ائتمان', icon: '~/assets/icons/credit-card.png' },
        { id: 'cod', name: 'الدفع عند الاستلام', icon: '~/assets/icons/cash.png' },
        { id: 'wallet', name: 'المحفظة الإلكترونية', icon: '~/assets/icons/wallet.png' }
    ];

    private _orderDetails = {
        subtotal: 1500,
        shipping: 50,
        total: 1550
    };

    get paymentMethods() {
        return this._paymentMethods;
    }

    get subtotal() {
        return formatCurrency(this._orderDetails.subtotal);
    }

    get shipping() {
        return formatCurrency(this._orderDetails.shipping);
    }

    get total() {
        return formatCurrency(this._orderDetails.total);
    }

    async confirmOrder() {
        try {
            // سيتم تنفيذ منطق تأكيد الطلب
            console.log('جاري تأكيد الطلب...');
            // يمكن إضافة طلب API هنا
        } catch (error) {
            console.error('خطأ في تأكيد الطلب:', error);
        }
    }
}