"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomEnumValue = getRandomEnumValue;
function getRandomEnumValue(enumObj) {
    const values = Object.values(enumObj);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}
//# sourceMappingURL=utils.js.map