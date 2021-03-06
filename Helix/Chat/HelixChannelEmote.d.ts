import type { ApiClient } from '../../../ApiClient';
import type { HelixEmoteData } from './HelixEmote';
import { HelixEmote } from './HelixEmote';
import type { HelixEmoteFromSet } from './HelixEmoteFromSet';
/**
 * The subscription tier necessary to unlock an emote. 1000 means tier 1, and so on.
 */
export declare type HelixChannelEmoteSubscriptionTier = '1000' | '2000' | '3000';
/** @private */
export interface HelixChannelEmoteData extends HelixEmoteData {
    tier: HelixChannelEmoteSubscriptionTier | '';
    emote_type: string;
    emote_set_id: string;
}
/**
 * A Twitch Channel emote.
 *
 * @inheritDoc
 */
export declare class HelixChannelEmote extends HelixEmote {
    /** @private */ protected readonly _data: HelixChannelEmoteData;
    private readonly _client;
    constructor(data: HelixChannelEmoteData, client: ApiClient);
    /**
     * The subscription tier necessary to unlock the emote, or null if the emote is not a subscription emote.
     */
    get tier(): HelixChannelEmoteSubscriptionTier | null;
    /**
     * The type of the emote.
     *
     * There are many types of emotes that Twitch seems to arbitrarily assign. Do not rely on this value.
     */
    get type(): string;
    /**
     * The ID of the emote set the emote is part of.
     */
    get emoteSetId(): string;
    /**
     * Retrieves all emotes from the emote's set.
     */
    getAllEmotesFromSet(): Promise<HelixEmoteFromSet[]>;
}
