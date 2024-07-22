"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";
import GetStudentData from '@/app/components/Profile/Student/GetStudentData';
import GetStudents from '@/app/components/Profile/Student/GetStudents';



export default function AllStudent() {

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
                <GetStudentData/>
                <GetStudents/>
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


