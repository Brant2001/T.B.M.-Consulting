let departments = []

// this grabs the departments from the server
export const getDepartments = () => {
    return fetch('http://localhost:8088/departments')
        .then(response => response.json())
        .then(parsedDepartments => {
            departments = parsedDepartments
        })
}

export const useDepartments = () => departments.slice()