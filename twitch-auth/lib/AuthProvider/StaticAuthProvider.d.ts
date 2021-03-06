import { AccessToken } from '../AccessToken';
import type { AuthProvider, AuthProviderTokenType } from './AuthProvider';
/**
 * An auth provider that always returns the same initially given credentials.
 *
 * You are advised to roll your own auth provider that can handle scope upgrades,
 * or to plan ahead and supply only access tokens that account for all scopes
 * you will ever need.
 */
export declare class StaticAuthProvider implements AuthProvider {
    private readonly _clientId;
    private _accessToken?;
    private _scopes?;
    /**
     * The type of token the provider holds.
     */
    readonly tokenType: AuthProviderTokenType;
    /**
     * Creates a new auth provider with static credentials.
     *
     * @param clientId The client ID.
     * @param accessToken The access token to provide.
     *
     * You need to obtain one using one of the [Twitch OAuth flows](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/).
     * @param scopes The scopes the supplied token has.
     * @param tokenType The type of the supplied token.
     */
    constructor(clientId: string, accessToken?: string | AccessToken, scopes?: string[], tokenType?: AuthProviderTokenType);
    /**
     * Retrieves an access token.
     *
     * If the current access token does not have the requested scopes, this method throws.
     * This makes supplying an access token with the correct scopes from the beginning necessary.
     *
     * @param scopes The requested scopes.
     */
    getAccessToken(scopes?: string | string[]): Promise<AccessToken | null>;
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
