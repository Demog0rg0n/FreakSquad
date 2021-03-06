"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixClip = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var HelixClip = /** @class */ (function () {
    /** @private */
    function HelixClip(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixClip.prototype, "id", {
        /**
         * The clip ID.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "url", {
        /**
         * The URL of the clip.
         */
        get: function () {
            return this._data.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "embedUrl", {
        /**
         * The embed URL of the clip.
         */
        get: function () {
            return this._data.embed_url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "broadcasterId", {
        /**
         * The user ID of the broadcaster of the stream where the clip was created.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster of the stream where the clip was created.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the broadcaster of the stream where the clip was created.
     */
    HelixClip.prototype.getBroadcaster = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "creatorId", {
        /**
         * The user ID of the creator of the clip.
         */
        get: function () {
            return this._data.creator_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "creatorDisplayName", {
        /**
         * The display name of the creator of the clip.
         */
        get: function () {
            return this._data.creator_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the creator of the clip.
     */
    HelixClip.prototype.getCreator = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.creator_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "videoId", {
        /**
         * The ID of the video the clip is taken from.
         */
        get: function () {
            return this._data.video_id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the video the clip is taken from.
     */
    HelixClip.prototype.getVideo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.videos.getVideoById(this._data.video_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "gameId", {
        /**
         * The ID of the game that was being played when the clip was created.
         */
        get: function () {
            return this._data.game_id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the game that was being played when the clip was created.
     */
    HelixClip.prototype.getGame = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.games.getGameById(this._data.game_id)];
            });
        });
    };
    Object.defineProperty(HelixClip.prototype, "language", {
        /**
         * The language of the stream where the clip was created.
         */
        get: function () {
            return this._data.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "title", {
        /**
         * The title of the clip.
         */
        get: function () {
            return this._data.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "views", {
        /**
         * The number of views of the clip.
         */
        get: function () {
            return this._data.view_count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "creationDate", {
        /**
         * The date when the clip was created.
         */
        get: function () {
            return new Date(this._data.created_at);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixClip.prototype, "thumbnailUrl", {
        /**
         * The URL of the thumbnail of the clip.
         */
        get: function () {
            return this._data.thumbnail_url;
        },
        enumerable: false,
        configurable: true
    });
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixClip.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixClip.prototype, "_client", void 0);
    HelixClip = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixClip', 'id')
    ], HelixClip);
    return HelixClip;
}());
exports.HelixClip = HelixClip;
