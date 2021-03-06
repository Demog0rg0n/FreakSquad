import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixBitsLeaderboard } from './HelixBitsLeaderboard';
import { HelixCheermoteList } from './HelixCheermoteList';
/**
 * The possible time periods for a bits leaderboard.
 */
export declare type HelixBitsLeaderboardPeriod = 'day' | 'week' | 'month' | 'year' | 'all';
/**
 * Filters for the bits leaderboard request.
 */
export interface HelixBitsLeaderboardQuery {
    /**
     * The number of leaderboard entries you want to retrieve.
     */
    count?: number;
    /**
     * The time period from which bits should count towards the leaderboard.
     *
     * The leaderboards reset with the start of a new period, e.g. the `week` leaderboards reset every Monday midnight PST.
     */
    period?: HelixBitsLeaderboardPeriod;
    /**
     * The time to retrieve the bits leaderboard for.
     */
    startDate?: Date;
    /**
     * The user ID to show.
     *
     * The leaderboard will be guaranteed to include this user and then have more users before and after that user.
     */
    contextUserId?: string;
}
/**
 * The Helix API methods that deal with bits.
 *
 * Can be accessed using `client.helix.bits` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const leaderboard = await api.helix.bits.getLeaderboard({ period: 'day' });
 * ```
 */
export declare class HelixBitsApi extends BaseApi {
    /**
     * Retrieves a bits leaderboard of your channel.
     *
     * @expandParams
     */
    getLeaderboard(params?: HelixBitsLeaderboardQuery): Promise<HelixBitsLeaderboard>;
    /**
     * Retrieves all available cheermotes.
     *
     * @param broadcaster The broadcaster to include custom cheermotes of.
     *
     * If not given, only retrieves global cheermotes.
     */
    getCheermotes(broadcaster?: UserIdResolvable): Promise<HelixCheermoteList>;
}
