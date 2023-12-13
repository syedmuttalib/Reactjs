
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setmode]=useState('light')

  const toggleMode=()=>{
    if(mode === 'light')
    {
      setmode('dark')
      document.body.style.backgroundColor="#09092b"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
    }
  }
  return (
<>
<Navbar brandname="TextUtils2" about="About"  mode={mode}  toggleMode={toggleMode}/>
{/* <Navbar/>  default props */}
  <div className="container">
  <TextForm  heading="Enter the text to Analyse" mode={mode}  />
  {/* <About/> */}
  </div>
</>
  );
}

export default App;
