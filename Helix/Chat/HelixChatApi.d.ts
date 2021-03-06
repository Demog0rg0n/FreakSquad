import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixChannelEmote } from './HelixChannelEmote';
import { HelixChatBadgeSet } from './HelixChatBadgeSet';
import { HelixEmote } from './HelixEmote';
import { HelixEmoteFromSet } from './HelixEmoteFromSet';
/**
 * The Helix API methods that deal with chat.
 *
 * Can be accessed using `client.helix.chat` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const rewards = await api.helix.chat.getChannelBadges('125328655');
 * ```
 */
export declare class HelixChatApi extends BaseApi {
    /**
     * Retrieves all global badges.
     */
    getGlobalBadges(): Promise<HelixChatBadgeSet[]>;
    /**
     * Retrieves all badges specific to the given broadcaster.
     *
     * @param broadcaster The broadcaster to retrieve badges for.
     */
    getChannelBadges(broadcaster: UserIdResolvable): Promise<HelixChatBadgeSet[]>;
    /**
     * Retrieves all global emotes.
     */
    getGlobalEmotes(): Promise<HelixEmote[]>;
    /**
     * Retrieves all emotes from a channel.
     *
     * @param channel The channel to retrieve emotes from.
     */
    getChannelEmotes(channel: UserIdResolvable): Promise<HelixChannelEmote[]>;
    /**
     * Retrieves all emotes from a list of emote sets.
     *
     * @param setIds The IDs of the emote sets to retrieve emotes from.
     */
    getEmotesFromSets(setIds: string[]): Promise<HelixEmoteFromSet[]>;
}
