import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequestWithTotal } from '../HelixPaginatedRequestWithTotal';
import type { HelixPaginatedResultWithTotal } from '../HelixPaginatedResult';
import type { HelixPagination } from '../HelixPagination';
import type { HelixEventSubSubscriptionData, HelixEventSubSubscriptionStatus, HelixEventSubWebHookTransportData } from './HelixEventSubSubscription';
import { HelixEventSubSubscription } from './HelixEventSubSubscription';
/**
 * The properties describing where and how long a WebHook notification is sent, and how it is signed.
 */
export interface HelixEventSubWebHookTransportOptions extends HelixEventSubWebHookTransportData {
    /**
     * The secret to sign the notification payloads with.
     */
    secret?: string;
}
export declare type HelixEventSubTransportOptions = HelixEventSubWebHookTransportOptions;
/**
 * The API methods that deal with WebHooks.
 *
 * Can be accessed using `client.helix.eventSub` on an {@ApiClient} instance.
 *
 * ## Before using these methods...
 *
 * All of the methods in this class assume that you are already running a working EventSub listener at the given callback URL.
 *
 * If you don't already have one, we recommend use of the `twitch-eventsub` library, which handles subscribing and unsubscribing to these topics automatically.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * await api.helix.eventSub.subscribeToUserFollowsTo('125328655', { callbackUrl: 'https://example.com' });
 * ```
 */
export declare class HelixEventSubApi extends BaseApi {
    /**
     * Retrieves the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param pagination
     *
     * @expandParams
     */
    getSubscriptions(pagination?: HelixPagination): Promise<HelixPaginatedResultWithTotal<HelixEventSubSubscription>>;
    /**
     * Creates a paginator for the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     */
    getSubscriptionsPaginated(): HelixPaginatedRequestWithTotal<HelixEventSubSubscriptionData, HelixEventSubSubscription>;
    /**
     * Retrieves the current WebHook subscriptions with the given status for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param status The status of the subscriptions to retrieve.
     * @param pagination
     *
     * @expandParams
     */
    getSubscriptionsForStatus(status: HelixEventSubSubscriptionStatus, pagination?: HelixPagination): Promise<HelixPaginatedResultWithTotal<HelixEventSubSubscription>>;
    /**
     * Creates a paginator for the current WebHook subscriptions with the given status for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param status The status of the subscriptions to retrieve.
     */
    getSubscriptionsForStatusPaginated(status: HelixEventSubSubscriptionStatus): HelixPaginatedRequestWithTotal<HelixEventSubSubscriptionData, HelixEventSubSubscription>;
    /**
     * Retrieves the current WebHook subscriptions with the given type for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param type The type of the subscriptions to retrieve.
     * @param pagination
     *
     * @expandParams
     */
    getSubscriptionsForType(type: string, pagination?: HelixPagination): Promise<HelixPaginatedResultWithTotal<HelixEventSubSubscription>>;
    /**
     * Creates a paginator for the current WebHook subscriptions with the given type for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param type The type of the subscriptions to retrieve.
     */
    getSubscriptionsForTypePaginated(type: string): HelixPaginatedRequestWithTotal<HelixEventSubSubscriptionData, HelixEventSubSubscription>;
    /**
     * Sends an arbitrary request to subscribe to an event.
     *
     * Requires an app access token to work; does not work with user tokens.
     *
     * @param type The type of the event.
     * @param version The version of the event.
     * @param condition The condition of the subscription.
     * @param transport The transport of the subscription.
     */
    createSubscription(type: string, version: string, condition: Record<string, unknown>, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Deletes a subscription.
     *
     * @param id The ID of the subscription.
     */
    deleteSubscription(id: string): Promise<void>;
    /**
     * Deletes *all* subscriptions.
     */
    deleteAllSubscriptions(): Promise<void>;
    /**
     * Deletes all broken subscriptions, i.e. all that are not enabled or pending verification.
     */
    deleteBrokenSubscriptions(): Promise<void>;
    /**
     * Subscribe to events that represent a stream going live.
     *
     * @param broadcaster The broadcaster you want to listen to online events for.
     * @param transport The transport options
     */
    subscribeToStreamOnlineEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a stream going offline.
     *
     * @param broadcaster The broadcaster you want to listen to online events for.
     * @param transport The transport options
     */
    subscribeToStreamOfflineEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a channel updating their metadata.
     *
     * @param broadcaster The broadcaster you want to listen to update events for.
     * @param transport The transport options
     */
    subscribeToChannelUpdateEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user following a channel.
     *
     * @param broadcaster  The broadcaster you want to listen to follow events for.
     * @param transport The transport options
     */
    subscribeToChannelFollowEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user subscribing to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to subscribe events for.
     * @param transport The transport options
     */
    subscribeToChannelSubscriptionEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user gifting another user a subscription to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to subscription gift events for.
     * @param transport The transport options
     */
    subscribeToChannelSubscriptionGiftEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user's subscription to a channel being announced.
     *
     * @param broadcaster The broadcaster you want to listen to subscription message events for.
     * @param transport The transport options
     */
    subscribeToChannelSubscriptionMessageEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user's subscription to a channel ending.
     *
     * @param broadcaster The broadcaster you want to listen to subscription end events for.
     * @param transport The transport options
     */
    subscribeToChannelSubscriptionEndEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user cheering bits to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to cheer events for.
     * @param transport The transport options.
     */
    subscribeToChannelCheerEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user being banned in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to ban events for.
     * @param transport The transport option.
     */
    subscribeToChannelBanEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user being unbanned in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to unban events for.
     * @param transport The transport options.
     */
    subscribeToChannelUnbanEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a moderator being added to a channel.
     *
     * @param broadcaster The broadcaster you want to listen for moderator add events for.
     * @param transport The transport options.
     */
    subscribeToChannelModeratorAddEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a moderator being removed from a channel.
     *
     * @param broadcaster The broadcaster you want to listen for moderator remove events for.
     * @param transport The transport options.
     */
    subscribeToChannelModeratorRemoveEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a broadcaster raiding another broadcaster.
     *
     * @param broadcaster The broadcaster you want to listen to outgoing raid events for.
     * @param transport The transport options.
     */
    subscribeToChannelRaidEventsFrom(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a broadcaster being raided by another broadcaster.
     *
     * @param broadcaster The broadcaster you want to listen to incoming raid events for.
     * @param transport The transport options.
     */
    subscribeToChannelRaidEventsTo(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a Channel Points reward being added to a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward add events for.
     * @param transport The transport options.
     */
    subscribeToChannelRewardAddEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a Channel Points reward being updated in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward update events for.
     * @param transport The transport options.
     */
    subscribeToChannelRewardUpdateEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a specific Channel Points reward being updated.
     *
     * @param broadcaster The broadcaster you want to listen to reward update events for.
     * @param rewardId The ID of the reward you want to listen to update events for.
     * @param transport The transport options.
     */
    subscribeToChannelRewardUpdateEventsForReward(broadcaster: UserIdResolvable, rewardId: string, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a Channel Points reward being removed from a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward remove events for.
     * @param transport The transport options.
     */
    subscribeToChannelRewardRemoveEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a specific Channel Points reward being removed from a channel.
     *
     * @param broadcaster The broadcaster you want to listen to reward remove events for.
     * @param rewardId The ID of the reward you want to listen to remove events for.
     * @param transport The transport options.
     */
    subscribeToChannelRewardRemoveEventsForReward(broadcaster: UserIdResolvable, rewardId: string, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a Channel Points reward being redeemed.
     *
     * @param broadcaster The broadcaster you want to listen to redemption events for.
     * @param transport The transport options.
     */
    subscribeToChannelRedemptionAddEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a specific Channel Points reward being redeemed.
     *
     * @param broadcaster The broadcaster you want to listen to redemption events for.
     * @param rewardId The ID of the reward you want to listen to redemption events for.
     * @param transport The transport options.
     */
    subscribeToChannelRedemptionAddEventsForReward(broadcaster: UserIdResolvable, rewardId: string, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a Channel Points redemption being updated.
     *
     * @param broadcaster The broadcaster you want to listen to redemption update events for.
     * @param transport The transport options.
     */
    subscribeToChannelRedemptionUpdateEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a specific Channel Points reward's redemption being updated.
     *
     * @param broadcaster The broadcaster you want to listen to redemption update events for.
     * @param rewardId The ID of the reward you want to listen to redemption updates for.
     * @param transport The transport options.
     */
    subscribeToChannelRedemptionUpdateEventsForReward(broadcaster: UserIdResolvable, rewardId: string, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a poll starting in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to poll begin events for.
     * @param transport The transport options.
     */
    subscribeToChannelPollBeginEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a poll being voted on in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to poll progress events for.
     * @param transport The transport options.
     */
    subscribeToChannelPollProgressEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a poll ending in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to poll end events for.
     * @param transport The transport options.
     */
    subscribeToChannelPollEndEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a prediction starting in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction begin events for.
     * @param transport The transport options.
     */
    subscribeToChannelPredictionBeginEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a prediction being voted on in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction preogress events for.
     * @param transport The transport options.
     */
    subscribeToChannelPredictionProgressEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a prediction being locked in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction lock events for.
     * @param transport The transport options.
     */
    subscribeToChannelPredictionLockEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a prediction ending in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to prediction end events for.
     * @param transport The transport options.
     */
    subscribeToChannelPredictionEndEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent the beginning of a Hype Train event in a channel.
     *
     * @param broadcaster The broadcaster you want to listen to Hype train begin events for.
     * @param transport The transport options.
     */
    subscribeToChannelHypeTrainBeginEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent progress towards the Hype Train goal.
     *
     * @param broadcaster The broadcaster for which you want to listen to Hype Train progress events for.
     * @param transport The transport options.
     */
    subscribeToChannelHypeTrainProgressEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent the end of a Hype Train event.
     *
     * @param broadcaster The broadcaster for which you want to listen to Hype Train end events for.
     * @param transport The transport options.
     */
    subscribeToChannelHypeTrainEndEvents(broadcaster: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a extension Bits transaction.
     *
     * @param clientId The Client ID for the extension you want to listen to Bits transactions for.
     * @param transport The transport options.
     */
    subscribeToExtensionBitsTransactionCreateEvents(clientId: string, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user revoking their authorization from an application.
     *
     * @param clientId The Client ID for the application you want to listen to authorization revoke events for.
     * @param transport The transport options.
     */
    subscribeToUserAuthorizationRevokeEvents(clientId: string, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    /**
     * Subscribe to events that represent a user updating their account details.
     *
     * @param user The user you want to listen to user update events for.
     * @param transport The transport options.
     */
    subscribeToUserUpdateEvents(user: UserIdResolvable, transport: HelixEventSubTransportOptions): Promise<HelixEventSubSubscription>;
    private _deleteSubscriptionsWithCondition;
}
