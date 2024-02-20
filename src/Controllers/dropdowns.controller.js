const Dropdowns = require("../Services/dropdown.service");
var dropdowns = new Dropdowns();

const addProjectNature = async (req, res) => {
  try {
    const proj_nature = await dropdowns.projectNature(req);
    if (proj_nature) {
      return res.status(200).json({
        success: true,
        data: [proj_nature],
        message: ["Project Nature posted successfully"],
      });
    }

    return res.status(400).json({
      success: false,
      data: [],
      message: ["Something went wrong please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const addPLatform = async (req, res) => {
  try {
    const platform = await dropdowns.platform(req);
    if (platform) {
      return res.status(200).json({
        success: true,
        data: [platform],
        message: ["Platform posted successfully"],
      });
    }

    return res.status(400).json({
      success: false,
      data: [],
      message: ["Something went wrong please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const addDepartment = async (req, res) => {
  try {
    const department = await dropdowns.department(req);
    if (department) {
      return res.status(200).json({
        success: true,
        data: [department],
        message: ["Department posted successfully"],
      });
    }

    return res.status(400).json({
      success: false,
      data: [],
      message: ["Something went wrong please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const getProjectNature = async (req, res) => {
  try {
    const response = await dropdowns.getProjectNature();
    if(response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Prject Nature fetched successfully"]
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const getPlatform = async (req, res) => {
  try {
    const response = await dropdowns.getPlatform();
    if(response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Platform fetched successfully"]
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const getDepartment = async (req, res) => {
  try {
    const response = await dropdowns.getDepartment();
    if(response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Department fetched successfully"]
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

module.exports = {
  addProjectNature,
  addPLatform,
  addDepartment,
  getProjectNature,
  getPlatform,
  getDepartment,
};
