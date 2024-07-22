"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";

import OffcanvasMenu from './OffcanvasMenu'
export default function Offanvas(props) {
 
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
          
          const docRef = doc(db,"AdminMember",user.uid);
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
    <div className="offcanvas offcanvas-start sidebar-nav text-light"  tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header d-flex justify-content-between">
        <h5 className="offcanvas-title"><i className="bi bi-kanban mx-2"></i>DASHBOARD</h5>
        <button type="button" className="bg-transparent shadow-none text-light border-0 dash-btn" data-bs-dismiss="offcanvas">
           <i className="bi bi-x-lg"></i>
        </button>
    </div>
    
    <div className="row px-4">
          <div className="col-12">
    { userDetails ? (
                <>
                <small className='text-start ps-2 type'>{userDetails.MemberType}</small>
                <h6 className='accountInfo'>{userDetails.email}</h6>
                </>
              ) : (
                <>
                <small className='text-start ps-2 type'>Usertype</small>
                <h6 className='accountInfo'>Email id</h6>
                </>
        )}
          </div>

    </div>
      <div className="nav flex-column nav-pills px-3 py-4 border-top" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <OffcanvasMenu tab={props.tab1} icon={props.icon1} tablink={props.link1} />
      <OffcanvasMenu tab={props.tab3} icon={props.icon3} tablink={props.link3} />
      <OffcanvasMenu tab={props.tab2} icon={props.icon2} tablink={props.link2} />
      <OffcanvasMenu tab={props.tab4} icon={props.icon4} tablink={props.link4} />
      </div>

    </div>
    </>
  )
}
