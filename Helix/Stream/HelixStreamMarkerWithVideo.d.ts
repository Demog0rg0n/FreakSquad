import type { ApiClient } from '../../../ApiClient';
import type { HelixVideo } from '../Video/HelixVideo';
import type { HelixStreamMarkerData } from './HelixStreamMarker';
import { HelixStreamMarker } from './HelixStreamMarker';
export interface HelixStreamMarkerVideoData extends HelixStreamMarkerData {
    URL: string;
}
/**
 * A stream marker, also containing some video data.
 */
export declare class HelixStreamMarkerWithVideo extends HelixStreamMarker {
    private readonly _videoId;
    /** @private */ protected readonly _data: HelixStreamMarkerVideoData;
    /** @private */
    constructor(data: HelixStreamMarkerVideoData, _videoId: string, client: ApiClient);
    /**
     * The URL of the video, which will start playing at the position of the stream marker.
     */
    get url(): string;
    /**
     * The ID of the video.
     */
    get videoId(): string;
    /**
     * Retrieves the video data of the video the marker was set in.
     */
    getVideo(): Promise<HelixVideo | null>;
}
