/** @private */
export interface AccessTokenData {
    access_token: string;
    refresh_token: string;
    expires_in?: number;
    scope?: string[];
}
/**
 * Represents the data of an OAuth access token returned by Twitch.
 */
export declare class AccessToken {
    private readonly _data;
    private readonly _obtainmentDate;
    /** @private */
    constructor(data: AccessTokenData, obtainmentDate?: Date);
    /**
     * The access token which is necessary for every request to the Twitch API.
     */
    get accessToken(): string;
    /**
     * The refresh token which is necessary to refresh the access token once it expires.
     */
    get refreshToken(): string;
    /**
     * The time when the access token will expire.
     *
     * May be `null`, in which case the token does not expire.
     * This can only be the case with very old Client IDs.
     */
    get expiryDate(): Date | null;
    get isExpired(): boolean;
    /**
     * The scope the access token is valid for, i.e. what the token enables you to do.
     */
    get scope(): string[];
}
