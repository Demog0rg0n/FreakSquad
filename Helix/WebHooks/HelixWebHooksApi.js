"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixWebHooksApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequestWithTotal_1 = require("../HelixPaginatedRequestWithTotal");
var HelixWebHookSubscription_1 = require("./HelixWebHookSubscription");
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
var HelixWebHooksApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixWebHooksApi, _super);
    function HelixWebHooksApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO rename to getSubscriptionsPaginated and make sync
    /**
     * Retrieves the current WebHook subscriptions for the current client.
     *
     * Requires an app access token to work; does not work with user tokens.
     */
    HelixWebHooksApi.prototype.getSubscriptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new HelixPaginatedRequestWithTotal_1.HelixPaginatedRequestWithTotal({
                        url: 'webhooks/subscriptions'
                    }, this._client, function (data) { return new HelixWebHookSubscription_1.HelixWebHookSubscription(data, _this._client); })];
            });
        });
    };
    /**
     * Sends an arbitrary request to subscribe to or unsubscribe from an event.
     *
     * @expandParams
     */
    HelixWebHooksApi.prototype.sendHubRequest = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mode, callbackUrl, topicUrl, _a, validityInSeconds, secret, scope;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mode = options.mode, callbackUrl = options.callbackUrl, topicUrl = options.topicUrl, _a = options.validityInSeconds, validityInSeconds = _a === void 0 ? 3600 : _a, secret = options.secret, scope = options.scope;
                        return [4 /*yield*/, this._client.callApi({
                                url: 'webhooks/hub',
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                method: 'POST',
                                scope: scope,
                                jsonBody: {
                                    'hub.mode': mode,
                                    'hub.topic': topicUrl,
                                    'hub.callback': callbackUrl,
                                    'hub.lease_seconds': mode === 'subscribe' ? validityInSeconds.toString() : undefined,
                                    'hub.secret': secret
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Subscribes to events representing a user following other users.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about the users they will follow.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToUserFollowsFrom = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('subscribe', 'from', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a user being followed by other users.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about the users they will be followed by.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToUserFollowsTo = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('subscribe', 'to', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user following other users.
     *
     * @expandParams
     *
     * @param user The user for which to not get any more notifications about the users they will follow.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromUserFollowsFrom = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('unsubscribe', 'from', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a Hype Train progressing.
     *
     * @expandParams
     *
     * @param broadcasterId The broadcaster / channel for which to get notifications about Hype Train events.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToHypeTrainEvents = function (broadcasterId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendHypeTrainEventHubRequest('subscribe', broadcasterId, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a Hype Train progressing.
     *
     * @expandParams
     *
     * @param broadcasterId The broadcaster / channel for which to get notifications about Hype Train events.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromHypeTrainEvents = function (broadcasterId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendHypeTrainEventHubRequest('unsubscribe', broadcasterId, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user being followed by other users.
     *
     * @expandParams
     *
     * @param user The user for which to not get any more notifications about the users they will be followed by.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromUserFollowsTo = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserFollowsHubRequest('unsubscribe', 'to', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a stream changing, i.e. going live, offline or changing its title or category.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about their streams changing.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToStreamChanges = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendStreamChangeHubRequest('subscribe', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a stream changing.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about their streams changing.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromStreamChanges = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendStreamChangeHubRequest('unsubscribe', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a user changing a public setting or their email address.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about changing a setting.
     * @param options
     * @param withEmail Whether to subscribe to email address changes. This adds the necessary scope to read the email address to the request.
     */
    HelixWebHooksApi.prototype.subscribeToUserChanges = function (user, options, withEmail) {
        if (withEmail === void 0) { withEmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserChangeHubRequest('subscribe', user, options, withEmail)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user changing a public setting or their email address.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about changing a setting.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromUserChanges = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendUserChangeHubRequest('unsubscribe', user, options)];
            });
        });
    };
    /**
     * Subscribes to events representing the start or end of a channel subscription.
     *
     * @expandParams
     *
     * @param user The user for which to get notifications about subscriptions to their channel.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToSubscriptionEvents = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendSubscriptionEventsHubRequest('subscribe', user, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing the start or end of a channel subscription.
     *
     * @expandParams
     *
     * @param user The user for which not to get any more notifications about subscriptions and unsubscriptions to their channel.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromSubscriptionEvents = function (user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendSubscriptionEventsHubRequest('unsubscribe', user, options)];
            });
        });
    };
    /**
     * Subscribes to extension transactions.
     *
     * @expandParams
     *
     * @param extensionId The extension ID for which to get notifications about transactions.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToExtensionTransactions = function (extensionId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendExtensionTransactionsHubRequest('subscribe', extensionId, options)];
            });
        });
    };
    /**
     * Unsubscribes from extension transactions.
     *
     * @expandParams
     *
     * @param extensionId The extension ID for which not to get any more notifications about transactions.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromExtensionTransactions = function (extensionId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendExtensionTransactionsHubRequest('unsubscribe', extensionId, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about bans or unbans in their channel.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToBanEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('subscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about bans or unbans in their channel.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromBanEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('unsubscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about bans or unbans in their channel.
     * @param user The user that is being banned or unbanned.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToBanEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('subscribe', broadcaster, options, user)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a ban or unban.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about bans or unbans in their channel.
     * @param user The user that is being banned or unbanned.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromBanEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendBanEventsHubRequest('unsubscribe', broadcaster, options, user)];
            });
        });
    };
    /**
     * Subscribes to events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about moderator changes in their channel.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToModeratorEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('subscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about moderator changes in their channel.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromModeratorEvents = function (broadcaster, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('unsubscribe', broadcaster, options)];
            });
        });
    };
    /**
     * Subscribes to events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which to get notifications about moderator changes in their channel.
     * @param user The user that is being modded or unmodded.
     * @param options
     */
    HelixWebHooksApi.prototype.subscribeToModeratorEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('subscribe', broadcaster, options, user)];
            });
        });
    };
    /**
     * Unsubscribes from events representing a user gaining or losing moderator privileges in a channel.
     *
     * @expandParams
     *
     * @param broadcaster The broadcaster for which not to get any more notifications about moderator changes in their channel.
     * @param user The user that is being modded or unmodded.
     * @param options
     */
    HelixWebHooksApi.prototype.unsubscribeFromModeratorEventsForUser = function (broadcaster, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._sendModeratorEventsHubRequest('unsubscribe', broadcaster, options, user)];
            });
        });
    };
    HelixWebHooksApi.prototype._sendUserFollowsHubRequest = function (mode, direction, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = twitch_common_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/users/follows?first=1&" + direction + "_id=" + userId }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendHypeTrainEventHubRequest = function (mode, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = twitch_common_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/hypetrain/events?broadcaster_id=" + userId + "&first=1", scope: 'channel:read:hype_train' }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendStreamChangeHubRequest = function (mode, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = twitch_common_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/streams?user_id=" + userId }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendUserChangeHubRequest = function (mode, user, options, withEmail) {
        if (withEmail === void 0) { withEmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = twitch_common_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/users?id=" + userId, scope: withEmail ? 'user:read:email' : undefined }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendSubscriptionEventsHubRequest = function (mode, user, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var userId;
            return tslib_1.__generator(this, function (_a) {
                userId = twitch_common_1.extractUserId(user);
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/subscriptions/events?broadcaster_id=" + userId + "&first=1", scope: 'channel:read:subscriptions' }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendExtensionTransactionsHubRequest = function (mode, extensionId, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode, topicUrl: "https://api.twitch.tv/helix/extensions/transactions?extension_id=" + extensionId + "&first=1" }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendBanEventsHubRequest = function (mode, broadcaster, options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var broadcasterId, topicUrl;
            return tslib_1.__generator(this, function (_a) {
                broadcasterId = twitch_common_1.extractUserId(broadcaster);
                topicUrl = "https://api.twitch.tv/helix/moderation/banned/events?broadcaster_id=" + broadcasterId + "&first=1";
                if (user) {
                    topicUrl += "&user_id=" + twitch_common_1.extractUserId(user);
                }
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode,
                        topicUrl: topicUrl, scope: 'moderation:read' }, options))];
            });
        });
    };
    HelixWebHooksApi.prototype._sendModeratorEventsHubRequest = function (mode, broadcaster, options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var broadcasterId, topicUrl;
            return tslib_1.__generator(this, function (_a) {
                broadcasterId = twitch_common_1.extractUserId(broadcaster);
                topicUrl = "https://api.twitch.tv/helix/moderation/moderators/events?broadcaster_id=" + broadcasterId + "&first=1";
                if (user) {
                    topicUrl += "&user_id=" + twitch_common_1.extractUserId(user);
                }
                return [2 /*return*/, this.sendHubRequest(tslib_1.__assign({ mode: mode,
                        topicUrl: topicUrl, scope: 'moderation:read' }, options))];
            });
        });
    };
    HelixWebHooksApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixWebHooksApi')
    ], HelixWebHooksApi);
    return HelixWebHooksApi;
}(BaseApi_1.BaseApi));
exports.HelixWebHooksApi = HelixWebHooksApi;
