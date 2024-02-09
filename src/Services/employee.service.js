const Employee = require("../Models/employee.model");
const employeeHistory = require("../Models/employeeHistory.models");

class EmployeeService {
  async submit(req) {
    try {
      const {
        id,
        name,
        joiningDate,
        fathersName,
        cnic,
        email,
        phone,
        reference,
        address,
        emergencyPhone,
        username,
        password,
      } = req.body;
      const employee = new Employee({
        id: id,
        name: name,
        joiningDate: joiningDate,
        fathersName: fathersName,
        cnic: cnic,
        email: email,
        phone: phone,
        reference: reference,
        address: address,
        emergencyPhone: emergencyPhone,
        username: username,
        password: password,
      });
      await employee.save();
      return employee;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllEmployees() {
    try {
      const employee = await Employee.find();
      return employee;
    } catch (error) {
      throw new Error(error);
    }
  }

  async employeeHistory (req) {
    try {
      const { name, department, designation, StartDate, EndDate, salary, shift } = req.body;
      const employee_history = new employeeHistory({
        name: name,
        department: department,
        designation: designation,
        StartDate: StartDate,
        EndDate: EndDate,
        salary: salary,
        shift: shift
      });
      await employee_history.save();

      return employee_history;
    } catch (error) {
      throw new Error(error)
    }
  }

  async getEmployeeHistory () {
    try {
      const empistData = await employeeHistory.find();

      return empistData;
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = EmployeeService;
