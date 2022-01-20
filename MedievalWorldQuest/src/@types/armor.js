"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armor = void 0;
const common_1 = require("./common");
function Armor(options) {
    return common_1.merge(options, 'armor', {
        price: options.price
    });
}
exports.Armor = Armor;
//# sourceMappingURL=armor.js.map