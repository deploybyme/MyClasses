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
          tab3="Course Index" icon3="bi bi-journals" link3="/userDash/CourseIndex"
          tab2="Fee Status" icon2="bi bi-bank" link2="/userDash/FeeStatus"
          />
           <div className='rootdiv px-md-5 p-0 p-2 m-md-2 m-1 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
