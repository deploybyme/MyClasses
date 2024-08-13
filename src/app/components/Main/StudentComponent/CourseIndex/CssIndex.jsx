import React from 'react'

export default function CssIndex() {
  return (

    <>

  <section className="py-2 mt-4 mx-1 rounded timebox">
  <h3 className="fw-bold p-2 mx-4 my-3 bg-light border-dark rounded border-bottom">Cascading Style Sheet Index</h3>
    <ul className="timeline ps-1">

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Introduction</h5>
            <div className="list-group me-1">
                 <label className="list-group-item border-0">
                   <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                   Getting Started with CSS
                 </label>
                 <label className="list-group-item border-0">
                   <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                   CSS Syntax
                 </label>
                 <label className="list-group-item border-0">
                   <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                   Include CSS in a Webpage
                 </label>
               </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Selectors</h5>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Element selector</b>  
                    </div>
                    <div className="col-sm-6">
                        <div>
                        {" TagName {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>
                </label>
                <label className="list-group-item border-0">
                  <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Universal selector</b>  
                    </div>
                    <div className="col-sm-6">
                        <div>
                        {" * {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>
                    
                </label>
                <label className="list-group-item border-0">
                  
                <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Discendent selector</b> 
                    </div>
                    <div className="col-sm-6">
                        <div>
                        {" parent child {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                 
                </label>
                <label className="list-group-item border-0">
                  
                <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Class selector</b> 
                    </div>
                    <div className="col-sm-6">
                        <div>
                        {" .className {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                  
                </label>
                <label className="list-group-item border-0">
                  
                <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Id selector</b> 
                    </div>
                    <div className="col-sm-6">
                        <div>
                        {" #idName {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                   
                </label>
                <label className="list-group-item border-0">
                 
                <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Group selector</b> 
                    </div>
                    <div className="col-sm-6">
                        <div>
                        {" selector1 , selector2 {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                </label>
                <label className="list-group-item border-0">
                  
                <div className="row">
                    <div className="col-sm-6">
                        <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                        <b>Attribute selector</b>  
                    </div>
                    <div className="col-sm-6">
                    <div>
                        {" selector[attribute] {"}
                        </div> property : value 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>                  
                </label>
            </div>
      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Pseudo-Classes Selectors</h5>
       
        <div className="list-group me-1">
        <label className="list-group-item border-0">
            <div className="row">
              <div className="col-12">
                  <b>Syntax : </b>  
              </div>
              <div className="col-12">
                selector :pseudo-class {`{`} <br /> {`property : value`} <br /> {`}`}  
              </div>
            </div>
          </label>
        </div>
        
        <p className="text-muted mb-2 mt-3 fw-bold">
        Structural pseudo-class
        </p>
        <div className="list-group me-1">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : first-child 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : last-child 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : first-of-type
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : not
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : empty
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : nth-child(n)
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : nth-last-child(n)
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : nth-last-of-type(n)
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : nth-of-type(n)
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : only-of-type
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  : only-child
                </label>
        </div>

        <p className="text-muted mb-2 mt-3 fw-bold">
        Link pseudo-class:
        </p>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : link 
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : visited  
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : focus 
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : hover 
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : active
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : target
            </label>
        </div>


        <p className="text-muted mb-2 mt-3 fw-bold">
            UI pseudo-class:
        </p>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : enabled 
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : disabled 
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : checked
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : in-range
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : optional
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : out-of-range
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : read-only
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : read-write
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : required
            </label>
            <label className="list-group-item border-0">
              <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
              : root
            </label>                
          </div>
        

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Font Property</h5>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Font-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>
        <div className="list-group me-1">
        
        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Font-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  font-family:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  font-size:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  font-weight:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  font-style:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  font-variant:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  font-stretch:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  line-height:
                </label>

        </div>
        </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Text Formatting</h5>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Text-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>
        <div className="list-group me-1">
        
        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Text-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  text-decoration:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  text-transform:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  text-align:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  text-align-last:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  text-shadow:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  line-height:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  vertical-align:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  direction:
                </label>
        </div>
        </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Background Properties</h5>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Background-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>
        <div className="list-group me-1">
        
        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Background-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-color:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-image: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-repeat:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-attachment:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-size:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-clip:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-origin:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  background-position: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  opacity: 
                </label>
        </div>
        </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Border Properties</h5>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Border-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>
        <div className="list-group me-1">
        
        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Border-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  border-style: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  border-width:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  border-color: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  border-radius:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  border-image:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  border:
                </label>
        </div>
        </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Box Model</h5>
        <div className="list-group me-1">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`Property : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>
      <div className="list-group me-1">
        
        <div className="list-group mt-2">
                <p className="text-muted mb-2 mt-3 fw-bold">
                  CSS Height/Width
                </p>
                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  height: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  width:
                </label>
        </div>

        <div className="list-group mt-2">
                <p className="text-muted mb-2 mt-3 fw-bold">
                  CSS Box Property
                </p>
                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Box-property</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  box-sizing:
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  box-shadow:
                </label>

        </div>

        <div className="list-group mt-2">
                <p className="text-muted mb-2 mt-3 fw-bold">
                  CSS Padding
                </p>
                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Padding-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  padding-top: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  padding-right:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  padding-bottom: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  padding-left: 
                </label>

        </div>

        <div className="list-group mt-2">
                <p className="text-muted mb-2 mt-3 fw-bold">
                  CSS Margin
                </p>
                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Margin-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  margin-top: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  margin-right:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  margin-bottom: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  margin-left: 
                </label>

        </div>

        <div className="list-group mt-2">
                <p className="text-muted mb-2 mt-3 fw-bold">
                  CSS Outline
                </p>
                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Outline-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  outline-style: 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  outline-width:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  outline-color:
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  outline: 
                </label>

        </div>        
      </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Display and Position</h5>
      <div className="list-group me-1">
          <p className="text-muted mb-2 mt-3 fw-bold">
            CSS Display
          </p>
      <div className="list-group">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`display : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>

        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                      <b>display:</b>   
                  </div>
                  <div className="col-12 col-sm-6">
                      <div className="list-group">
                                  <label className="list-group-item border-0">
                                    inline 
                                  </label>
                                  <label className="list-group-item border-0">
                                    block 
                                  </label>
                                  <label className="list-group-item border-0">
                                    inline-block
                                  </label>
                                  <label className="list-group-item border-0">
                                    flex
                                  </label>
                                  <label className="list-group-item border-0">
                                    grid
                                  </label>
                                  <label className="list-group-item border-0">
                                    none
                                  </label>                
                      </div> 
                  </div>
                  </div>
                </label>
        </div>

          <p className="text-muted mb-2 mt-3 fw-bold">
            CSS Position
          </p>

        <div className="list-group">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`position : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>

        <div className="list-group mt-2">    

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    <b>position:</b>   
                  </div>
                  <div className="col-12 col-sm-6">
                      <div className="list-group">
                          <label className="list-group-item border-0">
                            static (default value) 
                          </label>
                          <label className="list-group-item border-0">
                            relative 
                          </label>
                          <label className="list-group-item border-0">
                            absolute
                          </label>
                          <label className="list-group-item border-0">
                            fixed 
                          </label>
                          <label className="list-group-item border-0">
                            sticky
                          </label>                
                        </div>
                  </div>
                </div>             
                </label>
        </div>       
      </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Z-index and Overflow</h5>
      <div className="list-group me-1">

      <div className="list-group">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`Property : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>

        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS z-index 
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS overflow 
                </label> 
        </div>       
      </div>

      </li>

      <li className="timeline-item mb-5">
        <h5 className="fw-bold ps-3">CSS Transform, Transition and Animations</h5>
     
      <div className="list-group me-1">

          <p className="text-muted mb-2 mt-3 fw-bold">
            CSS Transform
          </p>

      <div className="list-group">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`transform : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>

        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">
                  <div className="row">
                  <div className="col-12 col-sm-6 ">
                    <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                    <b>transform:</b>   
                  </div>
                  <div className="col-12 col-sm-6">
                          <div className="list-group">
                              <label className="list-group-item border-0">
                                translate() 
                              </label>
                              <label className="list-group-item border-0">
                                rotate()
                              </label>
                              <label className="list-group-item border-0">
                                scale()
                              </label>
                              <label className="list-group-item border-0">
                                skew()
                              </label>
                              <label className="list-group-item border-0">
                                matrix()
                              </label>
                              <label className="list-group-item border-0">
                                translate3d()
                              </label>  
                              <label className="list-group-item border-0">
                                rotate3d()
                              </label> 
                              <label className="list-group-item border-0">
                                scale3d()
                              </label>               
                            </div>
                  </div>
                </div>

                </label>

        </div>       
      </div>

      <div className="list-group me-1">
          <p className="text-muted mb-2 mt-3 fw-bold">
            CSS Transition
          </p>

      <div className="list-group">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`transition : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>

        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">

                          <div className="list-group">
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                transition-property
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                transition-duration 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                transition-timing-function
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                transition-delay
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                transition (shorthand property)
                              </label>                
                          </div>

                </label>

        </div>       
      </div>

      <div className="list-group me-1">
          <p className="text-muted mb-2 mt-3 fw-bold">
            CSS Animation
          </p>

      <div className="list-group">
            <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`animation : value`} <br /> {`}`}  
                  </div>
                </div>
              </label>
        </div>

        <div className="list-group mt-2">

                <label className="list-group-item border-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </label>

                <label className="list-group-item border-0">

                          <div className="list-group">
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                @Keyframe rule 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-name 
                              </label>            
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-duration
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-delay
                              </label>            
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-iteration-count 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-direction
                              </label>            
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-timing-function
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation-fill-mode
                              </label>            
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                animation 
                              </label>          

                            </div>

                </label>

        </div>       
      </div>

      </li>

    </ul>
  </section>
  
    </>
  )
}
