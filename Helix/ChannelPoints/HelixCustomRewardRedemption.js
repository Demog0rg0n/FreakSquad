"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixCustomRewardRedemption = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
/**
 * A redemption of a custom Channel Points reward.
 */
var HelixCustomRewardRedemption = /** @class */ (function () {
    /** @private */
    function HelixCustomRewardRedemption(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "id", {
        /**
         * The ID of the redemption.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster where the reward was redeemed.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster where the reward was redeemed.
         */
        get: function () {
            return this._data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster where the reward was redeemed.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster where the reward was redeemed.
     */
    HelixCustomRewardRedemption.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "userId", {
        /**
         * The ID of the user that redeemed the reward.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "userName", {
        /**
         * The name of the user that redeemed the reward.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "userDisplayName", {
        /**
         * The display name of the user that redeemed the reward.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the user that redeemed the reward.
     */
    HelixCustomRewardRedemption.prototype.getUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "userInput", {
        /**
         * The text the user wrote when redeeming the reward.
         */
        get: function () {
            return this._data.user_input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "isFulfilled", {
        /**
         * Whether the redemption was fulfilled.
         */
        get: function () {
            return this._data.status === 'FULFILLED';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "isCanceled", {
        /**
         * Whether the redemption was canceled.
         */
        get: function () {
            return this._data.status === 'CANCELED';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "redemptionDate", {
        /**
         * The date and time when the reward was redeemed.
         */
        get: function () {
            return new Date(this._data.redeemed_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "rewardId", {
        /**
         * The ID of the reward that was redeemed.
         */
        get: function () {
            return this._data.reward.id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more info about the reward that was redeemed.
     */
    HelixCustomRewardRedemption.prototype.getReward = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.helix.channelPoints.getCustomRewardById(this._data.broadcaster_id, this._data.reward.id)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "rewardTitle", {
        /**
         * The title of the reward that was redeemed.
         */
        get: function () {
            return this._data.reward.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "rewardPrompt", {
        /**
         * The prompt of the reward that was redeemed.
         */
        get: function () {
            return this._data.reward.prompt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixCustomRewardRedemption.prototype, "rewardCost", {
        /**
         * The cost of the reward that was redeemed.
         */
        get: function () {
            return this._data.reward.cost;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixCustomRewardRedemption.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixCustomRewardRedemption.prototype, "_client", void 0);
    HelixCustomRewardRedemption = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixCustomRewardRedemption', 'id')
    ], HelixCustomRewardRedemption);
    return HelixCustomRewardRedemption;
}());
exports.HelixCustomRewardRedemption = HelixCustomRewardRedemption;
