import React from 'react'

export default function FeeStatus(props) {
  return (
    <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
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
            <div className="col-md-8 mb-5">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Course Fee</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Fee}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Paid</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Paid}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Balance</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Balance}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Admission Date</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
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
