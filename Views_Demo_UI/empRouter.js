const express = require('express');
const mongoose = require('mongoose');
const { displayEmp, addForm, addEmp } = require('../Controller/empController');

const router = express.Router()

router.get("/",displayEmp)
router.get("/addForm",addForm)
router.post("/addEmp",addEmp)

module.exports = router