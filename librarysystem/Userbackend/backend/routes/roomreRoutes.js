const express = require('express');
const { reserveStudyRoom, updatereserveStudyroom, deletereserveStudyroom, approvereject, getreserveStudyroom } = require('../controllers/roomreControllers');

const router = express.Router();

router.post('/',reserveStudyRoom);
router.put('/:nic',updatereserveStudyroom);
router.delete('/:nic',deletereserveStudyroom);
router.get('/reservation',getreserveStudyroom);

module.exports = router;