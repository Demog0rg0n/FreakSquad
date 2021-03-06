import type { ApiClient } from '../../../ApiClient';
import type { HelixEventData } from '../HelixEvent';
import type { HelixSubscriptionData } from './HelixSubscription';
import { HelixSubscription } from './HelixSubscription';
/**
 * The different types a subscription event can have.
 */
export declare enum HelixSubscriptionEventType {
    /**
     * Sent when a new user subscribes.
     */
    Subscribe = "subscriptions.subscribe",
    /**
     * Sent when a previous subscriber stops subscribing.
     */
    Unsubscribe = "subscriptions.unsubscribe",
    /**
     * Sent when a new or recurring subscriber sends their monthly notification.
     */
    Notification = "subscriptions.notification"
}
/** @private */
export declare type HelixSubscriptionEventData = HelixEventData<HelixSubscriptionData, HelixSubscriptionEventType>;
/**
 * An event that indicates the change of a subscription status, i.e. subscribing, unsubscribing or sending the monthly notification.
 */
export declare class HelixSubscriptionEvent extends HelixSubscription {
    private readonly _eventData;
    /** @private */
    constructor(eventData: HelixSubscriptionEventData, client: ApiClient);
    /**
     * The unique ID of the subscription event.
     */
    get eventId(): string;
    /**
     * The type of the subscription event.
     */
    get eventType(): HelixSubscriptionEventType;
    /**
     * The date of the subscription event.
     */
    get eventDate(): Date;
    /**
     * The version of the subscription event.
     */
    get eventVersion(): string;
    /**
     * The message sent with the subscription event.
     */
    get eventMessage(): string;
}
