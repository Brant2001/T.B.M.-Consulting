/*
    This module is resposible for the managment 
    and operation of the relationship data
*/

// Sets the value of "employeeCustomer" to an empty array
let employeeCustomer = []

// this grabs the employeeCustomer from the server
export const getEmployeeCustomer = () => {
    return fetch('http://localhost:8088/employeeCustomers')
        .then(response => response.json())
        .then(parsedEmployeeCustomer => {
            employeeCustomer = parsedEmployeeCustomer
        })
}

// Provides a copy of our data and exports it to be used other places
export const useEmployeeCustomer = () => employeeCustomer.slice()