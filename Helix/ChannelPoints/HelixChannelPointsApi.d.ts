import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination } from '../HelixPagination';
import { HelixCustomReward } from './HelixCustomReward';
import type { HelixCustomRewardRedemptionData, HelixCustomRewardRedemptionStatus, HelixCustomRewardRedemptionTargetStatus } from './HelixCustomRewardRedemption';
import { HelixCustomRewardRedemption } from './HelixCustomRewardRedemption';
/**
 * Data to create a new custom reward.
 */
export interface HelixCreateCustomRewardData {
    /**
     * The title of the reward.
     */
    title: string;
    /**
     * The channel points cost of the reward.
     */
    cost: number;
    /**
     * The prompt shown to users when redeeming the reward.
     */
    prompt?: string;
    /**
     * Whether the reward is enabled (shown to users).
     */
    isEnabled?: boolean;
    /**
     * The hex code of the background color of the reward.
     */
    backgroundColor?: string;
    /**
     * Whether the reward requires user input to be redeemed.
     */
    userInputRequired?: boolean;
    /**
     * The maximum number of redemptions of the reward per stream. 0 or `null` means no limit.
     */
    maxRedemptionsPerStream?: number | null;
    /**
     * The maximum number of redemptions of the reward per stream for each user. 0 or `null` means no limit.
     */
    maxRedemptionsPerUserPerStream?: number | null;
    /**
     * The cooldown between two redemptions of the reward, in seconds. 0 or `null` means no cooldown.
     */
    globalCooldown?: number | null;
    /**
     * Whether the redemption should automatically set its status to fulfilled.
     */
    autoFulfill?: boolean;
}
/**
 * Data to update an existing custom reward.
 *
 * @inheritDoc
 */
export interface HelixUpdateCustomRewardData extends Partial<HelixCreateCustomRewardData> {
    /**
     * Whether the reward is paused. If true, users can't redeem it.
     */
    isPaused?: boolean;
}
/**
 * Filters for the custom reward redemptions request.
 */
export interface HelixCustomRewardRedemptionFilter {
    /**
     * Whether to put the newest redemptions first.
     *
     * Oldest redemptions are shown first by default.
     */
    newestFirst?: boolean;
}
/**
 * @inheritDoc
 */
export interface HelixPaginatedCustomRewardRedemptionFilter extends HelixCustomRewardRedemptionFilter, HelixForwardPagination {
}
/**
 * The Helix API methods that deal with channel points.
 *
 * Can be accessed using `client.helix.channelPoints` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const rewards = await api.helix.channelPoints.getCustomRewards('125328655');
 * ```
 */
export declare class HelixChannelPointsApi extends BaseApi {
    /**
     * Retrieves all custom rewards for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve the rewards for.
     * @param onlyManageable Whether to only retrieve rewards that can be managed by the API.
     */
    getCustomRewards(broadcaster: UserIdResolvable, onlyManageable?: boolean): Promise<HelixCustomReward[]>;
    /**
     * Retrieves custom rewards by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the rewards for.
     * @param rewardIds The IDs of the rewards.
     */
    getCustomRewardsByIds(broadcaster: UserIdResolvable, rewardIds: string[]): Promise<HelixCustomReward[]>;
    /**
     * Retrieves a custom reward by ID.
     *
     * @param broadcaster The broadcaster to retrieve the reward for.
     * @param rewardId The ID of the reward.
     */
    getCustomRewardById(broadcaster: UserIdResolvable, rewardId: string): Promise<HelixCustomReward | null>;
    /**
     * Creates a new custom reward.
     *
     * @param broadcaster The broadcaster to create the reward for.
     * @param data The reward data.
     *
     * @expandParams
     */
    createCustomReward(broadcaster: UserIdResolvable, data: HelixCreateCustomRewardData): Promise<HelixCustomReward>;
    /**
     * Updates a custom reward.
     *
     * @param broadcaster The broadcaster to update the reward for.
     * @param rewardId The ID of the reward.
     * @param data The reward data.
     */
    updateCustomReward(broadcaster: UserIdResolvable, rewardId: string, data: HelixUpdateCustomRewardData): Promise<HelixCustomReward>;
    /**
     * Deletes a custom reward.
     *
     * @param broadcaster The broadcaster to delete the reward for.
     * @param rewardId The ID of the reward.
     */
    deleteCustomReward(broadcaster: UserIdResolvable, rewardId: string): Promise<void>;
    /**
     * Retrieves custom reward redemptions by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param redemptionIds The IDs of the redemptions.
     */
    getRedemptionsByIds(broadcaster: UserIdResolvable, rewardId: string, redemptionIds: string[]): Promise<HelixCustomRewardRedemption[]>;
    /**
     * Retrieves a custom reward redemption by ID.
     *
     * @param broadcaster The broadcaster to retrieve the redemption for.
     * @param rewardId The ID of the reward.
     * @param redemptionId The ID of the redemption.
     */
    getRedemptionById(broadcaster: UserIdResolvable, rewardId: string, redemptionId: string): Promise<HelixCustomRewardRedemption | null>;
    /**
     * Retrieves custom reward redemptions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param status The status of the redemptions to retrieve.
     * @param filter
     *
     * @expandParams
     */
    getRedemptionsForBroadcaster(broadcaster: UserIdResolvable, rewardId: string, status: HelixCustomRewardRedemptionStatus, filter: HelixPaginatedCustomRewardRedemptionFilter): Promise<HelixPaginatedResult<HelixCustomRewardRedemption>>;
    /**
     * Creates a paginator for custom reward redemptions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param status The status of the redemptions to retrieve.
     * @param filter
     *
     * @expandParams
     */
    getRedemptionsForBroadcasterPaginated(broadcaster: UserIdResolvable, rewardId: string, status: HelixCustomRewardRedemptionStatus, filter: HelixCustomRewardRedemptionFilter): HelixPaginatedRequest<HelixCustomRewardRedemptionData, HelixCustomRewardRedemption>;
    /**
     * Updates the status of the given redemptions by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param redemptionIds The IDs of the redemptions to update.
     * @param status The status to set for the redemptions.
     */
    updateRedemptionStatusByIds(broadcaster: UserIdResolvable, rewardId: string, redemptionIds: string[], status: HelixCustomRewardRedemptionTargetStatus): Promise<HelixCustomRewardRedemption[]>;
    private static _transformRewardData;
}
