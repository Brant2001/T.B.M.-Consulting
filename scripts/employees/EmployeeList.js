/*
    This module is resposible for receiving other modules and 
    manipulating them to render our employee list to the DOM
*/

import { getEmployees, useEmployees } from "./EmployeeDataProvider.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";
import { useLocations } from "../locations/LocationsDataProvider.js";
import { useCustomers } from "../customers/CustomerDataProvider.js";
import { useEmployeeCustomer } from "../EmployeeCustomerDataProvider.js";

const contentTarget = document.querySelector(".employeesContainer");

const render = () => {
  getEmployees().then(() => {
    const allTheEmployees = useEmployees();
    const allTheComputers = useComputers();
    const allTheDepartments = useDepartments();
    const allTheLocations = useLocations();
    const allTheCustomers = useCustomers();
    const employeeCustomers = useEmployeeCustomer()

    contentTarget.innerHTML = allTheEmployees.map(
        (currentEmployeeObject) => {
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
          const filteredRelationships = employeeCustomers.filter(
            (employeeCustomerRelationship) => {
              return  currentEmployeeObject.id === employeeCustomerRelationship.employeeId
            }
          )
          const theFinalCustomerObjects = filteredRelationships.map(
            relationship => {
              const wantedCustomer = allTheCustomers.find(customer => customer.id === relationship.customerId) 
              return wantedCustomer
            }
          )

          const employeeHTML = Employee(currentEmployeeObject, theFoundComputer, theFoundDepartment, theFoundLocation, theFinalCustomerObjects)
          return employeeHTML
      }).join("");  
  });
};

export const EmployeeList = () => {
  render();
};
