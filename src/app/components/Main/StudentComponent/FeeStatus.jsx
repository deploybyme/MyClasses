import React from 'react'

export default function FeeStatus(props) {
  return (
    <div className="main-body">
          <div className="row gutters-sm mx-0">
            <div className="col-md-4 mb-3 px-0">
              <div className="card" style={{position: "sticky", top: 75+"px"}}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    
                    <div className="mt-3">
                      <h4>{props.Name}</h4>
                      <p className="text-secondary mb-1">{props.Course}</p>
                      <p className="text-muted font-size-sm">Acharya Computer Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mb-5 px-0">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row mt-2">
                    <div className="col-sm-5">
                      <h6 className="mb-0"><i className="bi bi-tags-fill me-2 fs-5"></i>Course Fee</h6>
                    </div>
                    <div className="col-sm-7 mt-md-0 mt-2 text-secondary">
                        {props.Fee}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-5">
                      <h6 className="mb-0"><i className="bi bi-cash-coin me-2 fs-5"></i>Paid</h6>
                    </div>
                    <div className="col-sm-7 mt-md-0 mt-2" style={{color:"green"}}>
                        {props.Paid}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-5">
                      <h6 className="mb-0"><i className="bi bi-coin me-2 fs-5"></i>Balance</h6>
                    </div>
                    <div className="col-sm-7 mt-md-0 mt-2" style={{color:"red"}}>
                        {props.Balance}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-5">
                      <h6 className="mb-0"><i className="bi bi-calendar-month me-2 fs-5"></i>Admission Date</h6>
                    </div>
                    <div className="col-sm-7 mt-md-0 mt-2 text-secondary">
                        {props.AdmissionDate}
                    </div>
                  </div>
                 
                 
                  {/* <hr/> 
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-primary">Edit</a>
                    </div>
                  </div> */}


                </div>
              </div>

            </div>
          </div>

        </div>
  )
}
