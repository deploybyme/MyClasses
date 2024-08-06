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
          tab4="All Course" icon4="bi bi-journals" link4="/adminDash/AllCourse/"
          tab5="Student Report" icon5="bi bi-clipboard-check-fill" link5="/adminDash/ReportAndCretificate/"
          />
           <div className='rootdiv m-md-2 m-0 py-5 formbox'>

                {children}

            </div> 
              
             <Footer/>
      </div>

           
  </>
  )
}
