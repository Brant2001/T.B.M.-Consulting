/*
    This module is resposible for receiving other modules and 
    manipulating them to render our Customer list to the DOM
*/

import { useCustomers, getCustomers } from "./CustomerDataProvider.js";
import { useEmployees } from "../employees/EmployeeDataProvider.js";
import { useEmployeeCustomer } from "../EmployeeCustomerDataProvider.js";
import { Customer } from "./Customer.js";


const contentTarget = document.querySelector(".customersContainer");

const renderCustomerList = () => {
  getCustomers().then(() => {
    const allTheCustomers = useCustomers();
    const allTheEmployees = useEmployees();
    const employeeCustomers = useEmployeeCustomer()

    contentTarget.innerHTML = allTheCustomers.map(
        (currentCustomerObject) => {
          const filteredRelationships = employeeCustomers.filter(
            (employeeCustomerRelationship) => {
              return  currentCustomerObject.id === employeeCustomerRelationship.customerId
            }
          )
          const theFinalEmployeeObject = filteredRelationships.map(
            relationship => {
              const wantedEmployee = allTheEmployees.find(employee => employee.id === relationship.employeeId) 
              return wantedEmployee
            }
          )

          const customerHTML = Customer(currentCustomerObject, theFinalEmployeeObject)
          return customerHTML
        }
    ).join("");  
  });
};

export const CustomerList = () => {
  renderCustomerList();
};
