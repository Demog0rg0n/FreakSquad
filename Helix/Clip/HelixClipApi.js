"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixClipApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixClip_1 = require("./HelixClip");
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
    tslib_1.__extends(HelixClipApi, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getClips(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'broadcaster_id', ids: twitch_common_1.extractUserId(user) }))];
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
        return this._getClipsPaginated(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'broadcaster_id', ids: twitch_common_1.extractUserId(user) }));
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._getClips(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'game_id', ids: gameId }))];
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
        return this._getClipsPaginated(tslib_1.__assign(tslib_1.__assign({}, filter), { filterType: 'game_id', ids: gameId }));
    };
    /**
     * Retrieves the clips identified by the given IDs.
     *
     * @param ids The clip IDs.
     */
    HelixClipApi.prototype.getClipsByIds = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var clips;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var channelId, _a, createAfterDelay, result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        channelId = params.channelId, _a = params.createAfterDelay, createAfterDelay = _a === void 0 ? false : _a;
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var filterType, ids, startDate, endDate, _a, limit, result;
            var _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        filterType = params.filterType, ids = params.ids, startDate = params.startDate, endDate = params.endDate, _a = params.limit, limit = _a === void 0 ? 20 : _a;
                        if (!ids.length) {
                            return [2 /*return*/, { data: [] }];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
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
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixClip_1.HelixClip, this._client)];
                }
            });
        });
    };
    HelixClipApi.prototype._getClipsPaginated = function (params) {
        var _a;
        var _this = this;
        var filterType = params.filterType, ids = params.ids, startDate = params.startDate, endDate = params.endDate;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'clips',
            query: (_a = {},
                _a[filterType] = ids,
                _a.started_at = startDate,
                _a.ended_at = endDate,
                _a)
        }, this._client, function (data) { return new HelixClip_1.HelixClip(data, _this._client); });
    };
    HelixClipApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixClipApi')
    ], HelixClipApi);
    return HelixClipApi;
}(BaseApi_1.BaseApi));
exports.HelixClipApi = HelixClipApi;
