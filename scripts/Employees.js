import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            let orderCount = 0
            let currentEmployee = ""

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    currentEmployee = employee.name
                    orderCount = orders.filter(
                    order => (order.employeeId === parseInt(employeeId))).length
                    
                   
                }
            }
            window.alert(`${currentEmployee} has sold ${orderCount} products`)
        } 
    }
)


const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let employeehtml = "<ul>"

    for (const employee of employees) {
        employeehtml += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeehtml += "</ul>"

    return employeehtml
}

