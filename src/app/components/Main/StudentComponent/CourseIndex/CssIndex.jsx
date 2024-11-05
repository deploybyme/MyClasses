import React from 'react'

export default function CssIndex() {
  return (

    <>

  <section className="py-2 mt-4 mx-1 rounded timebox text-light bg-dark">
  <h3 className="fw-bold p-2 mx-4 my-3">CSS Index</h3>
 
      
        <h5 className="fw-bold p-3 bg-black text-light">CSS Introduction</h5>
            <div className="list-group mx-1 border rounded">
                 <div htmlFor="check-box1" className="list-group-item bg-black text-light border-left-0 border-right-0">
                   
                   Getting Started with CSS
                 </div>
                 <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                   
                   CSS Syntax
                 </div>
                 <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                   
                   Include CSS in a Webpage
                 </div>
               </div>
      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Selectors</h5>
        <div className="list-group mx-1 border rounded">
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  <div className="row pb-4 mt-0 mt-sm-2 border-bottom">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Element selector</b>  
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" TagName {"}
                        </div> property : value ;
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  <div className="row pb-4 border-bottom">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Universal selector</b>  
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" * {"}
                        </div> property : value ;
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>
                    
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  <div className="row pb-4 border-bottom">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Discendent selector</b> 
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" parent child {"}
                        </div> property : value ;
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  <div className="row pb-4 border-bottom">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Class selector</b> 
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" .className {"}
                        </div> property : value ;
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  <div className="row pb-4 border-bottom">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Id selector</b> 
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" #idName {"}
                        </div> property : value ;
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                   
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                 
                  <div className="row pb-4 border-bottom">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Group selector</b> 
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" selector1 , selector2 {"}
                        </div> property : value ;
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>

                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  <div className="row pb-4">
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        
                        <b>Attribute selector</b>  
                    </div>
                    <div className="col-sm-6 mt-sm-0 mt-4">
                        <div>
                        {" selector[attribute] {"}
                        </div> property : value ; 
                        <div>
                        {"}  "}
                        </div>
                    </div>
                  </div>                  
                </div>
            </div>
      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Pseudo-Classes Selectors</h5>
       
        <div className="list-group mx-1 border rounded">
        <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
            <div className="row">
              <div className="col-12">
                  <b>Syntax : </b>  
              </div>
              <div className="col-12">
                selector :pseudo-class {`{`} <br /> {`property : value`} <br /> {`}`}  
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-black bg-white p-2">
        Structural pseudo-class
        </p>
        <div className="list-group mx-1 border rounded">
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : first-child 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : last-child 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : first-of-type
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : not
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : empty
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : nth-child(n)
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : nth-last-child(n)
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : nth-last-of-type(n)
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : nth-of-type(n)
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : only-of-type
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  : only-child
                </div>
        </div>

        <p className="text-black bg-white p-2">
        Link pseudo-class:
        </p>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : link 
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : visited  
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : focus 
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : hover 
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : active
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : target
            </div>
        </div>


        <p className="text-black bg-white p-2">
            UI pseudo-class:
        </p>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : enabled 
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : disabled 
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : checked
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : in-range
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : optional
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : out-of-range
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : read-only
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : read-write
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : required
            </div>
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
              
              : root
            </div>                
          </div>
        

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Font Property</h5>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Font-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>
        <div className="list-group mx-1 border rounded">
        
        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Font-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  font-family:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  font-size:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  font-weight:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  font-style:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  font-variant:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  font-stretch:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  line-height:
                </div>

        </div>
        </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Text Formatting</h5>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Text-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>
        <div className="list-group mx-1 border rounded">
        
        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Text-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  text-decoration:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  text-transform:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  text-align:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  text-align-last:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  text-shadow:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  line-height:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  vertical-align:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  direction:
                </div>
        </div>
        </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Background Properties</h5>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Background-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>
        <div className="list-group mx-1 border rounded">
        
        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Background-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-color:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-image: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-repeat:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-attachment:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-size:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-clip:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-origin:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  background-position: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  opacity: 
                </div>
        </div>
        </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Border Properties</h5>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                    selector {`{`} <br /> {`Border-property : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>
        <div className="list-group mx-1 border rounded">
        
        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Border-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  border-style: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  border-width:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  border-color: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  border-radius:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  border-image:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  border:
                </div>
        </div>
        </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Box Model</h5>
        <div className="list-group mx-1 border rounded">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`Property : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>
      <div className="list-group mx-1 border rounded">
        
        <div className="list-group mt-2">
                <p className="text-black bg-white p-2">
                  CSS Height/Width
                </p>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  height: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  width:
                </div>
        </div>

        <div className="list-group mt-2">
                <p className="text-black bg-white p-2">
                  CSS Box Property
                </p>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Box-property</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  box-sizing:
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  box-shadow:
                </div>

        </div>

        <div className="list-group mt-2">
                <p className="text-black bg-white p-2">
                  CSS Padding
                </p>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Padding-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  padding-top: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  padding-right:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  padding-bottom: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  padding-left: 
                </div>

        </div>

        <div className="list-group mt-2">
                <p className="text-black bg-white p-2">
                  CSS Margin
                </p>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Margin-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  margin-top: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  margin-right:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  margin-bottom: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  margin-left: 
                </div>

        </div>

        <div className="list-group mt-2">
                <p className="text-black bg-white p-2">
                  CSS Outline
                </p>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Outline-properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  outline-style: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  outline-width:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  outline-color:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  outline: 
                </div>

        </div>        
      </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Display and Position</h5>
      <div className="list-group mx-1 border rounded">
          <p className="text-black bg-white p-2">
            CSS Display
          </p>
      <div className="list-group">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`display : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>

        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  <div className="row">
                  <div className="col-12 col-sm-6 ">
                      
                      <b>display:</b>   
                  </div>
                  <div className="col-12 col-sm-6">
                      <div className="list-group">
                                  <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                    inline 
                                  </div>
                                  <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                    block 
                                  </div>
                                  <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                    inline-block
                                  </div>
                                  <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                    flex
                                  </div>
                                  <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                    grid
                                  </div>
                                  <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                    none
                                  </div>                
                      </div> 
                  </div>
                  </div>
                </div>
        </div>

          <p className="text-black bg-white p-2">
            CSS Position
          </p>

        <div className="list-group">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`position : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>

        <div className="list-group mt-2">    

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                    
                    <b>position:</b>   
                  </div>
                  <div className="col-12 col-sm-6">
                      <div className="list-group">
                          <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                            static (default value) 
                          </div>
                          <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                            relative 
                          </div>
                          <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                            absolute
                          </div>
                          <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                            fixed 
                          </div>
                          <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                            sticky
                          </div>                
                        </div>
                  </div>
                </div>             
                </div>
        </div>       
      </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Z-index and Overflow</h5>
      <div className="list-group mx-1 border rounded">

      <div className="list-group">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`Property : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>

        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  CSS z-index 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  CSS overflow 
                </div> 
        </div>       
      </div>

      

      
        <h5 className="fw-bold p-3 bg-dark text-info">CSS Transform, Transition and Animations</h5>
     
      <div className="list-group mx-1 border rounded">

          <p className="text-black bg-white p-2">
            CSS Transform
          </p>

      <div className="list-group">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`transform : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>

        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  <div className="row">
                  <div className="col-12 col-sm-6 ">
                    
                    <b>transform:</b>   
                  </div>
                  <div className="col-12 col-sm-6">
                          <div className="list-group">
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                translate() 
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                rotate()
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                scale()
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                skew()
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                matrix()
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                translate3d()
                              </div>  
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                rotate3d()
                              </div> 
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                scale3d()
                              </div>               
                            </div>
                  </div>
                </div>

                </div>

        </div>       
      </div>

      <div className="list-group mx-1 border rounded">
          <p className="text-black bg-white p-2">
            CSS Transition
          </p>

      <div className="list-group">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`transition : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>

        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">

                          <div className="list-group">
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                transition-property
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                transition-duration 
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                transition-timing-function
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                transition-delay
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                transition (shorthand property)
                              </div>                
                          </div>

                </div>

        </div>       
      </div>

      <div className="list-group mx-1 border rounded">
          <p className="text-black bg-white p-2">
            CSS Animation
          </p>

      <div className="list-group">
            <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12">
                      <b>Syntax : </b>  
                  </div>
                  <div className="col-12">
                     selector {`{`} <br /> {`animation : value`} <br /> {`}`}  
                  </div>
                </div>
              </div>
        </div>

        <div className="list-group mt-2">

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                  <div className="col-12 col-sm-6 ">
                      <b>Properties</b>  
                  </div>
                  <div className="col-12 col-sm-6">
                      <b>Values</b>  
                  </div>
                </div>
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">

                          <div className="list-group">
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                @Keyframe rule 
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-name 
                              </div>            
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-duration
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-delay
                              </div>            
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-iteration-count 
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-direction
                              </div>            
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-timing-function
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation-fill-mode
                              </div>            
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                                
                                animation 
                              </div>          

                            </div>

                </div>

        </div>       
      </div>

      

  
  </section>
  
    </>
  )
}
