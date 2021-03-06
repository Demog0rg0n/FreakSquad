import type { ApiClient } from '../../../ApiClient';
export interface HelixStreamMarkerData {
    id: string;
    created_at: string;
    description: string;
    position_seconds: number;
    URL?: string;
}
/**
 * A stream marker.
 */
export declare class HelixStreamMarker {
    /** @private */ protected readonly _data: HelixStreamMarkerData;
    /** @private */ protected readonly _client: ApiClient;
    /** @private */
    constructor(data: HelixStreamMarkerData, client: ApiClient);
    /**
     * The ID of the marker.
     */
    get id(): string;
    /**
     * The date and time when the marker was created.
     */
    get creationDate(): Date;
    /**
     * The description of the marker.
     */
    get description(): string;
    /**
     * The position in the stream when the marker was created, in seconds.
     */
    get positionInSeconds(): number;
}
