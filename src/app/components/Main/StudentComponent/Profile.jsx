import React from 'react'

export default function Profile(props) {
  return (
    <>
<div>
    <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    
                  <div className="rounded-circle bg-light avatar fs-1 fw-bold d-flex align-items-center justify-content-center"
                    style={{height:100+"px",width:100+"px",cursor:"pointer"}}>
                        {((props.Name).charAt(0).toUpperCase())}
                    </div>

                    <div className="mt-3">
                      <h4>John Doe</h4>
                      <p className="text-secondary mb-1">{props.Course}</p>
                      <p className="text-muted font-size-sm">Acharya Computer Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Name}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Father's Name</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.fatherName}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-8 text-secondary">
                        {props.Phone}
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

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Practical Performance Status</h6>
                    
                        {
                            (props.Course==="C and C++ Programing")?(
                                <>
                                    <small>C Programing</small>
                                    <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>

                                    <small>C++ Programing</small>
                                    <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                    </div>
                                </>
                            ):(
                                (props.Course==="FrontEnd Development")?(
                                    <>
                                        <small>HTML</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
    
                                        <small>CSS</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
                                        <small>Javascript</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
                                    </>
                                ):(
                                  (props.Course==="JavaScript")?(
                                    <>
                                        <small>Javascript</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
                                    </>
                                ):(
                                    "No Course Found"
                                )
                                )
                            )
                        }
                    

                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Theory Performance Status</h6>
                      {
                            (props.Course==="C and C++ Programing")?(
                                <>
                                    <small>C Programing</small>
                                    <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>

                                    <small>C++ Programing</small>
                                    <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                    </div>
                                </>
                            ):(
                                (props.Course==="FrontEnd Development")?(
                                    <>
                                        <small>HTML</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
    
                                        <small>CSS</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
                                        <small>Javascript</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
                                    </>
                                ):(
                                  (props.Course==="JavaScript")?(
                                    <>
                                        <small>Javascript</small>
                                        <div className="progress" style={{height: 15+"px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: 25+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25</div>
                                        </div>
                                    </>
                                ):(
                                    "No Course Found"
                                )
                                )
                            )
                        }
                    </div>
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
