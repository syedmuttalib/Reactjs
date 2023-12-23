import React, { useState } from 'react'

const TextForm = (props) => {
    const handleup=()=>{
        console.log('Button Clicked!' + Text)
        let NewText=Text.toUpperCase()
        SetText(NewText)
        props.ShowAlert("Converted to UpperCase","success")

    }
    const handleuplower=()=>{
        console.log('Button Clicked!' + Text)
        let NewText=Text.toLowerCase()
        SetText(NewText)
        props.ShowAlert("Converted to LowerCase","success")

    }

    const handleOnchange=(event)=>{
        console.log("On changed")
        SetText(event.target.value)
       
    }
    const handleClear=()=>{
        // console.log("On changed")
        SetText("")
        props.ShowAlert("Text Cleared!","success")
       
    }
    const handleCopy=()=>{
        console.log("Copied!")
        let textcopy=document.getElementById('mybox')
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value)
        props.ShowAlert("Text Copied!","success")
    }

    const handlespaces=()=>{
        console.log("clearTexted")
        let extratext=Text.split(/[ ]+/);
        SetText(extratext.join(" "))
        props.ShowAlert("Spaces Removed","success")
    }


    const [Text,SetText]=useState('Enter your text here')
    return (
        <>
        <div className='container my-5'  style={{color:props.mode === 'dark' ? 'white' : '#09092b'}}>
            <div className="mb-3" >
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#33436f' : 'white', color:props.mode === 'dark' ? 'white' : '#09092b'}} value={Text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1"
            onClick={handleup}
            >
             Convert to uppercase
            </button>

            <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1"
            onClick={handleuplower}
            >
             Convert to Lowercase
            </button>

            <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1 "
            onClick={handleCopy}
            >
             Copy Text
            </button>
            <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1"
            onClick={handlespaces}
            >
             Remove extra spaces
            </button>

            <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1"
            onClick={handleClear}
            >
             Clear Test
            </button>
        </div>
        <div className="container my-4" style={{color:props.mode === 'dark' ? 'white' : '#09092b'}}>
        <h1>Your Text summary</h1>
        <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} charecter</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minitues to read</p>
        <h2>Preview</h2>
        <p>{Text.length>0 ? Text:"Nothing to preview!"}</p>
        </div>

        </>
    )
}

export default TextForm
