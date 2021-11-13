import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const employeeOrders = orders.filter(
                    order => {
                        if (order.employeeID === employee.id){
                            return true
                        }
                    }
                    )
                    window.alert(`${employee.name} has sold ${employeeOrders} products`)
                }
            }
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

