import type { HelixUserData } from './HelixUser';
import { HelixUser } from './HelixUser';
/** @private */
export interface HelixPrivilegedUserData extends HelixUserData {
    email?: string;
}
/**
 * A user you have extended privilges for, i.e. yourself.
 *
 * @inheritDoc
 */
export declare class HelixPrivilegedUser extends HelixUser {
    /** @private */ protected readonly _data: HelixPrivilegedUserData;
    /**
     * The email address of the user.
     */
    get email(): string | undefined;
    /**
     * Changes the description of the user.
     *
     * @param description The new description.
     */
    setDescription(description: string): Promise<HelixPrivilegedUser>;
}
