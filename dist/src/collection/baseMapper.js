"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapFrom(data, itemBaseMapper) {
    const { first, last, prev, next } = data.links;
    const { current_page, per_page, last_page, total } = data.meta;
    const items = data.data.map((mapData) => itemBaseMapper(mapData));
    return {
        items,
        links: {
            first,
            last,
            prev,
            next
        },
        currentPage: current_page,
        lastPage: last_page,
        pageSize: per_page,
        total: total,
        filters: undefined,
        pagination: last_page > 1
            ? {
                pageSize: per_page,
                current: current_page,
                total: total
            }
            : undefined
    };
}
function mapToFilter(data) {
    return {
        page: data.currentPage
    };
}
const BaseMapper = {
    mapFrom,
    mapToFilter
};
exports.default = BaseMapper;
//# sourceMappingURL=baseMapper.js.map