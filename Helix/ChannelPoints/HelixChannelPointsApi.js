"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixChannelPointsApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixCustomReward_1 = require("./HelixCustomReward");
var HelixCustomRewardRedemption_1 = require("./HelixCustomRewardRedemption");
/**
 * The Helix API methods that deal with channel points.
 *
 * Can be accessed using `client.helix.channelPoints` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const rewards = await api.helix.channelPoints.getCustomRewards('125328655');
 * ```
 */
var HelixChannelPointsApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixChannelPointsApi, _super);
    function HelixChannelPointsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixChannelPointsApi_1 = HelixChannelPointsApi;
    /**
     * Retrieves all custom rewards for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve the rewards for.
     * @param onlyManageable Whether to only retrieve rewards that can be managed by the API.
     */
    HelixChannelPointsApi.prototype.getCustomRewards = function (broadcaster, onlyManageable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channel_points/custom_rewards',
                            scope: 'channel:read:redemptions',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                only_manageable_rewards: onlyManageable === null || onlyManageable === void 0 ? void 0 : onlyManageable.toString()
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixCustomReward_1.HelixCustomReward(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves custom rewards by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the rewards for.
     * @param rewardIds The IDs of the rewards.
     */
    HelixChannelPointsApi.prototype.getCustomRewardsByIds = function (broadcaster, rewardIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!rewardIds.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'channel_points/custom_rewards',
                                scope: 'channel:read:redemptions',
                                query: {
                                    broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                    id: rewardIds
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixCustomReward_1.HelixCustomReward(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a custom reward by ID.
     *
     * @param broadcaster The broadcaster to retrieve the reward for.
     * @param rewardId The ID of the reward.
     */
    HelixChannelPointsApi.prototype.getCustomRewardById = function (broadcaster, rewardId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rewards;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCustomRewardsByIds(broadcaster, [rewardId])];
                    case 1:
                        rewards = _a.sent();
                        return [2 /*return*/, rewards.length ? rewards[0] : null];
                }
            });
        });
    };
    /**
     * Creates a new custom reward.
     *
     * @param broadcaster The broadcaster to create the reward for.
     * @param data The reward data.
     *
     * @expandParams
     */
    HelixChannelPointsApi.prototype.createCustomReward = function (broadcaster, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channel_points/custom_rewards',
                            method: 'POST',
                            scope: 'channel:manage:redemptions',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster)
                            },
                            jsonBody: HelixChannelPointsApi_1._transformRewardData(data)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixCustomReward_1.HelixCustomReward(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Updates a custom reward.
     *
     * @param broadcaster The broadcaster to update the reward for.
     * @param rewardId The ID of the reward.
     * @param data The reward data.
     */
    HelixChannelPointsApi.prototype.updateCustomReward = function (broadcaster, rewardId, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channel_points/custom_rewards',
                            method: 'PATCH',
                            scope: 'channel:manage:redemptions',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: rewardId
                            },
                            jsonBody: HelixChannelPointsApi_1._transformRewardData(data)
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HelixCustomReward_1.HelixCustomReward(result.data[0], this._client)];
                }
            });
        });
    };
    /**
     * Deletes a custom reward.
     *
     * @param broadcaster The broadcaster to delete the reward for.
     * @param rewardId The ID of the reward.
     */
    HelixChannelPointsApi.prototype.deleteCustomReward = function (broadcaster, rewardId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channel_points/custom_rewards',
                            method: 'DELETE',
                            scope: 'channel:manage:redemptions',
                            query: {
                                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                id: rewardId
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
     * Retrieves custom reward redemptions by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param redemptionIds The IDs of the redemptions.
     */
    HelixChannelPointsApi.prototype.getRedemptionsByIds = function (broadcaster, rewardId, redemptionIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!redemptionIds.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'channel_points/custom_rewards/redemptions',
                                scope: 'channel:read:redemptions',
                                query: {
                                    broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                    reward_id: rewardId,
                                    id: redemptionIds
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixCustomRewardRedemption_1.HelixCustomRewardRedemption(data, _this._client); })];
                }
            });
        });
    };
    /**
     * Retrieves a custom reward redemption by ID.
     *
     * @param broadcaster The broadcaster to retrieve the redemption for.
     * @param rewardId The ID of the reward.
     * @param redemptionId The ID of the redemption.
     */
    HelixChannelPointsApi.prototype.getRedemptionById = function (broadcaster, rewardId, redemptionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var redemptions;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRedemptionsByIds(broadcaster, rewardId, [redemptionId])];
                    case 1:
                        redemptions = _a.sent();
                        return [2 /*return*/, redemptions.length ? redemptions[0] : null];
                }
            });
        });
    };
    /**
     * Retrieves custom reward redemptions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param status The status of the redemptions to retrieve.
     * @param filter
     *
     * @expandParams
     */
    HelixChannelPointsApi.prototype.getRedemptionsForBroadcaster = function (broadcaster, rewardId, status, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'channel_points/custom_rewards/redemptions',
                            scope: 'channel:read:redemptions',
                            query: tslib_1.__assign({ broadcaster_id: twitch_common_1.extractUserId(broadcaster), reward_id: rewardId, status: status, sort: filter.newestFirst ? 'NEWEST' : 'OLDEST' }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixCustomRewardRedemption_1.HelixCustomRewardRedemption, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for custom reward redemptions for the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param status The status of the redemptions to retrieve.
     * @param filter
     *
     * @expandParams
     */
    HelixChannelPointsApi.prototype.getRedemptionsForBroadcasterPaginated = function (broadcaster, rewardId, status, filter) {
        var _this = this;
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'channel_points/custom_rewards/redemptions',
            scope: 'channel:read:redemptions',
            query: {
                broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                reward_id: rewardId,
                status: status,
                sort: filter.newestFirst ? 'NEWEST' : 'OLDEST'
            }
        }, this._client, function (data) { return new HelixCustomRewardRedemption_1.HelixCustomRewardRedemption(data, _this._client); }, 50);
    };
    /**
     * Updates the status of the given redemptions by IDs.
     *
     * @param broadcaster The broadcaster to retrieve the redemptions for.
     * @param rewardId The ID of the reward.
     * @param redemptionIds The IDs of the redemptions to update.
     * @param status The status to set for the redemptions.
     */
    HelixChannelPointsApi.prototype.updateRedemptionStatusByIds = function (broadcaster, rewardId, redemptionIds, status) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!redemptionIds.length) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this._client.callApi({
                                type: twitch_api_call_1.TwitchApiCallType.Helix,
                                url: 'channel_points/custom_rewards/redemptions',
                                method: 'PATCH',
                                scope: 'channel:manage:redemptions',
                                query: {
                                    broadcaster_id: twitch_common_1.extractUserId(broadcaster),
                                    reward_id: rewardId,
                                    id: redemptionIds
                                },
                                jsonBody: {
                                    status: status
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.map(function (data) { return new HelixCustomRewardRedemption_1.HelixCustomRewardRedemption(data, _this._client); })];
                }
            });
        });
    };
    HelixChannelPointsApi._transformRewardData = function (data) {
        var _a, _b, _c;
        var result = {
            title: data.title,
            cost: data.cost,
            prompt: data.prompt,
            background_color: data.backgroundColor,
            is_enabled: data.isEnabled,
            is_user_input_required: data.userInputRequired,
            should_redemptions_skip_request_queue: data.autoFulfill
        };
        if (data.maxRedemptionsPerStream !== undefined) {
            result.is_max_per_stream_enabled = !!data.maxRedemptionsPerStream;
            result.max_per_stream = (_a = data.maxRedemptionsPerStream) !== null && _a !== void 0 ? _a : 0;
        }
        if (data.maxRedemptionsPerUserPerStream !== undefined) {
            result.is_max_per_user_per_stream_enabled = !!data.maxRedemptionsPerUserPerStream;
            result.max_per_user_per_stream = (_b = data.maxRedemptionsPerUserPerStream) !== null && _b !== void 0 ? _b : 0;
        }
        if (data.globalCooldown !== undefined) {
            result.is_global_cooldown_enabled = !!data.globalCooldown;
            result.global_cooldown_seconds = (_c = data.globalCooldown) !== null && _c !== void 0 ? _c : 0;
        }
        if ('isPaused' in data) {
            result.is_paused = data.isPaused;
        }
        return result;
    };
    var HelixChannelPointsApi_1;
    HelixChannelPointsApi = HelixChannelPointsApi_1 = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixChannelPointsApi')
    ], HelixChannelPointsApi);
    return HelixChannelPointsApi;
}(BaseApi_1.BaseApi));
exports.HelixChannelPointsApi = HelixChannelPointsApi;
