import { BaseApi } from '../../BaseApi';
import type { HelixGameData } from '../Game/HelixGame';
import { HelixGame } from '../Game/HelixGame';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import type { HelixChannelSearchResultData } from './HelixChannelSearchResult';
import { HelixChannelSearchResult } from './HelixChannelSearchResult';
/**
 * Filters for a channel search.
 */
export interface HelixChannelSearchFilter {
    /**
     * Include only channels that are currently live.
     */
    liveOnly?: boolean;
}
/** @inheritDoc */
export interface HelixPaginatedChannelSearchFilter extends HelixChannelSearchFilter, HelixForwardPagination {
}
/**
 * The Helix API methods that run searches.
 *
 * Can be accessed using `client.helix.search` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const channels = await api.helix.search.searchChannels('pear');
 * ```
 */
export declare class HelixSearchApi extends BaseApi {
    /**
     * Search categories/games for an exact or partial match.
     *
     * @param query The search term.
     * @param pagination
     *
     * @expandParams
     */
    searchCategories(query: string, pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixGame>>;
    /**
     * Creates a paginator for a category/game search.
     *
     * @param query The search term.
     */
    searchCategoriesPaginated(query: string): HelixPaginatedRequest<HelixGameData, HelixGame>;
    /**
     * Search channels for an exact or partial match.
     *
     * @param query The search term.
     * @param filter
     *
     * @expandParams
     */
    searchChannels(query: string, filter?: HelixPaginatedChannelSearchFilter): Promise<HelixPaginatedResult<HelixChannelSearchResult>>;
    /**
     * Creates a paginator for a channel search.
     *
     * @param query The search term.
     * @param filter
     *
     * @expandParams
     */
    searchChannelsPaginated(query: string, filter?: HelixChannelSearchFilter): HelixPaginatedRequest<HelixChannelSearchResultData, HelixChannelSearchResult>;
}
