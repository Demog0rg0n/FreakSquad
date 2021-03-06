import type { AccessToken } from '../AccessToken';
import type { AuthProvider, AuthProviderTokenType } from './AuthProvider';
/**
 * An auth provider that retrieve tokens using client credentials.
 */
export declare class ClientCredentialsAuthProvider implements AuthProvider {
    private readonly _clientId;
    private readonly _clientSecret;
    private _token?;
    /**
     * The type of tokens the provider generates.
     *
     * This auth provider generates app tokens.
     */
    readonly tokenType: AuthProviderTokenType;
    /**
     * Creates a new auth provider to receive an application token with using the client ID and secret.
     *
     * @param clientId The client ID of your application.
     * @param clientSecret The client secret of your application.
     */
    constructor(clientId: string, clientSecret: string);
    /**
     * Retrieves an access token.
     *
     * If any scopes are provided, this throws. The client credentials flow does not support scopes.
     *
     * @param scopes The requested scopes.
     */
    getAccessToken(scopes?: string | string[]): Promise<AccessToken>;
    /**
     * Retrieves a new app access token.
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
