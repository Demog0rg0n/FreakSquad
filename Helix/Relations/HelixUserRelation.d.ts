import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/** @private */
export interface HelixUserRelationData {
    user_id: string;
    user_login: string;
    user_name: string;
}
/**
 * A relation of anything with a user.
 */
export declare class HelixUserRelation {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixUserRelationData, client: ApiClient);
    /**
     * The ID of the user.
     */
    get id(): string;
    /**
     * The name of the user.
     */
    get name(): string;
    /**
     * The display name of the user.
     */
    get displayName(): string;
    /**
     * Retrieves additional information about the user.
     */
    getUser(): Promise<HelixUser | null>;
}
