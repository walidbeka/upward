import { Product } from '../models/product.model';

export class ApiService {
    private baseUrl = 'https://api.example.com'; // سيتم تغييره لاحقاً

    async getProducts(): Promise<Product[]> {
        try {
            // سيتم استبدال هذا بطلب API حقيقي
            return [
                {
                    id: '1',
                    title: 'حذاء رياضي',
                    description: 'حذاء رياضي مريح للجري',
                    price: 299,
                    videoUrl: 'https://example.com/video1.mp4',
                    thumbnailUrl: 'https://example.com/thumb1.jpg',
                    seller: {
                        id: 's1',
                        name: 'متجر الرياضة',
                        avatar: 'https://example.com/avatar1.jpg'
                    },
                    isAd: false
                },
                {
                    id: '2',
                    title: 'ساعة ذكية',
                    description: 'ساعة ذكية متعددة المميزات',
                    price: 599,
                    videoUrl: 'https://example.com/video2.mp4',
                    thumbnailUrl: 'https://example.com/thumb2.jpg',
                    seller: {
                        id: 's2',
                        name: 'متجر التقنية',
                        avatar: 'https://example.com/avatar2.jpg'
                    },
                    isAd: true
                }
            ];
        } catch (error) {
            console.error('خطأ في تحميل المنتجات:', error);
            return [];
        }
    }
}