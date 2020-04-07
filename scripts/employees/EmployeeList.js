import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"
import { useComputers } from "../computers/ComputerDataProvider.js"
import { Employee } from "./Employee.js"

const contentTarget = document.querySelector(".employeesContainer")

const render = () => {
    getEmployees().then(() => {

        const allTheEmployees = useEmployees()
        const allTheComputers = useComputers()

        contentTarget.innerHTML = allTheEmployees.map(
            currentEmployeeObject => {
                const theFoundComputer = allTheComputers.find(
                    (currentComputerObject) => {
                        return currentEmployeeObject.computerId === currentComputerObject.id
                    }
                )
                return Employee(currentEmployeeObject, theFoundComputer)
            }
        ).join("")
    })
}

export const EmployeeList = () => {
    render()
}