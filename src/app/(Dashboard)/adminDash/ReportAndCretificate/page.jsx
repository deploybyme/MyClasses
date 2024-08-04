"use client"
import React ,{useEffect , useState} from 'react'
import {auth, db} from "@/app/firebase";
import { doc,getDoc} from 'firebase/firestore'


import ReportAndCertificate from '@/app/components/Main/StudentData/ReportAndCertificate.jsx';


export default function TotalExp(props) {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
          
          const docRef = doc(db,"AdminMember",user.uid);
          const docSnap = await getDoc(docRef)
          if(docSnap.exists()){
              setUserDetails(docSnap.data());
              
          }else{
              alert("User is Not Found");
              console.log("User is Not Found");
          }
      })
  };
  useEffect(()=>{
      fetchUserData()
  },[]);
  
  return (
<>
     

{ userDetails ? (
    <>
    <div className="px-sm-5 pt-3">
      
<ul className="nav nav-pills mb-3 border rounded text-light justify-content-center bg-light py-1" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link link-dark border active" id="pills-student-tab" data-bs-toggle="pill" data-bs-target="#pills-student" type="button" role="tab" aria-controls="pills-student" aria-selected="true">Student Performance</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-student" role="tabpanel" aria-labelledby="pills-student-tab">
      <ReportAndCertificate/>
  </div>
</div>


    </div>
    </>
      ) : (
          <div className='d-flex justify-content-center'>
              

              <div className="spinner-border my-5" role="status">
                  <span className="sr-only"></span>
              </div>

          </div>
  )}
</>

  )
}
