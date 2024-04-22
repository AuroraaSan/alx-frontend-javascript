export default function createIteratorObject(report) {
    let employees = [];
    for (const department in report) {
        employees.push(...report[department]);
    }

    let index = 0;

    return {
        next: function() {
            return index < employees.length ?
                { value: employees[index++], done: false } :
                { done: true };
        }
    };
}
