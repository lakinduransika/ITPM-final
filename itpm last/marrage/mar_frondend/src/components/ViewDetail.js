import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const ViewDetail = ()=>{
   const[detail, setdetail] = useState({
	person_name: "",
    mistake_md: "",
    person_nic: "",
    phone_no: "",
    p_duration: "",
    st_prsn: "",
    date: "",
    time: ""
   })
   const {id} = useParams();
   useEffect(() =>{
	   loadDetails();
   }, []);
   const loadDetails = async() =>{
	   const res = await axios.get(`http://localhost:8070/detail/get/${id}`);
	   setdetail(res.data);
   }

    return(
        <div>
        <div className="fun">
        <span>Marrage Management</span>
        </div>
       
 <div class="content" >
     <h2  align="center" > Marrage Details </h2><br/>
     <table class="table">
	
	 
		
	 <tr>
		<td><h3> Person Name :</h3></td>
		<td><h3>{detail.person_name}</h3></td>
	</tr>
	
	<tr>
		<td><h3> Mistake Made :</h3></td>
		<td><h3>{detail.mistake_md}</h3></td>
	</tr>

	<tr>
		<td><h3> Person NIC :</h3></td>
		<td><h3>{detail.person_nic}</h3></td>
	</tr>
	
	<tr>
		<td> <h3>Phone No :</h3></td>
		<td><h3>{detail.phone_no}</h3></td>
	</tr>
	<tr>
		<td> <h3>Prison Duration :</h3></td>
		<td><h3>{detail.p_duration}</h3></td>
	</tr>
	<tr>
		<td> <h3>Still In Prison:</h3></td>
		<td><h3>{detail.st_prsn}</h3></td>
	</tr>
    <tr>
		<td> <h3>Date :</h3></td>
		<td><h3>{detail.date}</h3></td>
	</tr>
    <tr>
		<td> <h3>Time :</h3></td>
		<td><h3>{detail.time}</h3></td>
	</tr>
	<tr>
	   <td>
           <br/><h5>If you need,</h5>
			    <br/>
				<Link className="update" to={`/update/${detail._id}`}> 
				<button type="submit" class="update"><h5><b>Edit Details</b></h5></button>
				</Link>
       </td> 
	</tr>	
	 
	 		 	
	</table>

	
 </div>
</div>
    );
}

export default ViewDetail;