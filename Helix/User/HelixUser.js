"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixUser = exports.HelixUserType = exports.HelixBroadcasterType = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var NoSubscriptionProgramError_1 = require("../../../Errors/NoSubscriptionProgramError");
var HelixBroadcasterType;
(function (HelixBroadcasterType) {
    /**
     * A Twitch Partner.
     */
    HelixBroadcasterType["Partner"] = "partner";
    /**
     * A Twitch Affiliate.
     */
    HelixBroadcasterType["Affiliate"] = "affiliate";
    /**
     * A user that's neither a partner nor an affiliate.
     */
    HelixBroadcasterType["None"] = "";
})(HelixBroadcasterType || (HelixBroadcasterType = {}));
exports.HelixBroadcasterType = HelixBroadcasterType;
var HelixUserType;
(function (HelixUserType) {
    /**
     * A Twitch staff member.
     */
    HelixUserType["Staff"] = "staff";
    /**
     * A Twitch administrator.
     */
    HelixUserType["Admin"] = "admin";
    /**
     * A global moderator.
     */
    HelixUserType["GlobalMod"] = "global_mod";
    /**
     * A user with no special permissions across Twitch.
     */
    HelixUserType["None"] = "";
})(HelixUserType || (HelixUserType = {}));
exports.HelixUserType = HelixUserType;
/**
 * A Twitch user.
 */
var HelixUser = /** @class */ (function () {
    /** @private */
    function HelixUser(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixUser.prototype, "cacheKey", {
        /** @private */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "id", {
        /**
         * The ID of the user.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "name", {
        /**
         * The name of the user.
         */
        get: function () {
            return this._data.login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "displayName", {
        /**
         * The display name of the user.
         */
        get: function () {
            return this._data.display_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "description", {
        /**
         * The description of the user.
         */
        get: function () {
            return this._data.description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "type", {
        /**
         * The type of the user.
         */
        get: function () {
            return this._data.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "broadcasterType", {
        /**
         * The type of the user.
         */
        get: function () {
            return this._data.broadcaster_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "profilePictureUrl", {
        /**
         * The URL to the profile picture of the user.
         */
        get: function () {
            return this._data.profile_image_url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "offlinePlaceholderUrl", {
        /**
         * The URL to the offline video placeholder of the user.
         */
        get: function () {
            return this._data.offline_image_url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "views", {
        /**
         * The total number of views of the user's channel.
         */
        get: function () {
            return this._data.view_count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixUser.prototype, "creationDate", {
        /**
         * The date when the user was created, i.e. when they registered on Twitch.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves the channel's stream data.
     */
    HelixUser.prototype.getStream = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.streams.getStreamByUserId(this)];
            });
        });
    };
    /**
     * Retrieves a list of broadcasters the user follows.
     */
    HelixUser.prototype.getFollows = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getFollows({ user: this })];
            });
        });
    };
    /**
     * Retrieves the follow data of the given user to the broadcaster.
     *
     * @param user The user to check the follow from.
     */
    HelixUser.prototype.getFollowFrom = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getFollowFromUserToBroadcaster(user, this)];
            });
        });
    };
    /**
     * Retrieves the follow data of the user to the given broadcaster.
     *
     * @param broadcaster The broadcaster to check the follow to.
     */
    HelixUser.prototype.getFollowTo = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getFollowFromUserToBroadcaster(this, broadcaster)];
            });
        });
    };
    /**
     * Checks whether the user is following the given broadcaster.
     *
     * @param broadcaster The broadcaster to check the user's follow to.
     */
    HelixUser.prototype.follows = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.userFollowsBroadcaster(this, broadcaster)];
            });
        });
    };
    /**
     * Checks whether the given user is following the broadcaster.
     *
     * @param user The user to check the broadcaster's follow from.
     */
    HelixUser.prototype.isFollowedBy = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.userFollowsBroadcaster(user, this)];
            });
        });
    };
    /**
     * Follows the broadcaster.
     */
    HelixUser.prototype.follow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.users.getMe()];
                    case 1:
                        currentUser = _a.sent();
                        return [2 /*return*/, currentUser.followChannel(this)];
                }
            });
        });
    };
    /**
     * Unfollows the broadcaster.
     */
    HelixUser.prototype.unfollow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.kraken.users.getMe()];
                    case 1:
                        currentUser = _a.sent();
                        return [2 /*return*/, currentUser.unfollowChannel(this)];
                }
            });
        });
    };
    /**
     * Retrieves the subscription data for the user to the given broadcaster, or `null` if the user is not subscribed.
     *
     * @param broadcaster The broadcaster you want to get the subscription data for.
     */
    HelixUser.prototype.getSubscriptionTo = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.subscriptions.getSubscriptionForUser(broadcaster, this)];
            });
        });
    };
    /**
     * Checks whether the user is subscribed to the given broadcaster.
     *
     * @param broadcaster The broadcaster you want to check the subscription for.
     */
    HelixUser.prototype.isSubscribedTo = function (broadcaster) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getSubscriptionTo(broadcaster)];
                    case 1: return [2 /*return*/, (_a.sent()) !== null];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof NoSubscriptionProgramError_1.NoSubscriptionProgramError) {
                            return [2 /*return*/, false];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUser.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixUser.prototype, "_client", void 0);
    HelixUser = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixUser', 'id')
    ], HelixUser);
    return HelixUser;
}());
exports.HelixUser = HelixUser;
