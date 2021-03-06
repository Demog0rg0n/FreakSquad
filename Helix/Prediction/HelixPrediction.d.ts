import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
import type { HelixPredictionOutcomeData } from './HelixPredictionOutcome';
import { HelixPredictionOutcome } from './HelixPredictionOutcome';
/**
 * The different statuses a prediction can have.
 */
export declare type HelixPredictionStatus = 'ACTIVE' | 'RESOLVED' | 'CANCELED' | 'LOCKED';
/** @private */
export interface HelixPredictionData {
    id: string;
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    title: string;
    winning_outcome_id: string | null;
    outcomes: HelixPredictionOutcomeData[];
    prediction_window: number;
    status: HelixPredictionStatus;
    created_at: string;
    ended_at: string;
    locked_at: string;
}
/**
 * A channel prediction.
 */
export declare class HelixPrediction {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixPredictionData, client: ApiClient);
    /**
     * The ID of the prediction.
     */
    get id(): string;
    /**
     * The ID of the broadcaster.
     */
    get broadcasterId(): string;
    /**
     * The name of the broadcaster.
     */
    get broadcasterName(): string;
    /**
     * The display name of the broadcaster.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves more information about the broadcaster.
     */
    getBroadcaster(): Promise<HelixUser>;
    /**
     * The title of the prediction.
     */
    get title(): string;
    /**
     * The status of the prediction.
     */
    get status(): HelixPredictionStatus;
    /**
     * The time after which the prediction will be automatically locked, in seconds from creation.
     */
    get autoLockAfter(): number;
    /**
     * The date when the prediction started.
     */
    get creationDate(): Date;
    /**
     * The date when the prediction ended, or null if it didn't end yet.
     */
    get endDate(): Date | null;
    /**
     * The date when the prediction was locked, or null if it wasn't locked yet.
     */
    get lockDate(): Date | null;
    /**
     * The possible outcomes of the prediction.
     */
    get outcomes(): HelixPredictionOutcome[];
}
