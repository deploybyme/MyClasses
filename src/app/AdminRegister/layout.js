"use client"
import React from 'react';
import NavBar from '@/app/components/Header/NavBar/NavBar'
import Offanvas from '@/app/components/Header/OffCanvas/Offanvas'
import Footer from "@/app/components/Footer/Footer"



export default function layout({ children }) {



  return (
    <>

      <div className='maincontent'>
          <NavBar />
          <Offanvas
          tab1="All Students" icon1="bi bi-person-lines-fill" link1="/adminDash/" 
          tab2="Transition" icon2="bi bi-currency-rupee" link2="/adminDash/Transition"
          tab3="Expense" icon3="bi bi-bank" link3="/adminDash/TotalExpence"
          tab4="Add Member" icon4="bi bi-person-fill-add" link4="/AdminRegister"
          />
           <div className='rootdiv px-md-5 p-0 p-2 m-md-2 m-1 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
