export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
    const phoneRegex = /^01[0125][0-9]{8}$/;
    return phoneRegex.test(phone);
}

export function validatePassword(password: string): {
    isValid: boolean;
    message: string;
} {
    if (password.length < 8) {
        return { isValid: false, message: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' };
    }
    return { isValid: true, message: '' };
}