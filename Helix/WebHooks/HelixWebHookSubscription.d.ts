import type { ApiClient } from '../../../ApiClient';
/** @private */
export interface HelixWebHookSubscriptionData {
    topic: string;
    callback: string;
    expires_at: string;
}
/**
 * A subscription to a Twitch WebHook.
 */
export declare class HelixWebHookSubscription {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixWebHookSubscriptionData, client: ApiClient);
    /**
     * The topic the WebHook is listening to.
     */
    get topicUrl(): string;
    /**
     * The URL that will be called for every subscribed event.
     */
    get callbackUrl(): string;
    /**
     * The time when the subscription will expire.
     */
    get expiryDate(): Date;
    /**
     * Unsubscribe from the WebHook.
     */
    unsubscribe(): Promise<void>;
}
