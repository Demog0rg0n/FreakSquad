"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixCustomReward = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A custom Channel Points reward.
 */
var HelixCustomReward = /** @class */ (function () {
    /** @private */
    function HelixCustomReward(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixCustomReward.prototype, "id", {
        /**
         * The ID of the reward.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster the reward belongs to.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster the reward belongs to.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster the reward belongs to.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the reward's broadcaster.
     */
    HelixCustomReward.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    /**
     * Gets the URL of the image of the reward in the given scale.
     *
     * @param scale The scale of the image.
     */
    HelixCustomReward.prototype.getImageUrl = function (scale) {
        var _a, _b;
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        var urlProp = "url_" + scale + "x";
        return (_b = (_a = this._data.image) === null || _a === void 0 ? void 0 : _a[urlProp]) !== null && _b !== void 0 ? _b : this._data.default_image[urlProp];
    };
    Object.defineProperty(HelixCustomReward.prototype, "backgroundColor", {
        /**
         * The background color of the reward.
         */
        get: function () {
            return this._data.background_color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "isEnabled", {
        /**
         * Whether the reward is enabled (shown to users).
         */
        get: function () {
            return this._data.is_enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "cost", {
        /**
         * The channel points cost of the reward.
         */
        get: function () {
            return this._data.cost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "title", {
        /**
         * The title of the reward.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "propmt", {
        /**
         * @deprecated Use `prompt` instead.
         */
        get: function () {
            return this._data.prompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "prompt", {
        /**
         * The prompt shown to users when redeeming the reward.
         */
        get: function () {
            return this._data.prompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "userInputRequired", {
        /**
         * Whether the reward requires user input to be redeemed.
         */
        get: function () {
            return this._data.is_user_input_required;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "maxRedemptionsPerStream", {
        /**
         * The maximum number of redemptions of the reward per stream. `null` means no limit.
         */
        get: function () {
            return this._data.max_per_stream_setting.is_enabled ? this._data.max_per_stream_setting.max_per_stream : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "maxRedemptionsPerUserPerStream", {
        /**
         * The maximum number of redemptions of the reward per stream for each user. `null` means no limit.
         */
        get: function () {
            return this._data.max_per_user_per_stream_setting.is_enabled
                ? this._data.max_per_user_per_stream_setting.max_per_user_per_stream
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "globalCooldown", {
        /**
         * The cooldown between two redemptions of the reward, in seconds. `null` means no cooldown.
         */
        get: function () {
            return this._data.global_cooldown_setting.is_enabled
                ? this._data.global_cooldown_setting.global_cooldown_seconds
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "isPaused", {
        /**
         * Whether the reward is paused. If true, users can't redeem it.
         */
        get: function () {
            return this._data.is_paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "isInStock", {
        /**
         * Whether the reward is currently in stock.
         */
        get: function () {
            return this._data.is_in_stock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "redemptionsThisStream", {
        /**
         * How often the reward was already redeemed this stream.
         *
         * Only available when the stream is live and `maxRedemptionsPerStream` is set. Otherwise, this is `null`.
         */
        get: function () {
            return this._data.redemptions_redeemed_current_stream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "autoApproved", {
        /**
         * Whether redemptions should be automatically approved.
         */
        get: function () {
            return this._data.should_redemptions_skip_request_queue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomReward.prototype, "cooldownExpiryDate", {
        /**
         * Them time when the cooldown ends. `null` means there is currently no cooldown.
         */
        get: function () {
            return this._data.cooldown_expires_at ? new Date(this._data.cooldown_expires_at) : null;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixCustomReward.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixCustomReward.prototype, "_client", void 0);
    HelixCustomReward = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixCustomReward', 'id')
    ], HelixCustomReward);
    return HelixCustomReward;
}());
exports.HelixCustomReward = HelixCustomReward;
