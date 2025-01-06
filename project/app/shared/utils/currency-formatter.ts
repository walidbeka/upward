export function formatCurrency(amount: number, currency: string = 'EGP'): string {
    return new Intl.NumberFormat('ar-EG', {
        style: 'currency',
        currency: currency
    }).format(amount);
}