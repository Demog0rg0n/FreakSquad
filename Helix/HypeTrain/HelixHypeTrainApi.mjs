import { __awaiter, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { HelixHypeTrainEvent } from "./HelixHypeTrainEvent.mjs";
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
    __extends(HelixHypeTrainApi, _super);
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
        return __awaiter(this, void 0, Promise, function () {
            var after, _a, limit, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        after = pagination.after, _a = pagination.limit, limit = _a === void 0 ? '20' : _a;
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'hypetrain/events',
                                scope: 'channel:read:hype_train',
                                query: {
                                    broadcaster_id: extractUserId(broadcaster),
                                    after: after,
                                    first: limit
                                }
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixHypeTrainEvent, this._client)];
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
        return new HelixPaginatedRequest({
            url: 'hypetrain/events',
            scope: 'channel:read:hype_train',
            query: {
                broadcaster_id: extractUserId(broadcaster)
            }
        }, this._client, function (data) {
            return new HelixHypeTrainEvent(data, _this._client);
        });
    };
    /**
     * Retrieves a single Hype Train event by ID.
     *
     * @param id The ID of the Hype Train event.
     */
    HelixHypeTrainApi.prototype.getHypeTrainEventById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'hypetrain/events',
                            scope: 'channel:read:hype_train',
                            query: {
                                id: id
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? new HelixHypeTrainEvent(result.data[0], this._client) : null];
                }
            });
        });
    };
    return HelixHypeTrainApi;
}(BaseApi));
export default HelixHypeTrainApi;
