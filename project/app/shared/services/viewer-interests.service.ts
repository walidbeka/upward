import { Observable } from '@nativescript/core';
import { ViewerInterest, ViewerStats } from '../models/viewer-interest.model';

export class ViewerInterestsService extends Observable {
    private static instance: ViewerInterestsService;
    private interests: ViewerInterest[] = [];
    
    private constructor() {
        super();
    }

    static getInstance(): ViewerInterestsService {
        if (!ViewerInterestsService.instance) {
            ViewerInterestsService.instance = new ViewerInterestsService();
        }
        return ViewerInterestsService.instance;
    }

    trackVideoView(params: {
        userId: string;
        videoId: string;
        watchDuration: number;
        categories: string[];
        tags: string[];
    }): void {
        const interest: ViewerInterest = {
            ...params,
            completionRate: this.calculateCompletionRate(params.watchDuration),
            timestamp: new Date()
        };

        this.interests.push(interest);
        this.logPixelEvent(interest);
    }

    private calculateCompletionRate(watchDuration: number): number {
        // افتراض أن متوسط طول الفيديو 60 ثانية
        const averageVideoDuration = 60;
        return Math.min((watchDuration / averageVideoDuration) * 100, 100);
    }

    private logPixelEvent(interest: ViewerInterest): void {
        // إرسال بيانات للتحليلات
        const pixelData = {
            event_name: 'video_view',
            user_id: interest.userId,
            video_id: interest.videoId,
            watch_duration: interest.watchDuration,
            completion_rate: interest.completionRate,
            categories: interest.categories,
            tags: interest.tags,
            timestamp: interest.timestamp.toISOString()
        };

        console.log('Pixel Event:', pixelData);
        // هنا يمكن إضافة كود إرسال البيانات لخدمة التحليلات
    }

    getViewerStats(userId: string): ViewerStats {
        const userInterests = this.interests.filter(i => i.userId === userId);
        
        return {
            totalWatchTime: this.calculateTotalWatchTime(userInterests),
            favoriteCategories: this.getFavoriteCategories(userInterests),
            engagementScore: this.calculateEngagementScore(userInterests)
        };
    }

    private calculateTotalWatchTime(interests: ViewerInterest[]): number {
        return interests.reduce((total, interest) => total + interest.watchDuration, 0);
    }

    private getFavoriteCategories(interests: ViewerInterest[]): string[] {
        const categoryCount = new Map<string, number>();
        
        interests.forEach(interest => {
            interest.categories.forEach(category => {
                categoryCount.set(category, (categoryCount.get(category) || 0) + 1);
            });
        });

        return Array.from(categoryCount.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([category]) => category);
    }

    private calculateEngagementScore(interests: ViewerInterest[]): number {
        if (interests.length === 0) return 0;

        const averageCompletionRate = interests.reduce(
            (sum, interest) => sum + interest.completionRate, 
            0
        ) / interests.length;

        return Math.round(averageCompletionRate * 100) / 100;
    }
}