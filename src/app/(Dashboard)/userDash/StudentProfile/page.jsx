"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";
import Profile from '@/app/components/Main/StudentComponent/Profile';


export default function StudentProfile() {

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
                  
                  <Profile 
                  Name={userDetails.name} 
                  Email={userDetails.email}
                  Phone={userDetails.phone} 
                  fatherName={userDetails.fatherName}
                  AdmissionDate={userDetails.admissionDate}
                  Id={userDetails.uid} 
                  Course={userDetails.course}
                  CMarks = {userDetails["C Marks"]}
                  CppMarks = {userDetails["Cpp Marks"]}
                  HtmlMarks = {userDetails["HTML Marks"]}
                  CssMarks = {userDetails["CSS Marks"]}
                  JsMarks = {userDetails["JS Marks"]}

                  />
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


