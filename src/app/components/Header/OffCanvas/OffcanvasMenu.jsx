
import React from 'react'

import './Offcanvas.css'
import Link from 'next/link'
export default function OffcanvasMenu(props) {



  return (
     <button className= {`nav-link `}  id="tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
      <Link href={`${props.tablink}`} className='bg-dark text-light text-decoration-none'>
          <span className="d-flex justify-content-between">
          {props.tab}
          <i className={props.icon}></i>
          </span>
      </Link> 
    </button>
  
  )
}
