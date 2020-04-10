/*
    This module is resposible for the managment 
    and operation of the employee data
*/

// Sets the value of "employees" to an empty array
let employees = []

//this grabs the employees from the server
export const getEmployees = () => {
    return fetch('http://localhost:8088/employees')
        .then(response => response.json())
        .then(parsedEmployees => {
            employees = parsedEmployees
        })

}

// Provides a copy of our data and exports it to be used other places
export const useEmployees = () => employees.slice()