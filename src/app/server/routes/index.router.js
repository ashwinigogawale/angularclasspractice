const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
router.get('/custmer',(req, res, next)=>{
  res.send(' retraving contact list')
})
router.post('/custmer', ctrlUser.register);

module.exports = router;

