const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/add', TaskController.createTask);
router.get('/', TaskController.showTasks);

module.exports = router;