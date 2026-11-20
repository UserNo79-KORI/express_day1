const express = require('express');
const { displayEmployees, addEmp, search } = require('../controller/empController');


const router = express.Router()

router.get("/",displayEmployees)
router.post("/addEmp",addEmp)
router.get("/:id",search)

module.exports = router;