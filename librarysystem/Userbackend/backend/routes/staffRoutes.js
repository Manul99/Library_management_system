const express = require('express');
const { registerStaff, updateStaff, deleteStaff, getStaff } = require('../controllers/staffControllers');
const router = express.Router();

router.post('/',registerStaff);
router.put('/:staffnic',updateStaff);
router.delete('/:staffnic',deleteStaff);
router.get('/',getStaff);
module.exports = router;

