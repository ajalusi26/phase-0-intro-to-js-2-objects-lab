const employee = {
    name:  "Mark",
    streetAddress: "3451 Random Address" ,
};

function updateEmployeeWithKeyAndValue (employee, key, value){
    employee = {...employee};
    employee.name = "Sam";
    employee.streetAddress = value;
    return employee
   }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    employee = {...employee};
    delete employee.name;
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee
}



