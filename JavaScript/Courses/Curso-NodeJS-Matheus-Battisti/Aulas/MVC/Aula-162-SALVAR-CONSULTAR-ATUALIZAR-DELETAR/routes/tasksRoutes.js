const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.get('/:id', TaskController.showTask);
router.post('/delete', TaskController.deleteTask);
router.post('/edit', TaskController.editTask);
router.post('/done/:id', TaskController.doneTask);
router.get('/', TaskController.showTasks);

module.exports = router;