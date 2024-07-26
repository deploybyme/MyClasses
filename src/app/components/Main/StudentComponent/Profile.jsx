import React from 'react'

export default function Profile(props) {
 


  return (
    <>
    
    <div className='d-flex justify-content-center'>
      <div className="rounded-circle bg-light avatar fs-1 fw-bold d-flex align-items-center justify-content-center"
      style={{height:100+"px",width:100+"px"}}
      >{((props.Name).charAt(0).toUpperCase())}</div>
      </div>
      <div className="text-center justify-self-center bg-light rounded mt-2">
          <b className='fs-3'>{props.Name}</b>
      </div>
    <div className='d-flex justify-content-center'>
        <div className='w-100'>
          <div className="row my-3">
              <div className="col-12">
                  <div className="list-group">
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Email</b></div>
                        <div className="col-12 col-sm-6">{props.Email}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Phone</b></div>

                        <div className="col-12 col-sm-6">{props.Phone}</div>
                      </div>
                    </button>
                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Father's Name</b></div>
                        <div className="col-12 col-sm-6">{props.fatherName}</div>
                      </div>
                    </button>

                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Course </b></div>

                        <div className="col-12 col-sm-6">{props.Course}</div>
                      </div>
                    </button>  

                    <button  className="list-group-item list-group-item-action">
                      <div className="row">
                        <div className="col-12 col-sm-6"><b>Admission Date </b></div>

                        <div className="col-12 col-sm-6">{props.AdmissionDate}</div>
                      </div>
                    </button>

                  </div>  
                
              </div>  

          </div>   
        </div>      



    </div>

    </>
  )
}
