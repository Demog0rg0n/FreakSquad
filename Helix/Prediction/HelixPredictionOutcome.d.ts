import type { ApiClient } from '../../../ApiClient';
import type { HelixPredictorData } from './HelixPredictor';
import { HelixPredictor } from './HelixPredictor';
export declare type HelixPredictionOutcomeColor = 'BLUE' | 'PINK';
/** @private */
export interface HelixPredictionOutcomeData {
    id: string;
    title: string;
    users: number;
    channel_points: number;
    top_predictors: HelixPredictorData[] | null;
    color: HelixPredictionOutcomeColor;
}
/**
 * A possible outcome in a channel prediction.
 */
export declare class HelixPredictionOutcome {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixPredictionOutcomeData, client: ApiClient);
    /**
     * The ID of the outcome.
     */
    get id(): string;
    /**
     * The title of the outcome.
     */
    get title(): string;
    /**
     * The number of users that guessed the outcome.
     */
    get users(): number;
    /**
     * The total number of channel points that were spent on guessing the outcome.
     */
    get totalChannelPoints(): number;
    /**
     * The color of the outcome.
     */
    get color(): HelixPredictionOutcomeColor;
    /**
     * The top predictors of the outcome.
     */
    get topPredictors(): HelixPredictor[];
}
