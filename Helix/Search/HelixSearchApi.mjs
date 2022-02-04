import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixGame } from "../Game/HelixGame.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixChannelSearchResult } from "./HelixChannelSearchResult.mjs";
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
    __extends(HelixSearchApi, _super);
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'search/categories',
                            query: __assign({ query: query }, makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixGame, this._client)];
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
        return new HelixPaginatedRequest({
            url: 'search/categories',
            query: {
                query: query
            }
        }, this._client, function (data) { return new HelixGame(data, _this._client); });
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
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'search/channels',
                            query: __assign({ query: query, live_only: (_a = filter.liveOnly) === null || _a === void 0 ? void 0 : _a.toString() }, makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixChannelSearchResult, this._client)];
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
        return new HelixPaginatedRequest({
            url: 'search/channels',
            query: {
                query: query,
                live_only: (_a = filter.liveOnly) === null || _a === void 0 ? void 0 : _a.toString()
            }
        }, this._client, function (data) { return new HelixChannelSearchResult(data, _this._client); });
    };
    HelixSearchApi = __decorate([
        rtfm('twitch', 'HelixSearchApi')
    ], HelixSearchApi);
    return HelixSearchApi;
}(BaseApi));
export { HelixSearchApi };