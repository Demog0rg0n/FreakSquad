"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelixExtensionsApi = void 0;
var tslib_1 = require("tslib");
var twitch_api_call_1 = require("twitch-api-call");
var twitch_common_1 = require("twitch-common");
var BaseApi_1 = require("../../BaseApi");
var HelixPaginatedRequest_1 = require("../HelixPaginatedRequest");
var HelixPaginatedResult_1 = require("../HelixPaginatedResult");
var HelixPagination_1 = require("../HelixPagination");
var HelixExtensionTransaction_1 = require("./HelixExtensionTransaction");
/**
 * The Helix API methods that deal with extensions.
 *
 * Can be accessed using `client.helix.extensions` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const transactions = await api.helix.extionsions.getExtensionTransactions('abcd');
 * ```
 */
var HelixExtensionsApi = /** @class */ (function (_super) {
    tslib_1.__extends(HelixExtensionsApi, _super);
    function HelixExtensionsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of transactions for the given extension.
     *
     * @param extensionId The ID of the extension to retrieve transactions for.
     * @param filter Additional filters.
     */
    HelixExtensionsApi.prototype.getExtensionTransactions = function (extensionId, filter) {
        if (filter === void 0) { filter = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.callApi({
                            type: twitch_api_call_1.TwitchApiCallType.Helix,
                            url: 'extensions/transactions',
                            query: tslib_1.__assign({ extension_id: extensionId, id: filter.transactionIds }, HelixPagination_1.makePaginationQuery(filter))
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, HelixPaginatedResult_1.createPaginatedResult(result, HelixExtensionTransaction_1.HelixExtensionTransaction, this._client)];
                }
            });
        });
    };
    /**
     * Creates a paginator for transactions for the given extension.
     *
     * @param extensionId The ID of the extension to retrieve transactions for.
     * @param filter Additional filters.
     */
    HelixExtensionsApi.prototype.getExtensionTransactionsPaginated = function (extensionId, filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new HelixPaginatedRequest_1.HelixPaginatedRequest({
            url: 'extensions/transactions',
            query: {
                extension_id: extensionId,
                id: filter.transactionIds
            }
        }, this._client, function (data) { return new HelixExtensionTransaction_1.HelixExtensionTransaction(data, _this._client); });
    };
    HelixExtensionsApi = tslib_1.__decorate([
        twitch_common_1.rtfm('twitch', 'HelixExtensionsApi')
    ], HelixExtensionsApi);
    return HelixExtensionsApi;
}(BaseApi_1.BaseApi));
exports.HelixExtensionsApi = HelixExtensionsApi;
