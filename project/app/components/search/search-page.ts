import { Observable } from '@nativescript/core';
import { Product } from '../../shared/models/product.model';
import { ApiService } from '../../shared/services/api.service';

export class SearchViewModel extends Observable {
    private apiService: ApiService;
    private _searchQuery: string = '';
    private _searchResults: Product[] = [];
    private _showingFilters: boolean = false;

    constructor() {
        super();
        this.apiService = new ApiService();
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('searchQuery', value);
        }
    }

    get searchResults(): Product[] {
        return this._searchResults;
    }

    get showingFilters(): boolean {
        return this._showingFilters;
    }

    async onSearch() {
        if (this._searchQuery.trim()) {
            this._searchResults = await this.apiService.searchProducts(this._searchQuery);
            this.notifyPropertyChange('searchResults', this._searchResults);
        }
    }

    onClear() {
        this._searchQuery = '';
        this._searchResults = [];
        this.notifyPropertyChange('searchQuery', '');
        this.notifyPropertyChange('searchResults', []);
    }

    showFilters() {
        this._showingFilters = !this._showingFilters;
        this.notifyPropertyChange('showingFilters', this._showingFilters);
    }

    // يمكن إضافة المزيد من منطق التصفية هنا
}