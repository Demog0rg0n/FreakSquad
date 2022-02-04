import { __awaiter, __extends, __generator } from "tslib";
import { ResponseBasedRateLimiter } from '@d-fischer/rate-limiter';
import { callTwitchApiRaw } from 'twitch-api-call';
/** @private */
var HelixRateLimiter = /** @class */ (function (_super) {
    __extends(HelixRateLimiter, _super);
    function HelixRateLimiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelixRateLimiter.prototype.doRequest = function (_a) {
        var options = _a.options, clientId = _a.clientId, accessToken = _a.accessToken, fetchOptions = _a.fetchOptions;
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, callTwitchApiRaw(options, clientId, accessToken, fetchOptions)];
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
}(ResponseBasedRateLimiter));
export { HelixRateLimiter };
