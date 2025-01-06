import { Observable } from '@nativescript/core';

export class ErrorHandlerService extends Observable {
    private static instance: ErrorHandlerService;
    private _errors: string[] = [];

    private constructor() {
        super();
    }

    static getInstance(): ErrorHandlerService {
        if (!ErrorHandlerService.instance) {
            ErrorHandlerService.instance = new ErrorHandlerService();
        }
        return ErrorHandlerService.instance;
    }

    handleError(error: Error, context?: string): void {
        const errorMessage = `${context ? context + ': ' : ''}${error.message}`;
        this._errors.push(errorMessage);
        this.notifyPropertyChange('errors', this._errors);
        
        console.error(errorMessage, error);
        // يمكن إضافة منطق إضافي مثل إرسال التقارير للخادم
    }

    clearErrors(): void {
        this._errors = [];
        this.notifyPropertyChange('errors', this._errors);
    }

    get errors(): string[] {
        return this._errors;
    }
}