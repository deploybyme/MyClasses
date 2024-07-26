import React from 'react'

export default function FeeStatus(props) {
  return (
    <div>
        <div className='rounded mt-4'>
          <h2>Fee Detail</h2>
        </div>
        <div className='d-flex justify-content-center'>
        <div className='w-100'>
          <div className="row my-3">
              <div className="col-12">
                  <div className="list-group">
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Course</b></div>
                        <div className="col-12 col-sm-6">{props.Course}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Course Fee</b></div>
                        <div className="col-12 col-sm-6">{props.Fee}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Paid</b></div>

                        <div className="col-12 col-sm-6">{props.Paid}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Balance</b></div>
                        <div className="col-12 col-sm-6">{props.Balance}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Last Payment</b></div>

                        <div className="col-12 col-sm-6">{props.AdmissionDate}</div>
                      </div>
                    </button>

                  </div>  
                
              </div>  

          </div>   
        </div>      



    </div>
    </div>
  )
}
