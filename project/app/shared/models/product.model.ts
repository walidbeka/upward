export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    videoUrl: string;
    thumbnailUrl: string;
    seller: {
        id: string;
        name: string;
        avatar: string;
    };
    isAd: boolean;
}