"use client"
import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import Modal from '../SignUp/Modal';
import Link from 'next/link';

export default function UserLogin() {
  const[show,setShow]=useState(false);
  const [email,setEmail]=useState("");
  const[password,setPassword] = useState(""); 

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password)
  
      window.location.href="/userDash";

    } catch (error) {
      alert(error.message); 
    }

  }
  return (
    <div className="d-flex justify-content-center align-self-center py-5 mt-5">

      <form id="LoginForm" onSubmit={handleSubmit}>

        <div className="row mt-2">
        <div className='col-12'>
              <div className='container d-flex flex-column'>
                
                <i className="bi bi-feather align-self-center icon"></i>
                
                <h5 className='fw-light mt-1 text-center'>Student</h5>
              </div>
            </div>
        </div>

        <div className="row mt-3">

            <div className="col-12">
              <label htmlFor="LoginEmail" className="form-label">Student Email</label>
              <input type="email" className="form-control shadow-none"
              placeholder="Enter your Email" id="LoginEmail" required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

        </div>


        <div className="row mt-3">

    <div className="col-12">
      <label htmlFor="LoginPassword" className="form-label">Password </label>
      <input type={`${show ? "text" : "Password"}`} className="form-control shadow-none"  required
       placeholder="Enter Password" id="LoginPassword" minLength={4} maxLength={11}
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
        <div className="form-check shadow-none mt-1">
          <input className="form-check-input" type="checkbox" value="" id="Show" onClick={()=>setShow(!show)}/>
          <label className="form-check-label" htmlFor="Show">
            <small>Show Password</small>
          </label>
        </div>
    </div>


        </div>


        <div className="row my-3">

            <div className="col-12">
              <input type="submit" className="form-control shadow-none btn btn-success"/>
            </div>

        </div>

        <div className="row">
                <div className="col-12 col-sm-6">
                    <button type="button" className="nav-link text-decoration-none link-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Register Student
                    </button>
                </div>

                <div className="col-12 col-sm-6 text-sm-end text-start mt-sm-0 mt-2">
                   <Link className='text-decoration-none text-info text-end' href="/AdminLogin">Admin Login</Link>
                </div>
        </div>

        <div className="row">
        </div>

      </form>   
              <Modal/>
    </div>
  )
}
