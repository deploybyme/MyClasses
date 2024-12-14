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
                  
                    <div className="row">
                      <div className="col-12 col-sm-6 ">
                        font-family:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        Fontnames like Arial |  monospace etc ;
                      </div>
                    </div>

                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                 
                    <div className="row">
                      <div className="col-12 col-sm-6 ">
                      font-size: 
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      length units (px |  em |  rem |  etc) ;
                      </div>
                    </div>

                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                    <div className="row">
                      <div className="col-12 col-sm-6 ">
                      font-weight: 
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        normal |  bold |  bolder |  lighter |  100-900 ;
                      </div>
                    </div>

                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                    <div className="row">
                      <div className="col-12 col-sm-6 ">
                        font-style:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        normal |  italic |  obalique ;
                      </div>
                    </div>

                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                  
                  <div className="row">
                      <div className="col-12 col-sm-6 ">
                        font-variant:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      normal | small-caps | initial | inherit ;
                      </div>
                    </div>

                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      font-stretch:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      normal | semi-condensed | condensed | extra-condensed | ultra-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded ;
                      </div>
                    </div>
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      line-height:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      normal | number | length | % ;
                      </div>
                    </div>
                  
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      text-decoration:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      underline | overline | line-through | none | value | initial | inherit ;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      text-transform:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      none | capitalize | uppercase | lowercase | initial | inherit ;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      text-align:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      left | right | center | justify | initial | inherit ;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      text-align-last:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      auto | left | right | center | justify | start | end | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      text-shadow:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      h-shadow v-shadow blur-radius color | none | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      line-height:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      normal | number | length | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      word-spacing:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      normal | length | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      text-indent: 
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      length | initial | inherit;
                      </div>
                    </div>
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-color:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      color-value(rgb(0-255,0-255,0-255), #rrggbb,) | transparent | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-image:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      url(path-to-image) | none | initial | inherit;
                      </div>
                    </div>
                  
                   
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-repeat:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      repeat | repeat-x | repeat-y | no-repeat | space | round | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-attachment:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      scroll | fixed | local | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-size:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      auto | length | cover | contain | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-clip:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      border-box | padding-box | content-box | text | initial | inherit;
                      </div>
                    </div>
                  
               
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-origin:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      padding-box | border-box | content-box | initial | inherit;
                      </div>
                    </div>
                  
                
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      background-position:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      length value(s) | percentage value(s) | keyword(s) | initial | inherit;
                      </div>
                    </div>
                  
                   
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      opacity:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      number (0.0 - 1.0) | initial | inherit;
                      </div>
                    </div>
                  
                   
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      border-style: 
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      solid | dottet | dashed | double | grove | ridge | inset | outset | none;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      border-width:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        thin, medium, thick, px, pt, % ;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      border-color:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      color | transparent;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      border-radius:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      value | initial | inherit;
                      </div>
                    </div>
                  
                 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      border-image:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      source(URL()) slice(number) / width / outset repeat | initial | inherit;
                      </div>
                    </div>
                  
                  
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                      border:
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                      border-width  border-style  border-color;
                      </div>
                    </div>
                  
                 
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  height: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  box-sizing:
                </div>

                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  padding-top: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  padding-right:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  padding-bottom: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  margin-top: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  margin-right:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  margin-bottom: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  outline-style: 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  outline-width:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  outline-color:
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
                  CSS z-index 
                </div>
                <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                  
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
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                                
                                transition-property
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                                
                                transition-duration 
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                                
                                transition-timing-function
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                                
                                transition-delay
                              </div>
                              <div  className="list-group-item bg-black text-light border-left-0 border-right-0">
                <div className="row">
                      <div className="col-12 col-sm-6 ">
                       xxx
                      </div>
                      <div className="col-12 col-sm-6 text-warning">
                        yyy
                      </div>
                    </div>
                                
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
