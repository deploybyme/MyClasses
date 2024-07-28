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
          tab2="Course Index" icon2="bi bi-journals" link2="/userDash/CourseIndex"
          tab3="Fee Status" icon3="bi bi-bank" link3="/userDash/FeeStatus"
          />
           <div className='rootdiv px-md-5 p-0 p-2 m-md-2 m-1 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
