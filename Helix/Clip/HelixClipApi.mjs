import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { HelixClip } from "./HelixClip.mjs";
/**
 * The Helix API methods that deal with clips.
 *
 * Can be accessed using `client.helix.clips` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const clipId = await api.helix.clips.createClip({ channelId: '125328655' });
 * ```
 */
var HelixClipApi = /** @class */ (function (_super) {
    __extends(HelixClipApi, _super);
    function HelixClipApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the latest clips for the specified broadcaster.
     *
     * @param user The broadcaster to fetch clips for.
     * @param filter
     *
     * @expandParams
     */
    HelixClipApi.prototype.getClipsForBroadcaster = function (user, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getClips(__assign(__assign({}, filter), { filterType: 'broadcaster_id', ids: extractUserId(user) }))];
            });
        });
    };
    /**
     * Creates a paginator for the latest clips for the specified broadcaster.
     *
     * @param user The broadcaster to fetch clips for.
     * @param filter
     *
     * @expandParams
     */
    HelixClipApi.prototype.getClipsForBroadcasterPaginated = function (user, filter) {
        if (filter === void 0) { filter = {}; }
        return this._getClipsPaginated(__assign(__assign({}, filter), { filterType: 'broadcaster_id', ids: extractUserId(user) }));
    };
    /**
     * Retrieves the latest clips for the specified game.
     *
     * @param gameId The game ID.
     * @param filter
     *
     * @expandParams
     */
    HelixClipApi.prototype.getClipsForGame = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getClips(__assign(__assign({}, filter), { filterType: 'game_id', ids: gameId }))];
            });
        });
    };
    /**
     * Creates a paginator for the latest clips for the specified game.
     *
     * @param gameId The game ID.
     * @param filter
     *
     * @expandParams
     */
    HelixClipApi.prototype.getClipsForGamePaginated = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return this._getClipsPaginated(__assign(__assign({}, filter), { filterType: 'game_id', ids: gameId }));
    };
    /**
     * Retrieves the clips identified by the given IDs.
     *
     * @param ids The clip IDs.
     */
    HelixClipApi.prototype.getClipsByIds = function (ids) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getClips({
                            filterType: 'id',
                            ids: ids
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Retrieves the clip identified by the given ID.
     *
     * @param id The clip ID.
     */
    HelixClipApi.prototype.getClipById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var clips;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClipsByIds([id])];
                    case 1:
                        clips = _a.sent();
                        return [2 /*return*/, clips.length ? clips[0] : null];
                }
            });
        });
    };
    /**
     * Creates a clip of a running stream.
     *
     * Returns the ID of the clip.
     *
     * @expandParams
     */
    HelixClipApi.prototype.createClip = function (params) {
        return __awaiter(this, void 0, Promise, function () {
            var channelId, _a, createAfterDelay, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channelId = params.channelId, _a = params.createAfterDelay, createAfterDelay = _a === void 0 ? false : _a;
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'clips',
                                method: 'POST',
                                scope: 'clips:edit',
                                query: {
                                    broadcaster_id: channelId,
                                    has_delay: createAfterDelay.toString()
                                }
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data[0].id];
                }
            });
        });
    };
    HelixClipApi.prototype._getClips = function (params) {
        return __awaiter(this, void 0, Promise, function () {
            var filterType, ids, startDate, endDate, _a, limit, result;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        filterType = params.filterType, ids = params.ids, startDate = params.startDate, endDate = params.endDate, _a = params.limit, limit = _a === void 0 ? 20 : _a;
                        if (!ids.length) {
                            return [2 /*return*/, { data: [] }];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'clips',
                                query: (_b = {},
                                    _b[filterType] = ids,
                                    _b.started_at = startDate,
                                    _b.ended_at = endDate,
                                    _b.first = limit.toString(),
                                    _b)
                            })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixClip, this._client)];
                }
            });
        });
    };
    HelixClipApi.prototype._getClipsPaginated = function (params) {
        var _a;
        var _this = this;
        var filterType = params.filterType, ids = params.ids, startDate = params.startDate, endDate = params.endDate;
        return new HelixPaginatedRequest({
            url: 'clips',
            query: (_a = {},
                _a[filterType] = ids,
                _a.started_at = startDate,
                _a.ended_at = endDate,
                _a)
        }, this._client, function (data) { return new HelixClip(data, _this._client); });
    };
    HelixClipApi = __decorate([
        rtfm('twitch', 'HelixClipApi')
    ], HelixClipApi);
    return HelixClipApi;
}(BaseApi));
export { HelixClipApi };