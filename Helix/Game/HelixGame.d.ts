import type { ApiClient } from '../../../ApiClient';
import type { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixPagination } from '../HelixPagination';
import type { HelixStream, HelixStreamData } from '../Stream/HelixStream';
export interface HelixGameData {
    id: string;
    name: string;
    box_art_url: string;
}
/**
 * A game as displayed on Twitch.
 */
export declare class HelixGame {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixGameData, client: ApiClient);
    /**
     * The ID of the game.
     */
    get id(): string;
    /**
     * The name of the game.
     */
    get name(): string;
    /**
     * The URL of the box art of the game.
     */
    get boxArtUrl(): string;
    /**
     * Retrieves streams that are currently playing the game.
     */
    getStreams(pagination?: HelixPagination): Promise<HelixPaginatedResult<HelixStream>>;
    /**
     * Creates a paginator for streams that are currently playing the game.
     */
    getStreamsPaginated(): HelixPaginatedRequest<HelixStreamData, HelixStream>;
}
