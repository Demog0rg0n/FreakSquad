import { __decorate, __extends } from "tslib";
import { Cacheable, CachedGetter } from '@d-fischer/cache-decorators';
import { rtfm } from 'twitch-common';
import { BaseApi } from "../BaseApi.mjs";
import { HelixBitsApi } from "./Bits/HelixBitsApi.mjs";
import { HelixChannelApi } from "./Channel/HelixChannelApi.mjs";
import { HelixChannelPointsApi } from "./ChannelPoints/HelixChannelPointsApi.mjs";
import { HelixChatApi } from "./Chat/HelixChatApi.mjs";
import { HelixClipApi } from "./Clip/HelixClipApi.mjs";
import { HelixEventSubApi } from "./EventSub/HelixEventSubApi.mjs";
import { HelixExtensionsApi } from "./Extensions/HelixExtensionsApi.mjs";
import { HelixGameApi } from "./Game/HelixGameApi.mjs";
import HelixHypeTrainApi from "./HypeTrain/HelixHypeTrainApi.mjs";
import { HelixModerationApi } from "./Moderation/HelixModerationApi.mjs";
import { HelixPollApi } from "./Poll/HelixPollApi.mjs";
import { HelixPredictionApi } from "./Prediction/HelixPredictionApi.mjs";
import { HelixScheduleApi } from "./Schedule/HelixScheduleApi.mjs";
import { HelixSearchApi } from "./Search/HelixSearchApi.mjs";
import { HelixStreamApi } from "./Stream/HelixStreamApi.mjs";
import { HelixSubscriptionApi } from "./Subscriptions/HelixSubscriptionApi.mjs";
import { HelixTagApi } from "./Tag/HelixTagApi.mjs";
import { HelixTeamApi } from "./Team/HelixTeamApi.mjs";
import { HelixUserApi } from "./User/HelixUserApi.mjs";
import { HelixVideoApi } from "./Video/HelixVideoApi.mjs";
import { HelixWebHooksApi } from "./WebHooks/HelixWebHooksApi.mjs";
/**
 * Groups all API calls available in Helix a.k.a. the "New Twitch API".
 *
 * Can be accessed using {@ApiClient#helix}.
 */
var HelixApiGroup = /** @class */ (function (_super) {
    __extends(HelixApiGroup, _super);
    function HelixApiGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelixApiGroup.prototype, "bits", {
        /**
         * The Helix bits API methods.
         */
        get: function () {
            return new HelixBitsApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "channels", {
        /**
         * The Helix channels API methods.
         */
        get: function () {
            return new HelixChannelApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "channelPoints", {
        /**
         * The Helix channel points API methods.
         */
        get: function () {
            return new HelixChannelPointsApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "chat", {
        /**
         * The Helix chat API methods.
         */
        get: function () {
            return new HelixChatApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "clips", {
        /**
         * The Helix clips API methods.
         */
        get: function () {
            return new HelixClipApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "eventSub", {
        /**
         * The Helix EventSub API methods.
         */
        get: function () {
            return new HelixEventSubApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "extensions", {
        /**
         * The Helix extensions API methods.
         */
        get: function () {
            return new HelixExtensionsApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "games", {
        /**
         * The Helix game API methods.
         */
        get: function () {
            return new HelixGameApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "hypeTrain", {
        /**
         * The Helix Hype Train API methods.
         */
        get: function () {
            return new HelixHypeTrainApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "moderation", {
        /**
         * The Helix moderation API methods.
         */
        get: function () {
            return new HelixModerationApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "polls", {
        /**
         * The Helix poll API methods.
         */
        get: function () {
            return new HelixPollApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "predictions", {
        /**
         * The Helix prediction API methods.
         */
        get: function () {
            return new HelixPredictionApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "schedule", {
        /**
         * The Helix schedule API methods.
         */
        get: function () {
            return new HelixScheduleApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "search", {
        /**
         * The Helix search API methods.
         */
        get: function () {
            return new HelixSearchApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "streams", {
        /**
         * The Helix stream API methods.
         */
        get: function () {
            return new HelixStreamApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "subscriptions", {
        /**
         * The Helix subscription API methods.
         */
        get: function () {
            return new HelixSubscriptionApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "tags", {
        /**
         * The Helix tag API methods.
         */
        get: function () {
            return new HelixTagApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "teams", {
        /**
         * The Helix team API methods.
         */
        get: function () {
            return new HelixTeamApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "users", {
        /**
         * The Helix user API methods.
         */
        get: function () {
            return new HelixUserApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "videos", {
        /**
         * The Helix video API methods.
         */
        get: function () {
            return new HelixVideoApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixApiGroup.prototype, "webHooks", {
        /**
         * The Helix WebHook API methods.
         */
        get: function () {
            return new HelixWebHooksApi(this._client);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "bits", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "channels", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "channelPoints", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "chat", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "clips", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "eventSub", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "extensions", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "games", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "hypeTrain", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "moderation", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "polls", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "predictions", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "schedule", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "search", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "streams", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "subscriptions", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "tags", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "teams", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "users", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "videos", null);
    __decorate([
        CachedGetter()
    ], HelixApiGroup.prototype, "webHooks", null);
    HelixApiGroup = __decorate([
        Cacheable,
        rtfm('twitch', 'HelixApiGroup')
    ], HelixApiGroup);
    return HelixApiGroup;
}(BaseApi));
export { HelixApiGroup };