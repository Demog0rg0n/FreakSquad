export declare type HelixChatBadgeScale = 1 | 2 | 4;
/** @private */
export interface HelixChatBadgeVersionData {
    id: string;
    image_url_1x: string;
    image_url_2x: string;
    image_url_4x: string;
}
/**
 * A version of a chat badge.
 */
export declare class HelixChatBadgeVersion {
    private readonly _data;
    /** @private */
    constructor(data: HelixChatBadgeVersionData);
    /**
     * The badge version ID.
     */
    get id(): string;
    /**
     * Gets an image URL for the given scale.
     *
     * @param scale The scale of the badge image.
     */
    getImageUrl(scale: HelixChatBadgeScale): string;
}
