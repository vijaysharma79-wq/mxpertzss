const express = require("express")
const { studentModel } = require("../model/studentModel")

const studentRoutes = express.Router()

studentRoutes.post('/create', async (req, res) => {
    try {
        const student = await studentModel.create(req.body)
        res.status(200).send({ message: "student created", data: student })
    } catch (error) {
        res.status(500).send({ suceess: false, message: error.message, })

    }

})
studentRoutes.get('/getStudents', async (req, res) => {
    try {

        const students = await studentModel.find();
        res.status(200).send({ message: "all students", data: students })


    } catch (err) {
        console.log(`Error in view all students controller ${err}`);
        return;
    }
})

module.exports={studentRoutes}

