"use client"
import React, {useEffect, useState} from 'react';
import {auth, db} from "@/app/firebase";
import {doc, getDoc} from "firebase/firestore";
import Link from 'next/link';
export default function Offanvas(props) {
 
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
          
          const docRef = doc(db,props.Directory,user.uid);
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

  function handleLogout(){
    try {
        auth.signOut();
        window.location.href =(props.Directory==="StudentRegister")?"/":"/AdminLogin";
        console.log("User Logout Successfully !");

    } catch (error) {
        console.error("Error Logging Out :",error.message);
    }
}



  return (
    <>
      <div className="offcanvas offcanvas-start sidebar-nav bg-dark text-light" data-bs-scroll="true" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header d-flex justify-content-between">
          <h5 className="offcanvas-title">
            {/* <i className="bi bi-kanban mx-2"></i> */}
            <i className="bi bi-menu-button-wide text-light me-2"></i>
            DASHBOARD</h5>
          <button type="button" className="bg-transparent shadow-none text-light border-0 dash-btn" data-bs-dismiss="offcanvas">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="row px-4">
          <div className="col-12">
            {userDetails ? (
              <>
                <small className='text-start ps-2 type'>{userDetails.MemberType ? <><big>{userDetails.name}</big></> : <big>{userDetails.name}</big>}</small>
                <h6 className='accountInfo'>{userDetails.email}</h6>
              </>
            ) : (
              <>
                <small className='text-start ps-2 type'>User</small>
                <h6 className='accountInfo'>Email</h6>
              </>
            )}
          </div>
        </div>

        <div className="nav flex-column nav-pills px-3 py-4 border-top" id="v-pills-tab" role="tablist" aria-orientation="vertical">

          <button className={`nav-link border`} id="tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
            <Link href={`${props.link1}`} className='bg-dark text-light text-decoration-none'>
              <span className="d-flex justify-content-between">
                {props.tab1}
                <i className={props.icon1}></i>
              </span>
            </Link>
          </button>

          <hr />

          {userDetails ? (
            <>
              {
                userDetails.MemberType ?
                  <>
                    <button className={`nav-link border`} id="tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      <Link href={`${props.link4}`} className='bg-dark text-light text-decoration-none'>
                        <span className="d-flex justify-content-between">
                          {props.tab4}
                          <i className={props.icon4}></i>
                        </span>
                      </Link>
                    </button>
                  </> : ("")
              }
            </>
          ) : ("")
          }

          <button className={`nav-link border`} id="tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
            <Link href={`${props.link5}`} className='bg-dark text-light text-decoration-none'>
              <span className="d-flex justify-content-between">
                {props.tab5}
                <i className={props.icon5}></i>
              </span>
            </Link>
          </button>





          {userDetails ? (
            <>
              {
                (userDetails.MemberType == "Admin" || userDetails.studentType) ?
                  <>
                    <hr />
                    <button className={`nav-link border`} id="tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      <Link href={`${props.link2}`} className='bg-dark text-light text-decoration-none'>
                        <span className="d-flex justify-content-between">
                          {props.tab2}
                          <i className={props.icon2}></i>
                        </span>
                      </Link>
                    </button>
                  </> : ("")
              }
            </>
          ) : ("")
          }


          {userDetails ? (
            <>
              {
                userDetails.MemberType == "Admin" ?
                  <>
                    <button className={`nav-link border`} id="tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                      <Link href={`${props.link3}`} className='bg-dark text-light text-decoration-none'>
                        <span className="d-flex justify-content-between">
                          {props.tab3}
                          <i className={props.icon3}></i>
                        </span>
                      </Link>
                    </button>

                  </> : ("")
              }
            </>
          ) : ("")
          }

        </div>

        <div className='nav flex-column nav-pills px-3 py-4 fixed'>
          <button className="dropdown-item d-flex align-items-center justify-content-center rounded" type="button" id="exit" onClick={handleLogout}>
            <i className="bi bi-box-arrow-in-right fs-4 me-1"></i>
            <b className='text-decoration-none fw-light'>Log Out</b>
          </button>
        </div>

      </div>
    </>
  )
}
