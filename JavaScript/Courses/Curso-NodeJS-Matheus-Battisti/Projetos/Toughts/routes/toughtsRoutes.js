const expres = require('express');
const router = expres.Router();
const ToughtsController = require('../controllers/ToughtsController');

router.get('/', ToughtsController.showToughts);

module.exports = router;