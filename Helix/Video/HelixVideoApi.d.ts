import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixPagination } from '../HelixPagination';
import type { HelixVideoData, HelixVideoType } from './HelixVideo';
import { HelixVideo } from './HelixVideo';
/** @private */
export declare type HelixVideoFilterType = 'id' | 'user_id' | 'game_id';
/** @private */
export declare type HelixVideoFilterPeriod = 'all' | 'day' | 'week' | 'month';
/** @private */
export declare type HelixVideoSort = 'time' | 'trending' | 'views';
/**
 * Filters for the videos request.
 */
export interface HelixVideoFilter {
    /**
     * The language of the videos.
     */
    language?: string;
    /**
     * The period of time when the videos were created.
     */
    period?: HelixVideoFilterPeriod;
    /**
     * The value to order the videos by.
     */
    orderBy?: HelixVideoSort;
    /**
     * The type of the videos.
     */
    type?: HelixVideoType | 'all';
}
/**
 * @inheritDoc
 */
export interface HelixPaginatedVideoFilter extends HelixVideoFilter, HelixPagination {
}
/**
 * The Helix API methods that deal with videos.
 *
 * Can be accessed using `client.helix.videos` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: videos } = await api.helix.videos.getVideosByUser('125328655');
 * ```
 */
export declare class HelixVideoApi extends BaseApi {
    /**
     * Retrieves the video data for the given list of video IDs.
     *
     * @param ids The video IDs you want to look up.
     */
    getVideosByIds(ids: string | string[]): Promise<HelixVideo[]>;
    /**
     * Retrieves the video data for the given video ID.
     *
     * @param id The video ID you want to look up.
     */
    getVideoById(id: string): Promise<HelixVideo | null>;
    /**
     * Retrieves the videos of the given user.
     *
     * @param user The user you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    getVideosByUser(user: UserIdResolvable, filter?: HelixPaginatedVideoFilter): Promise<HelixPaginatedResult<HelixVideo>>;
    /**
     * Creates a paginator for videos of the given user.
     *
     * @param user The user you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    getVideosByUserPaginated(user: UserIdResolvable, filter?: HelixVideoFilter): HelixPaginatedRequest<HelixVideoData, HelixVideo>;
    /**
     * Retrieves the videos of the given game.
     *
     * @param gameId The game you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    getVideosByGame(gameId: string, filter?: HelixVideoFilter): Promise<HelixPaginatedResult<HelixVideo>>;
    /**
     * Creates a paginator for videos of the given game.
     *
     * @param gameId The game you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    getVideosByGamePaginated(gameId: string, filter?: HelixVideoFilter): HelixPaginatedRequest<HelixVideoData, HelixVideo>;
    /**
     * Deletes videos by its IDs.
     *
     * @param ids The IDs of the videos to delete.
     */
    deleteVideosByIds(ids: string[]): Promise<void>;
    private _getVideos;
    private _getVideosPaginated;
    private static _makeVideosQuery;
}
