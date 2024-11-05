"use client"
import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth ,db } from  "@/app/firebase";
import { setDoc , doc } from 'firebase/firestore';

export default function AdminMemberRegister() {
    const[show,setShow]=useState(false)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const[password,setPassword] = useState("");

    const handleRegister = async (e) =>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db,"AdminMember",user.uid),{
                    name:name,
                    email:email,
                    phone:phone,
                    password:password,
                })
            }
            alert("Member Register Successfully")

        } catch (error) {

         alert(error.message);   


        }
    }

  return (
    <div className='px-2'>
    <h4 className='px-lg-4 px-sm-4 pt-3 px-0'>Register Member</h4>
    <div className="px-sm-5">
      
        <form onSubmit={handleRegister}>

          <div className="row mt-4">

            <div className="col-12 col-lg-8">
              <label htmlFor="Name" className="form-label">Member Name</label>
              <input type="text" className="form-control shadow-none"
               placeholder="Enter Member Name" id="Name" required  
               value={name}
               onChange={(e)=>setName(e.target.value)}
               />
            </div>

          </div>

          <div className="row mt-lg-3 mt-2">
            
            <div className="col-12 col-lg-8">
              <label htmlFor="Email" className="form-label">Member Email</label>
              <input type="email" className="form-control shadow-none"
               placeholder="Enter Member Email" id="Email" required
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
            </div>

          </div>

          <div className="row mt-lg-3 mt-2">

            <div className="col-12 col-lg-8">
              <label htmlFor="Phone" className="form-label">Member Phone</label>
              <input type="text" className="form-control shadow-none" 
              placeholder="Enter Member Phone" id="Phone" maxLength={10} required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              />
            </div>

          </div>


          <div className="row mt-lg-3 mt-2">

              <div className="col-12 col-lg-8">
                <label htmlFor="Password" className="form-label">Set Password</label>
                <input type={`${show ? "text" : "Password"}`} className="form-control shadow-none"  required
                 placeholder="Set Password" id="Password" minLength={4} maxLength={8}
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
          

          <div className="row my-5">

              <div className="col-12 col-lg-4">
                <input type="submit" className="form-control shadow-none btn btn-success"/>
              </div>

          </div>
       
        </form>   
      
    </div>
    </div>
  )
}
