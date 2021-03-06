/**
* @title Existing effects
* @enum {string}
*
* Effect.NONE | No effect
* Effect.CAN_NOT_SKILL | The player will not be able to use a skill. The `player.useSkill()` method will return an exception with the `RESTRICTION_SKILL` id
* Effect.CAN_NOT_ITEM | The player may not use an item. The `player.useItem()` method will return an exception with the `RESTRICTION_ITEM` id
* Effect.GUARD | The player goes on defense. When using applyDamage(), damage will be reduced using the damageGuard formula
* Effect.SUPER_GUARD | Damage with the applyDamage() method will be divided by 4
* Effect.HALF_SP_COST | The cost of the SP will be halved when calling the `useSkill()` method
* @memberof Effect
* */
export declare enum Effect {
    NONE = "NONE",
    CAN_NOT_SKILL = "CAN_NOT_SKILL",
    CAN_NOT_ITEM = "CAN_NOT_ITEM",
    ALWAYS_ATTACK_ENEMIES = "ALWAYS_ATTACK_ENEMIES",
    CAN_NOT_EVADE = "CAN_NOT_EVADE",
    CAN_NOT_GET_EXP = "CAN_NOT_GET_EXP",
    CAN_NOT_GET_GOLD = "CAN_NOT_GET_GOLD",
    PHARMACOLOGY = "PHARMACOLOGY",
    CRITICAL_BONUS = "CRITICAL_BONUS",
    SUPER_GUARD = "SUPER_GUARD",
    GUARD = "GUARD",
    PREVENT_CRITICAL = "PREVENT_CRITICAL",
    HALF_SP_COST = "HALF_SP_COST",
    DOUBLE_EXP_GAIN = "DOUBLE_EXP_GAIN",
    AUTO_HP_RECOVER = "AUTO_HP_RECOVER",
    FAST_ATTACK = "FAST_ATTACK",
    DUAL_ATTACK = "DUAL_ATTACK",
    SLIP_DAMAGE = "SLIP_DAMAGE"
}
