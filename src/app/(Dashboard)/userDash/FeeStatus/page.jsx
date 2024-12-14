"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";
import FeeStatus from '@/app/components/Main/StudentComponent/FeeStatus';


export default function Page() {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
          
          const docRef = doc(db,"StudentRegister",user.uid);
          const docSnap = await getDoc(docRef)
          if(docSnap.exists()){
              setUserDetails(docSnap.data());
              
          }else{
              window.location.href="/"
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
                <FeeStatus 
                Name={userDetails.name} 
                Course={userDetails.course} 
                Fee={userDetails.courseFee}
                Paid={userDetails.totalPaid} 
                Balance={userDetails.balance}
                AdmissionDate={userDetails.admissionDate}/>

                  
            </>
            ) : (
                  <div className='container'>
                      <div className="card-text placeholder-glow mt-3">
                          <span className="placeholder bg-light col-12 col-md-4 me-2 rounded" style={{ height: "250px" }}></span>
                          <span className="placeholder bg-light col-12 col-md-7 mt-md-0 mt-2 rounded" style={{ height: "250px" }}></span>
                      </div>

                      <div className="card-text placeholder-glow mt-3">
                          <span className="placeholder bg-light col-12 col-md-4 bg-transparent me-2 rounded" style={{ height: "0px" }}></span>
                          <span className="placeholder bg-light col-12 col-md-7 rounded" style={{ height: "250px" }}></span>
                      </div>
                      
                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>

                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>
                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>

                      <div className="card-text placeholder-glow mt-1">
                          <span className="placeholder bg-light col-12 rounded" style={{ height: "70px" }}></span>
                      </div>
                  </div>
        )}
    </>
  )
}


