export const Employee = (employeeObject, computer) => {
    return `
        <div class="employee">
            <header>
                <h3>${employeeObject.firstName}</h3>
            </header>
            <p>Age: ${employeeObject.age}</p>
            <p>Computer: ${computer.model}</p>
            <p>Man Year: ${computer.year}</p>
        </div>
    `
}