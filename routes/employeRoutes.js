const express = require('express')
const { employeModel } = require('../model/employeModel')

const employeRoutes = express.Router()

employeRoutes.post('/signup', async (req, res) => {

    try {
        const details = await employeModel.find(req.body.email)
        if (details) {
            res.status(400).send({ message: "email already exsist", data: employe })

        }
        const employe = await employeModel.create(req.body)
        res.status(200).send({ message: "signup", data: employe })

    } catch (error) {
        res.send(error.message)
    }
})
employeRoutes.post('/login', async (req, res) => {
    try {
        const employe = await employeModel.find(req.body.email)
        if (!employe) {
            res.status(402).send({ message: "user not registered" })

        } else {
            const employedata = employe.password === req.body.password

            if (employedata) {
                res.status(200).send({ message: "login successfull", data: employedata })
            } else {
                res.status(402).send({ message: "detaila not matched" })
    
            }
        }
       

    } catch (error) {
        res.send(error.message)
    }
})
module.exports = { employeRoutes }