"use client"
import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth ,db } from "@/app/firebase";
import { setDoc , doc } from 'firebase/firestore';

export default function UserRegister() {
    const[show,setShow]=useState(false);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const[fatherName,setFatherName]=useState("");
    const[Course,setCourse]=useState("");
    const[fee,setfee]=useState(5000);
    const[admissionDate,setAdmissionDate]=useState("");
    const[Paid,setPaid]=useState(0);
    const[password,setPassword] = useState("");

    const handleRegister = async (e) =>{
      alert("Please Wait for a while.")
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db,"StudentRegister",user.uid),{
                    name:name,
                    email:email,
                    phone:phone,
                    fatherName:fatherName,
                    course:Course,
                    courseFee:fee,
                    admissionDate:admissionDate,
                    totalPaid:Paid,
                    balance:(fee-Paid),
                    password:password,
                    studentType:"New"
                })
              }
            alert("Student Register Successfully")
            setName("");
            setEmail("");
            setPhone("");
            setFatherName("");
            setfee("");
            setAdmissionDate("");
            setPaid("");
            setPassword("");
          } catch (error) {
         alert(error.message);   
        }
    }

  return (
    <>
    <div className="px-md-5 px-3">
      
        <form onSubmit={handleRegister}>

          <div className="row">

            <div className="col-12 col-md-6">
              <label htmlFor="stdName" className="form-label">Student Name</label>
              <input type="text" className="form-control shadow-none"
               placeholder="Enter Student Name" id="stdName" required  
               value={name}
               onChange={(e)=>setName(e.target.value)}
               />
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="stdEmail" className="form-label">Student Email</label>
              <input type="email" className="form-control shadow-none"
               placeholder="Enter Student Email" id="stdEmail" required
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
            </div>

          </div>

          <div className="row mt-lg-3 mt-2">

            <div className="col-12 col-md-6">
              <label htmlFor="stdPhone" className="form-label">Student Phone</label>
              <input type="text" className="form-control shadow-none" 
              placeholder="Enter Student Phone" id="stdPhone" maxLength={10} required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="Father_Name" className="form-label">Father' Name</label>
              <input type="text" className="form-control shadow-none" 
              placeholder="Enter Father's Name" id="Father_Name" required 
              value={fatherName} 
              onChange={(e)=>setFatherName(e.target.value)}
              />
            </div>

          </div>

          <div className="row mt-lg-3 mt-2">


              <div className="col-12 col-md-6">
                <label htmlFor="Course" className="form-label">Course</label>
                <select className="form-select shadow-none" id="Course"  required
                value={Course}
                onChange={(e)=>setCourse(e.target.value)}
                >
                  <option className='py-1' value="None" >Select Course</option>
                  <option className='py-1' value="FrontEnd Development">FrontEnd Development</option>
                  <option className='py-1' value="C and C++ Programing">C / C++ Programing</option>
                  <option className='py-1' value="Javascript">JavaScript</option>
                </select>
              </div>

              <div className="col-12 col-md-6"> 
                <label htmlFor="Fee" className="form-label">Course Fee</label>
                <input type="text" className="form-control shadow-none bg-dark text-light"  required
                id="Fee" maxLength={4} placeholder='4000'
                value={fee}
                onChange={(e)=>setfee(e.target.value)}
                />
          </div>
              

          </div>

          <div className="row mt-lg-3 mt-2">

          <div className="col-12 col-md-6">
                <label htmlFor="Admission_date" className="form-label">Date of Admission</label>
                <input type="date" className="form-control shadow-none" 
                id="Admission_date" required
                value={admissionDate}
                onChange={(e)=>setAdmissionDate(e.target.value)}
                />
              </div>


          </div>

          <div className="row mt-lg-3 mt-2">



          <div className="col-12 col-md-6"> 
                <label htmlFor="Paid" className="form-label">Paid Fee</label>
                <input type="text" className="form-control shadow-none"  required
                id="Paid" maxLength={4} placeholder='0000'
                value={Paid}
                onChange={(e)=>setPaid(e.target.value)}
                />
          </div>

              <div className="col-12 col-md-6">
                <label htmlFor="Password" className="form-label">Set Password</label>
                <input type={`${show ? "text" : "Password"}`} className="form-control shadow-none"  required
                 placeholder={phone?` Password Suggestion : P${phone}`:"Set Your Password"} id="Password" minLength={6} maxLength={11}
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
                  <div className="form-check shadow-none mt-1">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>setShow(!show)}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <small>Show Password</small>
                    </label>
                  </div>
                    
              </div>


          </div>
          

          <div className="row mt-3 d-flex justify-content-end">

              <div className="col-12 col-md-4">
                <input type="submit" className="form-control shadow-none btn btn-success"/>
              </div>

          </div>
       
        </form>   
      
    </div>
    </>
  )
}
