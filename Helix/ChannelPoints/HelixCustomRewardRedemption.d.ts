import type { HelixUser } from '../User/HelixUser';
import type { ApiClient } from '../../../ApiClient';
import type { HelixCustomReward } from './HelixCustomReward';
/**
 * The possible statuses of a custom Channel Points reward redemption you can set.
 */
export declare type HelixCustomRewardRedemptionTargetStatus = 'FULFILLED' | 'CANCELED';
/**
 * The possible statuses of a custom Channel Points reward redemption.
 */
export declare type HelixCustomRewardRedemptionStatus = 'UNFULFILLED' | HelixCustomRewardRedemptionTargetStatus;
/** @private */
export interface HelixCustomRewardRedemptionRewardData {
    id: string;
    title: string;
    prompt: string;
    cost: number;
}
/** @private */
export interface HelixCustomRewardRedemptionData {
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    user_input: string;
    status: HelixCustomRewardRedemptionStatus;
    redeemed_at: string;
    reward: HelixCustomRewardRedemptionRewardData;
}
/**
 * A redemption of a custom Channel Points reward.
 */
export declare class HelixCustomRewardRedemption {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixCustomRewardRedemptionData, client: ApiClient);
    /**
     * The ID of the redemption.
     */
    get id(): string;
    /**
     * The ID of the broadcaster where the reward was redeemed.
     */
    get broadcasterId(): string;
    /**
     * The name of the broadcaster where the reward was redeemed.
     */
    get broadcasterName(): string;
    /**
     * The display name of the broadcaster where the reward was redeemed.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves more information about the broadcaster where the reward was redeemed.
     */
    getBroadcaster(): Promise<HelixUser | null>;
    /**
     * The ID of the user that redeemed the reward.
     */
    get userId(): string;
    /**
     * The name of the user that redeemed the reward.
     */
    get userName(): string;
    /**
     * The display name of the user that redeemed the reward.
     */
    get userDisplayName(): string;
    /**
     * Retrieves more information about the user that redeemed the reward.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The text the user wrote when redeeming the reward.
     */
    get userInput(): string;
    /**
     * Whether the redemption was fulfilled.
     */
    get isFulfilled(): boolean;
    /**
     * Whether the redemption was canceled.
     */
    get isCanceled(): boolean;
    /**
     * The date and time when the reward was redeemed.
     */
    get redemptionDate(): Date;
    /**
     * The ID of the reward that was redeemed.
     */
    get rewardId(): string;
    /**
     * Retrieves more info about the reward that was redeemed.
     */
    getReward(): Promise<HelixCustomReward>;
    /**
     * The title of the reward that was redeemed.
     */
    get rewardTitle(): string;
    /**
     * The prompt of the reward that was redeemed.
     */
    get rewardPrompt(): string;
    /**
     * The cost of the reward that was redeemed.
     */
    get rewardCost(): number;
}
