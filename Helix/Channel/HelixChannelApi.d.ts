import type { UserIdResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import type { CommercialLength } from '../../Shared/CommercialLength';
import { HelixChannel } from './HelixChannel';
import { HelixChannelEditor } from './HelixChannelEditor';
/**
 * Channel data to update using {@HelixChannelApi#updateChannel}.
 */
export interface HelixChannelUpdate {
    /**
     * The language of the stream.
     */
    language?: string;
    /**
     * The ID of the game you're playing.
     */
    gameId?: string;
    /**
     * The title of the stream.
     */
    title?: string;
    /**
     * The delay of the stream, in seconds.
     *
     * Only works if you're a Twitch partner.
     */
    delay?: number;
}
/**
 * The Helix API methods that deal with channels.
 *
 * Can be accessed using `client.helix.channels` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const channel = await api.helix.channels.getChannelInfo('125328655');
 * ```
 */
export declare class HelixChannelApi extends BaseApi {
    /**
     * Retrieves the channel data for the given user.
     *
     * @param user The user you want to get channel info for.
     */
    getChannelInfo(user: UserIdResolvable): Promise<HelixChannel | null>;
    /**
     * Updates the given user's channel data.
     *
     * @param user The user you want to update channel info for.
     * @param data The channel info to set.
     */
    updateChannelInfo(user: UserIdResolvable, data: HelixChannelUpdate): Promise<void>;
    /**
     * Starts a commercial on a channel.
     *
     * @param broadcaster The broadcaster on whose channel the commercial is started.
     * @param length The length of the commercial, in seconds.
     */
    startChannelCommercial(broadcaster: UserIdResolvable, length: CommercialLength): Promise<void>;
    /**
     * Retrieves a list of users who have editor permissions on your channel.
     */
    getChannelEditors(broadcaster: UserIdResolvable): Promise<HelixChannelEditor[]>;
}
