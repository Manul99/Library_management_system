const express = require('express');
const { register, login, updateUser, deleteUser, getUser } = require('../controllers/userControllers');

const router = express.Router();

router.post('/',register);
router.post('/login',login);
router.put('/:nic',updateUser);
router.delete('/:nic',deleteUser);
router.get('/',getUser);
module.exports = router