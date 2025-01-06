export interface ViewerInterest {
    userId: string;
    videoId: string;
    watchDuration: number;
    completionRate: number;
    timestamp: Date;
    categories: string[];
    tags: string[];
}

export interface ViewerStats {
    totalWatchTime: number;
    favoriteCategories: string[];
    engagementScore: number;
}