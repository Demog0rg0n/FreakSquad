import type { ApiClient } from '../../../ApiClient';
import type { HelixGame } from '../Game/HelixGame';
import type { HelixTag } from '../Tag/HelixTag';
import type { HelixUser } from '../User/HelixUser';
/**
 * The type of a stream.
 */
export declare enum HelixStreamType {
    /**
     * Returned by Twitch in case of an error.
     */
    None = "",
    /**
     * A live stream.
     */
    Live = "live",
    /**
     * A vodcast.
     *
     * Currently not supported by Twitch - but one can only hope and leave it in here.
     */
    Vodcast = "vodcast"
}
/** @private */
export interface HelixStreamData {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    community_ids: string[];
    type: HelixStreamType;
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    tag_ids: string[] | null;
    is_mature: boolean;
}
/**
 * A Twitch stream.
 */
export declare class HelixStream {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixStreamData, client: ApiClient);
    /**
     * The stream ID.
     */
    get id(): string;
    /**
     * The user ID.
     */
    get userId(): string;
    /**
     * The user's name.
     */
    get userName(): string;
    /**
     * The user's display name.
     */
    get userDisplayName(): string;
    /**
     * Retrieves information about the user broadcasting the stream.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The game ID, or an empty string if the stream doesn't currently have a game.
     */
    get gameId(): string;
    /**
     * The game name, or an empty string if the stream doesn't currently have a game.
     */
    get gameName(): string;
    /**
     * Retrieves information about the game that is being played on the stream.
     *
     * Returns null if the stream doesn't currently have a game.
     */
    getGame(): Promise<HelixGame | null>;
    /**
     * The type of the stream.
     */
    get type(): HelixStreamType;
    /**
     * The title of the stream.
     */
    get title(): string;
    /**
     * The number of viewers the stream currently has.
     */
    get viewers(): number;
    /**
     * The time when the stream started.
     */
    get startDate(): Date;
    /**
     * The language of the stream.
     */
    get language(): string;
    /**
     * The URL of the thumbnail of the stream.
     */
    get thumbnailUrl(): string;
    /**
     * Builds the thumbnail URL of the stream using the given dimensions.
     *
     * @param width The width of the thumbnail.
     * @param height The height of the thumbnail.
     */
    getThumbnailUrl(width: number, height: number): string;
    /**
     * The IDs of the tags of the stream.
     */
    get tagIds(): string[];
    /**
     * Retrieves the tags of the stream.
     */
    getTags(): Promise<HelixTag[]>;
    /**
     * Whether the stream is set to be targeted to mature audiences only.
     */
    get isMature(): boolean;
}
