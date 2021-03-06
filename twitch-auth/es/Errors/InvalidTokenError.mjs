import { __extends } from "tslib";
import { CustomError } from 'twitch-common';
/**
 * Thrown whenever an invalid token is supplied.
 */
var InvalidTokenError = /** @class */ (function (_super) {
    __extends(InvalidTokenError, _super);
    /** @private */
    function InvalidTokenError() {
        return _super.call(this, 'Invalid token supplied') || this;
    }
    return InvalidTokenError;
}(CustomError));
export { InvalidTokenError };
