export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

export function formatTime(date: Date): string {
    return new Intl.DateTimeFormat('ar-EG', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

export function getRelativeTime(date: Date): string {
    const rtf = new Intl.RelativeTimeFormat('ar-EG');
    const now = new Date();
    const diffInDays = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (Math.abs(diffInDays) < 1) {
        return 'اليوم';
    }
    return rtf.format(diffInDays, 'day');
}