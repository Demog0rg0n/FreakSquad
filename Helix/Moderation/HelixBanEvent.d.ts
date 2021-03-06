import type { ApiClient } from '../../../ApiClient';
import type { HelixEventData } from '../HelixEvent';
import type { HelixUser } from '../User/HelixUser';
import type { HelixBanData } from './HelixBan';
import { HelixBan } from './HelixBan';
/**
 * The different types a ban event can have.
 */
export declare enum HelixBanEventType {
    /**
     * Sent when a user gets banned.
     */
    Ban = "moderation.user.ban",
    /**
     * Sent when a user gets unbanned.
     */
    Unban = "moderation.user.unban"
}
/** @private */
export interface HelixBanEventDetail extends HelixBanData {
    broadcaster_id: string;
    broadcaster_login: string;
    broadcaster_name: string;
}
/** @private */
export declare type HelixBanEventData = HelixEventData<HelixBanEventDetail, HelixBanEventType>;
/**
 * An event that indicates the change of a ban status, i.e. banning or unbanning a user.
 *
 * @inheritDoc
 */
export declare class HelixBanEvent extends HelixBan {
    private readonly _eventData;
    /** @private */
    constructor(eventData: HelixBanEventData, client: ApiClient);
    /**
     * The unique ID of the ban event.
     */
    get eventId(): string;
    /**
     * The type of the ban event.
     */
    get eventType(): HelixBanEventType;
    /**
     * The date of the ban event.
     */
    get eventDate(): Date;
    /**
     * The version of the ban event.
     */
    get eventVersion(): string;
    /**
     * The id of the broadcaster from whose chat the user was banned/unbanned.
     */
    get broadcasterId(): string;
    /**
     * The name of the broadcaster from whose chat the user was banned/unbanned.
     */
    get broadcasterName(): string;
    /**
     * The display name of the broadcaster from whose chat the user was banned/unbanned.
     */
    get broadcasterDisplayName(): string;
    /**
     * Retrieves more information about the broadcaster.
     */
    getBroadcaster(): Promise<HelixUser | null>;
}
