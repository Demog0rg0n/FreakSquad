import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixPredictorData {
    id: string;
    name: string;
    login: string;
    channel_points_used: number;
    channel_points_won: number | null;
}
/**
 * A user that took part in a prediction.
 */
export declare class HelixPredictor {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixPredictorData, client: ApiClient);
    /**
     * The user ID of the predictor.
     */
    get userId(): string;
    /**
     * The name of the predictor.
     */
    get userName(): string;
    /**
     * The display name of the predictor.
     */
    get userDisplayName(): string;
    /**
     * Retrieves more information about the predictor.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The amount of channel points the predictor used for the prediction.
     */
    get channelPointsUsed(): number;
    /**
     * The amount of channel points the predictor won for the prediction, or null if the prediction is not resolved yet, was cancelled or lost.
     */
    get channelPointsWon(): number | null;
}
