import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
/**
 * The type of a Hype Train contribution.
 */
export declare type HelixHypeTrainContributionType = 'BITS' | 'SUBS';
/** @private */
export interface HelixHypeTrainContributionData {
    total: number;
    user: string;
    type: HelixHypeTrainContributionType;
}
/**
 * A Hype Train contributor.
 */
export declare class HelixHypeTrainContribution {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixHypeTrainContributionData, client: ApiClient);
    /**
     * The ID of the user contributing to the Hype Train.
     */
    get userId(): string;
    /**
     * Retrieves additional information about the user contributing to the Hype Train.
     */
    getUser(): Promise<HelixUser | null>;
    /**
     * The Hype Train event type.
     */
    get type(): HelixHypeTrainContributionType;
    /**
     * The total contribution amount in subs or bits.
     */
    get total(): number;
}
