import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixBitsLeaderboard } from "./HelixBitsLeaderboard.mjs";
import { HelixCheermoteList } from "./HelixCheermoteList.mjs";
/**
 * The Helix API methods that deal with bits.
 *
 * Can be accessed using `client.helix.bits` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const leaderboard = await api.helix.bits.getLeaderboard({ period: 'day' });
 * ```
 */
var HelixBitsApi = /** @class */ (function (_super) {
    __extends(HelixBitsApi, _super);
    function HelixBitsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a bits leaderboard of your channel.
     *
     * @expandParams
     */
    HelixBitsApi.prototype.getLeaderboard = function (params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var _a, count, _b, period, startDate, contextUserId, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = params.count, count = _a === void 0 ? 10 : _a, _b = params.period, period = _b === void 0 ? 'all' : _b, startDate = params.startDate, contextUserId = params.contextUserId;
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'bits/leaderboard',
                                scope: 'bits:read',
                                query: {
                                    count: count.toString(),
                                    period: period,
                                    started_at: startDate ? startDate.toISOString() : undefined,
                                    user_id: contextUserId
                                }
                            })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, new HelixBitsLeaderboard(result, this._client)];
                }
            });
        });
    };
    /**
     * Retrieves all available cheermotes.
     *
     * @param broadcaster The broadcaster to include custom cheermotes of.
     *
     * If not given, only retrieves global cheermotes.
     */
    HelixBitsApi.prototype.getCheermotes = function (broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var broadcasterId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        broadcasterId = broadcaster ? extractUserId(broadcaster) : undefined;
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'bits/cheermotes',
                                query: {
                                    broadcaster_id: broadcasterId
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixCheermoteList(result.data, this._client)];
                }
            });
        });
    };
    HelixBitsApi = __decorate([
        rtfm('twitch', 'HelixBitsApi')
    ], HelixBitsApi);
    return HelixBitsApi;
}(BaseApi));
export { HelixBitsApi };
