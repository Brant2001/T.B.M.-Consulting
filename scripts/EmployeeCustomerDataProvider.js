let employeeCustomer = []

// this grabs the employeeCustomer from the server
export const getEmployeeCustomer = () => {
    return fetch('http://localhost:8088/employeeCustomer')
        .then(response => response.json())
        .then(parsedEmployeeCustomer => {
            employeeCustomer = parsedEmployeeCustomer
        })
}

export const useEmployeeCustomer = () => employeeCustomer.slice()