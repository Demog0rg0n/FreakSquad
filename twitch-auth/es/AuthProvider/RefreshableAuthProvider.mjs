import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
import { refreshUserToken } from "../helpers.mjs";
/**
 * Enhances another auth provider with the ability to make use of refresh
 * tokens, automatically refreshing the access token whenever necessary.
 */
var RefreshableAuthProvider = /** @class */ (function () {
    /**
     * Creates a new auth provider based on the given one that can automatically
     * refresh access tokens.
     *
     * @param childProvider The base auth provider.
     * @param refreshConfig The information necessary to automatically refresh an access token.
     */
    function RefreshableAuthProvider(childProvider, refreshConfig) {
        this._clientSecret = refreshConfig.clientSecret;
        this._refreshToken = refreshConfig.refreshToken;
        this._childProvider = childProvider;
        this._initialExpiry = refreshConfig.expiry;
        this._onRefresh = refreshConfig.onRefresh;
    }
    Object.defineProperty(RefreshableAuthProvider.prototype, "tokenType", {
        /**
         * The type of tokens the provider generates.
         *
         * It is the same as the underlying base auth provider's token type.
         */
        get: function () {
            return this._childProvider.tokenType;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves an access token.
     *
     * If the current access token does not have the requested scopes, the base auth
     * provider is called.
     *
     * If the current access token is expired, automatically renew it.
     *
     * @param scopes The requested scopes.
     */
    RefreshableAuthProvider.prototype.getAccessToken = function (scopes) {
        return __awaiter(this, void 0, Promise, function () {
            var oldToken, newToken, now, refreshedToken;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof scopes === 'string') {
                            scopes = scopes.split(' ');
                        }
                        return [4 /*yield*/, this._childProvider.getAccessToken()];
                    case 1:
                        oldToken = _a.sent();
                        if (!(oldToken && scopes && scopes.some(function (scope) { return !_this.currentScopes.includes(scope); }))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._childProvider.getAccessToken(scopes)];
                    case 2:
                        newToken = _a.sent();
                        // ...but if the token doesn't change, carry on
                        if (newToken !== oldToken) {
                            return [2 /*return*/, newToken];
                        }
                        _a.label = 3;
                    case 3:
                        // if we don't have a current token, we just pass this and refresh right away
                        if (oldToken) {
                            if (this._initialExpiry) {
                                now = new Date();
                                if (now < this._initialExpiry) {
                                    return [2 /*return*/, oldToken];
                                }
                            }
                            else if (!oldToken.isExpired) {
                                return [2 /*return*/, oldToken];
                            }
                        }
                        return [4 /*yield*/, this.refresh()];
                    case 4:
                        refreshedToken = _a.sent();
                        if (oldToken) {
                            return [2 /*return*/, refreshedToken];
                        }
                        // need to check again for scopes after refreshing, in case a refresh token was passed without an access token
                        return [2 /*return*/, this._childProvider.getAccessToken(scopes)];
                }
            });
        });
    };
    /**
     * Force a refresh of the access token.
     */
    RefreshableAuthProvider.prototype.refresh = function () {
        return __awaiter(this, void 0, Promise, function () {
            var tokenData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, refreshUserToken(this.clientId, this._clientSecret, this._refreshToken)];
                    case 1:
                        tokenData = _a.sent();
                        this.setAccessToken(tokenData);
                        this._refreshToken = tokenData.refreshToken;
                        this._initialExpiry = undefined;
                        if (this._onRefresh) {
                            this._onRefresh(tokenData);
                        }
                        return [2 /*return*/, tokenData];
                }
            });
        });
    };
    /** @private */
    RefreshableAuthProvider.prototype.setAccessToken = function (token) {
        this._childProvider.setAccessToken(token);
    };
    Object.defineProperty(RefreshableAuthProvider.prototype, "clientId", {
        /**
         * The client ID.
         */
        get: function () {
            return this._childProvider.clientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RefreshableAuthProvider.prototype, "currentScopes", {
        /**
         * The scopes that are currently available using the access token.
         */
        get: function () {
            return this._childProvider.currentScopes;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], RefreshableAuthProvider.prototype, "_clientSecret", void 0);
    __decorate([
        Enumerable(false)
    ], RefreshableAuthProvider.prototype, "_refreshToken", void 0);
    RefreshableAuthProvider = __decorate([
        rtfm('twitch-auth', 'RefreshableAuthProvider', 'clientId')
    ], RefreshableAuthProvider);
    return RefreshableAuthProvider;
}());
export { RefreshableAuthProvider };
