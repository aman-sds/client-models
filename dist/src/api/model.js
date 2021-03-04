"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["Unauthorized"] = 401] = "Unauthorized";
    ErrorType[ErrorType["Forbidden"] = 403] = "Forbidden";
    ErrorType[ErrorType["NotFound"] = 404] = "NotFound";
    ErrorType[ErrorType["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    ErrorType[ErrorType["Validation"] = 422] = "Validation";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=model.js.map