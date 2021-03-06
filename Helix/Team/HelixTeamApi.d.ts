import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixTeam } from './HelixTeam';
import { HelixTeamWithUsers } from './HelixTeamWithUsers';
/**
 * The Helix API methods that deal with teams.
 *
 * Can be accessed using `client.helix.teams` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const tags = await api.helix.teams.getChannelTeams('125328655');
 * ```
 */
export declare class HelixTeamApi extends BaseApi {
    /**
     * Retrieves a list of all teams a broadcaster is a member of.
     *
     * @param broadcaster The broadcaster to retrieve the teams of.
     */
    getTeamsForBroadcaster(broadcaster: UserIdResolvable): Promise<HelixTeam[]>;
    /**
     * Retrieves a team by ID.
     *
     * Returns null if there is no team with the given ID.
     *
     * @param id The ID of the team.
     */
    getTeamById(id: string): Promise<HelixTeamWithUsers | null>;
    /**
     * Retrieves a team by name.
     *
     * Returns null if there is no team with the given name.
     *
     * @param name The name of the team.
     */
    getTeamByName(name: string): Promise<HelixTeamWithUsers | null>;
}
