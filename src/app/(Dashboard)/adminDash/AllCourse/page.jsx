import CPrograming from '@/app/components/Main/StudentComponent/CourseIndex/CPrograming'
import CssIndex from '@/app/components/Main/StudentComponent/CourseIndex/CssIndex'
import HtmlIndex from '@/app/components/Main/StudentComponent/CourseIndex/HtmlIndex'
import JavaScript from '@/app/components/Main/StudentComponent/CourseIndex/JavaScript'
import React from 'react'

export default function page() {
  return (
    <>
      <ul className="nav nav-pills py-1 mb-3 mx-2 border rounded text-light bg-dark d-flex justify-content-evenly" id="pills-tab" role="tablist">

        <li className="nav-item me-1" role="presentation">
          <button className="nav-link link-light border text-light border-light active" id="pills-CPrograming-tab" data-bs-toggle="pill" data-bs-target="#pills-CPrograming" type="button" role="tab" aria-controls="pills-Transition" aria-selected="false">C/C++</button>
        </li>
        <li className="nav-item ms-1" role="presentation">
          <button className="nav-link link-light border text-light border border-light" id="pills-HtmlIndex-tab" data-bs-toggle="pill" data-bs-target="#pills-HtmlIndex" type="button" role="tab" aria-controls="pills-History" aria-selected="false">HTML</button>
        </li>

        <li className="nav-item ms-1" role="presentation">
          <button className="nav-link link-light border text-light border border-light" id="pills-CssIndex-tab" data-bs-toggle="pill" data-bs-target="#pills-CssIndex" type="button" role="tab" aria-controls="pills-History" aria-selected="false">CSS</button>
        </li>

        <li className="nav-item ms-1" role="presentation">
          <button className="nav-link link-light border text-light border border-light" id="pills-JavaScript-tab" data-bs-toggle="pill" data-bs-target="#pills-JavaScript" type="button" role="tab" aria-controls="pills-History" aria-selected="false">JS</button>
        </li>

      </ul>

      <div className="tab-content" id="pills-tabContent">


        <div className="tab-pane fade show active" id="pills-CPrograming" role="tabpanel" aria-labelledby="pills-CPrograming-tab">
            <CPrograming/>
        </div>
        <div className="tab-pane fade" id="pills-HtmlIndex" role="tabpanel" aria-labelledby="pills-HtmlIndex-tab">
            <HtmlIndex/>
        </div>

        <div className="tab-pane fade" id="pills-CssIndex" role="tabpanel" aria-labelledby="pills-CssIndex-tab">
            <CssIndex/>
        </div>

        <div className="tab-pane fade" id="pills-JavaScript" role="tabpanel" aria-labelledby="pills-JavaScript-tab">
            <JavaScript/>
        </div>

      </div>
      
      
      
    </>
  )
}
