import React from 'react'

export default function CssIndex() {
  return (
    <div className='container'>
          <h4 className='mt-2'>Cascading Style Sheet</h4>

      <div className="accordion accordion-flush overflow-hidden mt-3" id="Cproraming">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS1" aria-expanded="false" aria-controls="flush-collapseOne">
                CSS Introduction
            </button>
          </h2>
          <div id="CSS1" className="accordion-collapse collapse" data-bs-parent="#Cproraming">
            <div className="accordion-body">


            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Introduction
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


            </div>
        </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS2" aria-expanded="false" aria-controls="flush-collapseTwo">
              CSS Selectors
            </button>
          </h2>
          <div id="CSS2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">

            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Element selector
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Universal selector
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Discendent selector
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Class selector
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Id selector
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Group selector
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Attribute selector
                </label>
              </div>

            </div>
        </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS3" aria-expanded="false" aria-controls="flush-collapseThree">
            CSS Pseudo-Classes Selectors
            </button>
          </h2>
          <div id="CSS3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#CSS3a" aria-expanded="false" aria-controls="flush-collapseThree">
                          Structural pseudo-class
                          </button>
                        </h2>
                        <div id="CSS3a" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
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


                            
                          </div>
                        </div>
                   </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#CSS3b" aria-expanded="false" aria-controls="flush-collapseThree">
                          Link pseudo-class:
                          </button>
                        </h2>
                        <div id="CSS3b" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
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
                            
                          </div>
                        </div>
                   </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#CSS3ca" aria-expanded="false" aria-controls="flush-collapseThree">
                          UI pseudo-class:
                          </button>
                        </h2>
                        <div id="CSS3ca" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
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
                            
                          </div>
                        </div>
                   </div>
              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS4" aria-expanded="false" aria-controls="flush-collapseThree">
              CSS Font
            </button>
          </h2>
          <div id="CSS4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Font
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Font Family
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Font Size
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Font Weight
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Text Color
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Font Varient
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Font Style
                </label>

              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS5" aria-expanded="false" aria-controls="flush-collapseThree">
              Text Formatting
            </button>
          </h2>
          <div id="CSS5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Text Decoration
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Text Align
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Text Shadow
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Text Transform
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Text Wordspacing
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Text Letterspacing
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  Line Height
                </label>

              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS6" aria-expanded="false" aria-controls="flush-collapseThree">
              CSS Background
            </button>
          </h2>
          <div id="CSS6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Color
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Image
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Repeat
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Attachment
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Size
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Clip
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Origin
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Background Position
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Opacity/Transparency
                </label>

              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS7" aria-expanded="false" aria-controls="flush-collapseThree">
              CSS Border
            </button>
          </h2>
          <div id="CSS7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Borders
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Border Style
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Border Width
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Border Color
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Border Radius
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Border Image
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Border Shorthand
                </label>

              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS8" aria-expanded="false" aria-controls="flush-collapseThree">
              CSS Box Model
            </button>
          </h2>
          <div id="CSS8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Height/Width
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Box Sizing
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Padding
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Margin
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Outline
                </label>
                <label className="list-group-item border-0">
                  <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                  CSS Box Shadow
                </label>
              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS9" aria-expanded="false" aria-controls="flush-collapseThree">
            Display and Position
            </button>
          </h2>
          <div id="CSS9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#CSS9a" aria-expanded="false" aria-controls="flush-collapseThree">
                          CSS Display
                          </button>
                        </h2>
                        <div id="CSS9a" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                Inline 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                Block 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                Inline Block
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                Flex
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                Grid
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                None
                              </label>                
                            </div>


                            
                          </div>
                        </div>
                   </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#CSS9b" aria-expanded="false" aria-controls="flush-collapseThree">
                          CSS position
                          </button>
                        </h2>
                        <div id="CSS9b" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                static (default value) 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                relative 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                absolute
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                fixed 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                sticky
                              </label>                
                            </div>
                            
                          </div>
                        </div>
                   </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#CSS9ca" aria-expanded="false" aria-controls="flush-collapseThree">
                          CSS Z-index and Overflow
                          </button>
                        </h2>
                        <div id="CSS9ca" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
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
                        </div>
                   </div>
              </div>


              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS10" aria-expanded="false" aria-controls="flush-collapseThree">
            CSS Transition, Transform, and Animations
            </button>
          </h2>
          <div id="CSS10" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              

            <div className="list-group">
                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS10a" aria-expanded="false" aria-controls="flush-collapseThree">
                          CSS Transforms Methods
                          </button>
                        </h2>
                        <div id="CSS10a" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

                          <div className="list-group">
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                translate() 
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                rotate()
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                scale()
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                skew()
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                matrix()
                              </label>
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                translate3d()
                              </label>  
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                rotate3d()
                              </label> 
                              <label className="list-group-item border-0">
                                <input className="form-check-input rounded-pill me-1" type="checkbox" value=""/>
                                scale3d()
                              </label>               
                            </div>


                            
                          </div>
                        </div>
                   </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS10b" aria-expanded="false" aria-controls="flush-collapseThree">
                          CSS Transitions
                          </button>
                        </h2>
                        <div id="CSS10b" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

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
                            
                          </div>
                        </div>
                   </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#CSS10ca" aria-expanded="false" aria-controls="flush-collapseThree">
                          CSS Animation
                          </button>
                        </h2>
                        <div id="CSS10ca" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            

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
                            
                          </div>
                        </div>
                   </div>
              </div>


              
            </div>
          </div>
        </div>

      </div>




    </div>
  )
}
