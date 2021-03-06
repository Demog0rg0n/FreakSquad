import type { UserIdResolvable, UserNameResolvable } from 'twitch-common';
import { BaseApi } from '../../BaseApi';
import { HelixPaginatedRequest } from '../HelixPaginatedRequest';
import type { HelixPaginatedResult } from '../HelixPaginatedResult';
import type { HelixForwardPagination, HelixPagination } from '../HelixPagination';
import { HelixTag } from '../Tag/HelixTag';
import type { HelixStreamData, HelixStreamType } from './HelixStream';
import { HelixStream } from './HelixStream';
import { HelixStreamMarker } from './HelixStreamMarker';
import type { HelixStreamMarkerVideoData } from './HelixStreamMarkerWithVideo';
import { HelixStreamMarkerWithVideo } from './HelixStreamMarkerWithVideo';
/**
 * Filters for the streams request.
 */
export interface HelixStreamFilter {
    /**
     * A community ID or a list thereof.
     */
    community?: string | string[];
    /**
     * A game ID or a list thereof.
     */
    game?: string | string[];
    /**
     * A language or a list thereof.
     */
    language?: string | string[];
    /**
     * A type of stream.
     */
    type?: HelixStreamType;
    /**
     * A user ID or a list thereof.
     */
    userId?: string | string[];
    /**
     * A user name or a list thereof.
     */
    userName?: string | string[];
}
/**
 * @inheritDoc
 */
export interface HelixPaginatedStreamFilter extends HelixStreamFilter, HelixPagination {
}
/** @private */
interface HelixStreamGetMarkersResultVideo {
    video_id: string;
    markers: HelixStreamMarkerVideoData[];
}
/** @private */
interface HelixStreamGetMarkersResult {
    user_id: string;
    user_login: string;
    user_name: string;
    videos: HelixStreamGetMarkersResultVideo[];
}
/**
 * The Helix API methods that deal with streams.
 *
 * Can be accessed using `client.helix.streams` on an {@ApiClient} instance.
 *
 * ## Example
 * ```ts
 * const api = new ApiClient(new StaticAuthProvider(clientId, accessToken));
 * const stream = await api.helix.streams.getStreamByUserId('125328655');
 * ```
 */
export declare class HelixStreamApi extends BaseApi {
    /**
     * Retrieves a list of streams.
     *
     * @expandParams
     */
    getStreams(filter?: HelixPaginatedStreamFilter): Promise<HelixPaginatedResult<HelixStream>>;
    /**
     * Creates a paginator for streams.
     *
     * @expandParams
     */
    getStreamsPaginated(filter?: HelixStreamFilter): HelixPaginatedRequest<HelixStreamData, HelixStream>;
    /**
     * Retrieves the current stream for the given user name.
     *
     * @param user The user name to retrieve the stream for.
     */
    getStreamByUserName(user: UserNameResolvable): Promise<HelixStream | null>;
    /**
     * Retrieves the current stream for the given user ID.
     *
     * @param user The user ID to retrieve the stream for.
     */
    getStreamByUserId(user: UserIdResolvable): Promise<HelixStream | null>;
    /**
     * Retrieves a list of all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    getStreamMarkersForUser(user: UserIdResolvable): Promise<HelixPaginatedResult<HelixStreamMarker>>;
    /**
     * Creates a paginator for all stream markers for an user.
     *
     * @param user The user to list the stream markers for.
     */
    getStreamMarkersForUserPaginated(user: UserIdResolvable): HelixPaginatedRequest<HelixStreamGetMarkersResult, HelixStreamMarkerWithVideo>;
    /**
     * Retrieves a list of all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    getStreamMarkersForVideo(videoId: string): Promise<HelixPaginatedResult<HelixStreamMarkerWithVideo>>;
    /**
     * Creates a paginator for all stream markers for a video.
     *
     * @param videoId The video to list the stream markers for.
     */
    getStreamMarkersForVideoPaginated(videoId: string): HelixPaginatedRequest<HelixStreamGetMarkersResult, HelixStreamMarkerWithVideo>;
    /**
     * Creates a new stream marker.
     *
     * Only works while the specified user's stream is live.
     *
     * @param broadcaster The broadcaster to create a stream marker for.
     * @param description The description of the marker.
     */
    createStreamMarker(broadcaster: UserIdResolvable, description?: string): Promise<HelixStreamMarker>;
    /**
     * Retrieves the tags of a stream.
     *
     * @param broadcaster The broadcaster of the stream.
     */
    getStreamTags(broadcaster: UserIdResolvable): Promise<HelixTag[]>;
    /**
     * Replaces the tags of a stream.
     *
     * @param broadcaster The broadcaster of the stream.
     * @param tagIds The tags to set. If not given, removes all tags.
     */
    replaceStreamTags(broadcaster: UserIdResolvable, tagIds?: string[]): Promise<void>;
    /**
     * Retrieves the stream key of a stream.
     *
     * @param broadcaster The broadcaster to retrieve the stream key for.
     */
    getStreamKey(broadcaster: UserIdResolvable): Promise<string>;
    /**
     * Retrieves the streams that are currently live and are followed by the given user.
     *
     * @param user The user to check followed streams for.
     * @param pagination
     *
     * @expandParams
     */
    getFollowedStreams(user: UserIdResolvable, pagination?: HelixForwardPagination): Promise<HelixPaginatedResult<HelixStream>>;
    /**
     * Creates a paginator for the streams that are currently live and are followed by the given user.
     *
     * @param user The user to check followed streams for.
     */
    getFollowedStreamsPaginated(user: UserIdResolvable): HelixPaginatedRequest<HelixStreamData, HelixStream>;
    private _getStreamMarkers;
    private _getStreamMarkersPaginated;
    private static _mapGetStreamMarkersResult;
}
export {};
