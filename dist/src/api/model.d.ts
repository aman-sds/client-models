import { ICollectionData } from '../collection/baseModel';
import { ISimpleCollectionData } from '../collection/simpleModel';
export interface IErrorData {
    data: {
        message: string;
        errors: any;
    };
    status: number;
}
export declare type IFieldError = string[];
export declare type IValidationMessages = {
    [fieldName: string]: IFieldError | undefined;
};
export interface IValidationErrorData extends IErrorData {
    data: {
        errors: {
            [fieldName: string]: IFieldError;
        };
        message: string;
    };
}
export interface IEntityData<I, M = null> {
    data: I;
    meta: M;
}
export interface IResponse<D> {
    data: D;
}
export declare enum ErrorType {
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    PayloadTooLarge = 413,
    Validation = 422
}
export interface IError {
    status: number;
    message: string;
}
export interface IValidationError<I> extends IError {
    errors: I;
}
export interface ICollectionResponse<I> extends IResponse<ICollectionData<I>> {
    data: ICollectionData<I>;
}
export interface ISimpleCollectionResponse<I> extends IResponse<ISimpleCollectionData<I>> {
    data: ISimpleCollectionData<I>;
}
export interface IHashInterface<V> {
    [name: string]: V;
}
