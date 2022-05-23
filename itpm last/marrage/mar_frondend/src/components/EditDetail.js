import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';



function EditDetail() {


  let history = useHistory();
  const { id } = useParams();
  const [details, setdetails] = useState({
    person_name: "",
    mistake_md: "",
    person_nic: "",
    phone_no: "",
    p_duration: "",
    st_prsn: "",
    date: "",
    time: ""
  });

  const { person_name, mistake_md, person_nic, phone_no, p_duration, st_prsn, date, time } = details;
  const onInputChange = e => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadDetails();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`http://localhost:8070/detail/update/${id}`, details)
    history.push('/');

  };


  const loadDetails = async () => {

    const result = await axios.get(`http://localhost:8070/detail/get/${id}`);
    setdetails(result.data);
  };

  /*
    
  
    function Editdetail(props) {
    let id = props.match.params.id;
  
    const [data, setData] = useState("");
  
    useEffect(() => {
      axios.get(`http://localhost:8070/payment/${id}`).then((res) => {
        setData(res.data);
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    },[])
  
    const onInputChange = e => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
  
  
  
    function onSubmit() {
  
      axios.put(`http://localhost:8070/payment/update/${id}`, data).then(()=>{
        alert("Updated successfully"); 
      }).catch((err) => {
        console.log(err);
      })
      window.location.replace('/');
    };
  */

  return (

    <div>

      <div className="fun">

        <span>Marrage Management</span>

      </div>

      <div className="add_pay">

        <form onSubmit={e => onSubmit(e)}>
          <center><h1>UPDATE Detail</h1></center>

        
          <div className="kl-0">
            <label for="person_name" className="form-label">Person Name</label>
            <input type="text" className="form-control" placeholder="Update Person Name" name="person_name" value={person_name} onChange={(e) => onInputChange(e)} readOnly required />
          </div>

          <div className="kl-1">
            <label for="mistake_md" className="form-label">Mistake Made</label>
            <input type="text" className="form-control" id="mistake_md" placeholder="Enter Mistake Made" name="mistake_md" value={mistake_md} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-2">
            <label for="person_nic" className="form-label">Person NIC</label>
            <input type="text" className="form-control" id="person_nic" placeholder="Enter Person NIC" maxLength="10" pattern="[0-9]{9}[v]{1}" name="person_nic" value={person_nic} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-3">
            <label for="phone_no" className="form-label">Phone Numberr</label>
            <input type="text" className="form-control" id="phone_no" placeholder="Enter Phone Number" maxLength="10" pattern="[0-9]{3}[0-9]{7}" name="phone_no" value={phone_no} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-4">
            <label for="p_duration" className="form-label">Prison Duration</label>
            <input type="text" className="form-control" id="p_duration" placeholder="Enter Prison Duration" name="prison duration" value={p_duration} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-5">
            <label for="st_prsn" className="form-label"> Still In Prison</label>
            <input type="text" className="form-control" id="st_prsn" placeholder="Enter yes or no" name="st_prsn" value={st_prsn} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-6">
            <label for="date" className="form-label">Date</label>
            <input type="text" className="form-control" id="date" placeholder="Enter Date" name="date" value={date} onChange={(e) => onInputChange(e)} required />
          </div>

          <div className="kl-7">
            <label for="time" className="form-label">Time</label>
            <input type="text" className="form-control" id="time" placeholder="Enter Time" name="time" value={time} onChange={(e) => onInputChange(e)} required />

          </div>
          <br></br>
          <button type="submit" className="btn0 btn-primary">Update Detail</button><br></br>
          <a href="/"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
        </form>
      </div>

    </div>


  );


}

export default EditDetail;