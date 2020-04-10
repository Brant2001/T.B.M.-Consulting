/*
    This module is resposible for the managment 
    and operation of the department data
*/

// Sets the value of "departments" to an empty array
let employeeCustomer = []

// this grabs the employeeCustomer from the server
export const getEmployeeCustomer = () => {
    return fetch('http://localhost:8088/employeeCustomers')
        .then(response => response.json())
        .then(parsedEmployeeCustomer => {
            employeeCustomer = parsedEmployeeCustomer
        })
}

export const useEmployeeCustomer = () => employeeCustomer.slice()