import type { ApiClient } from '../../../ApiClient';
import type { HelixDateRangeData } from '../HelixDateRangeData';
import type { HelixResponse } from '../HelixResponse';
import type { HelixBitsLeaderboardEntryData } from './HelixBitsLeaderboardEntry';
import { HelixBitsLeaderboardEntry } from './HelixBitsLeaderboardEntry';
/** @private */
export interface HelixBitsLeaderboardResponse extends HelixResponse<HelixBitsLeaderboardEntryData> {
    date_range: HelixDateRangeData;
    total: number;
}
/**
 * A leaderboard where the users who used the most bits to a broadcaster are listed.
 */
export declare class HelixBitsLeaderboard {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixBitsLeaderboardResponse, client: ApiClient);
    /**
     * The entries of the leaderboard.
     */
    get entries(): HelixBitsLeaderboardEntry[];
    /**
     * The total amount of people on the requested leaderboard.
     */
    get totalCount(): number;
}
