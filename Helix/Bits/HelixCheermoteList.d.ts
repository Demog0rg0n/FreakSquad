import type { ApiClient } from '../../../ApiClient';
import type { CheermoteBackground, CheermoteDisplayInfo, CheermoteFormat, CheermoteScale, CheermoteState } from '../../Shared/BaseCheermoteList';
import { BaseCheermoteList } from '../../Shared/BaseCheermoteList';
/** @private */
export declare type HelixCheermoteActionImageUrlsByScale = Record<CheermoteScale, string>;
/** @private */
export declare type HelixCheermoteActionImageUrlsByStateAndScale = Record<CheermoteState, HelixCheermoteActionImageUrlsByScale>;
/** @private */
export declare type HelixCheermoteActionImageUrlsByBackgroundAndStateAndScale = Record<CheermoteBackground, HelixCheermoteActionImageUrlsByStateAndScale>;
/** @private */
export interface HelixCheermoteTierData {
    min_bits: number;
    id: string;
    color: string;
    images: HelixCheermoteActionImageUrlsByBackgroundAndStateAndScale[];
    can_cheer: boolean;
    show_in_bits_card: boolean;
}
/** @private */
declare type HelixCheermoteType = 'global_first_party' | 'global_third_party' | 'channel_custom' | 'display_only' | 'sponsored';
/** @private */
export interface HelixCheermoteData {
    prefix: string;
    tiers: HelixCheermoteTierData[];
    type: HelixCheermoteType;
    last_updated: string;
    order: number;
}
/**
 * A list of cheermotes you can use globally or in a specific channel, depending on how you fetched the list.
 *
 * @inheritDoc
 */
export declare class HelixCheermoteList extends BaseCheermoteList {
    private readonly _data;
    private readonly _client;
    /** @private */
    constructor(data: HelixCheermoteData[], client: ApiClient);
    /**
     * Gets the URL and color needed to properly represent a cheer of the given amount of bits with the given prefix.
     *
     * @param name The name/prefix of the cheermote.
     * @param bits The amount of bits cheered.
     * @param format The format of the cheermote you want to request.
     */
    getCheermoteDisplayInfo(name: string, bits: number, format?: Partial<CheermoteFormat>): CheermoteDisplayInfo;
    /**
     * Gets all possible cheermote names.
     */
    getPossibleNames(): string[];
}
export {};
