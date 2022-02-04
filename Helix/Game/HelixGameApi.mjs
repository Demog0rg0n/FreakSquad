import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixGame } from "./HelixGame.mjs";
/**
 * The Helix API methods that deal with games.
 *
 * Can be accessed using `client.helix.games` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const game = await api.helix.games.getGameByName('Hearthstone');
 * ```
 */
var HelixGameApi = /** @class */ (function (_super) {
    __extends(HelixGameApi, _super);
    function HelixGameApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the game data for the given list of game IDs.
     *
     * @param ids The game IDs you want to look up.
     */
    HelixGameApi.prototype.getGamesByIds = function (ids) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getGames('id', ids)];
            });
        });
    };
    /**
     * Retrieves the game data for the given list of game names.
     *
     * @param names The game names you want to look up.
     */
    HelixGameApi.prototype.getGamesByNames = function (names) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getGames('name', names)];
            });
        });
    };
    /**
     * Retrieves the game data for the given game ID.
     *
     * @param id The game ID you want to look up.
     */
    HelixGameApi.prototype.getGameById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getGames('id', [id])];
                    case 1:
                        games = _a.sent();
                        return [2 /*return*/, games.length ? games[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the game data for the given game name.
     *
     * @param name The game name you want to look up.
     */
    HelixGameApi.prototype.getGameByName = function (name) {
        return __awaiter(this, void 0, Promise, function () {
            var games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getGames('name', [name])];
                    case 1:
                        games = _a.sent();
                        return [2 /*return*/, games.length ? games[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of the most viewed games at the moment.
     *
     * @param pagination
     *
     * @expandParams
     */
    HelixGameApi.prototype.getTopGames = function (pagination) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'games/top',
                            query: makePaginationQuery(pagination)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixGame, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the most viewed games at the moment.
     */
    HelixGameApi.prototype.getTopGamesPaginated = function () {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'games/top'
        }, this._client, function (data) { return new HelixGame(data, _this._client); });
    };
    HelixGameApi.prototype._getGames = function (filterType, filterValues) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!filterValues.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'games',
                                query: (_a = {},
                                    _a[filterType] = filterValues,
                                    _a)
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data.map(function (entry) { return new HelixGame(entry, _this._client); })];
                }
            });
        });
    };
    HelixGameApi = __decorate([
        rtfm('twitch', 'HelixGameApi')
    ], HelixGameApi);
    return HelixGameApi;
}(BaseApi));
export { HelixGameApi };
