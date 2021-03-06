import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixClipData } from './HelixClip';
import { HelixClip } from './HelixClip';
/** @private */
export declare type HelixClipFilterType = 'broadcaster_id' | 'game_id' | 'id';
/**
 * Filters for clip queries.
 */
export interface HelixClipFilter {
    /**
     * The earliest date to find clips for.
     */
    startDate?: string;
    /**
     * The latest date to find clips for.
     */
    endDate?: string;
    /**
     * The maximum number of results to retrieve. Defaults to 20.
     */
    limit?: number;
}
/** @private */
export interface HelixClipIdFilter extends HelixClipFilter {
    filterType: HelixClipFilterType;
    ids: string | string[];
}
/**
 * Parameters for creating a clip.
 */
export interface HelixClipCreateParams {
    /**
     * The ID of the broadcaster of which you want to create a clip.
     */
    channelId: string;
    /**
     * Add a delay before the clip creation that accounts for the usual delay in the viewing experience.
     */
    createAfterDelay?: boolean;
}
/** @private */
export interface HelixClipCreateResponse {
    id: string;
    edit_url: string;
}
/**
 * The Helix API methods that deal with clips.
 *
 * Can be accessed using `client.helix.clips` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const clipId = await api.helix.clips.createClip({ channelId: '125328655' });
 * ```
 */
export declare class HelixClipApi extends BaseApi {
    /**
     * Retrieves the latest clips for the specified broadcaster.
     *
     * @param user The broadcaster to fetch clips for.
     * @param filter
     *
     * @expandParams
     */
    getClipsForBroadcaster(user: UserIdResolvable, filter?: HelixClipFilter): Promise<HelixPaginatedResult<HelixClip>>;
    /**
     * Creates a paginator for the latest clips for the specified broadcaster.
     *
     * @param user The broadcaster to fetch clips for.
     * @param filter
     *
     * @expandParams
     */
    getClipsForBroadcasterPaginated(user: UserIdResolvable, filter?: HelixClipFilter): HelixPaginatedRequest<HelixClipData, HelixClip>;
    /**
     * Retrieves the latest clips for the specified game.
     *
     * @param gameId The game ID.
     * @param filter
     *
     * @expandParams
     */
    getClipsForGame(gameId: string, filter?: HelixClipFilter): Promise<HelixPaginatedResult<HelixClip>>;
    /**
     * Creates a paginator for the latest clips for the specified game.
     *
     * @param gameId The game ID.
     * @param filter
     *
     * @expandParams
     */
    getClipsForGamePaginated(gameId: string, filter?: HelixClipFilter): HelixPaginatedRequest<HelixClipData, HelixClip>;
    /**
     * Retrieves the clips identified by the given IDs.
     *
     * @param ids The clip IDs.
     */
    getClipsByIds(ids: string[]): Promise<HelixClip[]>;
    /**
     * Retrieves the clip identified by the given ID.
     *
     * @param id The clip ID.
     */
    getClipById(id: string): Promise<HelixClip | null>;
    /**
     * Creates a clip of a running stream.
     *
     * Returns the ID of the clip.
     *
     * @expandParams
     */
    createClip(params: HelixClipCreateParams): Promise<string>;
    private _getClips;
    private _getClipsPaginated;
}
