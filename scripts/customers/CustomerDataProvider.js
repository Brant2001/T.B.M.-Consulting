let customers = []

// this grabs the customers from the server
export const getCustomers = () => {
    return fetch('http://localhost:8088/customers')
        .then(response => response.json())
        .then(parsedCustomers => {
            customers = parsedCustomers
        })
}

export const useCustomers = () => customers.slice()