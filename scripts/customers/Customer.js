/*
    This module is responsible for the HTML 
    representation of a single customer and 
    will create it and export it.
*/
export const Customer = (customerObject, employees) => {
    return `
        <div class="customer">
            <header class="customer__name">
                <h1>${customerObject.name}</h1>
            </header>
            <section class="customer__employee">
                <h3>${customerObject.name}'s T.B.M. Consulting employees are:</h3>
                <ul>
                    ${
                        employees.map(singleEmployee => `<li>${singleEmployee.firstName} ${singleEmployee.lastName}</li>`).join("")
                    }
                </ul>
            </section>
        </div>
    `
}