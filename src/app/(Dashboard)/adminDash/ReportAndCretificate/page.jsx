"use client"
import React ,{useEffect , useState} from 'react'
import {auth, db} from "@/app/firebase";
import { doc,getDoc} from 'firebase/firestore'


import ReportAndCertificate from '@/app/components/Main/StudentData/ReportAndCertificate';

export default function ReportAndCretificate(props) {
  const [ToggleStudent, setToggleStudent] = useState(true);
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
      
    <ul className="nav nav-pills mb-3 mx-2 border justify-content-center rounded text-light bg-light" id="pills-tab" role="tablist">
            <li className="nav-item me-2" role="presentation">
              <button className="nav-link link-dark border border-dark active"
                id="pills-Transition-tab" data-bs-toggle="pill" data-bs-target="#pills-Transition"
                type="button" role="tab" aria-controls="pills-Transition" aria-selected="false"
                onClick={() => setToggleStudent(!ToggleStudent)}
              >
                {ToggleStudent ? "Tab to Old Student" : "Tab to New Student"}
              </button>
            </li>
          </ul>

<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-student" role="tabpanel" aria-labelledby="pills-student-tab">
      <ReportAndCertificate studentType={ToggleStudent ? "New" : "Old"}/>
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
