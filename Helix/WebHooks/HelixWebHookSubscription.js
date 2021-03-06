"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixWebHookSubscription = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A subscription to a Twitch WebHook.
 */
var HelixWebHookSubscription = /** @class */ (function () {
    /** @private */
    function HelixWebHookSubscription(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixWebHookSubscription.prototype, "topicUrl", {
        /**
         * The topic the WebHook is listening to.
         */
        get: function () {
            return this._data.topic;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixWebHookSubscription.prototype, "callbackUrl", {
        /**
         * The URL that will be called for every subscribed event.
         */
        get: function () {
            return this._data.callback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixWebHookSubscription.prototype, "expiryDate", {
        /**
         * The time when the subscription will expire.
         */
        get: function () {
            return new Date(this._data.expires_at);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Unsubscribe from the WebHook.
     */
    HelixWebHookSubscription.prototype.unsubscribe = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.webHooks.sendHubRequest({
                        mode: 'unsubscribe',
                        topicUrl: this.topicUrl,
                        callbackUrl: this.callbackUrl
                    })];
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixWebHookSubscription.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixWebHookSubscription.prototype, "_client", void 0);
    HelixWebHookSubscription = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixWebHookSubscription')
    ], HelixWebHookSubscription);
    return HelixWebHookSubscription;
}());
exports.HelixWebHookSubscription = HelixWebHookSubscription;
