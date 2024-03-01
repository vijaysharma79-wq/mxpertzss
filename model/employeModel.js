//import all requried packages
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unquie: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const employeModel= mongoose.model("Employee", employeeSchema);
module.exports = {employeModel};