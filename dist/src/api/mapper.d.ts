import { IErrorData, IValidationMessages, IError, IValidationError } from './model';
declare function mapError<I>(errorData: IErrorData, messagesMapper: (data: IValidationMessages) => IValidationMessages): IError | IValidationError<I>;
declare function mapValidationError<I>(errorData: IErrorData, messagesMapper: (data: IValidationMessages) => IValidationMessages): IValidationError<I>;
declare const BaseMappers: {
    mapValidationError: typeof mapValidationError;
    mapError: typeof mapError;
};
export default BaseMappers;
