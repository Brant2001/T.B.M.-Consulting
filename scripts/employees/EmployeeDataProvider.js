let employees = []

//this grabs the notes from the server
export const getEmployees = () => {
    return fetch('http://localhost:8088/employees')
        .then(response => response.json())
        .then(parsedEmployees => {
            employees = parsedEmployees
        })

}

export const useEmployees = () => employees.slice()