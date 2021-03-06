import type { ApiClient } from '../../../ApiClient';
import type { HelixUser } from '../User/HelixUser';
import type { HelixEmoteData } from './HelixEmote';
import { HelixEmote } from './HelixEmote';
/** @private */
export interface HelixEmoteFromSetData extends HelixEmoteData {
    emote_type: string;
    emote_set_id: string;
    owner_id: string;
}
/**
 * A Twitch Channel emote.
 *
 * @inheritDoc
 */
export declare class HelixEmoteFromSet extends HelixEmote {
    /** @private */ protected readonly _data: HelixEmoteFromSetData;
    private readonly _client;
    constructor(data: HelixEmoteFromSetData, client: ApiClient);
    /**
     * The type of the emote.
     *
     * Known values are: `subscriptions`, `bitstier`, `follower`, `rewards`, `globals`, `smilies`, `prime`, `limitedtime`.
     *
     * This list may be non-exhaustive.
     */
    get type(): string;
    /**
     * The ID of the emote set the emote is part of.
     */
    get emoteSetId(): string;
    /**
     * The ID of the user that owns the emote, or null if the emote is not owned by a user.
     */
    get ownerId(): string | null;
    /**
     * Retrieves more info about the user that owns the emote, or null if the emote is not owned by a user.
     */
    getOwner(): Promise<HelixUser | null>;
}
