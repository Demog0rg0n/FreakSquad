import type { HelixChatBadgeVersionData } from './HelixChatBadgeVersion';
import { HelixChatBadgeVersion } from './HelixChatBadgeVersion';
/** @private */
export interface HelixChatBadgeSetData {
    set_id: string;
    versions: HelixChatBadgeVersionData[];
}
/**
 * A version of a chat badge.
 */
export declare class HelixChatBadgeSet {
    private readonly _data;
    /** @private */
    constructor(data: HelixChatBadgeSetData);
    /**
     * The badge set ID.
     */
    get id(): string;
    /**
     * All versions of the badge.
     */
    get versions(): HelixChatBadgeVersion[];
    /**
     * Retrieves a specific version of the badge.
     *
     * @param versionId The ID of the version.
     */
    getVersion(versionId: string): HelixChatBadgeVersion | null;
}
