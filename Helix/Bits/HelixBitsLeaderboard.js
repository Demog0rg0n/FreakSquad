"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixBitsLeaderboard = void 0;
var tslib_1 = require("tslib");
var cache_decorators_1 = require("@d-fischer/cache-decorators");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixBitsLeaderboardEntry_1 = require("./HelixBitsLeaderboardEntry");
/**
 * A leaderboard where the users who used the most bits to a broadcaster are listed.
 */
var HelixBitsLeaderboard = /** @class */ (function () {
    /** @private */
    function HelixBitsLeaderboard(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixBitsLeaderboard.prototype, "entries", {
        /**
         * The entries of the leaderboard.
         */
        get: function () {
            var _this = this;
            return this._data.data.map(function (entry) { return new HelixBitsLeaderboardEntry_1.HelixBitsLeaderboardEntry(entry, _this._client); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixBitsLeaderboard.prototype, "totalCount", {
        /**
         * The total amount of people on the requested leaderboard.
         */
        get: function () {
            return this._data.total;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixBitsLeaderboard.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixBitsLeaderboard.prototype, "_client", void 0);
    tslib_1.__decorate([
        cache_decorators_1.CachedGetter()
    ], HelixBitsLeaderboard.prototype, "entries", null);
    HelixBitsLeaderboard = tslib_1.__decorate([
        cache_decorators_1.Cacheable,
        twitch_common_1.rtfm('twitch', 'HelixBitsLeaderboard')
    ], HelixBitsLeaderboard);
    return HelixBitsLeaderboard;
}());
exports.HelixBitsLeaderboard = HelixBitsLeaderboard;
