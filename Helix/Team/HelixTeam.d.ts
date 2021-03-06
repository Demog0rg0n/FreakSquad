import type { ApiClient } from '../../../ApiClient';
import type { HelixUserRelation } from '../Relations/HelixUserRelation';
/** @private */
export interface HelixTeamData {
    id: string;
    team_name: string;
    team_display_name: string;
    background_image_url: string | null;
    banner: string | null;
    created_at: string;
    updated_at: string;
    info: string;
    thumbnail_url: string;
}
/**
 * A Stream Team.
 */
export declare class HelixTeam {
    /** @private */
    protected readonly _data: HelixTeamData;
    /** @private */
    protected readonly _client: ApiClient;
    /** @private */
    constructor(data: HelixTeamData, client: ApiClient);
    /**
     * The ID of the team.
     */
    get id(): string;
    /**
     * The name of the team.
     */
    get name(): string;
    /**
     * The display name of the team.
     */
    get displayName(): string;
    /**
     * The URL of the background image of the team.
     */
    get backgroundImageUrl(): string | null;
    /**
     * The URL of the banner of the team.
     */
    get bannerUrl(): string | null;
    /**
     * The date when the team was created.
     */
    get creationDate(): Date;
    /**
     * The date when the team was last updated.
     */
    get updateDate(): Date;
    /**
     * The info of the team.
     *
     * May contain HTML tags.
     */
    get info(): string;
    /**
     * The URL of the thumbnail of the team's logo.
     */
    get logoThumbnailUrl(): string;
    /**
     * Retrieves the relations to the members of the team.
     */
    getUserRelations(): Promise<HelixUserRelation[]>;
}
