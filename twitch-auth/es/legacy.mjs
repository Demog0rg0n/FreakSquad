import { __awaiter, __generator } from "tslib";
import deprecate from '@d-fischer/deprecate';
import { callTwitchApi, TwitchApiCallType } from 'twitch-api-call';
/** @deprecated Use `exchangeCode` instead. */
export function getUserAccessToken(creds, code, redirectUri) {
    if (redirectUri === void 0) { redirectUri = 'http://localhost'; }
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            deprecate('[twitch-auth] getUserAccessToken', 'Use exchangeCode instead.');
            return [2 /*return*/, callTwitchApi({
                    type: TwitchApiCallType.Auth,
                    url: 'token',
                    method: 'POST',
                    query: {
                        grant_type: 'authorization_code',
                        client_id: creds.client_id,
                        client_secret: creds.client_secret,
                        code: code,
                        redirect_uri: redirectUri
                    }
                })];
        });
    });
}
/** @deprecated Use `refreshUserToken` instead. */
export function refreshUserAccessToken(creds, refreshToken) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            deprecate('[twitch-auth] refreshUserAccessToken', 'Use refreshUserToken instead.');
            return [2 /*return*/, callTwitchApi({
                    type: TwitchApiCallType.Auth,
                    url: 'token',
                    method: 'POST',
                    query: {
                        grant_type: 'refresh_token',
                        client_id: creds.client_id,
                        client_secret: creds.client_secret,
                        refresh_token: refreshToken
                    }
                })];
        });
    });
}
/** @deprecated Use `getAppToken` instead. */
export function getAppAccessToken(creds) {
    return __awaiter(this, void 0, Promise, function () {
        return __generator(this, function (_a) {
            deprecate('[twitch-auth] getAppAccessToken', 'Use getAppToken instead.');
            return [2 /*return*/, callTwitchApi({
                    type: TwitchApiCallType.Auth,
                    url: 'token',
                    method: 'POST',
                    query: {
                        grant_type: 'client_credentials',
                        client_id: creds.client_id,
                        client_secret: creds.client_secret
                    }
                })];
        });
    });
}
