import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
import type { HelixExtensionProductData } from './HelixExtensionProductData';
declare type HelixExtensionProductType = 'BITS_IN_EXTENSION';
/** @private */
export interface HelixExtensionTransactionData {
    id: string;
    timestamp: string;
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    user_id: string;
    user_login: string;
    user_name: string;
    product_type: HelixExtensionProductType;
    product_data: HelixExtensionProductData;
}
/**
 * A bits transaction made inside an extension.
 */
export declare class HelixExtensionTransaction {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixExtensionTransactionData, client: ApiClient);
    /**
     * The ID of the transaction.
     */
    get id(): string;
    /**
     * The time when the transaction was made.
     */
    get transactionDate(): Date;
    /**
     * The ID of the broadcaster that runs the extension on their channel.
     */
    get broadcasterId(): string;
    /**
     * The name of the broadcaster that runs the extension on their channel.
     */
    get broadcasterName(): string;
    /**
     * The display name of the broadcaster that runs the extension on their channel.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves information about the broadcaster that runs the extension on their channel.
     */
    getBroadcaster(): Promise<HelixUser | null>;
    /**
     * The ID of the user that made the transaction.
     */
    get userId(): string;
    /**
     * The name of the user that made the transaction.
     */
    get userName(): string;
    /**
     * The display name of the user that made the transaction.
     */
    get userDisplayName(): string;
    /**
     * Retrieves information about the user that made the transaction.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The product type. Currently always BITS_IN_EXTENSION.
     */
    get productType(): HelixExtensionProductType;
    /**
     * The product SKU.
     */
    get productSku(): string;
    /** @deprecated Use productSku instead. */
    get productSKU(): string;
    /**
     * The cost of the product, in bits.
     */
    get productCost(): number;
    /**
     * The display name of the product.
     */
    get productDisplayName(): string;
    /**
     * Whether the product is in development.
     */
    get productInDevelopment(): boolean;
}
export {};
