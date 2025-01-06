import { Observable } from '@nativescript/core';
import { Product } from '../models/product.model';

export class AdService extends Observable {
    private _currentAd: Product | null = null;

    async loadAd(): Promise<Product | null> {
        try {
            // سيتم استبدال هذا بطلب API حقيقي
            this._currentAd = {
                id: 'ad1',
                title: 'إعلان مميز',
                description: 'وصف الإعلان',
                price: 499,
                videoUrl: 'https://example.com/ad-video.mp4',
                thumbnailUrl: 'https://example.com/ad-thumb.jpg',
                seller: {
                    id: 's3',
                    name: 'المعلن',
                    avatar: 'https://example.com/advertiser-avatar.jpg'
                },
                isAd: true
            };
            
            this.notifyPropertyChange('currentAd', this._currentAd);
            return this._currentAd;
        } catch (error) {
            console.error('خطأ في تحميل الإعلان:', error);
            return null;
        }
    }

    get currentAd(): Product | null {
        return this._currentAd;
    }
}