import { __decorate } from "tslib";
import { Cacheable, CachedGetter } from '@d-fischer/cache-decorators';
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
import { HelixBitsLeaderboardEntry } from "./HelixBitsLeaderboardEntry.mjs";
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
            return this._data.data.map(function (entry) { return new HelixBitsLeaderboardEntry(entry, _this._client); });
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
    __decorate([
        Enumerable(false)
    ], HelixBitsLeaderboard.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixBitsLeaderboard.prototype, "_client", void 0);
    __decorate([
        CachedGetter()
    ], HelixBitsLeaderboard.prototype, "entries", null);
    HelixBitsLeaderboard = __decorate([
        Cacheable,
        rtfm('twitch', 'HelixBitsLeaderboard')
    ], HelixBitsLeaderboard);
    return HelixBitsLeaderboard;
}());
export { HelixBitsLeaderboard };
