const Tasks = require("../models/schema");
const asyncWrapper = require('../middlewares/async-wrapper');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Tasks.find();
    res.status(200).send({tasks});
});

const createTask = asyncWrapper (async(req, res) => {
    const task = await Tasks.create(req.body);
    if(!task){
      return  res.status(404).send("Error!, no file found")
    } 
    res.status(200).send({task})
});

const getTask = asyncWrapper (async (req, res) => {
        const task = await Tasks.findById(req.params.id);
        console.log(task)
        if(!task){
         return res.status(404).send("Error!, no file found")
        } 
        res.status(200).send({task})
});

const updateTask =asyncWrapper(async (req, res) => {
        const task = await Tasks.findByIdAndUpdate(req.params.id,req.body.name,{new:true});
        if(!task){
           return res.status(404).send("Error!, no file found")
        } 
        res.status(200).send({task})    
});

const deleteTask =asyncWrapper(async (req, res) => {
        const task = await Tasks.findByIdAndRemove(req.params.id);
        if(!task){
          return  res.status(404).send("Error!, no file found")
        } 
        res.status(200).send({task})    
});
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
