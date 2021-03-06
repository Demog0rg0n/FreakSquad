import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import type { HelixTagData } from './HelixTag';
import { HelixTag } from './HelixTag';
/**
 * The Helix API methods that deal with tags.
 *
 * Can be accessed using `client.helix.tags` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const tags = await api.helix.tags.getAllStreamTags();
 * ```
 */
export declare class HelixTagApi extends BaseApi {
    /**
     * Retrieves all stream tags.
     *
     * @param pagination
     *
     * @expandParams
     */
    getAllStreamTags(pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixTag>>;
    /**
     * Creates a paginator for all stream tags.
     */
    getAllStreamTagsPaginated(): HelixPaginatedRequest<HelixTagData, HelixTag>;
    /**
     * Retrieves a set of stream tags by IDs.
     *
     * @param ids The IDs of the stream tags.
     */
    getStreamTagsByIds(ids: string[]): Promise<HelixTag[]>;
    /**
     * Retrieves a single stream tag by ID.
     *
     * @param id The ID of the stream tag.
     */
    getStreamTagById(id: string): Promise<HelixTag | null>;
}
