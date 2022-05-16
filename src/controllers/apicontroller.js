var movies = [
    { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
    { id: 102, name: "Inception", year: 2010, rating: 8.7 },
    { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
    { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 }
];

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