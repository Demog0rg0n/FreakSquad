import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixPagination } from '../HelixPagination';
import type { HelixGameData } from './HelixGame';
import { HelixGame } from './HelixGame';
/**
 * The Helix API methods that deal with games.
 *
 * Can be accessed using `client.helix.games` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const game = await api.helix.games.getGameByName('Hearthstone');
 * ```
 */
export declare class HelixGameApi extends BaseApi {
    /**
     * Retrieves the game data for the given list of game IDs.
     *
     * @param ids The game IDs you want to look up.
     */
    getGamesByIds(ids: string[]): Promise<HelixGame[]>;
    /**
     * Retrieves the game data for the given list of game names.
     *
     * @param names The game names you want to look up.
     */
    getGamesByNames(names: string[]): Promise<HelixGame[]>;
    /**
     * Retrieves the game data for the given game ID.
     *
     * @param id The game ID you want to look up.
     */
    getGameById(id: string): Promise<HelixGame | null>;
    /**
     * Retrieves the game data for the given game name.
     *
     * @param name The game name you want to look up.
     */
    getGameByName(name: string): Promise<HelixGame | null>;
    /**
     * Retrieves a list of the most viewed games at the moment.
     *
     * @param pagination
     *
     * @expandParams
     */
    getTopGames(pagination?: HelixPagination): Promise<HelixPaginatedResult<HelixGame>>;
    /**
     * Creates a paginator for the most viewed games at the moment.
     */
    getTopGamesPaginated(): HelixPaginatedRequest<HelixGameData, HelixGame>;
    private _getGames;
}
