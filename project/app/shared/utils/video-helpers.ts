export function formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function generateThumbnail(videoUrl: string): string {
    // سيتم تنفيذ منطق توليد الصورة المصغرة لاحقاً
    return videoUrl.replace('.mp4', '-thumb.jpg');
}

export function handleVideoError(error: Error): void {
    console.error('خطأ في تشغيل الفيديو:', error);
    // يمكن إضافة منطق إضافي لمعالجة الأخطاء
}