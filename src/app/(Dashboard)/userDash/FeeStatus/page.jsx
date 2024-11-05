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
                <div className='d-flex justify-content-center'>
                    
                    <div className="spinner-border my-5" role="status">
                        <span className="sr-only"></span>
                    </div>

                </div>
        )}
    </>
  )
}


