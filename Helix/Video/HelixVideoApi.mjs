import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixVideo } from "./HelixVideo.mjs";
/**
 * The Helix API methods that deal with videos.
 *
 * Can be accessed using `client.helix.videos` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: videos } = await api.helix.videos.getVideosByUser('125328655');
 * ```
 */
var HelixVideoApi = /** @class */ (function (_super) {
    __extends(HelixVideoApi, _super);
    function HelixVideoApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixVideoApi_1 = HelixVideoApi;
    /**
     * Retrieves the video data for the given list of video IDs.
     *
     * @param ids The video IDs you want to look up.
     */
    HelixVideoApi.prototype.getVideosByIds = function (ids) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getVideos('id', ids)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Retrieves the video data for the given video ID.
     *
     * @param id The video ID you want to look up.
     */
    HelixVideoApi.prototype.getVideoById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var videos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVideosByIds(id)];
                    case 1:
                        videos = _a.sent();
                        return [2 /*return*/, videos.length ? videos[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the videos of the given user.
     *
     * @param user The user you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoApi.prototype.getVideosByUser = function (user, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var userId;
            return __generator(this, function (_a) {
                userId = extractUserId(user);
                return [2 /*return*/, this._getVideos('user_id', userId, filter)];
            });
        });
    };
    /**
     * Creates a paginator for videos of the given user.
     *
     * @param user The user you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoApi.prototype.getVideosByUserPaginated = function (user, filter) {
        if (filter === void 0) { filter = {}; }
        var userId = extractUserId(user);
        return this._getVideosPaginated('user_id', userId, filter);
    };
    /**
     * Retrieves the videos of the given game.
     *
     * @param gameId The game you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoApi.prototype.getVideosByGame = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getVideos('game_id', gameId, filter)];
            });
        });
    };
    /**
     * Creates a paginator for videos of the given game.
     *
     * @param gameId The game you want to retrieve videos from.
     * @param filter Additional filters for the result set.
     */
    HelixVideoApi.prototype.getVideosByGamePaginated = function (gameId, filter) {
        if (filter === void 0) { filter = {}; }
        return this._getVideosPaginated('game_id', gameId, filter);
    };
    /**
     * Deletes videos by its IDs.
     *
     * @param ids The IDs of the videos to delete.
     */
    HelixVideoApi.prototype.deleteVideosByIds = function (ids) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'videos',
                            method: 'DELETE',
                            scope: 'channel:manage:videos',
                            query: {
                                id: ids
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelixVideoApi.prototype._getVideos = function (filterType, filterValues, filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Array.isArray(filterValues) && !filterValues.length) {
                            return [2 /*return*/, { data: [] }];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                url: 'videos',
                                type: TwitchApiCallType.Helix,
                                query: __assign(__assign({}, HelixVideoApi_1._makeVideosQuery(filterType, filterValues, filter)), makePaginationQuery(filter))
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixVideo, this._client)];
                }
            });
        });
    };
    HelixVideoApi.prototype._getVideosPaginated = function (filterType, filterValues, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest({
            url: 'videos',
            query: HelixVideoApi_1._makeVideosQuery(filterType, filterValues, filter)
        }, this._client, function (data) { return new HelixVideo(data, _this._client); });
    };
    HelixVideoApi._makeVideosQuery = function (filterType, filterValues, filter) {
        var _a;
        if (filter === void 0) { filter = {}; }
        var language = filter.language, period = filter.period, orderBy = filter.orderBy, type = filter.type;
        return _a = {},
            _a[filterType] = filterValues,
            _a.language = language,
            _a.period = period,
            _a.sort = orderBy,
            _a.type = type,
            _a;
    };
    var HelixVideoApi_1;
    HelixVideoApi = HelixVideoApi_1 = __decorate([
        rtfm('twitch', 'HelixVideoApi')
    ], HelixVideoApi);
    return HelixVideoApi;
}(BaseApi));
export { HelixVideoApi };
