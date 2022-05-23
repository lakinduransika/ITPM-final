import React,{useState} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"

import axios from "axios";







function dashboard(){




    return(
        <>
        <nav className="navbar-light-came">
        <form className="container-start">
        <div>
             <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                  </li>
           
                  <li class="nav-item" role="presentation">
                     <NavLink  to='/logout'> <button  class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Logout</button></NavLink>
                  </li>
                  </ul>
               </div>
        </form>
      </nav>

        <React.Fragment>
         
            <h1 className='text-center text-danger text-capitalize my-5'>
               
                 WELCOME !!
            </h1>

            <div className="container-">
                <div className="row" id="home-row">
                    

                <div className="container">
             
             
             <center> <Link to='/adminadd'><button class="btn btn-info me-2" type="button"><b>Add New Administrator</b></button></Link> </center>
              
            
        

              </div>


                    

                   

                 </div>
            
                </div>

        </React.Fragment>
        </>
    );
}
export default dashboard;