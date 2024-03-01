const express=require("express");
const interviewModel = require("../model/interviewModel");
const { studentModel } = require("../model/studentModel");

const interviewRoutes=express.Router()


interviewRoutes.post('/createinterview',async(req,res)=>{
    try{
        const interview=interviewModel.create(req.body)
        res.send({message:"sheduled",data:interview})
    }catch(error){
        res.send(error.message)

    }
 
})


interviewRoutes.post('/getinterview',async(req,res)=>{
    try {
        let interviews = await find();
        res.status(200).send({message:"student created",data:interviews})

      } catch (err) {
        console.log(`Error in view all interviews controller ${err}`);
        return;
      }
})
interviewRoutes.post('/allocateineterview0',async(req,res)=>{
     try {
    const interview = await interviewModel.findById(req.params.interviewId);
    const student = await studentModel.findById(req.body.studentId);
    student.interviews.push(interview);
    await studentModel.save();
    interview.students.push(student);
    await interviewModel.save();
    res.status(200).send("interview allocated")
  } catch (err) {
    console.log(`Error in allocateStudent controller ${err}`);
    return;
  }

})

module.exports={interviewRoutes}