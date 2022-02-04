/** @private */ export function createPaginatedResult(response, type, client) {
    var _a, _b, _c;
    return {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        data: (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.map(function (data) { return new type(data, client); })) !== null && _b !== void 0 ? _b : [],
        cursor: (_c = response.pagination) === null || _c === void 0 ? void 0 : _c.cursor
    };
}
/** @private */ export function createPaginatedResultWithTotal(response, type, client) {
    return {
        data: response.data.map(function (data) { return new type(data, client); }),
        cursor: response.pagination.cursor,
        total: response.total
    };
}
