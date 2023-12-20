
import {  useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { Component }  from 'react';
// import React from "react";
import {BrowserRouter ,Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert,Setalert]=useState(null)

    // Alert function
    const ShowAlert=(message,type)=>{
      Setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        Setalert(null)
      },2000)
    }

  // Dark Mode function
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#09092b"
      ShowAlert("Dark mode has been enabled","success")
      document.title='TextUtil-Dark Mode'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      ShowAlert("Light mode has been enabled","success")
      document.title='TextUtil-light Mode'
    }
  }
  return (
       <BrowserRouter>
       <Navbar brandname="TextUtils2" about="About" mode={mode} toggleMode={toggleMode} /> 
       <Alert alert={alert} />
          <Routes>
             <Route path="/" element={ <TextForm ShowAlert={ShowAlert} heading="Enter the text to Analyse" mode={mode}   />}/>
             <Route path="/about" element={<About/>}/>
          </Routes>
       </BrowserRouter>
  );
}

export default App;
