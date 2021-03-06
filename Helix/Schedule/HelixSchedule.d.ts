import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
import type { HelixScheduleSegmentData } from './HelixScheduleSegment';
import { HelixScheduleSegment } from './HelixScheduleSegment';
/** @private */
export interface HelixScheduleVacationData {
    start_time: string;
    end_time: string;
}
/** @private */
export interface HelixScheduleData {
    segments: HelixScheduleSegmentData[];
    broadcaster_id: string;
    broadcaster_name: string;
    broadcaster_login: string;
    vacation: HelixScheduleVacationData | null;
}
/** @private */
export interface HelixScheduleResponse {
    data: HelixScheduleData;
    pagination: {
        cursor?: string;
    };
}
/**
 * A schedule of a channel.
 */
export declare class HelixSchedule {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixScheduleData, client: ApiClient);
    /**
     * The segments of the schedule.
     */
    get segments(): HelixScheduleSegment[];
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
     * The date when the current vacation started, or null if the schedule is not in vacation mode.
     */
    get vacationStartDate(): Date | null;
    /**
     * The date when the current vacation ends, or null if the schedule is not in vacation mode.
     */
    get vacationEndDate(): Date | null;
}
