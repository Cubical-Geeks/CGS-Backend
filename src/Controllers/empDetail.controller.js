const EmployeeService = require("../Services/employee.service");
var employeeService = new EmployeeService();

const submit = async (req, res) => {
  try {
    // const {id, name, joiningDate, fathersName, cnic, email, phone, reference, address, emergencyPhone, username, password} = req.body;

    const employee = await employeeService.submit(req);

    if (employee) {
      return res.status(200).json({
        success: true,
        data: [employee],
        message: ["Employee created successfully"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: ["something went wrong, please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const fetchingFormData = async (req, res) => {
  try {
    const employee = await employeeService.getAllEmployees();

    if (employee) {
      return res.status(200).json({
        success: true,
        data: [employee],
        message: ["Employee fetched successfully"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const employeeHistory = async (req, res) => {
  
}

module.exports = { submit, fetchingFormData, employeeHistory };
