import axios from "axios"

const Employee_S_API_BASE_URL = "http://localhost:9090/employees"
class EmployeeService{
    saveEmployee (employee) {
        return axios.post(Employee_S_API_BASE_URL, employee)
    }
    getEmployees () {
        return axios.get(Employee_S_API_BASE_URL)
    }
    getEmployeeById (id) {
        return axios.get(Employee_S_API_BASE_URL + "/" + id)
    }
    deleteEmployeeById (id) {
        return axios.delete(Employee_S_API_BASE_URL + "/" + id)
    }
    updateEmployeeById (employee, id) {
        return axios.put(Employee_S_API_BASE_URL + "/" + id , employee)
    }
}
export default new EmployeeService();