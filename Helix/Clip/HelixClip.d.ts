import type { ApiClient } from '../../../ApiClient';
import type { HelixGame } from '../Game/HelixGame';
import type { HelixUser } from '../User/HelixUser';
import type { HelixVideo } from '../Video/HelixVideo';
export interface HelixClipData {
    id: string;
    url: string;
    embed_url: string;
    broadcaster_id: string;
    broadcaster_name: string;
    creator_id: string;
    creator_name: string;
    video_id: string;
    game_id: string;
    language: string;
    title: string;
    view_count: number;
    created_at: string;
    thumbnail_url: string;
}
export declare class HelixClip {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixClipData, client: ApiClient);
    /**
     * The clip ID.
     */
    get id(): string;
    /**
     * The URL of the clip.
     */
    get url(): string;
    /**
     * The embed URL of the clip.
     */
    get embedUrl(): string;
    /**
     * The user ID of the broadcaster of the stream where the clip was created.
     */
    get broadcasterId(): string;
    /**
     * The display name of the broadcaster of the stream where the clip was created.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves information about the broadcaster of the stream where the clip was created.
     */
    getBroadcaster(): Promise<HelixUser | null>;
    /**
     * The user ID of the creator of the clip.
     */
    get creatorId(): string;
    /**
     * The display name of the creator of the clip.
     */
    get creatorDisplayName(): string;
    /**
     * Retrieves information about the creator of the clip.
     */
    getCreator(): Promise<HelixUser | null>;
    /**
     * The ID of the video the clip is taken from.
     */
    get videoId(): string;
    /**
     * Retrieves information about the video the clip is taken from.
     */
    getVideo(): Promise<HelixVideo | null>;
    /**
     * The ID of the game that was being played when the clip was created.
     */
    get gameId(): string;
    /**
     * Retrieves information about the game that was being played when the clip was created.
     */
    getGame(): Promise<HelixGame | null>;
    /**
     * The language of the stream where the clip was created.
     */
    get language(): string;
    /**
     * The title of the clip.
     */
    get title(): string;
    /**
     * The number of views of the clip.
     */
    get views(): number;
    /**
     * The date when the clip was created.
     */
    get creationDate(): Date;
    /**
     * The URL of the thumbnail of the clip.
     */
    get thumbnailUrl(): string;
}
