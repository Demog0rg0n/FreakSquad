import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixTag } from "./HelixTag.mjs";
/**
 * The Helix API methods that deal with tags.
 *
 * Can be accessed using `client.helix.tags` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const tags = await api.helix.tags.getAllStreamTags();
 * ```
 */
var HelixTagApi = /** @class */ (function (_super) {
    __extends(HelixTagApi, _super);
    function HelixTagApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves all stream tags.
     *
     * @param pagination
     *
     * @expandParams
     */
    HelixTagApi.prototype.getAllStreamTags = function (pagination) {
        if (pagination === void 0) { pagination = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'tags/streams',
                            query: makePaginationQuery(pagination)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixTag)];
                }
            });
        });
    };
    /**
     * Creates a paginator for all stream tags.
     */
    HelixTagApi.prototype.getAllStreamTagsPaginated = function () {
        return new HelixPaginatedRequest({
            url: 'tags/streams'
        }, this._client, function (data) { return new HelixTag(data); });
    };
    /**
     * Retrieves a set of stream tags by IDs.
     *
     * @param ids The IDs of the stream tags.
     */
    HelixTagApi.prototype.getStreamTagsByIds = function (ids) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ids.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: TwitchApiCallType.Helix,
                                url: 'tags/streams',
                                query: {
                                    tag_id: ids
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixTag(data); })];
                }
            });
        });
    };
    /**
     * Retrieves a single stream tag by ID.
     *
     * @param id The ID of the stream tag.
     */
    HelixTagApi.prototype.getStreamTagById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreamTagsByIds([id])];
                    case 1:
                        tags = _a.sent();
                        return [2 /*return*/, tags.length ? tags[0] : null];
                }
            });
        });
    };
    HelixTagApi = __decorate([
        rtfm('twitch', 'HelixTagApi')
    ], HelixTagApi);
    return HelixTagApi;
}(BaseApi));
export { HelixTagApi };
