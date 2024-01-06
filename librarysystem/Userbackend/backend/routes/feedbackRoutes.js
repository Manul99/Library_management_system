const express = require('express');
const { sendFeedback, deleteFeedback, getFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/',sendFeedback);
router.delete('/:id',deleteFeedback);
router.get('/',getFeedback);

module.exports = router;