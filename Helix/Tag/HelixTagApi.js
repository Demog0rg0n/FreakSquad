"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixTagApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixTag_1 = require("./HelixTag");
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
    tslib_1.__extends(HelixTagApi, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'tags/streams',
                            query: HelixPagination_1.makePaginationQuery(pagination)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixTag_1.HelixTag)];
                }
            });
        });
    };
    /**
     * Creates a paginator for all stream tags.
     */
    HelixTagApi.prototype.getAllStreamTagsPaginated = function () {
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'tags/streams'
        }, this._client, function (data) { return new HelixTag_1.HelixTag(data); });
    };
    /**
     * Retrieves a set of stream tags by IDs.
     *
     * @param ids The IDs of the stream tags.
     */
    HelixTagApi.prototype.getStreamTagsByIds = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!ids.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'tags/streams',
                                query: {
                                    tag_id: ids
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixTag_1.HelixTag(data); })];
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tags;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreamTagsByIds([id])];
                    case 1:
                        tags = _a.sent();
                        return [2 /*return*/, tags.length ? tags[0] : null];
                }
            });
        });
    };
    HelixTagApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixTagApi')
    ], HelixTagApi);
    return HelixTagApi;
}(BaseApi_1.BaseApi));
exports.HelixTagApi = HelixTagApi;
