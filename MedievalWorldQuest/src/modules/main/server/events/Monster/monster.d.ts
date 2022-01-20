import { EventMode } from "@rpgjs/server";
import { EventOptions } from "@rpgjs/server/lib/decorators/event";

export interface EnemyEvent {
    parameters?: {
        [key: string]: {
            start: number;
            end: number;
        };
    };
    class?: any;
    startingItems?: [{
        nb: number;
        item: any;
    }];
    graphic?: string;
    gain?: {
        exp?: number;
        gold?: number;
        items?: [{
            nb: number;
            item: any;
            chance?: number;
        }];
    };
    initialLevel?: number;
    hitbox?: {
        width?: number;
        height?: number;
    };
    mode?: EventMode;
    width?: number;
    height?: number;
    name:string
    startingEquipment?: any[];
}
export declare function Enemy(options: EnemyEvent): (target: any) => void;
export {};