import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { getComputers } from "./computers/ComputerDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/DepartmentDataProvider.js";
import { getLocations } from "./locations/LocationsDataProvider.js";
import { getCustomers } from "./customers/CustomerDataProvider.js";
import { getEmployeeCustomer } from "./EmployeeCustomerDataProvider.js";
import { CustomerList } from "./customers/CustomerList.js";




getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomer)
    .then(EmployeeList);

getCustomers()
    .then(getEmployees)
    .then(getEmployeeCustomer)
    .then(CustomerList)


