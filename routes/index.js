var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');


/* GET home page. */

router.get('/', todosCtrl.index);
router.get('/', todosCtrl.new);
router.post("/", todosCtrl.create);
router.delete("/index/:id", todosCtrl.delete);




module.exports = router;
