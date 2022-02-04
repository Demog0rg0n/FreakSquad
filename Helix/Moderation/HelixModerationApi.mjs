import { __assign, __awaiter, __decorate, __extends, __generator } from "tslib";
import { TwitchApiCallType } from 'twitch-api-call';
import { extractUserId, rtfm } from 'twitch-common';
import { BaseApi } from "../../BaseApi.mjs";
import { HelixPaginatedRequest } from "../HelixPaginatedRequest.mjs";
import { createPaginatedResult } from "../HelixPaginatedResult.mjs";
import { makePaginationQuery } from "../HelixPagination.mjs";
import { HelixBan } from "./HelixBan.mjs";
import { HelixBanEvent } from "./HelixBanEvent.mjs";
import { HelixModerator } from "./HelixModerator.mjs";
import { HelixModeratorEvent } from "./HelixModeratorEvent.mjs";
/**
 * The Helix API methods that deal with moderation.
 *
 * Can be accessed using `client.helix.moderation` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: users } = await api.helix.moderation.getBannedUsers('61369223');
 * ```
 */
var HelixModerationApi = /** @class */ (function (_super) {
    __extends(HelixModerationApi, _super);
    function HelixModerationApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of banned users in a given channel.
     *
     * @param channel The channel to retrieve the banned users from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationApi.prototype.getBannedUsers = function (channel, filter) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'moderation/banned',
                            scope: 'moderation:read',
                            query: __assign({ broadcaster_id: extractUserId(channel), user_id: filter === null || filter === void 0 ? void 0 : filter.userId }, makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixBan, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for banned users in a given channel.
     *
     * @param channel The channel to retrieve the banned users from.
     */
    HelixModerationApi.prototype.getBannedUsersPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'moderation/banned',
            scope: 'moderation:read',
            query: {
                broadcaster_id: extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixBan(data, _this._client); }, 50 // possibly a relatively consistent workaround for twitchdev/issues#18
        );
    };
    /**
     * Checks whether a given user is banned in a given channel.
     *
     * @param channel The channel to check for a ban of the given user.
     * @param user The user to check for a ban in the given channel.
     */
    HelixModerationApi.prototype.checkUserBan = function (channel, user) {
        return __awaiter(this, void 0, Promise, function () {
            var userId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = extractUserId(user);
                        return [4 /*yield*/, this.getBannedUsers(channel, { userId: userId })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.some(function (ban) { return ban.userId === userId; })];
                }
            });
        });
    };
    /**
     * Retrieves a list of ban events for a given channel.
     *
     * @param channel The channel to retrieve the ban events from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationApi.prototype.getBanEvents = function (channel, filter) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'moderation/banned/events',
                            scope: 'moderation:read',
                            query: __assign({ broadcaster_id: extractUserId(channel), user_id: filter === null || filter === void 0 ? void 0 : filter.userId }, makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixBanEvent, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for ban events for a given channel.
     *
     * @param channel The channel to retrieve the ban events from.
     */
    HelixModerationApi.prototype.getBanEventsPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'moderation/banned/events',
            scope: 'moderation:read',
            query: {
                broadcaster_id: extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixBanEvent(data, _this._client); });
    };
    /**
     * Retrieves a list of moderators in a given channel.
     *
     * @param channel The channel to retrieve moderators from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationApi.prototype.getModerators = function (channel, filter) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'moderation/moderators',
                            scope: 'moderation:read',
                            query: __assign({ broadcaster_id: extractUserId(channel), user_id: filter === null || filter === void 0 ? void 0 : filter.userId }, makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixModerator, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for moderators in a given channel.
     *
     * @param channel The channel to retrieve moderators from.
     */
    HelixModerationApi.prototype.getModeratorsPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'moderation/moderators',
            scope: 'moderation:read',
            query: {
                broadcaster_id: extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixModerator(data, _this._client); });
    };
    /**
     * Checks whether a given user is a moderator of a given channel.
     *
     * @param channel The channel to check.
     * @param user The user to check.
     */
    HelixModerationApi.prototype.checkUserMod = function (channel, user) {
        return __awaiter(this, void 0, Promise, function () {
            var userId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = extractUserId(user);
                        return [4 /*yield*/, this.getModerators(channel, { userId: userId })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.some(function (mod) { return mod.userId === userId; })];
                }
            });
        });
    };
    /**
     * Retrieves a list of moderator events for a given channel.
     *
     * @param channel The channel to retrieve the moderator events from.
     * @param filter Additional filters for the result set.
     */
    HelixModerationApi.prototype.getModeratorEvents = function (channel, filter) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'moderation/moderators/events',
                            scope: 'moderation:read',
                            query: __assign({ broadcaster_id: extractUserId(channel), user_id: filter === null || filter === void 0 ? void 0 : filter.userId }, makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, createPaginatedResult(result, HelixModeratorEvent, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for moderator events for a given channel.
     *
     * @param channel The channel to retrieve the moderator events from.
     */
    HelixModerationApi.prototype.getModeratorEventsPaginated = function (channel) {
        var _this = this;
        return new HelixPaginatedRequest({
            url: 'moderation/moderators/events',
            scope: 'moderation:read',
            query: {
                broadcaster_id: extractUserId(channel)
            }
        }, this._client, function (data) { return new HelixModeratorEvent(data, _this._client); });
    };
    /**
     * Processes a message held by AutoMod.
     *
     * @param user The user who is processing the message.
     * @param msgId The ID of the message.
     * @param allow Whether to allow the message - `true` allows, and `false` denies.
     */
    HelixModerationApi.prototype.processHeldAutoModMessage = function (user, msgId, allow) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: TwitchApiCallType.Helix,
                            url: 'moderation/automod/message',
                            method: 'POST',
                            scope: 'moderator:manage:automod',
                            jsonBody: {
                                user_id: extractUserId(user),
                                msg_id: msgId,
                                action: allow ? 'ALLOW' : 'DENY'
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HelixModerationApi = __decorate([
        rtfm('twitch', 'HelixModerationApi')
    ], HelixModerationApi);
    return HelixModerationApi;
}(BaseApi));
export { HelixModerationApi };