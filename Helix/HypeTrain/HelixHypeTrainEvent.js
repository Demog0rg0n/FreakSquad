"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixHypeTrainEvent = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixHypeTrainContribution_1 = require("./HelixHypeTrainContribution");
/**
 * A Hype Train event.
 */
var HelixHypeTrainEvent = /** @class */ (function () {
    /** @private */
    function HelixHypeTrainEvent(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixHypeTrainEvent.prototype, "eventId", {
        /**
         * The unique ID of the Hype Train event.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "eventType", {
        /**
         * The type of the Hype Train event.
         */
        get: function () {
            return this._data.event_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "eventDate", {
        /**
         * The date of the Hype Train event.
         */
        get: function () {
            return new Date(this._data.event_timestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "eventVersion", {
        /**
         * The version of the Hype Train event.
         */
        get: function () {
            return this._data.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "id", {
        /**
         * The unique ID of the Hype Train.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "broadcasterId", {
        /**
         * The user ID of the broadcaster where the Hype Train event was triggered.
         */
        get: function () {
            return this._data.event_data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster where the Hype Train event was triggered.
     */
    HelixHypeTrainEvent.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.event_data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixHypeTrainEvent.prototype, "level", {
        /**
         * The level of the Hype Train event.
         */
        get: function () {
            return this._data.event_data.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "startDate", {
        /**
         * The time when the Hype Train started.
         */
        get: function () {
            return new Date(this._data.event_data.started_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "expiryDate", {
        /**
         * The time when the Hype Train is set to expire.
         */
        get: function () {
            return new Date(this._data.event_data.expires_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "cooldownDate", {
        /**
         * The time when the Hype Train cooldown will end.
         */
        get: function () {
            return new Date(this._data.event_data.cooldown_end_time);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "total", {
        /**
         * The total amount of progress points of the Hype Train event.
         */
        get: function () {
            return this._data.event_data.total;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "goal", {
        /**
         * The progress points goal to reach the next Hype Train level.
         */
        get: function () {
            return this._data.event_data.goal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "lastContribution", {
        /**
         * The last contribution to the Hype Train event.
         */
        get: function () {
            return new HelixHypeTrainContribution_1.HelixHypeTrainContribution(this._data.event_data.last_contribution, this._client);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixHypeTrainEvent.prototype, "topContributions", {
        /**
         * Array list of the top contributions to the Hype Train event for bits and subs.
         */
        get: function () {
            var _this = this;
            return this._data.event_data.top_contributions.map(function (cont) { return new HelixHypeTrainContribution_1.HelixHypeTrainContribution(cont, _this._client); });
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixHypeTrainEvent.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixHypeTrainEvent.prototype, "_client", void 0);
    HelixHypeTrainEvent = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixHypeTrainEvent', 'id')
    ], HelixHypeTrainEvent);
    return HelixHypeTrainEvent;
}());
exports.HelixHypeTrainEvent = HelixHypeTrainEvent;
