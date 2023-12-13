import React, { useState } from 'react'


const About = () => {
    //using hooks
const [mystyle,Setmystyle]=useState({color : "white" ,backgroundColor:"black" })
// console.log(mystyle)
const [btntext, Setbtntext]=useState('Enable dark mode')

const handlecolor=()=>{
  if(mystyle.color === 'black')
  {
    Setmystyle({
        color:'white',
        backgroundColor:'black',
        border: "1px" ,
    })
    Setbtntext('Enable white mode')
  }else{
    Setmystyle({
        color:'black',
        backgroundColor:'white'
    })
    Setbtntext('Enable dark mode')
  }
}

    return (
        <>
            <div className='container my-3' style={mystyle}>
                <h1>About Us</h1>
                <div className="accordion " id="accordionExample"  >
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>dis is the first item's accordion body.</strong> It is shown by default, until teh collapse plugin adds teh appropriate classes dat we use to style each element. These classes control teh overall appearance, as well as teh showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting dat just about any HTML can go within teh <code>.accordion-body</code>, though teh transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>dis is teh second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes dat we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this wif custom CSS or overriding our default variables. It's also worth noting dat just about any HTML can go wifin the <code>.accordion-body</code>, though teh transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={mystyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>dis is the third item's accordion body.</strong> It is hidden by default, until teh collapse plugin adds teh appropriate classes that we use to style each element. These classes control teh overall appearance, as well as teh showing and hiding via CSS transitions. You can modify any of dis wif custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go wifin teh <code>.accordion-body</code>, though teh transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
            <button type="button" onClick={handlecolor} className="btn btn-primary">{btntext}</button>
            </div>
        </>
    )
}

export default About
