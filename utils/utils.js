function castMysqlRecordsToArray(rows) {
    if (Array.isArray(rows)) {
        return rows[0];
    }
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
export default {
    castMysqlRecordsToArray,
    isNumber
};