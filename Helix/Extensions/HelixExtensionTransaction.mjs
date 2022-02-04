import { __awaiter, __decorate, __generator } from "tslib";
import { Enumerable } from '@d-fischer/shared-utils';
import { rtfm } from 'twitch-common';
/**
 * A bits transaction made inside an extension.
 */
var HelixExtensionTransaction = /** @class */ (function () {
    /** @private */
    function HelixExtensionTransaction(data, client) {
        this._data = data;
        this._client = client;
    }
    Object.defineProperty(HelixExtensionTransaction.prototype, "id", {
        /**
         * The ID of the transaction.
         */
        get: function () {
            return this._data.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "transactionDate", {
        /**
         * The time when the transaction was made.
         */
        get: function () {
            return new Date(this._data.timestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "broadcasterId", {
        /**
         * The ID of the broadcaster that runs the extension on their channel.
         */
        get: function () {
            return this._data.broadcaster_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "broadcasterName", {
        /**
         * The name of the broadcaster that runs the extension on their channel.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "broadcasterDisplayName", {
        /**
         * The display name of the broadcaster that runs the extension on their channel.
         */
        get: function () {
            return this._data.broadcaster_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the broadcaster that runs the extension on their channel.
     */
    HelixExtensionTransaction.prototype.getBroadcaster = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.broadcaster_id)];
            });
        });
    };
    Object.defineProperty(HelixExtensionTransaction.prototype, "userId", {
        /**
         * The ID of the user that made the transaction.
         */
        get: function () {
            return this._data.user_id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "userName", {
        /**
         * The name of the user that made the transaction.
         */
        get: function () {
            return this._data.user_login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "userDisplayName", {
        /**
         * The display name of the user that made the transaction.
         */
        get: function () {
            return this._data.user_name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves information about the user that made the transaction.
     */
    HelixExtensionTransaction.prototype.getUser = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.helix.users.getUserById(this._data.user_id)];
            });
        });
    };
    Object.defineProperty(HelixExtensionTransaction.prototype, "productType", {
        /**
         * The product type. Currently always BITS_IN_EXTENSION.
         */
        get: function () {
            return this._data.product_type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productSku", {
        /**
         * The product SKU.
         */
        get: function () {
            return this._data.product_data.sku;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productSKU", {
        /** @deprecated Use productSku instead. */
        // eslint-disable-next-line @typescript-eslint/naming-convention
        get: function () {
            return this._data.product_data.sku;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productCost", {
        /**
         * The cost of the product, in bits.
         */
        get: function () {
            return this._data.product_data.cost.amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productDisplayName", {
        /**
         * The display name of the product.
         */
        get: function () {
            return this._data.product_data.displayName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HelixExtensionTransaction.prototype, "productInDevelopment", {
        /**
         * Whether the product is in development.
         */
        get: function () {
            return this._data.product_data.inDevelopment;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], HelixExtensionTransaction.prototype, "_data", void 0);
    __decorate([
        Enumerable(false)
    ], HelixExtensionTransaction.prototype, "_client", void 0);
    HelixExtensionTransaction = __decorate([
        rtfm('twitch', 'HelixExtensionTransaction', 'id')
    ], HelixExtensionTransaction);
    return HelixExtensionTransaction;
}());
export { HelixExtensionTransaction };