import { Employees } from "../types/types"

export default function filterEmployees(filter: string, employees: Employees[] | undefined) {

  if (filter !== '') {
    const employeesFiltered = employees?.filter((employee) => {
      const includesJob = employee.job.toLowerCase().includes(filter.toLowerCase())
      const includesName = employee.name.toLowerCase().includes(filter.toLowerCase())
      const includesPhone = employee.phone.toLowerCase().includes(filter.toLowerCase())

      if (includesJob || includesName || includesPhone) return employee
    })

    return employeesFiltered
  } else {
    return employees
  }

}