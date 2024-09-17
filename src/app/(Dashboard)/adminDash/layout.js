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
          tab4="Expense" icon4="bi bi-bank" link4="/adminDash/TotalExpence/"
          tab5="Transition" icon5="bi bi-currency-rupee" link5="/adminDash/Transition/"
          tab2="All Course" icon2="bi bi-journals" link2="/adminDash/AllCourse/"
          tab3="Student Report" icon3="bi bi-clipboard-check-fill" link3="/adminDash/ReportAndCretificate/"
          />
           <div className='rootdiv m-md-2 m-0 py-5 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
