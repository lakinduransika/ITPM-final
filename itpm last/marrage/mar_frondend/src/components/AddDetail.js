import React, { useState } from 'react';
import axios from "axios";
import swal from 'sweetalert';

export default function AddDetail() {



  const [person_name, setPersonName] = useState("");
  const [mistake_md, setMistakeMd] = useState("");
  const [person_nic, setPersonNic] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [p_duration, setPDuration] = useState("");
  const [st_prsn, setStPrsn] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");



  function sendData(e) {
    e.preventDefault();


    const newDetail = {
      person_name,
        mistake_md,
        person_nic,
        phone_no,
        p_duration,
        st_prsn,
        date,
        time

    }


    axios.post("http://localhost:8070/detail/add", newDetail).then(() => {
      swal({

        title: "Success",

        text: "Detail Added Successfully!",

        icon: "success",

        button: "OK"

      });

    }).catch((err) => {
      alert(err)
    })
    window.location.href = "/"; /*window.location.replace('/');*/

  }


  return (

    <div>

      <div className="fun">

        <span>Marrage Management</span>

      </div>


      <div className="add_pay">

        <form onSubmit={sendData}>
          <center><h1>ADD MARRAGE DETAILS</h1></center>

          <div className="kl-0">
            <label for="person_name" className="form-label">Person Name</label>
            <input type="text" className="form-control" id="person_name" placeholder="Enter Person Name" required
              onChange={(e) => {
                setPersonName(e.target.value);
              }} />
          </div>

          <div className="kl-1">
            <label for="mistake_md" className="form-label">Mistake Made</label>
            <input type="text" className="form-control" id="mistake_md" placeholder="Enter Mistake" required
              onChange={(e) => {
                setMistakeMd(e.target.value);
              }} />
          </div>

          <div className="kl-2">
            <label for="person_nic" className="form-label">Person NIC</label>
            <input type="text" className="form-control" id="person_nic" oninvalid="this.setCustomValidity('pleas Enter Person NIC')" placeholder="Enter Person NIC" maxLength="10" pattern="[0-9]{9}[v]{1}" required
              onChange={(e) => {
                setPersonNic(e.target.value);
              }} />
          </div>

          <div className="kl-3">
            <label for="phone_no" className="form-label">Phone No</label>
            <input type="text" className="form-control" id="phone_no" oninvalid="this.setCustomValidity('pleas Enter Phone No')" placeholder="Enter Phone No" maxLength="10" pattern="[0-9]{3}[0-9]{7}" required
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }} />
          </div>

          <div className="kl-4">
            <label for="p_duration" className="form-label">Prison Duration</label>
            <input type="text" className="form-control" oninvalid="this.setCustomValidity('pleas Enter Prison Duration')" id="p_duration" placeholder="Enter Prison Duration In Days" required
              onChange={(e) => {
                setPDuration(e.target.value);
              }} />
          </div>

          <div className="kl-5">
            <label for="st_prsn" className="form-label">Still In Prison</label>
            <input type="text" className="form-control" id="st_prsn" oninvalid="this.setCustomValidity('Enter Still In Prison')" placeholder="Enter yes or no" required
              onChange={(e) => {
                setStPrsn(e.target.value);
              }} />
          </div>

          <div className="kl-6">
            <label for="date" className="form-label">Date</label>
            <input type="text" className="form-control" id="date" placeholder="Enter Date" required
              onChange={(e) => {
                setDate(e.target.value);
              }} />
          </div>

          <div className="kl-7">
            <label for="time" className="form-label">Time</label>
            <input type="text" className="form-control" id="time" placeholder="Enter Time" required
              onChange={(e) => {
                setTime(e.target.value);
              }} />
          </div>
          <br></br>
          <button type="submit" className="btn0 btn-primary">Add Detail</button><br></br>
        </form>
        <button type="submit" className="btn1 btn-primary">Cancel</button>

      </div>

    </div>

  )

}