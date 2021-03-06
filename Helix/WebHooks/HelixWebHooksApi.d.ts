import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequestWithTotal } from '../HelixPaginatedRequestWithTotal';
import type { HelixWebHookSubscriptionData } from './HelixWebHookSubscription';
import { HelixWebHookSubscription } from './HelixWebHookSubscription';
/**
 * The properties describing where and how long a WebHook notification is sent, and how it is signed.
 */
export interface HelixWebHookHubRequestOptions {
    /**
     * The URL to send notifications to.
     */
    callbackUrl: string;
    /**
     * The number of seconds the subscription is valid for. Defaults to 3600 (1 hour). Can be at most 864000 (10 days).
     */
    validityInSeconds?: number;
    /**
     * The secret to sign the notification payloads with.
     */
    secret?: string;
}
/**
 * The properties describing the WebHook to create or remove.
 *
 * @inheritDoc
 */
export interface HelixWebHookHubRequest extends HelixWebHookHubRequestOptions {
    /**
     * Whether to subscribe or unsubscribe from notifications.
     */
    mode: HubMode;
    /**
     * What topic URL to subscribe to or unsubscribe from.
     */
    topicUrl: string;
    /**
     * The OAuth scope necessary to subscribe to or unsubscribe from the given topic.
     */
    scope?: string;
}
/**
 * Whether to subscribe or unsubscribe from notifications.
 */
export declare type HubMode = 'subscribe' | 'unsubscribe';
/**
 * The API methods that deal with WebHooks.
 *
 * Can be accessed using `client.helix.webHooks` on an {@ApiClient} instance.
 *
 * ## Before using these methods...
 *
 * All of the methods in this class assume that you are already running a working WebHook listener at the given callback URL.
 *
 * If you don't already have one, we recommend use of the `twitch-webhooks` library, which handles subscribing and unsubscribing to these topics automatically.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * await api.helix.webHooks.subscribeToUserFollowsTo('125328655', { callbackUrl: 'https://example.com' });
 * ```
 */
export declare class HelixWebHooksApi extends BaseApi {
    /**
     * Retrieves the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     */
    getSubscriptions(): Promise<HelixPaginatedRequestWithTotal<HelixWebHookSubscriptionData, HelixWebHookSubscription>>;
    /**
     * Sends an arbitrary request to subscribe to or unsubscribe from an event.
     *
     * @expandParams
     */
    sendHubRequest(options: HelixWebHookHubRequest): Promise<void>;
    /**
     * Subscribes to events representing a user following other users.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about the users they will follow.
     * @param options
     */
    subscribeToUserFollowsFrom(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a user being followed by other users.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about the users they will be followed by.
     * @param options
     */
    subscribeToUserFollowsTo(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a user following other users.
     *
     * @expandParams
     *
     * @param user The user for which to not get any more notifications about the users they will follow.
     * @param options
     */
    unsubscribeFromUserFollowsFrom(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a Hype Train progressing.
     *
     * @expandParams
     *
     * @param broadcasterId The broadcaster / channel for which to get notifications about Hype Train events.
     * @param options
     */
    subscribeToHypeTrainEvents(broadcasterId: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a Hype Train progressing.
     *
     * @expandParams
     *
     * @param broadcasterId The broadcaster / channel for which to get notifications about Hype Train events.
     * @param options
     */
    unsubscribeFromHypeTrainEvents(broadcasterId: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a user being followed by other users.
     *
     * @expandParams
     *
     * @param user The user for which to not get any more notifications about the users they will be followed by.
     * @param options
     */
    unsubscribeFromUserFollowsTo(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a stream changing, i.e. going live, offline or changing its title or category.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about their streams changing.
     * @param options
     */
    subscribeToStreamChanges(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a stream changing.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about their streams changing.
     * @param options
     */
    unsubscribeFromStreamChanges(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a user changing a public setting or their email address.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about changing a setting.
     * @param options
     * @param withEmail Whether to subscribe to email address changes. This adds the necessary scope to read the email address to the request.
     */
    subscribeToUserChanges(user: UserIdResolvable, options: HelixWebHookHubRequestOptions, withEmail?: boolean): Promise<void>;
    /**
     * Unsubscribes from events representing a user changing a public setting or their email address.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about changing a setting.
     * @param options
     */
    unsubscribeFromUserChanges(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing the start or end of a channel subscription.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about subscriptions to their channel.
     * @param options
     */
    subscribeToSubscriptionEvents(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing the start or end of a channel subscription.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about subscriptions and unsubscriptions to their channel.
     * @param options
     */
    unsubscribeFromSubscriptionEvents(user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to extension transactions.
     *
     * @expandParams
     *
     * @param extensionId The extension ID for which to get notifications about transactions.
     * @param options
     */
    subscribeToExtensionTransactions(extensionId: string, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from extension transactions.
     *
     * @expandParams
     *
     * @param extensionId The extension ID for which not to get any more notifications about transactions.
     * @param options
     */
    unsubscribeFromExtensionTransactions(extensionId: string, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about bans or unbans in their channel.
     * @param options
     */
    subscribeToBanEvents(broadcaster: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about bans or unbans in their channel.
     * @param options
     */
    unsubscribeFromBanEvents(broadcaster: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about bans or unbans in their channel.
     * @param user The user that is being banned or unbanned.
     * @param options
     */
    subscribeToBanEventsForUser(broadcaster: UserIdResolvable, user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about bans or unbans in their channel.
     * @param user The user that is being banned or unbanned.
     * @param options
     */
    unsubscribeFromBanEventsForUser(broadcaster: UserIdResolvable, user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about moderator changes in their channel.
     * @param options
     */
    subscribeToModeratorEvents(broadcaster: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about moderator changes in their channel.
     * @param options
     */
    unsubscribeFromModeratorEvents(broadcaster: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Subscribes to events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about moderator changes in their channel.
     * @param user The user that is being modded or unmodded.
     * @param options
     */
    subscribeToModeratorEventsForUser(broadcaster: UserIdResolvable, user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    /**
     * Unsubscribes from events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about moderator changes in their channel.
     * @param user The user that is being modded or unmodded.
     * @param options
     */
    unsubscribeFromModeratorEventsForUser(broadcaster: UserIdResolvable, user: UserIdResolvable, options: HelixWebHookHubRequestOptions): Promise<void>;
    private _sendUserFollowsHubRequest;
    private _sendHypeTrainEventHubRequest;
    private _sendStreamChangeHubRequest;
    private _sendUserChangeHubRequest;
    private _sendSubscriptionEventsHubRequest;
    private _sendExtensionTransactionsHubRequest;
    private _sendBanEventsHubRequest;
    private _sendModeratorEventsHubRequest;
}
