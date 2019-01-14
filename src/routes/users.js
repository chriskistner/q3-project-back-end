const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser)

module.exports = router