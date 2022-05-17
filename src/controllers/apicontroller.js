const employeeModel = require('../models/employee')

const index = async (req, res) => {
    try {
        const data = await employeeModel.find()
        res.json(data)
    } catch (err) {
        res.send('Error' + err)
    }
};

const insertEmployee = async (req, res) => {
    const employee = new employeeModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    
    try {
        const a1 = await employee.save()
        res.json(a1)
    } catch (err) {
        res.send(err)
    }
};

const updateEmployee=async(req,res)=>{
    try{
        const userData = await employeeModel.findOne({email:req.body.email}) 
        userData.name = req.body.name
        const a1 = await userData.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
};


module.exports = { index, insertEmployee,updateEmployee};