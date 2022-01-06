"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(options, type, _static = {}) {
    const transformToRate = (optionName, propName) => {
        if (options[optionName]) {
            options[optionName] = options[optionName].map(element => {
                if (!element.rate) {
                    return {
                        rate: 1,
                        [propName]: element
                    };
                }
                return element;
            });
        }
    };
    transformToRate('elements', 'element');
    transformToRate('elementsDefense', 'element');
    transformToRate('elementsEfficiency', 'element');
    transformToRate('addStates', 'state');
    transformToRate('removeStates', 'state');
    transformToRate('statesDefense', 'state');
    transformToRate('statesEfficiency', 'state');
    return (target) => {
        const id = options.id || target.name.toLowerCase();
        target.id = id;
        target.prototype.id = id;
        target._type = type;
        for (let key in _static) {
            target[key] = options[key];
        }
        for (let key in options) {
            target.prototype[key] = options[key];
        }
        target.prototype.toJSON = function () {
            return this.id;
        };
    };
}
exports.merge = merge;
//# sourceMappingURL=common.js.map