import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { getComputers } from "./computers/ComputerDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/DepartmentDataProvider.js";
import { getLocations } from "./locations/LocationsDataProvider.js";




getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(EmployeeList);


