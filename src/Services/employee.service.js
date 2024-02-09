const Employee = require("../Models/employee.model");

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
}

module.exports = EmployeeService;
