export class AuthService {
    private currentUser: any = null;

    async login(username: string, password: string): Promise<boolean> {
        try {
            // سيتم استبدال هذا بطلب API حقيقي
            this.currentUser = { id: '1', username, name: 'مستخدم تجريبي' };
            return true;
        } catch (error) {
            console.error('خطأ في تسجيل الدخول:', error);
            return false;
        }
    }

    isAuthenticated(): boolean {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    logout() {
        this.currentUser = null;
    }
}