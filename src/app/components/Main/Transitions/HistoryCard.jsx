import React from 'react'

export default function HistoryCard(props) {
  return (
    <>
<div className='mt-1 mx-1'>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      
      <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.sr}`} aria-expanded="true" aria-controls="collapseOne">     
       <div className="row w-100 px-2">
        <div className="col-6">
        <strong>Against:</strong><b className='fw-light'> {props.stdname}</b>
        </div>
        <div className="col-6 text-end">
          <strong><i className="bi bi-currency-rupee"></i>{props.Paid}</strong>
        </div>
       </div>
      </button>

    </h2>

    <div id={`${props.sr}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="row p-2">
        <div className="col-6">
          <p><strong>Updated By </strong><br /> {props.name}</p>
          <p><strong>Transition Type </strong><br />{props.transitionType || "No Record"}</p>
        </div>
        <div className="col-6 text-end">
          <p><strong>Date of Transition</strong> <br />{props.Dot}</p>
          <p><strong>Paid To </strong><br /> {props.transitionTo}</p>
        </div>
       </div>
      </div>
    </div>

  </div>


</div>
</div>
    </>
  )
}
