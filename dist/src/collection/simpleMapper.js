"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapFrom(data, itemMapper) {
    const { total } = data.meta;
    const items = data.data.map((mapData) => itemMapper(mapData));
    return {
        items,
        total: total
    };
}
const SimpleMapper = {
    mapFrom
};
exports.default = SimpleMapper;
//# sourceMappingURL=simpleMapper.js.map