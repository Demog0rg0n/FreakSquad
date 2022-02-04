import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
import { HelixBan } from "./HelixBan.mjs";
/**
 * The different types a ban event can have.
 */
export var HelixBanEventType;
(function (HelixBanEventType) {
    /**
     * Sent when a user gets banned.
     */
    HelixBanEventType["Ban"] = "moderation.user.ban";
    /**
     * Sent when a user gets unbanned.
     */
    HelixBanEventType["Unban"] = "moderation.user.unban";
})(HelixBanEventType || (HelixBanEventType = {}));
/**
 * An event that indicates the change of a ban status, i.e. banning or unbanning a user.
 *
 * @inheritDoc
 */
var HelixBanEvent = /** @class */ (function (_super) {
    __extends(HelixBanEvent, _super);
    /** @private */
    function HelixBanEvent(eventData, client) {
        var _this = _super.call(this, eventData.event_data, client) || this;
        _this._eventData = eventData;
        return _this;
    }
    Object.defineProperty(HelixBanEvent.prototype, "eventId", {
        /**
         * The unique ID of the ban event.
         */
        get: function () {
            return this._eventData.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "eventType", {
        /**
         * The type of the ban event.
         */
        get: function () {
            return this._eventData.event_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "eventDate", {
        /**
         * The date of the ban event.
         */
        get: function () {
            return new Date(this._eventData.event_timestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "eventVersion", {
        /**
         * The version of the ban event.
         */
        get: function () {
            return this._eventData.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "broadcasterId", {
        /**
         * The id of the broadcaster from whose chat the user was banned/unbanned.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster from whose chat the user was banned/unbanned.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBanEvent.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster from whose chat the user was banned/unbanned.
         */
        get: function () {
            return this._eventData.event_data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves more information about the broadcaster.
     */
    HelixBanEvent.prototype.getBroadcaster = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._eventData.event_data.broadcaster_id)];
            });
        });
    };
    __decorate([
        Enumerable(false)
    ], HelixBanEvent.prototype, "_eventData", void 0);
    HelixBanEvent = __decorate([
        rtfm('twitch', 'HelixBanEvent', 'userId')
    ], HelixBanEvent);
    return HelixBanEvent;
}(HelixBan));
export { HelixBanEvent };
