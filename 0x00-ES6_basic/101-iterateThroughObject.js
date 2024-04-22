export default function iterateThroughObject(reportWithIterator) {
    let result = '';
    let iterator = reportWithIterator[Symbol.iterator]();

    let item = iterator.next();
    while (!item.done) {
        result += item.value + ' | ';
        item = iterator.next();
    }

    return result.slice(0, -3); // Remove the last ' | ' from the result
}
