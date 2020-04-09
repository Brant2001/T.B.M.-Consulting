/*
    This module is resposible for receiving other modules and 
    manipulating them to render our employee list to the DOM
*/

import { getEmployees, useEmployees } from "./EmployeeDataProvider.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";
import { useLocations } from "../locations/LocationsDataProvider.js";

const contentTarget = document.querySelector(".employeesContainer");

const render = () => {
  getEmployees().then(() => {
    const allTheEmployees = useEmployees();
    const allTheComputers = useComputers();
    const allTheDepartments = useDepartments();
    const allTheLocations = useLocations()

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
        const theFoundLocation = allTheLocations.find(
          (currentLocationObject) => {
            return (
              currentEmployeeObject.locationId === currentLocationObject.id
            );
          }
        );
        const employeeHTML = Employee(currentEmployeeObject, theFoundComputer, theFoundDepartment, theFoundLocation)
        return employeeHTML
      }).join("");  
  });
};

export const EmployeeList = () => {
  render();
};
