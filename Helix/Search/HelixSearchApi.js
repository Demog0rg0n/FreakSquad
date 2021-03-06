"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixSearchApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixGame_1 = require("../Game/HelixGame");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixChannelSearchResult_1 = require("./HelixChannelSearchResult");
/**
 * The Helix API methods that run searches.
 *
 * Can be accessed using `client.helix.search` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const channels = await api.helix.search.searchChannels('pear');
 * ```
 */
var HelixSearchApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixSearchApi, _super);
    function HelixSearchApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Search categories/games for an exact or partial match.
     *
     * @param query The search term.
     * @param pagination
     *
     * @expandParams
     */
    HelixSearchApi.prototype.searchCategories = function (query, pagination) {
        if (pagination === void 0) { pagination = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'search/categories',
                            query: tslib_1.__assign({ query: query }, HelixPagination_1.makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixGame_1.HelixGame, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for a category/game search.
     *
     * @param query The search term.
     */
    HelixSearchApi.prototype.searchCategoriesPaginated = function (query) {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'search/categories',
            query: {
                query: query
            }
        }, this._client, function (data) { return new HelixGame_1.HelixGame(data, _this._client); });
    };
    /**
     * Search channels for an exact or partial match.
     *
     * @param query The search term.
     * @param filter
     *
     * @expandParams
     */
    HelixSearchApi.prototype.searchChannels = function (query, filter) {
        var _a;
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'search/channels',
                            query: tslib_1.__assign({ query: query, live_only: (_a = filter.liveOnly) === null || _a === void 0 ? void 0 : _a.toString() }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixChannelSearchResult_1.HelixChannelSearchResult, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for a channel search.
     *
     * @param query The search term.
     * @param filter
     *
     * @expandParams
     */
    HelixSearchApi.prototype.searchChannelsPaginated = function (query, filter) {
        var _this = this;
        var _a;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'search/channels',
            query: {
                query: query,
                live_only: (_a = filter.liveOnly) === null || _a === void 0 ? void 0 : _a.toString()
            }
        }, this._client, function (data) { return new HelixChannelSearchResult_1.HelixChannelSearchResult(data, _this._client); });
    };
    HelixSearchApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixSearchApi')
    ], HelixSearchApi);
    return HelixSearchApi;
}(BaseApi_1.BaseApi));
exports.HelixSearchApi = HelixSearchApi;
