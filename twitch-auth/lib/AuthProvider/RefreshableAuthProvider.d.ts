import type { AccessToken } from '../AccessToken';
import type { AuthProvider, AuthProviderTokenType } from './AuthProvider';
/**
 * Configuration for the {@RefreshableAuthProvider}.
 */
export interface RefreshConfig {
    /**
     * The client secret of your application.
     */
    clientSecret: string;
    /**
     * The refresh token you got when requesting an access token from Twitch.
     */
    refreshToken: string;
    /**
     * The date of expiry of your access token.
     */
    expiry?: Date | null;
    /**
     * A callback that is called whenever the auth provider refreshes the token, e.g. to save the new data in your database.
     *
     * @param token The token data.
     */
    onRefresh?: (token: AccessToken) => void;
}
/**
 * Enhances another auth provider with the ability to make use of refresh
 * tokens, automatically refreshing the access token whenever necessary.
 */
export declare class RefreshableAuthProvider implements AuthProvider {
    private readonly _clientSecret;
    private _refreshToken;
    private readonly _childProvider;
    private _initialExpiry?;
    private readonly _onRefresh?;
    /**
     * Creates a new auth provider based on the given one that can automatically
     * refresh access tokens.
     *
     * @param childProvider The base auth provider.
     * @param refreshConfig The information necessary to automatically refresh an access token.
     */
    constructor(childProvider: AuthProvider, refreshConfig: RefreshConfig);
    /**
     * The type of tokens the provider generates.
     *
     * It is the same as the underlying base auth provider's token type.
     */
    get tokenType(): AuthProviderTokenType | undefined;
    /**
     * Retrieves an access token.
     *
     * If the current access token does not have the requested scopes, the base auth
     * provider is called.
     *
     * If the current access token is expired, automatically renew it.
     *
     * @param scopes The requested scopes.
     */
    getAccessToken(scopes?: string | string[]): Promise<AccessToken | null>;
    /**
     * Force a refresh of the access token.
     */
    refresh(): Promise<AccessToken>;
    /** @private */
    setAccessToken(token: AccessToken): void;
    /**
     * The client ID.
     */
    get clientId(): string;
    /**
     * The scopes that are currently available using the access token.
     */
    get currentScopes(): string[];
}
