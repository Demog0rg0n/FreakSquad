"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidTokenFromProvider = exports.getTokenInfo = exports.revokeToken = exports.refreshUserToken = exports.getAppToken = exports.exchangeCode = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var AccessToken_1 = require("./AccessToken");
var InvalidTokenError_1 = require("./Errors/InvalidTokenError");
var TokenInfo_1 = require("./TokenInfo");
/**
 * Retrieves an access token with your client credentials and an authorization code.
 *
 * @param clientId The client ID of your application.
 * @param clientSecret The client secret of your application.
 * @param code The authorization code.
 * @param redirectUri The redirect URI. This serves no real purpose here, but must still match one of the redirect URIs you configured in the Twitch Developer dashboard.
 */
function exchangeCode(clientId, clientSecret, code, redirectUri) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = AccessToken_1.AccessToken.bind;
                    return [4 /*yield*/, twitch_api_call_1.callTwitchApi({
                            type: twitch_api_call_1.TwitchApiCallType.Auth,
                            url: 'token',
                            method: 'POST',
                            query: {
                                grant_type: 'authorization_code',
                                client_id: clientId,
                                client_secret: clientSecret,
                                code: code,
                                redirect_uri: redirectUri
                            }
                        })];
                case 1: return [2 /*return*/, new (_a.apply(AccessToken_1.AccessToken, [void 0, _b.sent()]))()];
            }
        });
    });
}
exports.exchangeCode = exchangeCode;
/**
 * Retrieves an app access token with your client credentials.
 *
 * @param clientId The client ID of your application.
 * @param clientSecret The client secret of your application.
 * @param clientSecret
 */
function getAppToken(clientId, clientSecret) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = AccessToken_1.AccessToken.bind;
                    return [4 /*yield*/, twitch_api_call_1.callTwitchApi({
                            type: twitch_api_call_1.TwitchApiCallType.Auth,
                            url: 'token',
                            method: 'POST',
                            query: {
                                grant_type: 'client_credentials',
                                client_id: clientId,
                                client_secret: clientSecret
                            }
                        })];
                case 1: return [2 /*return*/, new (_a.apply(AccessToken_1.AccessToken, [void 0, _b.sent()]))()];
            }
        });
    });
}
exports.getAppToken = getAppToken;
/**
 * Refreshes an expired access token with your client credentials and the refresh token that was given by the initial authentication.
 *
 * @param clientId The client ID of your application.
 * @param clientSecret The client secret of your application.
 * @param refreshToken The refresh token.
 */
function refreshUserToken(clientId, clientSecret, refreshToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = AccessToken_1.AccessToken.bind;
                    return [4 /*yield*/, twitch_api_call_1.callTwitchApi({
                            type: twitch_api_call_1.TwitchApiCallType.Auth,
                            url: 'token',
                            method: 'POST',
                            query: {
                                grant_type: 'refresh_token',
                                client_id: clientId,
                                client_secret: clientSecret,
                                refresh_token: refreshToken
                            }
                        })];
                case 1: return [2 /*return*/, new (_a.apply(AccessToken_1.AccessToken, [void 0, _b.sent()]))()];
            }
        });
    });
}
exports.refreshUserToken = refreshUserToken;
/**
 * Revokes an access token.
 *
 * @param clientId The client ID of your application.
 * @param accessToken The access token.
 */
function revokeToken(clientId, accessToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, twitch_api_call_1.callTwitchApi({
                        type: twitch_api_call_1.TwitchApiCallType.Auth,
                        url: 'revoke',
                        method: 'POST',
                        query: {
                            client_id: clientId,
                            token: accessToken
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.revokeToken = revokeToken;
/**
 * Retrieves information about an access token.
 *
 * @param clientId The client ID of your application.
 * @param accessToken The access token to get the information of.
 *
 * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
 */
function getTokenInfo(accessToken, clientId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var data, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, twitch_api_call_1.callTwitchApi({ type: twitch_api_call_1.TwitchApiCallType.Auth, url: 'validate' }, clientId, accessToken)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, new TokenInfo_1.TokenInfo(data)];
                case 2:
                    e_1 = _a.sent();
                    if (e_1 instanceof twitch_api_call_1.HttpStatusCodeError && e_1.statusCode === 401) {
                        throw new InvalidTokenError_1.InvalidTokenError();
                    }
                    throw e_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTokenInfo = getTokenInfo;
/** @private */
function getValidTokenFromProvider(provider, scopes, logger) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var lastTokenError, accessToken, tokenInfo, e_2, newToken, tokenInfo, e_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lastTokenError = undefined;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, provider.getAccessToken(scopes)];
                case 2:
                    accessToken = _a.sent();
                    if (!accessToken) return [3 /*break*/, 4];
                    return [4 /*yield*/, getTokenInfo(accessToken.accessToken)];
                case 3:
                    tokenInfo = _a.sent();
                    return [2 /*return*/, { accessToken: accessToken, tokenInfo: tokenInfo }];
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    if (e_2 instanceof InvalidTokenError_1.InvalidTokenError) {
                        lastTokenError = e_2;
                    }
                    else {
                        logger === null || logger === void 0 ? void 0 : logger.error("Retrieving an access token failed: " + e_2.message);
                    }
                    return [3 /*break*/, 6];
                case 6:
                    logger === null || logger === void 0 ? void 0 : logger.warn('No valid token available; trying to refresh');
                    if (!provider.refresh) return [3 /*break*/, 12];
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 11, , 12]);
                    return [4 /*yield*/, provider.refresh()];
                case 8:
                    newToken = _a.sent();
                    if (!newToken) return [3 /*break*/, 10];
                    return [4 /*yield*/, getTokenInfo(newToken.accessToken)];
                case 9:
                    tokenInfo = _a.sent();
                    return [2 /*return*/, { accessToken: newToken, tokenInfo: tokenInfo }];
                case 10: return [3 /*break*/, 12];
                case 11:
                    e_3 = _a.sent();
                    if (e_3 instanceof InvalidTokenError_1.InvalidTokenError) {
                        lastTokenError = e_3;
                    }
                    else {
                        logger === null || logger === void 0 ? void 0 : logger.error("Refreshing the access token failed: " + e_3.message);
                    }
                    return [3 /*break*/, 12];
                case 12: throw lastTokenError !== null && lastTokenError !== void 0 ? lastTokenError : new Error('Could not retrieve a valid token');
            }
        });
    });
}
exports.getValidTokenFromProvider = getValidTokenFromProvider;
