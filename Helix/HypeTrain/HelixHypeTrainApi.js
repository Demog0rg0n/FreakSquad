var __tsu = {
    cache: [],
    defineExport: function (name, def) {
        Object.defineProperty(exports, name, def);
        this.cache.push({ name: name, def: def });
    },
    redefineExports: function () {
        this.cache.forEach(function (exp) {
            Object.defineProperty(exports, exp.name, exp.def);
        });
    }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixHypeTrainEvent_1 = require("./HelixHypeTrainEvent");
/**
 * The Helix API methods that deal with Hype Trains.
 *
 * Can be accessed using `client.helix.hypeTrain` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: events } = await api.helix.hypeTrain.getHypeTrainEventsForBroadcaster('125328655');
 * ```
 */
var HelixHypeTrainApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixHypeTrainApi, _super);
    function HelixHypeTrainApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves the events of the current or latest Hype Train for the specified broadcaster.
     *
     * @param broadcaster The broadcaster to fetch Hype Train events for.
     * @param pagination
     *
     * @expandParams
     */
    HelixHypeTrainApi.prototype.getHypeTrainEventsForBroadcaster = function (broadcaster, pagination) {
        if (pagination === void 0) { pagination = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var after, _a, limit, result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        after = pagination.after, _a = pagination.limit, limit = _a === void 0 ? '20' : _a;
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'hypetrain/events',
                                scope: 'channel:read:hype_train',
                                query: {
                                    broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                    after: after,
                                    first: limit
                                }
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixHypeTrainEvent_1.HelixHypeTrainEvent, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the events of the current or latest Hype Train for the specified broadcaster.
     *
     * @param broadcaster The broadcaster to fetch Hype Train events for.
     */
    HelixHypeTrainApi.prototype.getHypeTrainEventsForBroadcasterPaginated = function (broadcaster) {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'hypetrain/events',
            scope: 'channel:read:hype_train',
            query: {
                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
            }
        }, this._client, function (data) {
            return new HelixHypeTrainEvent_1.HelixHypeTrainEvent(data, _this._client);
        });
    };
    /**
     * Retrieves a single Hype Train event by ID.
     *
     * @param id The ID of the Hype Train event.
     */
    HelixHypeTrainApi.prototype.getHypeTrainEventById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'hypetrain/events',
                            scope: 'channel:read:hype_train',
                            query: {
                                id: id
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? new HelixHypeTrainEvent_1.HelixHypeTrainEvent(result.data[0], this._client) : null];
                }
            });
        });
    };
    return HelixHypeTrainApi;
}(BaseApi_1.BaseApi));
exports.default = HelixHypeTrainApi;
module.exports = exports = HelixHypeTrainApi;
Object.defineProperty(exports, "__esModule", { value: true });
__tsu.redefineExports();
exports.default = HelixHypeTrainApi;
