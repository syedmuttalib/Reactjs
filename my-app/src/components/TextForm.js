import React, { useState } from 'react'

const TextForm = (props) => {
    const handleup=()=>{
        console.log('Button Clicked!' + Text)
        let NewText=Text.toUpperCase()
        SetText(NewText)

    }
    const handleuplower=()=>{
        console.log('Button Clicked!' + Text)
        let NewText=Text.toLowerCase()
        SetText(NewText)

    }

    const handleOnchange=(event)=>{
        console.log("On changed")
        SetText(event.target.value)
       
    }
    const handleClear=()=>{
        console.log("On changed")
        SetText("")
       
    }

    const [Text,SetText]=useState('Enter your text here')
    return (
        <>
        <div className='container my-5'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={Text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2"
            onClick={handleup}
            >
             Convert to uppercase
            </button>

            <button className="btn btn-primary mx-2"
            onClick={handleuplower}
            >
             Convert to Lowercase
            </button>

            <button className="btn btn-primary mx-2"
            onClick={handleClear}
            >
             Clear Test
            </button>
        </div>
        <div className="container my-4">
        <h1>Your Text summary</h1>
        <p>{Text.split(" ").length } words and {Text.length} charecter</p>
        <p>{0.008 * Text.split(" ").length} Minitues to read</p>
        <h2>Preview</h2>
        {Text}
        </div>

        </>
    )
}

export default TextForm
