"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";
import CPrograming from '@/app/components/Main/StudentComponent/CourseIndex/CPrograming';
import JavaScript from '@/app/components/Main/StudentComponent/CourseIndex/JavaScript';
import HtmlIndex from '@/app/components/Main/StudentComponent/CourseIndex/HtmlIndex';
import CssIndex from '@/app/components/Main/StudentComponent/CourseIndex/CssIndex';


export default function AllStudent() {

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
                    {userDetails.course=="C and C++ Programing"?
                        <>
                                <CPrograming/>
                        </>:<>
                                {userDetails.course=="FrontEnd Development"?
                                <>
                                        <HtmlIndex/>
                                        <CssIndex/>
                                        <JavaScript/>
                                </>:<>
                                        {userDetails.course=="JavaScript"?
                                        <>
                                                <JavaScript/>
                                        </>:<>
                                            <div className='d-flex justify-content-center'>
                        
                                                <div className="spinner-border my-5" role="status">
                                                    <span className="sr-only"></span>
                                                </div>

                                            </div>
                                        </>
                            
                                        }
                                </>
                    
                                }
                        </>
                    
                    }
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


