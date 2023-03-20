// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "9445 S. Coffee Street",
  };
  
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const { name, ...newObj } = obj;
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
  }