export class AnalyticsService {
    private static instance: AnalyticsService;

    private constructor() {}

    static getInstance(): AnalyticsService {
        if (!AnalyticsService.instance) {
            AnalyticsService.instance = new AnalyticsService();
        }
        return AnalyticsService.instance;
    }

    logEvent(eventName: string, params?: Record<string, any>): void {
        console.log('Event:', eventName, params);
        // سيتم إضافة منطق تتبع الأحداث لاحقاً
    }

    logScreenView(screenName: string): void {
        this.logEvent('screen_view', { screen_name: screenName });
    }

    logPurchase(productId: string, price: number): void {
        this.logEvent('purchase', {
            product_id: productId,
            price: price,
            currency: 'EGP'
        });
    }
}