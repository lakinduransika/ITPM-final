const jwt = require('jsonwebtoken');
const router = require("express").Router();
const authenticate = require("../middleware/authenticate");
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

let USER = require("../models/userDetails");
const User = require('../models/userDetails');

router.route("/add").post((req,res)=>{//post method for add data 

   
    const name = req.body.name;
    const nic = req.body.nic;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const phone = req.body.phone;
    const address = req.body.address; 
   
    

    const newUser = new USER({

       name,
       nic,
       email,
       password,
       role,
       phone,
       address
   
    })
      
    newUser.save().then(()=>{ //js promiss
        res.json("Admin details added!!")  //send a request from json format to front end

    }).catch((err)=>{
             console.log (err);
    })   
});

router.route("/display").get((req,res)=>{

    USER.find().then((see)=>{
           res.json(see)
    }).catch((err)=>{
        console.log (err);
    })   
});

router.route("/get/:id").get(async(req,res) =>{

    let nic = req.params.id;
    const user = await USER.findById(nic).then((user) =>{
        res.json(user);
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get User", error : err.message})
    
    })
});

router.route("/delete/:id").delete(async(req,res) =>{

    let userid = req.params.id;

    await USER.findByIdAndDelete(userid).then(() =>{

        res.status(200).send({status: "Delete Successfully!!"});

    }).catch((err) =>{

          console.log(err.message);
          res.status(500).send({status: "Erroe with delete User", error : err.message});
    })
})

http://localhost:8070/user/update/
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id ;  

    //D-Structure

    const{name,nic,email,password,role,phone,address} = req.body;

    const updateUser = {

        
        name,
        nic,
        email,
        password,
        role,
        phone,
        address

        
    }

    const update = await USER.findByIdAndUpdate(userId,updateUser).then(()=>{

        res.status(200).send({status: "User Updated" })
    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error Occured!! "})             
    })
});


router.post('/signin', async(req,res) =>{

    try{
          let token;
          const {email, password} = req.body;

          if(!email || !password){
              return res.status(400).json({error:" Plz! Filled the data"});
          }

          const userLogin = await USER.findOne({email:email});
          //console.log(userLogin);

       if(userLogin){

            const isMatch = await bcrypt.compare(password, userLogin.password);
          
           const  token  = await userLogin.generateAuthToken(); //see thsis
             console.log(token);



             res.cookie('jwtoken', token, {
                 expires:new Date(Date.now() + 25892000000),
                 httpOnly: true
             });

           if(!isMatch){

            res.status(400).json({error: "Invalid password!"});

           }else{

            res.json({message: "user login successfully!!"})
           }


           //
          
           //

           } else{

            res.status(400).json({error: "Invalid credentials !"});
           }


    }catch(err){
       console.log(err);
    }
});







module.exports = router; 