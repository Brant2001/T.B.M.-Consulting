/*
    This module is resposible for the managment 
    and operation of the customer data
*/

// Sets the value of "customers" to an empty array
let customers = []

// this grabs the customers from the server
export const getCustomers = () => {
    return fetch('http://localhost:8088/customers')
        .then(response => response.json())
        .then(parsedCustomers => {
            customers = parsedCustomers
        })
}

// Provides a copy of our data and exports it to be used other places
export const useCustomers = () => customers.slice()