"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";
import CPrograming from '@/app/components/Main/StudentComponent/CourseIndex/CPrograming';
import JavaScript from '@/app/components/Main/StudentComponent/CourseIndex/JavaScript';
import HtmlIndex from '@/app/components/Main/StudentComponent/CourseIndex/HtmlIndex';
import CssIndex from '@/app/components/Main/StudentComponent/CourseIndex/CssIndex';


export default function page() {

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
                        <ul className="nav nav-pills py-1 mb-3 mx-2 border rounded text-light bg-light d-flex justify-content-evenly" id="pills-tab" role="tablist">
                            <li className="nav-item me-1" role="presentation">
                                <button className="nav-link link-dark border border-dark active" id="pills-CPrograming-tab" data-bs-toggle="pill" data-bs-target="#pills-CPrograming" type="button" role="tab" aria-controls="pills-Transition" aria-selected="false">C/C++</button>
                            </li>
                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-CPrograming" role="tabpanel" aria-labelledby="pills-CPrograming-tab">
                                    <CPrograming/>
                                </div>
                        </div>
                        </>:<>              
                            {userDetails.course=="JavaScript"?(
                            <>

                                    <ul className="nav nav-pills py-1 mb-3 mx-2 border rounded text-light bg-light d-flex justify-content-evenly" id="pills-tab" role="tablist">

                                            <li className="nav-item ms-1" role="presentation">
                                            <button className="nav-link link-dark border border border-dark active" id="pills-JavaScript-tab" data-bs-toggle="pill" data-bs-target="#pills-JavaScript" type="button" role="tab" aria-controls="pills-History" aria-selected="false">JavaScript</button>
                                            </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-JavaScript" role="tabpanel" aria-labelledby="pills-JavaScript-tab">
                                                <JavaScript/>
                                            </div>
                                    </div>
                            </>):<>
                                        {userDetails.course=="FrontEnd Development"?
                                        (<>
                                            <ul className="nav nav-pills py-1 mb-3 mx-2 border rounded text-light bg-light d-flex justify-content-evenly" id="pills-tab" role="tablist">

                                            <li className="nav-item ms-1" role="presentation">
                                            <button className="nav-link link-dark border border border-dark active" id="pills-HtmlIndex-tab" data-bs-toggle="pill" data-bs-target="#pills-HtmlIndex" type="button" role="tab" aria-controls="pills-History" aria-selected="false">HTML</button>
                                            </li>

                                            <li className="nav-item ms-1" role="presentation">
                                            <button className="nav-link link-dark border border border-dark" id="pills-CssIndex-tab" data-bs-toggle="pill" data-bs-target="#pills-CssIndex" type="button" role="tab" aria-controls="pills-History" aria-selected="false">CSS</button>
                                            </li>

                                            <li className="nav-item ms-1" role="presentation">
                                            <button className="nav-link link-dark border border border-dark" id="pills-JavaScript-tab" data-bs-toggle="pill" data-bs-target="#pills-JavaScript" type="button" role="tab" aria-controls="pills-History" aria-selected="false">JavaScript</button>
                                            </li>

                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">

                                            <div className="tab-pane fade show active" id="pills-HtmlIndex" role="tabpanel" aria-labelledby="pills-HtmlIndex-tab">
                                                <HtmlIndex/>
                                            </div>

                                            <div className="tab-pane fade" id="pills-CssIndex" role="tabpanel" aria-labelledby="pills-CssIndex-tab">
                                                <CssIndex/>
                                            </div>

                                            <div className="tab-pane fade" id="pills-JavaScript" role="tabpanel" aria-labelledby="pills-JavaScript-tab">
                                                <JavaScript/>
                                            </div>

                                            </div>
                                        </>):<>
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
