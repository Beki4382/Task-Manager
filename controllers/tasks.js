const Task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');

getTasks = asyncWrapper(async(req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })


})
getTask = async(req, res) => {

    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId })

    if (!task) {
        return res.status(404).json({
            msg: "No task with id : ${taskId}"
        });
    };
    res.status(200).json({ task });

};


createTask = async(req, res) => {

    const task = await Task.create(req.body)
    res.status(201).json(task);

}

updateTask = async(req, res) => {

    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,

    })
    if (!task) {
        return res.status(404).json({ mesg: "no task with this id" });
    }
    res.status(200).json({ task })
};

deleteTask = async(req, res) => {

    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        return res.status(404).json({ msg: "task with the id not found" });
    }
    res.status(200).send('task deleted')

}

module.exports = { getTasks, getTask, updateTask, deleteTask, createTask }