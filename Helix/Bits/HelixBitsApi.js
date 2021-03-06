"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixBitsApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixBitsLeaderboard_1 = require("./HelixBitsLeaderboard");
var HelixCheermoteList_1 = require("./HelixCheermoteList");
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
    tslib_1.__extends(HelixBitsApi, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, count, _b, period, startDate, contextUserId, result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = params.count, count = _a === void 0 ? 10 : _a, _b = params.period, period = _b === void 0 ? 'all' : _b, startDate = params.startDate, contextUserId = params.contextUserId;
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
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
                        return [2 /*return*/, new HelixBitsLeaderboard_1.HelixBitsLeaderboard(result, this._client)];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var broadcasterId, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        broadcasterId = broadcaster ? twitch_common_1.extractUserId(broadcaster) : undefined;
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'bits/cheermotes',
                                query: {
                                    broadcaster_id: broadcasterId
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixCheermoteList_1.HelixCheermoteList(result.data, this._client)];
                }
            });
        });
    };
    HelixBitsApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixBitsApi')
    ], HelixBitsApi);
    return HelixBitsApi;
}(BaseApi_1.BaseApi));
exports.HelixBitsApi = HelixBitsApi;
