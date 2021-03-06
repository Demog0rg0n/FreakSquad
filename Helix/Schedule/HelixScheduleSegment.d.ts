import type { ApiClient } from '../../../ApiClient';
import type { HelixGame } from '../Game/HelixGame';
/** @private */
export interface HelixScheduleSegmentCategoryData {
    id: string;
    name: string;
}
/** @private */
export interface HelixScheduleSegmentData {
    id: string;
    start_time: string;
    end_time: string;
    title: string;
    canceled_until: string | null;
    category: HelixScheduleSegmentCategoryData | null;
    is_recurring: boolean;
}
/**
 * A segment of a schedule.
 */
export declare class HelixScheduleSegment {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixScheduleSegmentData, client: ApiClient);
    /**
     * The ID of the segment.
     */
    get id(): string;
    /**
     * The date when the segment starts.
     */
    get startDate(): Date;
    /**
     * The date when the segment ends.
     */
    get endDate(): Date;
    /**
     * The title of the segment.
     */
    get title(): string;
    /**
     * The date up to which the segment is canceled.
     */
    get cancelEndDate(): Date | null;
    /**
     * The ID of the category the segment is scheduled for, or null if no category is specified.
     */
    get categoryId(): string | null;
    /**
     * The name of the category the segment is scheduled for, or null if no category is specified.
     */
    get categoryName(): string | null;
    /**
     * Retrieves more information about the category the segment is scheduled for, or null if no category is specified.
     */
    getCategory(): Promise<HelixGame | null>;
    /**
     * Whether the segment is recurring every week.
     */
    get isRecurring(): boolean;
}
