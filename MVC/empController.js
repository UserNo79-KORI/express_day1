const mongoose = require('mongoose');
const empModel = require('../model/empModel');


const displayEmployees = async (req,resp) =>{
    try {
        const result = await empModel.find()
        resp.json(result)
    } catch (error) {
        console.log(error);
        
    }
}

const addEmp = async (req,resp) => {
    try {
        const {name,salary,dept} = req.body
        const result = await empModel.create({name,salary,dept})
        resp.json(result)
    } catch (error) {
        console.log(error);
    }
}

const search = async (req,resp) => {
    try {
        const result = await empModel.findById(req.body.id)
    } catch (error) {
        console.log(error);      
    }
}

module.exports = { displayEmployees, addEmp, search }
