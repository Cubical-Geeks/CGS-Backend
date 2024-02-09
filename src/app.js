const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./Routes/user.routes");
const employeeRoutes = require("./Routes/employee.routes");
const empHistoryRoutes = require("./Routes/empHistory.routes");
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/user",userRoutes);

app.use("/api/employee", employeeRoutes);

app.use("/api/employee", empHistoryRoutes);

//sort route from a to z



module.exports = app;