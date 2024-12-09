const register = require("../models/register.model");


const createRegister = async (req, res) => {
    try {
        let userData = req.body;
        const saveData = await register.create(userData);
        res.json(saveData);
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
};


const findUsers =  async (req, res) => {
    try {
        // let  { name, age } = req.params;
        // console.log(age, name);
        let { age } = req.query;
        let allData  = await register.find({age}).sort({ _id: -1 });
        if (allData.length === 0) {
          return  res.status(404).json({message: "Data Not Found."})
        }       
        res.json(allData);
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
};



const findByIdUsers = async (req, res) => {
    try {
        let { objectid } = req.query;
        const findData = await register.findById(objectid);
        if (!findData) {
            return res.status(404).json({message: "Data Not found."})
        }
        res.json(findData)
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
};


const findOneUsers = async (req, res) => {
    try {
        let { age } = req.query;
        const findData = await register.findOne({age}).sort({_id: -1});
        if (!findData) {
            return res.status(404).json({message: "Data Not Found."})
        }
        res.json(findData);
    } catch (error) {
        res.json({
            Error: error.message
        })
    }
}


const putuserdata = async (req,res) =>{
    try{
        let {objid}=req.query;
  let putdata= req.body;
  let updatedata=await register.findByIdAndUpdate(objid,putdata,{new:true})
if(!updatedata){
    return res.status(404).json({message:"data not found"})
}
res.json(updatedata)
    }
    catch(err){
  res.json({error:err.message})
    }
}


const putuserone= async (req,res) =>{
    try {
        let{email}= req.query;
        let putone=req.body;
        let updatedata= await register.updateOne({email},putone)
        if(updatedata.matchedCount==0){
            return res.status(404).json({message:"data not found"})
        }
        res.json(updatedata)
    } catch (err) {
        res.json({Error:err.message})
    }
}

const putusermany=async (req,res)=>{
    try {
        let{age}=req.query
        let data= req.body;
        let datamany= await register.updateMany({age},data)
        if(datamany.matchedCount==0){
            return res.status(404).json({message:"data not found"})

        }
        res.json(datamany)
    } catch (error) {
        res.json({Error:err.message})
        
    }
}

//delete
const deleteuser=async (req,res)=>{
    try {
        let {objid}=req.query;
        let userdata= await register.findByIdAndDelete(objid)
        if(!userdata){
           return res.status(404).json({message:"data not found"})
        }
    res.json(userdata)
    } catch (err) {
        res.json({Error:err.message})
    }
}


const deleteuserone=async(req,res)=>{
    try {
        let{email}=req.query;
        let userone=await register.deleteOne({email});
        if(userone.deletedCount==0){
           return res.status(404).json({message:"data not found"})
        }
        res.json({message:"deleted successful"})
        
    } catch (err) {
        res.json({Error:err.message})
        
    }
}

const deleteusermany=async(req,res)=>{
    try {
        let{age}=req.query;
        let usermany=await register.deleteMany({age})
        if(usermany.deletedCount==0){
            return res.status(404).json({message:"data not found"})
        }
        res.json({message:"deleted successful"})
    } catch (err) {
        res.json({Error:err.message})
    }
}
module.exports = {
    createRegister,
    findUsers,
    findByIdUsers,
    findOneUsers,
    putuserdata,
   putuserone,
   putusermany,
   deleteuser,
   deleteuserone,
   deleteusermany
}