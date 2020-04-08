import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { getComputers } from "./computers/ComputerDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/DepartmentDataProvider.js";




getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList);


