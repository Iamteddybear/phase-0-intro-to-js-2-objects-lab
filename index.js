// Write your solution in this file!
let employee = {
    name: "R. Sunak",
    streetAddress: "10 Downing St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let empCopy = { ...employee };
    empCopy[key] = value;
    return empCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let empCopy = { ...employee };
    delete empCopy[key];
    return empCopy;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
 delete employee[key];
 return employee;
}