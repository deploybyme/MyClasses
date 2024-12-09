import React from 'react'

export default function CPrograming() {

  return (
    <>
      <a id="TopButton" href="#C/C++">
        <button className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
          </svg>
        </button>
      </a>
      <h3 id="C/C++" className="fw-bold p-2 my-3 text-center text-light bg-dark">Core C and C++</h3>

      <ul className="list-group-item border-0 rounded-0 bg-dark text-light p-4" style={{lineHeight:2}}>
      <h4>INDEX</h4>
          <li>
            <a href="#introduction" className="text-warning text-decoration-none">Introduction</a>
              <ul>
                  <li>
                      <a href="#Csyntax" className="text-decoration-none">Structure of C</a>
                  </li>
                  <li>
                      <a href="#Keywords" className="text-decoration-none">Keywords is C</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#Fundamentals" className="text-warning text-decoration-none">Fundamentals</a>
              <ul>
                  <li>
                      <a href="#Variables" className="text-decoration-none">Variables, Constants and Literals</a>
                  </li>
                  <li>
                      <a href="#DataTypes" className="text-decoration-none">C Data Types</a>
                  </li>
                  <li>
                      <a href="#InputOutput" className="text-decoration-none">Input Output</a>
                  </li>
                  <li>
                      <a href="#Operators" className="text-decoration-none">Operators</a>
                  </li>
              </ul>
          </li>
          <li>
            <a href="#FlowControl" className="text-warning text-decoration-none">Flow Control</a>
            <ul>
                  <li>
                      <a href="#ifElse" className="text-decoration-none">If Else Statements</a>
                  </li>
                  <li>
                      <a href="#Switch" className="text-decoration-none">Switch Statements</a>
                  </li>
                  <li>
                      <a href="#Goto" className="text-decoration-none">Goto Statement</a>
                  </li>
                  <li>
                      <a href="#Loop" className="text-decoration-none">while, do...while and for Loop</a>
                  </li>
            </ul>
          </li>
          <li>
            <a href="#Functions" className="text-warning text-decoration-none">Functions</a>
            <ul>
                  <li>
                      <a href="#functionIntro" className="text-decoration-none">Functions</a>
                  </li>
                  <li>
                      <a href="#UserDefinedFunction" className="text-decoration-none">User Define Functions</a>
                  </li>
            </ul>
          </li>
          <li>
            <a href="#Arrays" className="text-warning text-decoration-none">Arrays</a>
            <ul>
                  <li>
                      <a href="#ArraysIntro" className="text-decoration-none">Arrays introduction, 1-D Array</a>
                  </li>
                  <li>
                      <a href="#MultiDimentionalArray" className="text-decoration-none">Multi-Dimentional Arrays</a>
                  </li>
            </ul>
          </li>
          <li>
            <a href="#Pointers" className="text-warning text-decoration-none">Pointers</a>
            <ul>
                  <li>
                      <a href="#PointerIntro" className="text-decoration-none">Pointer Variable</a>
                  </li>
                  <li>
                      <a href="#ReferencesIntro" className="text-decoration-none">References Variable</a>
                  </li>
            </ul>
          </li>
          <li>
            <a href="#Structures" className="text-warning text-decoration-none">Structures</a>
          </li>
          <li>
            <a href="#FileHandling" className="text-warning text-decoration-none">File Handling</a>
          </li>
      </ul>

      <section className="py-2 mt-4 mx-1 rounded text-light bg-dark bg-gradient">

        {/* ======================================  Introduction  =========================================== */}
        <div className="p-4" id="introduction"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">Introduction</h5>
        <div className="list-group mb-5">

          <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
            C is a powerful general-purpose programming language known for its efficiency
            and flexibility. It's commonly used in system programming, embedded systems,
            and creating high-performance applications.It was created in the 1970s by
            <a className='text-link' style={{ cursor: "pointer" }}> Dennis Ritchie </a>
            and remains very widely used and influential
          </div>
          <div className="p-3" id="Csyntax"></div>
          <p className="pt-3 m-3 text-info">
            Structure of C
          </p>
          <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4 ">

            <p className='rounded p-2' id="CodeBox">
              <code className='text-dark'>
                {` #include <stdio.h>                   `} <br />
                {` int main(){                          `} <br />
                &nbsp;{`      printf(" Hello World! "); `} <br />
                &nbsp;{`      return 0;                 `} <br />
                {` }                                    `} <br />
              </code >
            </p>

            <div className="row border-bottom border-top mt-4 m-1">
              <div className="col-3 ">
                <b className=' text-warning '>#</b>
              </div>
              <div className="col-9">
                is pre-processor directive
              </div>
            </div>

            <div className="row border-bottom m-1">
              <div className="col-3">
                <b className=' text-warning '>include</b>
              </div>
              <div className="col-9 ">
                means attachment which attach header files from C library
              </div>
            </div>

            <div className="row border-bottom m-1">
              <div className="col-3">
                <b className=' text-warning '>stdio.h</b>
              </div>
              <div className="col-9 ">
                is a C Header File
              </div>
            </div>

            <div className="row border-bottom m-1">
              <div className="col-3">
                <b className=' text-warning '>main{'()'}</b>
              </div>
              <div className="col-9 ">
                is main function in C, is the entry point of a program where the execution of a program starts.
              </div>
            </div>

            <div className="row m-1 border-bottom">
              <div className="col-3">
                <b className=' text-warning '>printf{'()'}</b>
              </div>
              <div className="col-9 ">
                is a C standard library function that formats text and writes it to standard output.
              </div>
            </div>

            <div className="row m-1">
              <div className="col-3">
                <b className=' text-warning '>return</b>
              </div>
              <div className="col-9 ">
                ends the execution of a function and returns the control to the function from where it was called.
              </div>
            </div>

          </div>
          <div className="p-3" id="Keywords"></div>
          <p className="pt-3 m-3 text-info fs-5">
            Keywords is C
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4">
            <div>
              <b className="text-primary">Keywords</b> are predefined, reserved words used in programming
              that have special meanings to the compiler.
              Keywords are part of the syntax and they cannot be used as an identifier.
              <br /><br />
              Here is a list of all keywords allowed in ANSI C.
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">auto</div>
              <div className="col-3 bh-highlight  keyfont">double</div>
              <div className="col-3 bh-highlight  keyfont">int</div>
              <div className="col-3 bh-highlight  keyfont">struct</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">break</div>
              <div className="col-3 bh-highlight  keyfont">else</div>
              <div className="col-3 bh-highlight  keyfont">long</div>
              <div className="col-3 bh-highlight  keyfont">switch</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">case</div>
              <div className="col-3 bh-highlight  keyfont">enum</div>
              <div className="col-3 bh-highlight  keyfont">register</div>
              <div className="col-3 bh-highlight  keyfont">typedef</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">char</div>
              <div className="col-3 bh-highlight  keyfont">extern</div>
              <div className="col-3 bh-highlight  keyfont">return</div>
              <div className="col-3 bh-highlight  keyfont">union</div>
            </div>

            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">continue</div>
              <div className="col-3 bh-highlight  keyfont">for</div>
              <div className="col-3 bh-highlight  keyfont">signed</div>
              <div className="col-3 bh-highlight  keyfont">void</div>
            </div>
            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">do</div>
              <div className="col-3 bh-highlight  keyfont">if</div>
              <div className="col-3 bh-highlight  keyfont">static</div>
              <div className="col-3 bh-highlight  keyfont">while</div>
            </div>
            <div className="row my-3 ">
              <div className="col-3 bh-highlight  keyfont">default</div>
              <div className="col-3 bh-highlight  keyfont">goto</div>
              <div className="col-3 bh-highlight  keyfont">sizeof</div>
              <div className="col-3 bh-highlight  keyfont">volatile</div>
            </div>
            <div className="row mb-3">
              <div className="col-3 bh-highlight  keyfont">const</div>
              <div className="col-3 bh-highlight  keyfont">float</div>
              <div className="col-3 bh-highlight  keyfont">short</div>
              <div className="col-3 bh-highlight  keyfont">unsigned</div>
            </div>

          </div>

        </div>
        {/* ======================================  /Introduction  =========================================== */}
        {/* =======================================  Fundamentals  =========================================== */}
        <div className="p-4" id="Fundamentals"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C Fundamentals</h5>
        <div className="list-group">

        <div className="p-3" id="Variables"></div>
          <p className="pt-3 m-3 text-info fs-5">
            Variables, Constants and Literals
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <p>
              In programming, a <b className="text-primary">variable</b> is a container {"("}storage area{")"} to hold data.
              <br />
              To indicate the storage area, each variable should be given a unique name {"("}<b>Identifier</b>{")"}.
            </p>
            <b>syntax of variable declaration and initiation</b>
            <p className='rounded my-2 p-2 ' id="CodeBox">
              data_type &nbsp; variable_name &nbsp; = &nbsp; value;
            </p>
            <b>Example:</b>
            <p className='bg-black rounded mt-2 p-2'>
              <code className='text-light' style={{ fontSize: "large" }}>
                <span style={{ color: "magenta" }}>int</span> age = <span style={{ color: "orange" }}>25</span>;
                <br />
                <span style={{ color: "magenta" }}>float</span> marks = <span style={{ color: "orange" }}>87.79</span>;
                <br />
                <span style={{ color: "magenta" }}>char</span> grade = <span style={{ color: "lightgreen" }}>'A'</span>;
              </code>
            </p>
          </div>
        <div className="p-3" id="DataTypes"></div>
          <p className="pt-3 m-3 text-info fs-5">
            C Data Types
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <p>
              In C programming, data types are declarations for variables.
              This determines the type and size of data associated with variables. For example,
            </p>

            <p className='rounded mt-2 p-2' id="CodeBox">
              <span style={{ color: "magenta" }}>int</span> myVar ;
            </p>

            <p>
              Here, <span className='p-1 bh-highlight border rounded'>myVar</span> is a variable of <span className='p-1 bh-highlight border rounded'>int</span> (integer) data type. The size of int is 4 bytes.
            </p>

            <div>

              <h5 className="border-bottom">Basic Data types</h5>
              <p>
                Here's a table containing commonly used types in C programming for quick access.
              </p>
              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
                  <div className="col-4 py-2">Types</div>
                  <div className="col-4 py-2">Size</div>
                  <div className="col-4 py-2">Format Specifier</div>
                </div>
                <div className="row border border-bottom-0">
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>int</span>
                  </div>
                  <div className="col-4 py-2">at least 2, usually 4</div>
                  <div className="col-4 py-2" style={{ lineHeight: 2 }}>
                    <span className='p-1 bh-highlight border rounded'>%d</span> ,
                    <span className='mx-1 p-1 bh-highlight border rounded'>%i</span>
                  </div>
                </div>
                <div className="row border border-bottom-0">
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>char</span>
                  </div>
                  <div className="col-4 py-2">1</div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>%c</span>
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>float</span>
                  </div>
                  <div className="col-4 py-2">4</div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>%f</span>
                  </div>
                </div>

                <div className="row border rounded-bottom mb-3">
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>double</span>
                  </div>
                  <div className="col-4 py-2">8</div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>%lf</span>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className="p-3" id="InputOutput"></div>
          <p className="pt-3 m-3 text-info fs-5">
            Input Output (I/O)
          </p>
          <div className="list-group-item border-0 rounded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <div>

              <h3 className="border-bottom">C output</h3>
              <p style={{lineHeight:2}}>
                In C programming,<span className='p-1 bh-highlight border rounded'>printf( )</span> is one of the main output function.
                The function sends formatted output to the screen. For example,
              </p>

              <h6>Syntax :</h6>
              <p className='rounded mt-2 p-2' id="CodeBox">
                printf{"("}<span style={{ color: "#009500" }}>" Text content "</span>{")"};
              </p>
              <p className='bg-black p-3 rounded' id="CodeBox" style={{ textAlign: "start" }}>
                <code className='text-light'>
                  <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                  <br />
                  {"{"}
                  <br />
                  &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" C Programming "</span>{")"};
                  <br />
                  <span style={{ color: '#ffffaf' }}>// Displays the string inside quotations</span>
                  <br />
                  &nbsp; <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                  <br />
                  {"}"}
                </code >
              </p>

            </div>

            <div className='my-3'>
              <h6>Output of type variables</h6>

              <h6>Syntax :</h6>
              <p className='rounded mt-2 p-2' id="CodeBox">
                printf{"("}<span style={{ color: "#009500" }}>" Content + FS "</span>, Variable_name{")"};
              </p>

              <p className='bg-black p-3 rounded' id="CodeBox" style={{ textAlign: "start" }}>
                <code className='text-light'>
                  <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                  <br />
                  {"{"}
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>int</span> number1 = <span style={{ color: "orange" }}>1290</span>;
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>float</span> number2 = <span style={{ color: "orange" }}>857.233</span>;
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>char</span> alphabet = <span style={{ color: "lightgreen" }}>'F'</span>;
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Number1 = %d \n"</span>, number1{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Number1 = %f \n"</span>,number2{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Alphabet = %c \n"</span>,alphabet{")"};
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                  <br />
                  {"}"}
                </code >
              </p>

              <h6>Output :</h6>
              <p className='bg-black p-3 rounded'>
                <code className='text-light'>

                  Number1 = 1290
                  <br />
                  Number2 = 857.233
                  <br />
                  Alphabet = F

                </code >
              </p>

            </div>

            <div className='my-3'>
              <h3 className="mt-5">C Input</h3>
              <p style={{ lineHeight: 2 }}>
                In C programming, <span className='p-1 bh-highlight border rounded'>scanf()</span> is one of the commonly used function to take input from the user.
                The <span className='p-1 bh-highlight border rounded'>scanf()</span> function reads formatted input from the standard input such as keyboards
              </p>

              <h6>Syntax :</h6>
              <p className='rounded mt-2 p-2' id="CodeBox">
                scanf{"("}<span style={{ color: "#009500" }}>" Format Specifier "</span>, &variable_name{")"} ;
              </p>

              <p className='bg-black p-2 rounded' id="CodeBox" style={{ textAlign: "start" }}>
                <code className='text-light'>
                  <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                  <br />
                  {"{"}
                  <br />
                  &nbsp;  <span style={{ color: "magenta" }}>int</span> num;
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Enter Number : "</span>{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>scanf</span>{"("}<span style={{ color: "lightgreen" }}>" %d "</span>,&num{")"};
                  <br />
                  &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Your Number is %d "</span>,num{")"};
                  <br />
                  &nbsp;   <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                  <br />
                  {"}"}
                </code >
              </p>

              <h6>Output :</h6>
              <p className='bg-black p-3 rounded' id="CodeBox">
                <code className='text-light'>
                  Enter Number : 45
                  <br />
                  Your Number is 45
                </code >
              </p>
            </div>

            <div>
              <h5>Format Specifiers for I/O</h5>
              <p>
                As you can see from the above examples, we use
              </p>
              <ul type="square" style={{ lineHeight: 2 }}>
                <li>
                  <span className='p-1 bh-highlight border rounded'>%d</span> for <span className='p-1 bh-highlight border rounded'>int</span>
                </li>
                <li>
                  <span className='p-1 bh-highlight border rounded'>%c</span> for <span className='p-1 bh-highlight border rounded'>char</span>
                </li>
                <li>
                  <span className='p-1 bh-highlight border rounded'>%f</span> for <span className='p-1 bh-highlight border rounded'>float</span>
                </li>
                <li>
                  <span className='p-1 bh-highlight border rounded'>%lf</span> for <span className='p-1 bh-highlight border rounded'>double</span>
                </li>
              </ul>

            </div>

          </div>
          <div className="p-3" id="Operators"></div>
          <p className="pt-3 m-3 text-info fs-5">
            Operators
          </p>
          <div className="list-group-item border-0 ronded-0 text-light bg-dark py-4" style={{ textAlign: "justify" }}>
            <div>
              <p>
                An <b className="text-primary">operator</b> is a symbol that operates on a value or a variable to perform specific task.
                <br />
                <b>For example:</b>  + is an operator to perform addition.
                <br />C has a wide range of operators to
                perform various operations.
              </p>
              <h5>Arithmetic Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                An arithmetic operator performs mathematical operations such as addition, subtraction,
                multiplication, division etc on numerical values (constants and variables)
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
                  <div className="col-6 py-2">Operator</div>
                  <div className="col-6 py-2">Meaning</div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-6 py-2"> + </div>
                  <div className="col-6 py-2"> addition </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-6 py-2"> - </div>
                  <div className="col-6 py-2"> subtraction </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-6 py-2"> * </div>
                  <div className="col-6 py-2"> multiplication </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-6 py-2"> / </div>
                  <div className="col-6 py-2"> division </div>
                </div>

                <div className="row border rounded-bottom mb-5">
                  <div className="col-6 py-2"> % </div>
                  <div className="col-6 py-2"> remainder</div>
                </div>
              </div>

              <h5>Increment and Decrement Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                C programming has two operators increment <span className='p-1 bh-highlight border rounded'>++</span> and decrement <span className='p-1 bh-highlight border rounded'>--</span> to change the value of an operand (constant or variable) by 1.
                Increment <span className='p-1 bh-highlight border rounded'>++</span> increases the value by 1 whereas decrement <span className='p-1 bh-highlight border rounded'>--</span> decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
                  <div className="col-4 py-2">Operator</div>
                  <div className="col-4 py-2">Example</div>
                  <div className="col-4 py-2">Same as</div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> ++ </div>
                  <div className="col-4 py-2"> x++ </div>
                  <div className="col-4 py-2"> x = x + 1 </div>
                </div>

                <div className="row border rounded-bottom mb-5">
                  <div className="col-4 py-2"> -- </div>
                  <div className="col-4 py-2"> x-- </div>
                  <div className="col-4 py-2"> x = x - 1 </div>
                </div>

              </div>

              <h5>Assignment Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                An assignment operator is used for assigning a value to a variable. The most common assignment operator is
                <span className='p-1 bh-highlight border rounded'>=</span>
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
                  <div className="col-4 py-2">Operator</div>
                  <div className="col-4 py-2">Example</div>
                  <div className="col-4 py-2">Same as</div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> = </div>
                  <div className="col-4 py-2"> a = b </div>
                  <div className="col-4 py-2"> a = b </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> += </div>
                  <div className="col-4 py-2"> a += b </div>
                  <div className="col-4 py-2"> a = a + b </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> -= </div>
                  <div className="col-4 py-2"> a -= b </div>
                  <div className="col-4 py-2"> a = a - b </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> *= </div>
                  <div className="col-4 py-2"> a *= b </div>
                  <div className="col-4 py-2"> a = a * b </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> /= </div>
                  <div className="col-4 py-2"> a /= b </div>
                  <div className="col-4 py-2"> a = a / b </div>
                </div>

                <div className="row border rounded-bottom mb-5">
                  <div className="col-4 py-2"> %= </div>
                  <div className="col-4 py-2"> a %= b </div>
                  <div className="col-4 py-2"> a = a % b </div>
                </div>

              </div>

              <h5>Relational Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                A relational operator checks the relationship between two operands. If the relation is true,
                it returns 1; if the relation is false, it returns value 0.
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black" }}>
                  <div className="col-4 py-2">Operator</div>
                  <div className="col-4 py-2">Meaning</div>
                  <div className="col-4 py-2">Example</div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> == </div>
                  <div className="col-4 py-2"> Equal to </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 == 3</span> is evaluated to 0
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> {">"} </div>
                  <div className="col-4 py-2"> Greater than </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {">"} 3</span> is evaluated to 1
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> {"<"} </div>
                  <div className="col-4 py-2"> Less than </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {"<"} 3</span> is evaluated to 0
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> != </div>
                  <div className="col-4 py-2"> Not equal to </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 != 3</span> is evaluated to 1
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> {">"}= </div>
                  <div className="col-4 py-2"> Greater than or equal to </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {">"}= 3</span> is evaluated to 1
                  </div>
                </div>

                <div className="row border rounded-bottom mb-5">
                  <div className="col-4 py-2"> {"<"}= </div>
                  <div className="col-4 py-2"> Less than or equal to </div>
                  <div className="col-4 py-2">
                    <span className='p-1 bh-highlight border rounded'>5 {"<"}= 3</span> is evaluated to 0
                  </div>
                </div>

              </div>

              <h5>Logical Operators :</h5>
              <p style={{ lineHeight: 2 }}>
                An expression containing logical operator returns either 0 or 1 depending upon whether expression results true or false.
                Logical operators are commonly used in decision making in C programming.
              </p>

              <div style={{ textAlign: "left" }}>
                <div className="row border border-bottom-0 rounded-top" style={{ background: "lightgrey",color:"black"}}>
                  <div className="col-4 py-2">Operator</div>
                  <div className="col-4 py-2">Meaning</div>
                  <div className="col-4 py-2">Example</div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> && </div>
                  <div className="col-4 py-2"> Logical AND. True only if all operands are true </div>
                  <div className="col-4 py-2">
                    If c = 5 and d = 2 then, expression
                    <div className='p-1 bh-highlight border rounded'>( <span>(c==5)</span>  <span>&&</span>  <span>(d{">"}5)</span> )</div>  equals to 0.
                  </div>
                </div>

                <div className="row border border-bottom-0">
                  <div className="col-4 py-2"> || </div>
                  <div className="col-4 py-2"> Logical OR. True only if either one operand is true </div>
                  <div className="col-4 py-2">
                    If c = 5 and d = 2 then, expression
                    <div className='p-1 bh-highlight border rounded'>( <span>(c==5)</span>  <span>||</span>  <span>(d{">"}5)</span> )</div>  equals to 1.
                  </div>
                </div>

                <div className="row border rounded-bottom mb-3">
                  <div className="col-4 py-2"> ! </div>
                  <div className="col-4 py-2"> Logical NOT. True only if the operand is 0 </div>
                  <div className="col-4 py-2">
                    If c = 5 then, expression
                    <div className='p-1 bh-highlight border rounded'>!(c==5)</div> equals to 0.
                  </div>
                </div>

              </div>

            </div>

          </div>


        </div>
        {/* ======================================  /Fundamentals  =========================================== */}
        {/* =======================================  Flow Control  =========================================== */}
        <div className="p-4" id="FlowControl"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C Flow Control</h5>
            <div className="list-group">

            <div className="p-3" id="ifElse"></div>
              <p className="pt-3 m-3 text-info fs-5">
                If Else Statements
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p>
                  There are following type of if..else Statements
                </p>
                <ul className='mb-4' type="square" style={{ lineHeight: 2 }}>
                  <li>
                    <span className='p-1 bh-highlight border rounded'>if</span>...
                  </li>
                  <li>
                    <span className='p-1 bh-highlight border rounded'>if</span>...<span className='p-1 bh-highlight border rounded'>else</span>
                  </li>
                  <li>
                    <span className='p-1 bh-highlight border rounded'>if</span>...<span className='p-1 bh-highlight border rounded'>else if</span>....<span className='p-1 bh-highlight border rounded'>else</span>
                  </li>
                </ul>

                <p className="text-decoration-underline fs-5">if Statement syntax:</p>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>if</span> ( condition )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> age = <span style={{ color: "orange" }}>25</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>if</span> ( age {">"} <span style={{ color: "orange" }}>18</span> )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;   <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" You are Adult "</span>{")"};
                    <br />
                    &nbsp;    {"}"}

                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    You are Adult
                  </code>
                </p>

                <p className="text-decoration-underline fs-5">if..else Statement syntax:</p>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>if</span> ( condition )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// run code if condition is true</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span>
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// run code if condition is false</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> num = <span style={{ color: "orange" }}>6</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>if</span> ( num % <span style={{ color: "orange" }}>2</span> == <span style={{ color: "orange" }}>0</span>  )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;   <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" %d is an even num "</span>,num{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}> else </span>
                    {"{"}
                    <br />
                    &nbsp;    &nbsp;   <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" %d is an odd num "</span>,num{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    6 is an even num
                  </code>
                </p>

                <p className="text-decoration-underline fs-5">if..else if...else Ladder syntax:</p>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>if</span> ( condition1 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span><span style={{ color: "magenta" }}>if</span> ( condition2 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span><span style={{ color: "magenta" }}>if</span> ( condition3 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span><span style={{ color: "magenta" }}>if</span> ( condition4 )
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>else </span>
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// statement(s)</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> num1 = <span style={{ color: "orange" }}>22</span>, num2 = <span style={{ color: "orange" }}>13</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>if</span> ( num1 == num2  )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" Result: %d = %d "</span>,num1, num2{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}> else </span> <span style={{ color: "magenta" }}>if</span> ( num1 {">"} num2 )
                    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" Result: %d {">"} %d "</span>,num1, num2{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}> else </span>
                    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>" Result: %d {"<"} %d "</span>,num1, num2{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    Result: 22 {">"} 13
                  </code>
                </p>



              </div>

              <div className="p-3" id="Switch"></div>
              <p className="pt-3 m-3 text-info fs-5">
                Switch Statements
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p style={{lineHeight:2}}>
                  The switch statement allows us to execute one code block among many alternatives.
                  <br />
                  You can do the same thing with the <span className='p-1 bh-highlight border rounded'>if</span>...
                  <span className='d-inline p-1 bh-highlight border rounded'>else if</span>...<span className='p-1 bh-highlight border rounded'>else</span> ladder.
                  However, the syntax of the <span className='p-1 bh-highlight border rounded'>switch</span> statement is much easier to read and write.
                </p>

                <p className="text-decoration-underline fs-5">Syntax of switch...case:</p>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>switch </span> ( expression )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> constant1 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> constant2 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; .
                    <br />
                    &nbsp; &nbsp; .
                    <br />
                    &nbsp; &nbsp; .
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>default </span>:
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// code</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>char</span> op;
                    <br />
                    &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"choose \n + : addition \n - : subtraction \n  &nbsp; : "</span>{")"};
                    <br />
                    &nbsp;  <span className='text-warning'>scanf</span>{"("}<span style={{ color: "lightgreen" }}>" %c "</span>,&op{")"};
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>switch </span> ( op )
                    <br />
                    &nbsp;  {"{"}
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> '+' :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"You select addition \n"</span>{")"};
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> '-' :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"You select subtraction \n"</span>{")"};
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>default </span>:
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"invalid selection \n"</span>{")"};
                    <br />
                    &nbsp; {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-4 p-2'>
                  <code className='text-light'>
                    choose <br />+ : addition <br />- : subtraction <br /> &nbsp; : +
                    <br />You select addition
                  </code>
                </p>

                <p className="text-decoration-underline fs-5">Another Syntax of switch...case:</p>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>switch </span> ( condition )
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> 1 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// run if condition is true</span>
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; <span style={{ color: "magenta" }}>case </span> 0 :
                    <br />
                    &nbsp; &nbsp; &nbsp; <span style={{ color: "#0900ff" }}>// run if condition is false</span>
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>int</span> num;
                    <br />
                    &nbsp;  <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"Enter number : "</span>{")"};
                    <br />
                    &nbsp;  <span className='text-warning'>scanf</span>{"("}<span style={{ color: "lightgreen" }}>" %d "</span>,&num{")"};
                    <br />
                    &nbsp;  <span style={{ color: "magenta" }}>switch </span> ( num{">"} 0 )
                    <br />
                    &nbsp;  {"{"}
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> 1 :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d is positive \n"</span>,num{")"};
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span style={{ color: "magenta" }}>break</span>;
                    <br />
                    &nbsp; &nbsp; <span style={{ color: "magenta" }}>case </span> 0 :
                    <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d is negitive \n"</span>,num{")"};
                    <br />
                    &nbsp; {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-4 p-2'>
                  <code className='text-light'>
                    Enter number : -7
                    <br /> -7  is negitive
                  </code>
                </p>

              </div>

              <div className="p-3" id="Goto"></div>
              <p className="pt-3 m-3 text-info fs-5">
                Goto Statement
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p>
                  The <span className='p-1 bh-highlight border rounded'>goto</span> statement
                  allows us to transfer control of the program to the
                  specified <span className='p-1 bh-highlight border rounded'>label</span>.
                </p>

                <b>Syntax of switch...case:</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>goto </span> label;
                    <br />
                    ....  ....  ....
                    <br />
                    ....  ....  ....
                    <br />
                    label :
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                  </code>
                </p>

                <p  style={{lineHeight:2}}>
                  The <span className='p-1 bh-highlight border rounded'>label</span> is an identifier.
                  When the <span className='p-1 bh-highlight border rounded'>goto</span> statement is encountered,
                  the control of the program jumps to <span className='p-1 bh-highlight border rounded'>label :</span> and starts executing the code.
                </p>

              </div>

              <div className="p-3" id="Loop"></div>
              <p className="pt-3 m-3 text-info fs-5">
                while, do...while and for Loop
              </p>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4" style={{ textAlign: "justify" }}>
                <p>
                  In programming, loops are used to repeat a block of code until a specified condition is met.
                </p>
                <p>
                  C programming has three types of loops.
                </p>
                <ol>
                  <li>do...while loop</li>
                  <li>while loop</li>
                  <li>for loop</li>
                </ol>

                <p className="text-decoration-underline fs-5">do...while loop</p>
                <p  style={{lineHeight:2}}>
                  The <span className='p-1 bh-highlight border rounded'>do..while</span> loop is similar to the
                  <span className='p-1 bh-highlight border rounded'>while</span> loop with one important difference.
                  The body of <span className='p-1 bh-highlight border rounded'>do..while</span> loop is executed at least once. Only then,
                  the Condition is false.
                </p>

                <b>syntax of do..while :</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>

                    <span style={{ color: "magenta" }}>data_type</span> variable_name;
                    <br />
                    <span style={{ color: "magenta" }}>do </span>
                    <br />
                    {"{"}
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                    <span style={{ color: "#0900ff" }}>// iteration</span>;
                    <br />
                    {"}"}
                    <br />
                    <span style={{ color: "magenta" }}>while</span>( condition );
                    <br />
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> i = <span style={{ color: "orange" }}>0</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>do</span>
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d "</span>,i{")"};
                    <br />
                    &nbsp;    &nbsp; i++;
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>while</span>( i {"<"} 10 );
                    <br /><br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>
                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    0 1 2 3 4 5 6 7 8 9
                  </code>
                </p>


                <p className="text-decoration-underline fs-5">while loop</p>
                <b>The syntax of the while loop is :</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>

                    <span style={{ color: "magenta" }}>data_type</span> variable_name;
                    <br />
                    <span style={{ color: "magenta" }}>while</span>( condition )
                    <br />
                    {"{"}
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                    <span style={{ color: "#0900ff" }}>// iteration</span>;
                    <br />
                    {"}"}
                    <br />
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> i = <span style={{ color: "orange" }}>0</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>while</span>( i {"<"} 10 )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d "</span>,i{")"};
                    <br />
                    &nbsp;    &nbsp; i++;
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                    0 1 2 3 4 5 6 7 8 9
                  </code>
                </p>


                <p className="text-decoration-underline fs-5">for loop</p>
                <b>The syntax of the while loop is :</b>
                <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>

                    <span style={{ color: "magenta" }}>data_type</span> variable_name;
                    <br />
                    <span style={{ color: "magenta" }}>for</span>(initialization ; condition ; iteration)
                    <br />
                    {"{"}
                    <br />
                    <span style={{ color: "#0900ff" }}>// your code</span>;
                    <br />
                    {"}"}
                    <br />
                  </code>
                </p>

                <b>Example :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox" style={{ textAlign: "left" }}>
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}stdio.h{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> i;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>for</span>( i = 1 ; i {"<"} 10 ; i++ )
                    <br />
                    &nbsp;    {"{"}
                    <br />
                    &nbsp;    &nbsp;    <span className='text-warning'>printf</span>{"("}<span style={{ color: "lightgreen" }}>"%d "</span>,i{")"};
                    <br />
                    &nbsp;    {"}"}
                    <br />
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <b>Output :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>
                    0 1 2 3 4 5 6 7 8 9
                  </code>
                </p>

              </div>

            </div>
        {/* ======================================  /Flow Control  =========================================== */}
        {/* =======================================  Functions  =========================================== */}
        <div className="p-4" id="Functions"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C++ Functions</h5>
            <div className="list-group">

              <div className="p-3" id="functionIntro"></div>
              <p className="pt-3 m-3 text-info fs-5">
                Functions
              </p>
              <div className="list-group-item border-0 rounded-0 text-light bg-dark" style={{ textAlign: "justify" }}>
                <p>
                  A <b className="text-primary">function</b> is a block of code that performs a specific task,
                  <br/>
                  by dividing a complex problem into smaller chunks makes our program easy to understand and reusable.
                </p>
                
                There are two types of function:
                <ol>
                  <li>
                    <b className="text-primary">Standard-Library Functions : </b> 
                    Predefined in C and C++ 
                  </li>
                  <li>
                    <b className="text-primary">User-defined Function : </b> 
                    Created by users
                  </li>
                </ol>
                
                Predefined Functions Example : 
                  <ul>
                    <li>main{"()"}</li>
                    <li>printf{"()"}</li>
                    <li>scanf{"()"}</li>
                    <li>sqrt{"()"}</li>
                    <li>and so on...</li>
                  </ul>

              </div>

              <div className="pt-5 p-3" id="UserDefinedFunction"></div>
              <div className="list-group-item border-0 rounded-0 text-light bg-dark" style={{ textAlign: "justify" }}>
                  <p className="text-decoration-underline fs-5">
                    User-defined Function
                  </p>
                  <p>
                      C++ allows the programmer to define their own function.
                      <br /><br />
                      A user-defined function groups code to perform a specific task and that group of code is given a name (identifier).
                      <br /><br />
                      When the function is invoked from any part of the program, it all executes the codes defined in the body of the function
                  </p>


                  <p className="pt-3 fw-bold">The syntax to declare a function is:</p>
                  <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>returnType </span> functionName( parameter1, parameter2,...)
                    <br />
                    {"{"}
                    <br />
                    &nbsp; <span style={{ color: "#0900ff" }}>// function body  </span>
                    <br />
                    {"}"}
                  </code>
                  </p>


                <p className="pt-3 fw-bold">Here's an example of a function declaration.</p>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>

                  <span className='fw-lighter text-secondary'>// function declaration</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>greet</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Hii There,How are you!"</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                  </code>
                </p>

                <h6 className='pt-3'>Calling a Function</h6>
                <p>
                In the above program, we have declared a function named <span className='border p-1 rounded'>greet()</span>.
                 To use the <span className='border p-1 rounded'>greet()</span> function, we need to call it.
                <br /><br />
                Here's how we can call the above <span className='border p-1 rounded'>greet()</span> function.
                </p>

                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>   
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    <br />
                    {"{"}
                    <br />
                    &nbsp;     <span className='fw-lighter text-secondary'>// calling a function</span> 
                    <br />
                    &nbsp;    <span className='text-warning'>greet</span>{"()"};
                    <br />
                    {"}"}
                  </code>
                </p>

                <h6 className='pt-3'>How function Work</h6>
                <div className='py-3 bg-white'>
                    <img className='img-fluid' src="https://www.programiz.com/sites/tutorial2program/files/cpp-function-call.png"/>
                </div>

                <h6 className='pt-4'>Example Display Text</h6>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}iostream{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>using namespace </span><span style={{ color: "orange" }}>std</span>;
                    <br /><br />
                    <span className='fw-lighter text-secondary'>// function declaration</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>greet</span>{"()"}
                    {"{"}
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Hii There,How are you!"</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>return</span> <span style={{ color: "orange" }}>0</span>;
                    <br />
                    {"}"}
                    <br />
                    <br />
                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    {"{"}
                    <br />
                    &nbsp;     <span className='fw-lighter text-secondary'>// calling a function</span> 
                    <br />
                    &nbsp;    <span className='text-warning'>greet</span>{"()"};
                    <br />
                    {"}"}
                  </code>
                </p>               

                <b>Output :</b>
                <p className='bg-black rounded mt-2 mb-5 p-2'>
                  <code className='text-light'>
                        Hii There,How are you!
                  </code>
                </p>

              </div>

            </div>
        {/* =======================================  /Functions  =========================================== */}
        {/* =======================================  Arrays  =========================================== */}
        <div className="p-4" id="Arrays"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C++ Arrays</h5>
            <div className="list-group">

            <div className="p-3" id="ArraysIntro"></div>
              <p className="pt-3 m-3 text-info fs-5">
                Arrays
              </p>
              <div className="list-group-item border-0 rounded-0 text-light bg-dark" style={{ textAlign: "justify" }}>
                <p>
                In C++, an array is a variable that can store multiple values of the same type. For example,
                </p>
                <p>
                Suppose a class has 27 students, and we need to store all their grades. Instead of creating 27 separate variables, we can simply create an array:
                </p>

                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>
                    <span style={{ color: "magenta" }}>float</span> grade[27];
                  </code>
                </p>               

                <p className="pt-5 fw-bold">One-Dimentional Array Declaration</p>
                  <p className='rounded mt-2 p-2' id="CodeBox">
                  <code className='text-dark'>
                    <span style={{ color: "magenta" }}>dataType </span> arrayName[ arraySize ];
                  </code>
                  </p>

                  <b>Example :</b>
                  <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                    <code className='text-light'>
                      <span style={{ color: "magenta" }}>int</span> x[<span style={{color: "orange"}}>6</span>];
                    </code>
                  </p>

                  <p>
                  In C++, each element in an array is associated with a number. The number is known as an <b className='text-primary'>array index</b>. We can access elements of an array by using those indices.
                  </p>

                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>  
                  <span className='fw-lighter text-secondary'>// syntax to access array elements</span>
                    <br />
                    array[ <span style={{color: "orange"}}>index</span> ];
                  </code>
                </p>

                <p>Consider the array <span className='p-1 border rounded'>x</span> we have seen above.</p>
                <figure className='bg-white'>
                  <img className='img-fluid' src="https://www.programiz.com/sites/tutorial2program/files/cpp-array-declaration_0.png" title="Elements of an array in C++"/>
                </figure>

                <p className="pt-5 fw-bold">C++ Array Initialization</p>
                <p>
                In C++, it's possible to initialize an array during declaration. For example,
                </p>
                
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>  
                  <span className='fw-lighter text-secondary'>// declare and initialize an array</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> x[<span style={{color: "orange"}}>6</span>] = {'{'}<span style={{color: "orange"}}>19, 10, 8, 17, 9, 15</span>{'}'};
                  </code>
                </p>
                <figure className='bg-white'>
                  <img className='img-fluid' src="https://www.programiz.com/sites/tutorial2program/files/cpp-array-initialization_0.png" title="Elements of an array in C++"/>
                </figure>
              </div>

              <div className="p-3" id="MultiDimentionalArray"></div>
              <p className="pt-5 px-3 fw-bold">
                Multi-Dimentional Array
              </p>
              <div className="list-group-item border-0 rounded-0 text-light bg-dark" style={{ textAlign: "justify" }}>
              <p>
              In C++, we can create an array of an array, known as a multidimensional array. For example:
              </p>

                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>
                    <span style={{ color: "magenta" }}>int</span> x[<span style={{color: "orange"}}>3</span>][<span style={{color: "orange"}}>4</span>];
                  </code>
                </p>               

                <p>
              Here, <span className='p-1 border rounded'>x</span> is a two-dimensional array. It can hold a maximum of 12 elements.
              </p>
              <p>
              We can think of this array as a table with 3 rows and each row has 4 columns as shown below.
              </p>

              <figure className='bg-white'>
                  <img className='img-fluid' src="https://www.programiz.com/sites/tutorial2program/files/cpp-two-dimensional-array.png" title="Elements of an array in C++"/>
              </figure>

                <p className="pt-5 fw-bold">Initialization of two-dimensional array</p>
                <p>
                In C++, it's possible to initialize an array during declaration. For example,
                </p>
                
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>  
                  <span className='fw-lighter text-secondary'>// declare and initialize an array</span>
                    <br />
                    <span style={{ color: "magenta" }}>int</span> test[<span style={{color: "orange"}}>2</span>][<span style={{color: "orange"}}>3</span>] = {'{'}{' {'}<span style={{color: "orange"}}>2, 4, 5</span>{'} '}, {' {'}<span style={{color: "orange"}}>9, 0, 19</span>{'} '}{'}'};
                  </code>
                </p>
                <p>
                This array has 2 rows and 3 columns, which is why we have two rows of elements with 3 elements each.
                </p>
                <figure className='bg-white'>
                  <img className='img-fluid' src="https://www.programiz.com/sites/tutorial2program/files/cpp-two-dimensional-array-initialization.png" title="Elements of an array in C++"/>
                </figure>
              </div>

            </div>
        {/* =======================================  /Arrays  =========================================== */}
        {/* ======================================== Pointers  =========================================== */}
        <div className="p-4" id="Pointers"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C++ Pointers</h5>
            <div className="list-group">

            <div className="p-0" id="PointerIntro"></div>
              <p className="pt-5 px-3 text-info fs-5">
                Pointers
              </p>
              <div className="list-group-item border-0 rounded-0 text-light bg-dark" style={{ textAlign: "justify" }}>
              <p>
              In C++, pointers are variables that store the memory addresses of other variables.
              </p>

              <p className="pt-4 fw-bold">
                Address in C++
              </p>
              <p>
              Every variable we declare in our program has an associated location in the memory, which we call the memory address of the variable.
              </p>
              <p>
              If we have a variable <span className='p-1 border rounded'>var</span> in our program, <span className='p-1 border rounded'>&var</span> returns its memory address. For example,
              </p>

              <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}iostream{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>using namespace </span><span style={{ color: "orange" }}>std</span>;
                    <br /><br />

                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    {"{"}
                    <br />
                    &nbsp;     <span className='fw-lighter text-secondary'>// declare variables</span>
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> var1 = <span style={{ color: "orange" }}>3</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> var2 = <span style={{ color: "orange" }}>24</span>;
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>int</span> var3 = <span style={{ color: "orange" }}>17</span>;
                    <br />
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Address of var1: "</span>{'<<'} &var1 {'<<'}<span className='text-warning'>endl</span>;
                    <br />
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Address of var2: "</span>{'<<'} &var2 {'<<'}<span className='text-warning'>endl</span>;
                    <br />
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Address of var3: "</span>{'<<'} &var3 {'<<'}<span className='text-warning'>endl</span>;
                    <br />
                    {"}"}
                  </code>
                </p>             


                <b>Output :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>
                  Address of var1: 0x7fff5fbff8ac 
                  <br />
                  Address of var2: 0x7fff5fbff8a8 
                  <br />
                  Address of var3: 0x7fff5fbff8a4
                  </code>
                </p>
              <p>
              Here, <span className='p-1 rounded border'>0x</span> at the beginning represents the address in the hexadecimal form.
              </p>
              <p>
              Notice that the first address differs from the second by <b className='text-primary'>4</b> bytes, and the second address differs from the third by <b className='text-primary'>4</b> bytes.
              </p>
              <p>
              The difference is because the size of an <span className='p-1 rounded border'>int</span> is <b className='text-primary'>4</b> bytes in a <b className='text-primary'>64-bit</b> system.
              </p>

              <p className="pt-5 fw-bold">
              Here is how we can declare pointers:
              </p>

                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>  
                  <span style={{ color: "magenta" }}>int</span>* point_var;
                  </code>
                </p>

              <p className="pt-5 fw-bold">
                Assigning Addresses to Pointers
              </p>
              <p>
              Here is how we can assign addresses to pointers:
              </p>

              <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                <code className='text-light'>  
                <span style={{ color: "magenta" }}>int</span> var = <span style={{ color: "orange" }}>5</span>;
                  <br />
                <span style={{ color: "magenta" }}>int</span>* point_var = var;
                </code>
              </p>

              <p style={{lineHeight:2}}>
              Here, <span className='p-1 rounded border'>5</span> is assigned to the variable <span className='p-1 rounded border'>var</span>.
              And the address of <span className='p-1 rounded border'>var</span> is assigned to the <span className='p-1 rounded border'>point_var</span> pointer with the code <span className='p-1 rounded border'>point_var= &var</span>  .
              </p>
                
              <p className="pt-5 fw-bold">
              Get the Value from the Address Using Pointers
              </p>
              <p>
              To get the value pointed by a pointer, we use the <span className='p-1 px-2 border rounded'>*</span> operator. For example:
              </p>

              <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                <code className='text-light'>  
                <span style={{ color: "magenta" }}>int</span> var = <span style={{ color: "orange" }}>5</span>;
                  <br /><br />
                  <span className='fw-lighter text-secondary'>// assign address of var to point_var</span>
                  <br />
                  <span style={{ color: "magenta" }}>int</span>* point_var = var;
                  <br /><br />
                  <span className='fw-lighter text-secondary'>// access value pointed by point_var</span>
                  <br />
                  <span className='text-warning'>cout</span>{"<<"} *point_var {'<<'}<span className='text-warning'>endl</span>;                   <span className='fw-lighter text-secondary'>// Output: 5 </span>
                </code>
              </p>
              </div>

              <div className="p-0" id="ReferencesIntro"></div>
              <p className="pt-5 px-3 text-info fs-5">
                References
              </p>
              <div className="list-group-item border-0 rounded-0 text-light bg-dark" style={{ textAlign: "justify" }}>
              <p>
              In C++, we use a reference to create an alias for a variable. We can use the reference variable to access or modify the variable.              </p>

              <p className="pt-4 fw-bold">
              Create a C++ Reference
              </p>

              <p>
              We use the ampersand sign to create a reference. For example,
              </p>

              <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                <code className='text-light'>  
                <span style={{ color: "magenta" }}>string</span> city = <span style={{ color: "lightgreen" }}>"Paris"</span>;
                  <br />
                <span style={{ color: "magenta" }}>string</span>& ref_city = city;
                </code>
              </p>

              <p>Here,</p>
              <ul style={{lineHeight:2}}>
                <li><span className='p-1 px-2 border rounded'>string</span> - datatype of the variable</li>
                <li><span className='p-1 px-2 border rounded'>&</span> - denotes we are creating a reference</li>
                <li><span className='p-1 px-2 border rounded'>ref_city</span> - name of the reference variable</li>
                <li><span className='p-1 px-2 border rounded'>city</span> - the variable for which reference is created</li>
              </ul>



              <p className="pt-4 fw-bold">
              Example of Reference :
              </p>

              <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>

                    <span style={{ color: "#4eb5ff" }}>#include</span> <span style={{ color: "#00c400" }}>{"<"}iostream{">"}</span>
                    <br />
                    <span style={{ color: "magenta" }}>using namespace </span><span style={{ color: "orange" }}>std</span>;
                    <br /><br />

                    <span style={{ color: "magenta" }}>int</span> <span style={{ color: "#4eb5ff" }}>main</span>{"()"}
                    {"{"}
                    <br /><br />
                    &nbsp;    <span style={{ color: "magenta" }}>string</span> city = <span style={{ color: "lightgreen" }}>"Paris"</span>;
                    <br /><br />
                    &nbsp;    <span className='fw-lighter text-secondary'>// create a reference to the variable</span>
                    <br />
                    &nbsp;    <span style={{ color: "magenta" }}>string</span>& ref_city = city;
                    <br />
                    <br />
                    &nbsp;    <span className='fw-lighter text-secondary'>// create a reference to the variable</span>
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Variable Value: "</span>{'<<'} city {'<<'}<span className='text-warning'>endl</span>;
                    <br />
                    &nbsp;    <span className='text-warning'>cout</span>{"<<"}<span style={{ color: "lightgreen" }}>"Reference Value:  "</span>{'<<'} ref_city {'<<'}<span className='text-warning'>endl</span>;
                    <br />
                    {"}"}
                  </code>
                </p>             


                <b>Output :</b>
                <p className='bg-black rounded mt-2 p-2' id="CodeBox">
                  <code className='text-light'>
                  Variable Value: Paris
                  <br />
                  Reference Value: Paris
                  </code>
                </p>
              <p style={{lineHeight:2}}>
              In the above example, we have used the reference variable <span className='p-1 px-2 border rounded'>ref_city</span> to display the value of the variable <span className='p-1 px-2 border rounded'>city</span>.
              </p>
              </div>

            </div>
        {/* ======================================== /Pointers  =========================================== */}
        {/* ======================================== Structures  =========================================== */}
        <div className="p-4" id="Structures"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C++ Structures</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                
                Structures
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                
                Member Function in Structures
              </div>
            </div>
        {/* ======================================  / Structures  =========================================== */}
        {/* =======================================  File Handling  =========================================== */}
        <div className="p-4" id="FileHandling"></div>
<h5 className="fw-bold bg-light text-dark p-3 border-bottom border-3 border-dark">C++ File Handling</h5>
            <div className="list-group">
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                
                Opening and Closing a File
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                
                Write to a File
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                
                Read From a File
              </div>
              <div className="list-group-item border-0 rounded-0 bg-dark text-light py-4">
                
                Append to a Text File
              </div>
            </div>
        {/* ======================================  /File Handling  =========================================== */}

      </section>
    </>
  )
}
