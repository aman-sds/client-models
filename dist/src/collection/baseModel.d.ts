export interface ICollection<I> {
    items: I[];
    links: {
        first: string;
        last: string;
        next?: string;
        prev?: string;
    };
    currentPage: number;
    lastPage: number;
    pageSize: number;
    total: number;
    filters?: any;
    pagination?: {
        pageSize: number;
        current: number;
        total: number;
    };
}
export interface ICollectionData<D> {
    data: D[];
    links: {
        first: string;
        last: string;
        next?: string;
        prev?: string;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
    filters?: any;
}
export interface ICollectionFilter {
    page: number;
    [filterName: string]: Object | number | boolean | string | undefined;
}
export declare class Collection<I> implements ICollection<I> {
    items: never[];
    links: {
        first: string;
        last: string;
    };
    currentPage: number;
    lastPage: number;
    pageSize: number;
    total: number;
}
export declare enum collectionSortDirectionEnum {
    desc = "desc",
    asc = "asc"
}
export interface IBaseCollection<Model, Meta extends {} = {}> {
    data: Model[];
    meta: Meta;
}
export interface IBaseFilterModel {
    limit: number;
    offset: number;
}
