"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixRateLimiter = void 0;
var tslib_1 = require("tslib");
var rate_limiter_1 = require("@d-fischer/rate-limiter");
var twitch_api_call_1 = require("twitch-api-call");
/** @private */
var HelixRateLimiter = /** @class */ (function (_super) {
    tslib_1.__extends(HelixRateLimiter, _super);
    function HelixRateLimiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixRateLimiter.prototype.doRequest = function (_a) {
        var options = _a.options, clientId = _a.clientId, accessToken = _a.accessToken, fetchOptions = _a.fetchOptions;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, twitch_api_call_1.callTwitchApiRaw(options, clientId, accessToken, fetchOptions)];
            });
        });
    };
    HelixRateLimiter.prototype.needsToRetryAfter = function (res) {
        if (res.status === 429) {
            return +res.headers.get('ratelimit-reset') * 1000 - Date.now();
        }
        return null;
    };
    HelixRateLimiter.prototype.getParametersFromResponse = function (res) {
        var headers = res.headers;
        return {
            limit: +headers.get('ratelimit-limit'),
            remaining: +headers.get('ratelimit-remaining'),
            resetsAt: +headers.get('ratelimit-reset') * 1000
        };
    };
    return HelixRateLimiter;
}(rate_limiter_1.ResponseBasedRateLimiter));
exports.HelixRateLimiter = HelixRateLimiter;
