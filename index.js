const express = require('express')
const { studentRoutes } = require('./routes/studentRoutes')
const { interviewRoutes } = require('./routes/interviewRoutes')
const { default: mongoose } = require('mongoose')
const { employeRoutes } = require('./routes/employeRoutes')

const app = express()
const port = 5000

app.use(express.json())

app.use('/student',studentRoutes)

app.use('/interview',interviewRoutes)
app.use('/employes',employeRoutes)


mongoose.connect('mongodb://127.0.0.1:27017/mtask').then(()=>{
    console.log("db connect")
})


app.listen(port, () => {
    console.log('server coneceted')
})
