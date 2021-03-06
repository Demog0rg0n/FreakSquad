import type { RateLimiterResponseParameters } from '@d-fischer/rate-limiter';
import { ResponseBasedRateLimiter } from '@d-fischer/rate-limiter';
import type { TwitchApiCallOptionsInternal } from '../../ApiClient';
/** @private */
export declare class HelixRateLimiter extends ResponseBasedRateLimiter<TwitchApiCallOptionsInternal, Response> {
    protected doRequest({ options, clientId, accessToken, fetchOptions }: TwitchApiCallOptionsInternal): Promise<Response>;
    protected needsToRetryAfter(res: Response): number | null;
    protected getParametersFromResponse(res: Response): RateLimiterResponseParameters;
}
