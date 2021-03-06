import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixUserSubscriptionData {
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    is_gift: boolean;
    tier: string;
}
/**
 * The user info about a (paid) subscription to a broadcaster.
 */
export declare class HelixUserSubscription {
    /** @private */ protected readonly _data: HelixUserSubscriptionData;
    /** @private */ protected readonly _client: ApiClient;
    /** @private */
    constructor(data: HelixUserSubscriptionData, client: ApiClient);
    /**
     * The user ID of the broadcaster.
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
    getBroadcaster(): Promise<HelixUser | null>;
    /**
     * Whether the subscription has been gifted by another user.
     */
    get isGift(): boolean;
    /**
     * The tier of the subscription.
     */
    get tier(): string;
}
