"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const common_1 = require("./common");
function Weapon(options) {
    return common_1.merge(options, 'weapon', {
        price: options.price
    });
}
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.js.map