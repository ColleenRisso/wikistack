const express = require('express')
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.send('got to GET /user/');
})

router.post('/', (req, res, next)=>{
  res.send('got to POST /user/');
})

router.get('/add', (req, res, next)=>{
  res.send('got to GET /user/add');
})

module.exports = router
