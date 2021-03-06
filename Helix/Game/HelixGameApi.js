"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixGameApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixGame_1 = require("./HelixGame");
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
    tslib_1.__extends(HelixGameApi, _super);
    function HelixGameApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the game data for the given list of game IDs.
     *
     * @param ids The game IDs you want to look up.
     */
    HelixGameApi.prototype.getGamesByIds = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var games;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var games;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'games/top',
                            query: HelixPagination_1.makePaginationQuery(pagination)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixGame_1.HelixGame, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the most viewed games at the moment.
     */
    HelixGameApi.prototype.getTopGamesPaginated = function () {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'games/top'
        }, this._client, function (data) { return new HelixGame_1.HelixGame(data, _this._client); });
    };
    HelixGameApi.prototype._getGames = function (filterType, filterValues) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!filterValues.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'games',
                                query: (_a = {},
                                    _a[filterType] = filterValues,
                                    _a)
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result.data.map(function (entry) { return new HelixGame_1.HelixGame(entry, _this._client); })];
                }
            });
        });
    };
    HelixGameApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixGameApi')
    ], HelixGameApi);
    return HelixGameApi;
}(BaseApi_1.BaseApi));
exports.HelixGameApi = HelixGameApi;
