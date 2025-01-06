import { ViewerInterestsService } from '../../shared/services/viewer-interests.service';
import { AuthService } from '../../shared/services/auth.service';

export class VideoFeedViewModel extends Observable {
    private viewerInterests: ViewerInterestsService;
    private authService: AuthService;
    private videoStartTime: number = 0;

    constructor() {
        super();
        this.viewerInterests = ViewerInterestsService.getInstance();
        this.authService = new AuthService();
    }

    onVideoStart(videoId: string) {
        this.videoStartTime = Date.now();
    }

    onVideoEnd(args: any) {
        const video = args.object.bindingContext;
        const user = this.authService.getCurrentUser();
        
        if (user) {
            const watchDuration = (Date.now() - this.videoStartTime) / 1000;
            
            this.viewerInterests.trackVideoView({
                userId: user.id,
                videoId: video.id,
                watchDuration,
                categories: video.categories || [],
                tags: video.tags || []
            });
        }

        // تحميل الفيديو التالي
        console.log('انتهى الفيديو، تحميل التالي');
    }
}