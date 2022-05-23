import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const AllDetails = () => {
  const [details, setdetails] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loaddetails();
  }, []);

  const loaddetails = async () => {
    const result = await axios.get("http://localhost:8070/detail");
    setdetails(result.data.reverse());
    console.log(result.data);
  };

  function deleteDetail(id) {
    axios.delete(`http://localhost:8070/detail/delete/${id}`).then(() => {
      swal({

        title: "Success",

        text: "detail Deleted Successfully!",

        icon: "success",

        button: "OK"

      });
    }).catch((err) => {
      console.log(err);
    })
    window.location.reload();
  }

  return (

    <div>

      <div className="fun">

        <span>Marrage Management</span>

      </div>

      <div className="epay">

       
        <Link to={'/add'} >
          <button type="submit" className="addvbtn"><b>+Add New Detail</b></button>
        </Link>

        <div class="search-container">
          {/* 
            <input className="search123" type="text" placeholder="Search vehicle" name="search1" />
            <Link to={'/get/:id'} >
              <button className="btn13" type="submit">Search</button>
            </Link>
          </form> */}


          <form className="search ">
            <input
              className="search123"
              type="text"
              placeholder=" search here"search
              name="searchTerm"


              onChange={(e) => {

                setsearchTerm(e.target.value);

              }}


            />
          </form>
        </div>


        <div className="all_pay">
          <center><h1>COURT DETAILS</h1></center>

          <table className="table table-dark table-striped">
            <thead>
              <tr>
                {/*<th scope="col">Bill ID</th>*/}
                <th scope="col">Person Name</th>
                <th scope="col">Mistake Made</th>
                <th scope="col">Person NIC</th>
                <th scope="col">Phone No</th>
                <th scope="col">Prison Duration</th>
                <th scope="col">Still In Prison</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                {/*th scope="col">Action</th>*/}
                <th scope="col"></th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>


            <tbody>


              {
                details.filter(val => {

                  if (searchTerm === "") {

                    return val;

                  } else if (

                    val.person_name.toLowerCase().includes(searchTerm.toLowerCase())

                  ) {

                    return val;

                  }

                })
                  .map((detail, key) => {
                    return (
                      <tr>
                        <td>{detail.person_name}</td>
                        <td>{detail.mistake_md}</td>
                        <td>{detail.person_nic}</td>
                        <td>{detail.phone_no}</td>
                        <td>{detail.p_duration}</td>
                        <td>{detail.st_prsn}</td>
                        <td>{detail.date}</td>
                        <td>{detail.time}</td>
                        <td><Link className="view" to={`/viewdetail/${detail._id}`}>
                          <button type="submit" className="btn10 btn-primary">Views</button>
                        </Link>
                        </td>
                        <td><Link className="edit" to={`/update/${detail._id}`}>
                          <button type="submit" className="btn11 btn-primary">Update</button>
                        </Link>
                        </td>
                        <td><Link className="delete" onClick={() => deleteDetail(detail._id)}>
                          <button type="submit" name="delete_btn" className="btn12 btn-primary">Delete</button>
                        </Link>
                        </td>
                      </tr>
                    );
                  })
              }

                    
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default AllDetails; 