import { Observable } from '@nativescript/core';

export class RatingViewModel extends Observable {
    private _value: number = 0;
    private _reviewsCount: number = 0;
    private _showCount: boolean = true;
    private _stars: number[] = [1, 2, 3, 4, 5];

    constructor(value: number, reviewsCount: number = 0, showCount: boolean = true) {
        super();
        this._value = Math.min(Math.max(value, 0), 5);
        this._reviewsCount = reviewsCount;
        this._showCount = showCount;
    }

    get value(): number {
        return this._value;
    }

    get reviewsCount(): number {
        return this._reviewsCount;
    }

    get showCount(): boolean {
        return this._showCount;
    }

    get stars(): number[] {
        return this._stars;
    }
}