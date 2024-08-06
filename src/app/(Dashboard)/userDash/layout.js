"use client"
import React from 'react';
import NavBar from '@/app/components/Header/NavBar/NavBar'
import Offanvas from '@/app/components/Header/OffCanvas/Offanvas'
import Footer from "@/app/components/Footer/Footer"



export default function layout({ children }) {



  return (
    <>

      <div className='maincontent'>
          <NavBar Directory="StudentRegister"/>
          <Offanvas Directory="StudentRegister"
          tab1="Profile" icon1="bi bi-person-square" link1="/userDash/StudentProfile" 
          tab5="Fee Status" icon5="bi bi-bank" link5="/userDash/FeeStatus"
          tab2="Course Index" icon2="bi bi-journals" link2="/userDash/CourseIndex"
          tab3="Certificate" icon3="bi bi-clipboard-check-fill" link3="/userDash/"
          />
           <div className='rootdiv px-md-5 p-0 p-2 m-md-2 m-0 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
