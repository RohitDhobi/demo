// package com.example.demo;

// import java.util.ArrayList;
// import java.util.List;

// public class EmployeeServiceImpl implements EmployeeService{

//     List<Employee> employees = new ArrayList<>();

//     @Override
//     public String createEmployee(Employee employee) {
//         employees.add(employee);
//         return "Saved Successfully";
//     }

//     @Override
//     public List<Employee> readEmployees() {
//         return employees;
//     }

//     @Override
//     public boolean deleteEmployee(Long id) {
//         employees.remove(id);
//         return true;
//     }


// }
package com.example.demo;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import ch.qos.logback.core.joran.util.beans.BeanUtil;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    private List<Employee> employees = new ArrayList<>();

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);

        //employees.add(employee);
        return "Saved Successfully";
    }

    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> employeeslist =employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();
        for (EmployeeEntity employeeEntity : employeeslist) {
            Employee emp = new Employee();
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setId(employeeEntity.getId());
            emp.setPhone(employeeEntity.getPhone());
            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeeEntity exiestingEmployee = employeeRepository.findById(id).get();
        exiestingEmployee.setEmail(employee.getEmail());
        exiestingEmployee.setName(employee.getName());
        exiestingEmployee.setPhone(employee.getPhone());
        employeeRepository.save(exiestingEmployee);
        return "Update Succesfuly";
    }

    @Override
    public Employee readEmployee(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);
        return employee;
    }

    // @Override
    // public boolean deleteEmployee(Long id) {
    //     if(employeeRepository.existsById(id)) {
    //         employeeRepository.deleteById(id);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

}

