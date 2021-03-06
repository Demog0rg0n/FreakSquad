import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import type { HelixBanData } from './HelixBan';
import { HelixBan } from './HelixBan';
import type { HelixBanEventData } from './HelixBanEvent';
import { HelixBanEvent } from './HelixBanEvent';
import type { HelixModeratorData } from './HelixModerator';
import { HelixModerator } from './HelixModerator';
import type { HelixModeratorEventData } from './HelixModeratorEvent';
import { HelixModeratorEvent } from './HelixModeratorEvent';
/**
 * Filters for the banned users request.
 */
export interface HelixBanFilter extends HelixForwardPagination {
    /**
     * A user ID or a list thereof.
     */
    userId: string | string[];
}
/**
 * Filters for the moderators request.
 */
interface HelixModeratorFilter extends HelixForwardPagination {
    /**
     * A user ID or a list thereof.
     */
    userId: string | string[];
}
/**
 * The Helix API methods that deal with moderation.
 *
 * Can be accessed using `client.helix.moderation` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: users } = await api.helix.moderation.getBannedUsers('61369223');
 * ```
 */
export declare class HelixModerationApi extends BaseApi {
    /**
     * Retrieves a list of banned users in a given channel.
     *
     * @param channel The channel to retrieve the banned users from.
     * @param filter Additional filters for the result set.
     */
    getBannedUsers(channel: UserIdResolvable, filter?: HelixBanFilter): Promise<HelixPaginatedResult<HelixBan>>;
    /**
     * Creates a paginator for banned users in a given channel.
     *
     * @param channel The channel to retrieve the banned users from.
     */
    getBannedUsersPaginated(channel: UserIdResolvable): HelixPaginatedRequest<HelixBanData, HelixBan>;
    /**
     * Checks whether a given user is banned in a given channel.
     *
     * @param channel The channel to check for a ban of the given user.
     * @param user The user to check for a ban in the given channel.
     */
    checkUserBan(channel: UserIdResolvable, user: UserIdResolvable): Promise<boolean>;
    /**
     * Retrieves a list of ban events for a given channel.
     *
     * @param channel The channel to retrieve the ban events from.
     * @param filter Additional filters for the result set.
     */
    getBanEvents(channel: UserIdResolvable, filter?: HelixBanFilter): Promise<HelixPaginatedResult<HelixBanEvent>>;
    /**
     * Creates a paginator for ban events for a given channel.
     *
     * @param channel The channel to retrieve the ban events from.
     */
    getBanEventsPaginated(channel: UserIdResolvable): HelixPaginatedRequest<HelixBanEventData, HelixBanEvent>;
    /**
     * Retrieves a list of moderators in a given channel.
     *
     * @param channel The channel to retrieve moderators from.
     * @param filter Additional filters for the result set.
     */
    getModerators(channel: UserIdResolvable, filter?: HelixModeratorFilter): Promise<HelixPaginatedResult<HelixModerator>>;
    /**
     * Creates a paginator for moderators in a given channel.
     *
     * @param channel The channel to retrieve moderators from.
     */
    getModeratorsPaginated(channel: UserIdResolvable): HelixPaginatedRequest<HelixModeratorData, HelixModerator>;
    /**
     * Checks whether a given user is a moderator of a given channel.
     *
     * @param channel The channel to check.
     * @param user The user to check.
     */
    checkUserMod(channel: UserIdResolvable, user: UserIdResolvable): Promise<boolean>;
    /**
     * Retrieves a list of moderator events for a given channel.
     *
     * @param channel The channel to retrieve the moderator events from.
     * @param filter Additional filters for the result set.
     */
    getModeratorEvents(channel: UserIdResolvable, filter?: HelixModeratorFilter): Promise<HelixPaginatedResult<HelixModeratorEvent>>;
    /**
     * Creates a paginator for moderator events for a given channel.
     *
     * @param channel The channel to retrieve the moderator events from.
     */
    getModeratorEventsPaginated(channel: UserIdResolvable): HelixPaginatedRequest<HelixModeratorEventData, HelixModeratorEvent>;
    /**
     * Processes a message held by AutoMod.
     *
     * @param user The user who is processing the message.
     * @param msgId The ID of the message.
     * @param allow Whether to allow the message - `true` allows, and `false` denies.
     */
    processHeldAutoModMessage(user: UserIdResolvable, msgId: string, allow: boolean): Promise<void>;
}
export {};
