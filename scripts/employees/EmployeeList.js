import { getEmployees, useEmployees } from "./EmployeeDataProvider.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";

const contentTarget = document.querySelector(".employeesContainer");

const render = () => {
  getEmployees().then(() => {
    const allTheEmployees = useEmployees();
    const allTheComputers = useComputers();
    const allTheDepartments = useDepartments();

    contentTarget.innerHTML = allTheEmployees
      .map((currentEmployeeObject) => {
        const theFoundComputer = allTheComputers.find(
          (currentComputerObject) => {
            return (
              currentEmployeeObject.computerId === currentComputerObject.id
            );
          }
        );
        const theFoundDepartment = allTheDepartments.find(
          (currentDepartmentObject) => {
            return (
              currentEmployeeObject.departmentId === currentDepartmentObject.id
            );
          }
        );
        const employeeHTML = Employee(
          currentEmployeeObject,
          theFoundComputer,
          theFoundDepartment
        );
        return employeeHTML;
      })
      .join("");
  });
};

export const EmployeeList = () => {
  render();
};
