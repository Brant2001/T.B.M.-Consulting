export const Employee = (employeeObject, computer, department, location) => {
    return `
        <div class="employee">
            <header class="employee__name">
                <h1>${employeeObject.firstName} ${employeeObject.lastName}</h1>
            </header>
            <section class="employee__age">
                ${employeeObject.age}
            </section>
            <section class="employee__computer">
                ${employeeObject.firstName} is currently using a ${computer.year} ${computer.model}
            </section>
            <section class="employee__department">
                Works in the ${department.name} department
            </section>
            <section class="employee__location">
                Works at the ${location.city} branch
            </section>
        </div>
    `
}