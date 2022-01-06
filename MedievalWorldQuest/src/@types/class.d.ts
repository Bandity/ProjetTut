import { RpgClassDatabase, Data  } from '@rpgjs/database/lib/common';
import { ISkill } from '@rpgjs/database/lib/skill'
import { EfficiencyOptions } from '@rpgjs/database/lib/interfaces/efficiency'

interface ClassOptions extends EfficiencyOptions, Data {
    equippable?: any[];
    /**
     * Indicate which skill will be learned when the level is reached
     *
     * ```ts
     * import { Fire } from 'my-database/skills/fire'
     *
     * skillsToLearn: [{ level: 5, skill: Fire }]
     * ```
     *
     * @prop {Array<{ level: number, skill: SkillClass }>} [skillsToLearn]
     * @memberof Class
     * */
    skillsToLearn?: [
        {
            level: number;
            skill: RpgClassDatabase<ISkill>;
        },
        {
            level: number;
            skill: RpgClassDatabase<ISkill>;
        },{
            level: number;
            skill: RpgClassDatabase<ISkill>;
        },{
            level: number;
            skill: RpgClassDatabase<ISkill>;
        }
    ];
}
export declare function Class(options: ClassOptions): (target: any) => void;
export {};
