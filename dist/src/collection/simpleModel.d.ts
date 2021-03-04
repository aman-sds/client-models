export interface ISimpleCollection<I> {
    items: Array<I>;
    total: number;
}
export interface ISimpleCollectionData<D> {
    data: Array<D>;
    meta: {
        total: number;
    };
    filters?: any;
}
export interface ISimpleCollectionFilter {
    [filterName: string]: number | boolean | string | undefined;
}
export declare class SimpleCollection<I> implements ISimpleCollection<I> {
    items: Array<I>;
    total: number;
}
