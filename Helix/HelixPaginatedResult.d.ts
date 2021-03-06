/**
 * A result coming from a Helix resource that is paginated using a cursor.
 */
import type { ConstructedType } from '@d-fischer/shared-utils';
import type { ApiClient } from '../../ApiClient';
import type { HelixPaginatedResponse, HelixPaginatedResponseWithTotal } from './HelixResponse';
export interface HelixPaginatedResult<T> {
    /**
     * The returned data.
     */
    data: T[];
    /**
     * A cursor for traversing more results.
     */
    cursor?: string;
}
/**
 * A result coming from a Helix resource that is paginated using a cursor, also including a total number of items.
 */
export interface HelixPaginatedResultWithTotal<T> {
    /**
     * The returned data.
     */
    data: T[];
    /**
     * A cursor for traversing more results.
     */
    cursor: string;
    /**
     * The total number of items.
     */
    total: number;
}
/** @private */ export declare function createPaginatedResult<I, O extends new (data: I, client: ApiClient) => ConstructedType<O>>(response: HelixPaginatedResponse<I>, type: O, client: ApiClient): HelixPaginatedResult<ConstructedType<O>>;
/** @private */ export declare function createPaginatedResult<I, O extends new (data: I) => ConstructedType<O>>(response: HelixPaginatedResponse<I>, type: O): HelixPaginatedResult<ConstructedType<O>>;
/** @private */ export declare function createPaginatedResultWithTotal<I, O extends new (data: I, client: ApiClient) => ConstructedType<O>>(response: HelixPaginatedResponseWithTotal<I>, type: O, client: ApiClient): HelixPaginatedResultWithTotal<ConstructedType<O>>;
/** @private */ export declare function createPaginatedResultWithTotal<I, O extends new (data: I) => ConstructedType<O>>(response: HelixPaginatedResponseWithTotal<I>, type: O): HelixPaginatedResultWithTotal<ConstructedType<O>>;
