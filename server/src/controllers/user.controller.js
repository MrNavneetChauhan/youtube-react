const User = require("../models/user.model");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});


router.post("/",async(req,res)=>{
  try{
    const user  =await User.create(req.body);
    return res.status(200).send({status:"success",user:user})
  }catch(err){
    return res.status(400).send({status:"error",message:err.message})
  }
})


router.delete("/:id",async(req,res)=>{
  try{
    const user = await User.findByIdAndDelete(req.params.id,{new:1});
    return res.status(200).send({status:"success",user:user})
  }catch(err){
    return res.status(400).send({status:"error",message:err.message})
  }
})

module.exports = router;
