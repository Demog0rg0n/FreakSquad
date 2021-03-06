import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import type { HelixForwardPagination } from '../HelixPagination';
import { HelixPaginatedScheduleSegmentRequest } from './HelixPaginatedScheduleSegmentRequest';
import { HelixSchedule } from './HelixSchedule';
import { HelixScheduleSegment } from './HelixScheduleSegment';
/**
 * Filters for the schedule request.
 */
export interface HelixScheduleFilter {
    /**
     * The earliest date to find schedule segments for.
     */
    startDate?: string;
    /**
     * The offset from UTC you request for, to ensure everything goes to the correct day.
     */
    utcOffset?: number;
}
/**
 * @inheritDoc
 */
export interface HelixPaginatedScheduleFilter extends HelixScheduleFilter, HelixForwardPagination {
}
/**
 * The result of a schedule request.
 */
export interface HelixPaginatedScheduleResult {
    /**
     * The actual schedule object.
     */
    data: HelixSchedule;
    /**
     * The pagination cursor.
     */
    cursor?: string;
}
/**
 * Vacation mode settings to update using {@HelixScheduleApi#updateScheduleSettings}.
 */
interface HelixScheduleSettingsUpdateVacation {
    /**
     * The date when the vacation will start.
     */
    startDate: string;
    /**
     * The date when the vacation will end.
     */
    endDate: string;
    /**
     * The timezone for the given dates.
     */
    timezone: string;
}
/**
 * Schedule settings to update using {@HelixScheduleApi#updateScheduleSettings}.
 */
export interface HelixScheduleSettingsUpdate {
    /**
     * Vacation mode settings.
     *
     * Note that not setting this (or setting it to undefined) does not change the vacation settings, but setting it to null disables vacation mode.
     */
    vacation?: HelixScheduleSettingsUpdateVacation | null;
}
/**
 * The data required to create a schedule segment.
 */
export interface HelixCreateScheduleSegmentData {
    /**
     * The date when the segment starts. Must be in UTC.
     */
    startDate: string;
    /**
     * The timezone the segment is created from.
     *
     * This is used for managing DST shifts only. The `startDate` must always be given in UTC.
     */
    timezone: string;
    /**
     * Whether the segment is recurring every week.
     */
    isRecurring: boolean;
    /**
     * The planned duration of the segment, in minutes. Defaults to 240 (4 hours).
     */
    duration?: number;
    /**
     * The ID of the category of the segment.
     */
    categoryId?: string;
    /**
     * The title of the segment.
     */
    title?: string;
}
/**
 * The data required to update a schedule segment.
 */
export interface HelixUpdateScheduleSegmentData {
    /**
     * The date when the segment starts. Must be in UTC.
     */
    startDate?: string;
    /**
     * The timezone the segment is created from.
     *
     * This is used for managing DST shifts only. The `startDate` must always be given in UTC.
     */
    timezone?: string;
    /**
     * The planned duration of the segment, in minutes. Defaults to 240 (4 hours).
     */
    duration?: number;
    /**
     * The ID of the category of the segment.
     */
    categoryId?: string;
    /**
     * The title of the segment.
     */
    title?: string;
    /**
     * Whether the schedule broadcast is canceled.
     */
    isCanceled?: boolean;
}
/**
 * The Helix API methods that deal with schedules.
 *
 * Can be accessed using `client.helix.schedule` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const { data: schedule } = await api.helix.schedule.getSchedule('61369223');
 */
export declare class HelixScheduleApi extends BaseApi {
    /**
     * Retrieves the schedule for a given broadcaster.
     *
     * @param broadcaster The broadcaster to get the schedule of.
     * @param filter
     *
     * @expandParams
     */
    getSchedule(broadcaster: UserIdResolvable, filter?: HelixPaginatedScheduleFilter): Promise<HelixPaginatedScheduleResult>;
    /**
     * Creates a paginator for schedule segments for a given broadcaster.
     *
     * @param broadcaster The broadcaster to get the schedule segments of.
     * @param filter
     *
     * @expandParams
     */
    getScheduleSegmentsPaginated(broadcaster: UserIdResolvable, filter?: HelixScheduleFilter): HelixPaginatedScheduleSegmentRequest;
    /**
     * Retrieves a set of schedule segments by IDs.
     *
     * @param broadcaster The broadcaster to get schedule segments of.
     * @param ids The IDs of the schedule segments.
     */
    getScheduleSegmentsByIds(broadcaster: UserIdResolvable, ids: string[]): Promise<HelixScheduleSegment[]>;
    /**
     * Retrieves a single schedule segment by ID.
     *
     * @param broadcaster The broadcaster to get a schedule segment of.
     * @param id The ID of the schedule segment.
     */
    getScheduleSegmentById(broadcaster: UserIdResolvable, id: string): Promise<HelixScheduleSegment | null>;
    /**
     * Retrieves the schedule for a given broadcaster in iCal format.
     *
     * @param broadcaster The broadcaster to get the schedule for.
     */
    getScheduleAsIcal(broadcaster: UserIdResolvable): Promise<string>;
    /**
     * Updates the schedule settings of a given broadcaster.
     *
     * @param broadcaster The broadcaster to update the schedule settings for.
     * @param settings
     *
     * @expandParams
     */
    updateScheduleSettings(broadcaster: UserIdResolvable, settings: HelixScheduleSettingsUpdate): Promise<void>;
    /**
     * Creates a new segment in a given broadcaster's schedule.
     *
     * @param broadcaster The broadcaster to create a new schedule segment for.
     * @param data
     *
     * @expandParams
     */
    createScheduleSegment(broadcaster: UserIdResolvable, data: HelixCreateScheduleSegmentData): Promise<HelixScheduleSegment>;
    /**
     * Updates a segment in a given broadcaster's schedule.
     *
     * @param broadcaster The broadcaster to create a new schedule segment for.
     * @param segmentId The ID of the segment to update.
     * @param data
     *
     * @expandParams
     */
    updateScheduleSegment(broadcaster: UserIdResolvable, segmentId: string, data: HelixUpdateScheduleSegmentData): Promise<HelixScheduleSegment>;
    /**
     * Deletes a segment in a given broadcaster's schedule.
     *
     * @param broadcaster The broadcaster to create a new schedule segment for.
     * @param segmentId The ID of the segment to update.
     */
    deleteScheduleSegment(broadcaster: UserIdResolvable, segmentId: string): Promise<void>;
}
export {};
