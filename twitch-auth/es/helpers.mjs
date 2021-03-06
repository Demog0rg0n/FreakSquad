import { __awaiter, __generator } from "tslib";
import { callTwitchApi, HttpStatusCodeError, TwitchApiCallType } from 'twitch-api-call';
import { AccessToken } from "./AccessToken.mjs";
import { InvalidTokenError } from "./Errors/InvalidTokenError.mjs";
import { TokenInfo } from "./TokenInfo.mjs";
/**
 * Retrieves an access token with your client credentials and an authorization code.
 *
 * @param clientId The client ID of your application.
 * @param clientSecret The client secret of your application.
 * @param code The authorization code.
 * @param redirectUri The redirect URI. This serves no real purpose here, but must still match one of the redirect URIs you configured in the Twitch Developer dashboard.
 */
export function exchangeCode(clientId, clientSecret, code, redirectUri) {
    return __awaiter(this, void 0, Promise, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = AccessToken.bind;
                    return [4 /*yield*/, callTwitchApi({
                            type: TwitchApiCallType.Auth,
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
                case 1: return [2 /*return*/, new (_a.apply(AccessToken, [void 0, _b.sent()]))()];
            }
        });
    });
}
/**
 * Retrieves an app access token with your client credentials.
 *
 * @param clientId The client ID of your application.
 * @param clientSecret The client secret of your application.
 * @param clientSecret
 */
export function getAppToken(clientId, clientSecret) {
    return __awaiter(this, void 0, Promise, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = AccessToken.bind;
                    return [4 /*yield*/, callTwitchApi({
                            type: TwitchApiCallType.Auth,
                            url: 'token',
                            method: 'POST',
                            query: {
                                grant_type: 'client_credentials',
                                client_id: clientId,
                                client_secret: clientSecret
                            }
                        })];
                case 1: return [2 /*return*/, new (_a.apply(AccessToken, [void 0, _b.sent()]))()];
            }
        });
    });
}
/**
 * Refreshes an expired access token with your client credentials and the refresh token that was given by the initial authentication.
 *
 * @param clientId The client ID of your application.
 * @param clientSecret The client secret of your application.
 * @param refreshToken The refresh token.
 */
export function refreshUserToken(clientId, clientSecret, refreshToken) {
    return __awaiter(this, void 0, Promise, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = AccessToken.bind;
                    return [4 /*yield*/, callTwitchApi({
                            type: TwitchApiCallType.Auth,
                            url: 'token',
                            method: 'POST',
                            query: {
                                grant_type: 'refresh_token',
                                client_id: clientId,
                                client_secret: clientSecret,
                                refresh_token: refreshToken
                            }
                        })];
                case 1: return [2 /*return*/, new (_a.apply(AccessToken, [void 0, _b.sent()]))()];
            }
        });
    });
}
/**
 * Revokes an access token.
 *
 * @param clientId The client ID of your application.
 * @param accessToken The access token.
 */
export function revokeToken(clientId, accessToken) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, callTwitchApi({
                        type: TwitchApiCallType.Auth,
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
/**
 * Retrieves information about an access token.
 *
 * @param clientId The client ID of your application.
 * @param accessToken The access token to get the information of.
 *
 * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
 */
export function getTokenInfo(accessToken, clientId) {
    return __awaiter(this, void 0, Promise, function () {
        var data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, callTwitchApi({ type: TwitchApiCallType.Auth, url: 'validate' }, clientId, accessToken)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, new TokenInfo(data)];
                case 2:
                    e_1 = _a.sent();
                    if (e_1 instanceof HttpStatusCodeError && e_1.statusCode === 401) {
                        throw new InvalidTokenError();
                    }
                    throw e_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
/** @private */
export function getValidTokenFromProvider(provider, scopes, logger) {
    return __awaiter(this, void 0, Promise, function () {
        var lastTokenError, accessToken, tokenInfo, e_2, newToken, tokenInfo, e_3;
        return __generator(this, function (_a) {
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
                    if (e_2 instanceof InvalidTokenError) {
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
                    if (e_3 instanceof InvalidTokenError) {
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
