import { EquipmentOptions } from './item';
export interface WeaponOptions extends EquipmentOptions {
    atk?: number;
}
export declare function Weapon(options: WeaponOptions): (target: any) => void;
