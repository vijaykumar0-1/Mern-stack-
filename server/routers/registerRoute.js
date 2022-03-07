const express = require('express');

const router = express.Router();
const {setData, login, getdata} = require('../controllers/registerController')


router.post('/register',setData)
router.post('/login',login)
router.get('/user/:email',getdata)

module.exports = router;