"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixCheermoteList = void 0;
var tslib_1 = require("tslib");
var shared_utils_1 = require("@d-fischer/shared-utils");
var twitch_common_1 = require("twitch-common");
var BaseCheermoteList_1 = require("../../Shared/BaseCheermoteList");
/**
 * A list of cheermotes you can use globally or in a specific channel, depending on how you fetched the list.
 *
 * @inheritDoc
 */
var HelixCheermoteList = /** @class */ (function (_super) {
    tslib_1.__extends(HelixCheermoteList, _super);
    /** @private */
    function HelixCheermoteList(data, client) {
        var _this = _super.call(this) || this;
        _this._data = shared_utils_1.indexBy(data, function (action) { return action.prefix.toLowerCase(); });
        _this._client = client;
        return _this;
    }
    /**
     * Gets the URL and color needed to properly represent a cheer of the given amount of bits with the given prefix.
     *
     * @param name The name/prefix of the cheermote.
     * @param bits The amount of bits cheered.
     * @param format The format of the cheermote you want to request.
     */
    HelixCheermoteList.prototype.getCheermoteDisplayInfo = function (name, bits, format) {
        var _a, _b, _c;
        if (format === void 0) { format = {}; }
        name = name.toLowerCase();
        var cheermoteDefaults = this._client.cheermoteDefaults;
        var background = (_a = format.background) !== null && _a !== void 0 ? _a : cheermoteDefaults.defaultBackground;
        var state = (_b = format.state) !== null && _b !== void 0 ? _b : cheermoteDefaults.defaultState;
        var scale = (_c = format.scale) !== null && _c !== void 0 ? _c : cheermoteDefaults.defaultScale;
        var tiers = this._data[name].tiers;
        var correctTier = tiers.sort(function (a, b) { return b.min_bits - a.min_bits; }).find(function (tier) { return tier.min_bits <= bits; });
        if (!correctTier) {
            throw new twitch_common_1.HellFreezesOverError("Cheermote \"" + name + "\" does not have an applicable tier for " + bits + " bits");
        }
        return {
            // @ts-expect-error TS7015 TODO will be fixed with the removal of enums
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
            url: correctTier.images[background][state][scale],
            color: correctTier.color
        };
    };
    /**
     * Gets all possible cheermote names.
     */
    HelixCheermoteList.prototype.getPossibleNames = function () {
        return Object.keys(this._data);
    };
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixCheermoteList.prototype, "_data", void 0);
    tslib_1.__decorate([
        shared_utils_1.Enumerable(false)
    ], HelixCheermoteList.prototype, "_client", void 0);
    HelixCheermoteList = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixCheermoteList')
    ], HelixCheermoteList);
    return HelixCheermoteList;
}(BaseCheermoteList_1.BaseCheermoteList));
exports.HelixCheermoteList = HelixCheermoteList;
