import type { ApiClient } from '../../../ApiClient';
import type { HelixEventData } from '../HelixEvent';
import type { HelixUser } from '../User/HelixUser';
import type { HelixHypeTrainContributionData } from './HelixHypeTrainContribution';
import { HelixHypeTrainContribution } from './HelixHypeTrainContribution';
/** @private */
export interface HelixHypeTrainEventData {
    id: string;
    broadcaster_id: string;
    cooldown_end_time: string;
    expires_at: string;
    goal: number;
    last_contribution: HelixHypeTrainContributionData;
    level: number;
    started_at: string;
    top_contributions: HelixHypeTrainContributionData[];
    total: number;
}
/**
 * The different types a Hype Train event can have.
 */
export declare type HelixHypeTrainEventType = 'hypetrain.progression';
/**
 * A Hype Train event.
 */
export declare class HelixHypeTrainEvent {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixEventData<HelixHypeTrainEventData, HelixHypeTrainEventType>, client: ApiClient);
    /**
     * The unique ID of the Hype Train event.
     */
    get eventId(): string;
    /**
     * The type of the Hype Train event.
     */
    get eventType(): HelixHypeTrainEventType;
    /**
     * The date of the Hype Train event.
     */
    get eventDate(): Date;
    /**
     * The version of the Hype Train event.
     */
    get eventVersion(): string;
    /**
     * The unique ID of the Hype Train.
     */
    get id(): string;
    /**
     * The user ID of the broadcaster where the Hype Train event was triggered.
     */
    get broadcasterId(): string;
    /**
     * Retrieves more information about the broadcaster where the Hype Train event was triggered.
     */
    getBroadcaster(): Promise<HelixUser | null>;
    /**
     * The level of the Hype Train event.
     */
    get level(): number;
    /**
     * The time when the Hype Train started.
     */
    get startDate(): Date;
    /**
     * The time when the Hype Train is set to expire.
     */
    get expiryDate(): Date;
    /**
     * The time when the Hype Train cooldown will end.
     */
    get cooldownDate(): Date;
    /**
     * The total amount of progress points of the Hype Train event.
     */
    get total(): number;
    /**
     * The progress points goal to reach the next Hype Train level.
     */
    get goal(): number;
    /**
     * The last contribution to the Hype Train event.
     */
    get lastContribution(): HelixHypeTrainContribution;
    /**
     * Array list of the top contributions to the Hype Train event for bits and subs.
     */
    get topContributions(): HelixHypeTrainContribution[];
}
