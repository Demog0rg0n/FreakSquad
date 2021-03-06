import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixCustomRewardImageData {
    url_1x: string;
    url_2x: string;
    url_4x: string;
}
/** @private */
export interface HelixCustomRewardMaxPerStreamSettingData {
    is_enabled: boolean;
    max_per_stream: number;
}
/** @private */
export interface HelixCustomRewardMaxPerUserPerStreamSettingData {
    is_enabled: boolean;
    max_per_user_per_stream: number;
}
/** @private */
export interface HelixCustomRewardGlobalCooldownSettingData {
    is_enabled: boolean;
    global_cooldown_seconds: number;
}
/** @private */
export declare type HelixCustomRewardImageScale = 1 | 2 | 4;
/** @private */
export interface HelixCustomRewardData {
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    id: string;
    image: HelixCustomRewardImageData | null;
    background_color: string;
    is_enabled: boolean;
    cost: number;
    title: string;
    prompt: string;
    is_user_input_required: boolean;
    max_per_stream_setting: HelixCustomRewardMaxPerStreamSettingData;
    max_per_user_per_stream_setting: HelixCustomRewardMaxPerUserPerStreamSettingData;
    global_cooldown_setting: HelixCustomRewardGlobalCooldownSettingData;
    is_paused: boolean;
    is_in_stock: boolean;
    default_image: HelixCustomRewardImageData;
    should_redemptions_skip_request_queue: boolean;
    redemptions_redeemed_current_stream: number | null;
    cooldown_expires_at: string;
}
/**
 * A custom Channel Points reward.
 */
export declare class HelixCustomReward {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixCustomRewardData, client: ApiClient);
    /**
     * The ID of the reward.
     */
    get id(): string;
    /**
     * The ID of the broadcaster the reward belongs to.
     */
    get broadcasterId(): string;
    /**
     * The name of the broadcaster the reward belongs to.
     */
    get broadcasterName(): string;
    /**
     * The display name of the broadcaster the reward belongs to.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves more information about the reward's broadcaster.
     */
    getBroadcaster(): Promise<HelixUser | null>;
    /**
     * Gets the URL of the image of the reward in the given scale.
     *
     * @param scale The scale of the image.
     */
    getImageUrl(scale: HelixCustomRewardImageScale): string;
    /**
     * The background color of the reward.
     */
    get backgroundColor(): string;
    /**
     * Whether the reward is enabled (shown to users).
     */
    get isEnabled(): boolean;
    /**
     * The channel points cost of the reward.
     */
    get cost(): number;
    /**
     * The title of the reward.
     */
    get title(): string;
    /**
     * @deprecated Use `prompt` instead.
     */
    get propmt(): string;
    /**
     * The prompt shown to users when redeeming the reward.
     */
    get prompt(): string;
    /**
     * Whether the reward requires user input to be redeemed.
     */
    get userInputRequired(): boolean;
    /**
     * The maximum number of redemptions of the reward per stream. `null` means no limit.
     */
    get maxRedemptionsPerStream(): number | null;
    /**
     * The maximum number of redemptions of the reward per stream for each user. `null` means no limit.
     */
    get maxRedemptionsPerUserPerStream(): number | null;
    /**
     * The cooldown between two redemptions of the reward, in seconds. `null` means no cooldown.
     */
    get globalCooldown(): number | null;
    /**
     * Whether the reward is paused. If true, users can't redeem it.
     */
    get isPaused(): boolean;
    /**
     * Whether the reward is currently in stock.
     */
    get isInStock(): boolean;
    /**
     * How often the reward was already redeemed this stream.
     *
     * Only available when the stream is live and `maxRedemptionsPerStream` is set. Otherwise, this is `null`.
     */
    get redemptionsThisStream(): number | null;
    /**
     * Whether redemptions should be automatically approved.
     */
    get autoApproved(): boolean;
    /**
     * Them time when the cooldown ends. `null` means there is currently no cooldown.
     */
    get cooldownExpiryDate(): Date | null;
}
