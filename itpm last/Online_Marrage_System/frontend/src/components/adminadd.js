
import React,{useState} from "react";

import axios from "axios";
import {useHistory }  from "react-router-dom";
import { Link } from "react-router-dom";
import swal from 'sweetalert';





export default function AddUser(){
    
    let history = useHistory();
    
    const [name,setUname]= useState("");
    const [nic,setNic]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [role,setUsertype]= useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newUser = {

        
            name,
            nic,
            email,
            password,
            role,
            phone,
            address
         }
         
         axios.post("http://localhost:8070/user/add",newUser).then(()=>{
            swal({

                title: "Success",
    
                text: "User Added Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
  

             history.push("/login");
             

             
    
             

         }).catch((err)=> {

            alert(err)
         })

    }

    return(
       <>

    
        <div className="container">

                    
 
            <br></br>
             <Link className="btn btn-secondary mb-4" to={'/dashboard'}>Back TO Home</Link>
            <form  action="/login" onSubmit={sendDetails} >
                <div className="form-group">
                    <h2> Add New User</h2>
                   
                    
                </div>

                <div className="form-group">
                    <label forName="User Name" className="form-label-add">Admin Name</label>
                    <input type="text"  className="form-control" id="userName" placeholder="Enter User Name" onChange={(e)=>{

                       setUname(e.target.value);

                       //{errors.uname && <p className="error">{errors.uname}</p>}
                    }}/>
                    
                    
                </div>

                <div className="form-group">
                    <label forName="email" className="form-label-add">NIC</label>
                    <input type="text" className="form-control" id="nic" placeholder="Enter User NIC"  onChange={(e)=>{

                         setNic(e.target.value);

                         //{errors.email && <p className="error">{errors.email}</p>}
                   }}/>
                  
                </div>           

               <div className="form-group">
                    <label forName="email" className="form-label-add">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter User Email"  onChange={(e)=>{

                         setEmail(e.target.value);

                         //{errors.email && <p className="error">{errors.email}</p>}
                   }}/>
                  
                </div>  

                <div className="form-group">
                    <label forName="password" className="form-label-add">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" minlength="5" maxlength="8"  onChange={(e)=>{

                         setPassword(e.target.value);

                         //{errors.password && <p className="error">{errors.password}</p>}
                   }}/>
                   
                </div>
  
                <div className="form-group">
                    <label forName="role" className="form-label-add">Admin Role</label>
                    <input type="text"  placeholder= "Enter Admin role" className="form-control" id="role"  onChange={(e)=>{

                         setUsertype(e.target.value);
                   }}/>
                   
                </div>

                <div className="form-group">
                    <label forName="phone" className="form-label-add">Phone Number</label>
                    <input type="tel"  className="form-control" id="phone" placeholder="Your Phone Number[077123456]"  maxLength="10" pattern="[0-9]{3}[0-9]{7}"  onChange={(e)=>{

                         setPhone(e.target.value);
                   }}/>
                   
                </div>

                <div className="form-group">
                    <label forName="phoaddresse" className="form-label-add">Address</label>
                    <input type="text"  className="form-control" id="adsress" placeholder="Enter the address"   onChange={(e)=>{

                         setAddress(e.target.value);
                   }}/>
                   
                </div>

                     <br></br>
                 
                       <button type="submit"  class="btn btn-primary btn-lg">Save Details</button>
                     
            </form>
        </div>

        </>
    );
}