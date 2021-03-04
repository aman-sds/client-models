"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    constructor() {
        this.items = [];
        this.links = {
            first: '',
            last: ''
        };
        this.currentPage = 0;
        this.lastPage = 0;
        this.pageSize = 0;
        this.total = 0;
    }
}
exports.Collection = Collection;
var collectionSortDirectionEnum;
(function (collectionSortDirectionEnum) {
    collectionSortDirectionEnum["desc"] = "desc";
    collectionSortDirectionEnum["asc"] = "asc";
})(collectionSortDirectionEnum = exports.collectionSortDirectionEnum || (exports.collectionSortDirectionEnum = {}));
//# sourceMappingURL=baseModel.js.map