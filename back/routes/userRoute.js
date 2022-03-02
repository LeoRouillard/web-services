const express = require('express')

const router = express.Router();

const userController = require('../controllers/userController');

//route Public
router.get('/', userController.FindAll)
router.get('/:id', userController.FindById);
router.post('/', userController.Create);


//route Private
router.put('/:id', userController.Update);
router.delete('/:id', userController.Delete);

module.exports = router;