export function handleVideoError(error: any): void {
    console.error('خطأ في تشغيل الفيديو:', error);
    // يمكن إضافة منطق إضافي لمعالجة الأخطاء
}

export function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}