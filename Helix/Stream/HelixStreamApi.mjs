import { __assign, __awaiter, __decorate, __extends, __generator, __read, __spread } from "tslib";
import { flatten } from '@d-fischer/shared-utils';
import { HttpStatusCodeError, TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, extractUserName, rtfm } from 'twitch-common';
import { StreamNotLiveError } from "../../../Errors/StreamNotLiveError.mjs";
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixTag } from "../Tag/HelixTag.mjs";
import { HelixStream } from "./HelixStream.mjs";
import { HelixStreamMarker } from "./HelixStreamMarker.mjs";
import { HelixStreamMarkerWithVideo } from "./HelixStreamMarkerWithVideo.mjs";
/**
 * The Helix API methods that deal with streams.
 *
 * Can be accessed using `client.helix.streams` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const stream = await api.helix.streams.getStreamByUserId('125328655');
 * ```
 */
var HelixStreamApi = /** @class */ (function (_super) {
    __extends(HelixStreamApi, _super);
    function HelixStreamApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixStreamApi_1 = HelixStreamApi;
    /**
     * Retrieves a list of streams.
     *
     * @expandParams
     */
    HelixStreamApi.prototype.getStreams = function (filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            url: 'streams',
                            type: TwitchApiCallType.Helix,
                            query: __assign(__assign({}, makePaginationQuery(filter)), { community_id: filter.community, game_id: filter.game, language: filter.language, type: filter.type, user_id: filter.userId, user_login: filter.userName })
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixStream, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for streams.
     *
     * @expandParams
     */
    HelixStreamApi.prototype.getStreamsPaginated = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest({
            url: 'streams',
            query: {
                community_id: filter.community,
                game_id: filter.game,
                language: filter.language,
                type: filter.type,
                user_id: filter.userId,
                user_login: filter.userName
            }
        }, this._client, function (data) { return new HelixStream(data, _this._client); });
    };
    /**
     * Retrieves the current stream for the given user name.
     *
     * @param user The user name to retrieve the stream for.
     */
    HelixStreamApi.prototype.getStreamByUserName = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreams({ userName: extractUserName(user) })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? result.data[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves the current stream for the given user ID.
     *
     * @param user The user ID to retrieve the stream for.
     */
    HelixStreamApi.prototype.getStreamByUserId = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStreams({ userId: extractUserId(user) })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.length ? result.data[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForUser = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getStreamMarkers('user_id', extractUserId(user))];
            });
        });
    };
    /**
     * Creates a paginator for all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForUserPaginated = function (user) {
        return this._getStreamMarkersPaginated('user_id', extractUserId(user));
    };
    /**
     * Retrieves a list of all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForVideo = function (videoId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._getStreamMarkers('video_id', videoId)];
            });
        });
    };
    /**
     * Creates a paginator for all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    HelixStreamApi.prototype.getStreamMarkersForVideoPaginated = function (videoId) {
        return this._getStreamMarkersPaginated('video_id', videoId);
    };
    /**
     * Creates a new stream marker.
     *
     * Only works while the specified user's stream is live.
     *
     * @param broadcaster The broadcaster to create a stream marker for.
     * @param description The description of the marker.
     */
    HelixStreamApi.prototype.createStreamMarker = function (broadcaster, description) {
        return __awaiter(this, void 0, Promise, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._client.callApi({
                                url: 'streams/markers',
                                method: 'POST',
                                type: TwitchApiCallType.Helix,
                                scope: 'user:edit:broadcast',
                                query: {
                                    user_id: extractUserId(broadcaster),
                                    description: description
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixStreamMarker(result.data[0], this._client)];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof HttpStatusCodeError && e_1.statusCode === 404) {
                            throw new StreamNotLiveError();
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the tags of a stream.
     *
     * @param broadcaster The broadcaster of the stream.
     */
    HelixStreamApi.prototype.getStreamTags = function (broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'streams/tags',
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
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
     * Replaces the tags of a stream.
     *
     * @param broadcaster The broadcaster of the stream.
     * @param tagIds The tags to set. If not given, removes all tags.
     */
    HelixStreamApi.prototype.replaceStreamTags = function (broadcaster, tagIds) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'streams/tags',
                            scope: 'user:edit:broadcast',
                            method: 'PUT',
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
                            },
                            jsonBody: {
                                tag_ids: tagIds
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the stream key of a stream.
     *
     * @param broadcaster The broadcaster to retrieve the stream key for.
     */
    HelixStreamApi.prototype.getStreamKey = function (broadcaster) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'streams/key',
                            scope: 'channel:read:stream_key',
                            query: {
                                broadcaster_id: extractUserId(broadcaster)
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data[0].stream_key];
                }
            });
        });
    };
    /**
     * Retrieves the streams that are currently live and are followed by the given user.
     *
     * @param user The user to check followed streams for.
     * @param pagination
     *
     * @expandParams
     */
    HelixStreamApi.prototype.getFollowedStreams = function (user, pagination) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'streams/followed',
                            scope: 'user:read:follows',
                            query: __assign({ user_id: extractUserId(user) }, makePaginationQuery(pagination))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixStream, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for the streams that are currently live and are followed by the given user.
     *
     * @param user The user to check followed streams for.
     */
    HelixStreamApi.prototype.getFollowedStreamsPaginated = function (user) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'stream/followed',
            scope: 'user:read:follows',
            query: {
                user_id: extractUserId(user)
            }
        }, this._client, function (data) { return new HelixStream(data, _this._client); });
    };
    HelixStreamApi.prototype._getStreamMarkers = function (queryType, id) {
        var _a;
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            url: 'streams/markers',
                            type: TwitchApiCallType.Helix,
                            query: (_b = {},
                                _b[queryType] = id,
                                _b),
                            scope: 'user:read:broadcast'
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, {
                                data: flatten(result.data.map(HelixStreamApi_1._mapGetStreamMarkersResult.bind(this._client))),
                                cursor: (_a = result.pagination) === null || _a === void 0 ? void 0 : _a.cursor
                            }];
                }
            });
        });
    };
    HelixStreamApi.prototype._getStreamMarkersPaginated = function (queryType, id) {
        var _a;
        return new HelixPaginatedRequest({
            url: 'streams/markers',
            query: (_a = {},
                _a[queryType] = id,
                _a),
            scope: 'user:read:broadcast'
        }, this._client, HelixStreamApi_1._mapGetStreamMarkersResult.bind(this._client));
    };
    HelixStreamApi._mapGetStreamMarkersResult = function (data) {
        var _this = this;
        return data.videos.reduce(function (result, video) { return __spread(result, video.markers.map(function (marker) { return new HelixStreamMarkerWithVideo(marker, video.video_id, _this); })); }, []);
    };
    var HelixStreamApi_1;
    HelixStreamApi = HelixStreamApi_1 = __decorate([
        rtfm('twitch', 'HelixStreamApi')
    ], HelixStreamApi);
    return HelixStreamApi;
}(BaseApi));
export { HelixStreamApi };