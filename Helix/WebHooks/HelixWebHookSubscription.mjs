import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
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
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.webHooks.sendHubRequest({
                        mode: 'unsubscribe',
                        topicUrl: this.topicUrl,
                        callbackUrl: this.callbackUrl
                    })];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixWebHookSubscription.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixWebHookSubscription.prototype, "_client", void 0);
    HelixWebHookSubscription = __decorate([
        rtfm('twitch', 'HelixWebHookSubscription')
    ], HelixWebHookSubscription);
    return HelixWebHookSubscription;
}());
export { HelixWebHookSubscription };
