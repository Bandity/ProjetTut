import { EquipmentOptions } from './item';
export interface ArmorOptions extends EquipmentOptions {
}
export declare function Armor(options: ArmorOptions): (target: any) => void;
