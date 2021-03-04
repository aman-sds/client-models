"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
function mapError(errorData, messagesMapper) {
    if (errorData.status === model_1.ErrorType.Validation) {
        const validationError = errorData;
        const errors = messagesMapper(validationError.data.errors);
        return {
            errors,
            status: validationError.status,
            message: validationError.data.message
        };
    }
    return {
        status: errorData.status,
        message: errorData.data.message
    };
}
function mapValidationError(errorData, messagesMapper) {
    return mapError(errorData, messagesMapper);
}
const BaseMappers = {
    mapValidationError,
    mapError
};
exports.default = BaseMappers;
//# sourceMappingURL=mapper.js.map