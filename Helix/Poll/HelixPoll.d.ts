import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
import type { HelixPollChoiceData } from './HelixPollChoice';
import { HelixPollChoice } from './HelixPollChoice';
/**
 * The different statuses a poll can have.
 */
declare type HelixPollStatus = 'ACTIVE' | 'COMPLETED' | 'TERMINATED' | 'ARCHIVED' | 'MODERATED' | 'INVALID';
/** @private */
export interface HelixPollData {
    id: string;
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
    title: string;
    choices: HelixPollChoiceData[];
    bits_voting_enabled: boolean;
    bits_per_vote: number;
    channel_points_voting_enabled: boolean;
    channel_points_per_vote: number;
    status: HelixPollStatus;
    duration: number;
    started_at: string;
}
/**
 * A channel poll.
 */
export declare class HelixPoll {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixPollData, client: ApiClient);
    /**
     * The ID of the poll.
     */
    get id(): string;
    /**
     * The ID of the broadcaster.
     */
    get broadcasterId(): string;
    /**
     * The name of the broadcaster.
     */
    get broadcasterName(): string;
    /**
     * The display name of the broadcaster.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves more information about the broadcaster.
     */
    getBroadcaster(): Promise<HelixUser>;
    /**
     * The title of the poll.
     */
    get title(): string;
    /**
     * Whether voting with bits is enabled for the poll.
     */
    get isBitsVotingEnabled(): boolean;
    /**
     * The amount of bits that a vote costs.
     */
    get bitsPerVote(): number;
    /**
     * Whether voting with channel points is enabled for the poll.
     */
    get isChannelPointsVotingEnabled(): boolean;
    /**
     * The amount of channel points that a vote costs.
     */
    get channelPointsPerVote(): number;
    /**
     * The status of the poll.
     */
    get status(): HelixPollStatus;
    /**
     * The duration of the poll, in seconds.
     */
    get durationInSeconds(): number;
    /**
     * The date when the poll started.
     */
    get startDate(): Date;
    /**
     * The date when the poll ended or will end.
     */
    get endDate(): Date;
    /**
     * The choices of the poll.
     */
    get choices(): HelixPollChoice[];
}
export {};
