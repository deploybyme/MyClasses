"use client"
import React from 'react';
import NavBar from '@/app/components/Header/NavBar/NavBar'
import Offanvas from '@/app/components/Header/OffCanvas/Offanvas'
import Footer from "@/app/components/Footer/Footer"



export default function layout({ children }) {



  return (
    <>

      <div className='maincontent'>
          <NavBar Directory="AdminMember"/>
          <Offanvas Directory="AdminMember"
          tab1="All Students" icon1="bi bi-person-lines-fill" link1="/adminDash/"
          tab2="Expense" icon2="bi bi-bank" link2="/adminDash/TotalExpence/"
          tab3="Transition" icon3="bi bi-currency-rupee" link3="/adminDash/Transition/"
          />
           <div className='rootdiv px-md-5  m-md-2 m-1 py-5 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
