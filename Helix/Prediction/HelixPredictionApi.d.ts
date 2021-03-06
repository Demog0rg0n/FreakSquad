import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import type { HelixPredictionData } from './HelixPrediction';
import { HelixPrediction } from './HelixPrediction';
/**
 * Data to create a new prediction.
 */
export interface HelixCreatePredictionData {
    /**
     * The title of the prediction.
     */
    title: string;
    /**
     * The possible outcomes for the prediction.
     */
    outcomes: string[];
    /**
     * The time after which the prediction will be automatically locked, in seconds from creation.
     */
    autoLockAfter: number;
}
/**
 * The Helix API methods that deal with predictions.
 *
 * Can be accessed using `client.helix.predictions` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: predictions } = await api.helix.predictions.getPredictions('61369223');
 * ```
 */
export declare class HelixPredictionApi extends BaseApi {
    /**
     * Retrieves a list of predictions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve predictions for.
     * @param pagination
     *
     * @expandParams
     */
    getPredictions(broadcaster: UserIdResolvable, pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixPrediction>>;
    /**
     * Creates a paginator for predictions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve predictions for.
     */
    getPredictionsPaginated(broadcaster: UserIdResolvable): HelixPaginatedRequest<HelixPredictionData, HelixPrediction>;
    /**
     * Retrieves predictions by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the predictions for.
     * @param ids The IDs of the predictions.
     */
    getPredictionsByIds(broadcaster: UserIdResolvable, ids: string[]): Promise<HelixPrediction[]>;
    /**
     * Retrieves a prediction by ID.
     *
     * @param broadcaster The broadcaster to retrieve the prediction for.
     * @param id The ID of the prediction.
     */
    getPredictionById(broadcaster: UserIdResolvable, id: string): Promise<HelixPrediction | null>;
    /**
     * Creates a new prediction.
     *
     * @param broadcaster The broadcaster to create the prediction for.
     * @param data
     *
     * @expandParams
     */
    createPrediction(broadcaster: UserIdResolvable, data: HelixCreatePredictionData): Promise<HelixPrediction>;
    /**
     * Locks a prediction.
     *
     * @param broadcaster The broadcaster to lock the prediction for.
     * @param id The ID of the prediction to lock.
     */
    lockPrediction(broadcaster: UserIdResolvable, id: string): Promise<HelixPrediction>;
    /**
     * Resolves a prediction.
     *
     * @param broadcaster The broadcaster to resolve the prediction for.
     * @param id The ID of the prediction to resolve.
     * @param outcomeId The ID of the winning outcome.
     */
    resolvePrediction(broadcaster: UserIdResolvable, id: string, outcomeId: string): Promise<HelixPrediction>;
    /**
     * Cancels a prediction.
     *
     * @param broadcaster The broadcaster to cancel the prediction for.
     * @param id The ID of the prediction to cancel.
     */
    cancelPrediction(broadcaster: UserIdResolvable, id: string): Promise<HelixPrediction>;
    private _endPrediction;
}
