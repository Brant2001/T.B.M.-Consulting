/*
    This module is resposible for the managment 
    and operation of the department data
*/

// Sets the value of "departments" to an empty array
let departments = []

// this grabs the departments from the server and puts them in the empty array
export const getDepartments = () => {
    return fetch('http://localhost:8088/departments')
        .then(response => response.json())
        .then(parsedDepartments => {
            departments = parsedDepartments
        })
}

// Provides a copy of our data and exports it to be used other places
export const useDepartments = () => departments.slice()