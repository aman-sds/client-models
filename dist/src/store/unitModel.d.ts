export interface IStoreUnit<Data, Error> {
    data: Data | null;
    errors: Error[];
    loading: boolean;
}
export declare class StoreUnit<Data, Error> implements IStoreUnit<Data, Error> {
    data: null;
    errors: never[];
    loading: boolean;
}
