import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import type { HelixPollData } from './HelixPoll';
import { HelixPoll } from './HelixPoll';
/**
 * Data to create a new poll.
 */
export interface HelixCreatePollData {
    /**
     * The title of the poll.
     */
    title: string;
    /**
     * The available choices for the poll.
     */
    choices: string[];
    /**
     * The duration of the poll, in seconds.
     */
    duration: number;
    /**
     * The number of bits that a vote should cost. If not given, voting with bits will be disabled.
     */
    bitsPerVote?: number;
    /**
     * The number of channel points that a vote should cost. If not given, voting with channel points will be disabled.
     */
    channelPointsPerVote?: number;
}
/**
 * The Helix API methods that deal with polls.
 *
 * Can be accessed using `client.helix.polls` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: polls } = await api.helix.polls.getPolls('61369223');
 * ```
 */
export declare class HelixPollApi extends BaseApi {
    /**
     * Retrieves a list of polls for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve polls for.
     * @param pagination
     *
     * @expandParams
     */
    getPolls(broadcaster: UserIdResolvable, pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixPoll>>;
    /**
     * Creates a paginator for polls for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve polls for.
     */
    getPollsPaginated(broadcaster: UserIdResolvable): HelixPaginatedRequest<HelixPollData, HelixPoll>;
    /**
     * Retrieves polls by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the polls for.
     * @param ids The IDs of the polls.
     */
    getPollsByIds(broadcaster: UserIdResolvable, ids: string[]): Promise<HelixPoll[]>;
    /**
     * Retrieves a poll by ID.
     *
     * @param broadcaster The broadcaster to retrieve the poll for.
     * @param id The ID of the poll.
     */
    getPollById(broadcaster: UserIdResolvable, id: string): Promise<HelixPoll | null>;
    /**
     * Creates a new poll.
     *
     * @param broadcaster The broadcaster to create the poll for.
     * @param data
     *
     * @expandParams
     */
    createPoll(broadcaster: UserIdResolvable, data: HelixCreatePollData): Promise<HelixPoll>;
    /**
     * Ends a poll.
     *
     * @param broadcaster The broadcaster to end the poll for.
     * @param id The ID of the poll to end.
     * @param showResult Whether to allow the result to be viewed publicly.
     */
    endPoll(broadcaster: UserIdResolvable, id: string, showResult?: boolean): Promise<HelixPoll>;
}
