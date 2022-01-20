"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const common_1 = require("./common");
function Item(options) {
    return common_1.merge(options, 'item', {
        price: options.price
    });
}
exports.Item = Item;
//# sourceMappingURL=item.js.map