const express = require('express');
const router = express.Router();
const { getTasks, getTask, updateTask, deleteTask, createTask } = require('../controllers/tasks');

router.route('/').get(getTasks).post(createTask)
router.route('/:id').patch(updateTask).get(getTask).delete(deleteTask)

module.exports = router