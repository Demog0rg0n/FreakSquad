import { __extends } from "tslib";
import { CustomError } from 'twitch-common';
/**
 * Thrown whenever a different token type (user vs. app) is expected in the method you're calling.
 */
var InvalidTokenTypeError = /** @class */ (function (_super) {
    __extends(InvalidTokenTypeError, _super);
    function InvalidTokenTypeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidTokenTypeError;
}(CustomError));
export { InvalidTokenTypeError };
