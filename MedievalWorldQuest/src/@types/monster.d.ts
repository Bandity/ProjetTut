import { EventMode } from "@rpgjs/server";
import { ActorGlobalOptions } from "./actor";

export interface EnemyEvent extends ActorGlobalOptions{
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
}
export declare function Enemy(options: EnemyEvent): (target: any) => void;
export {};