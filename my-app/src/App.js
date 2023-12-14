
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light')
  const [alert,Setalert]=useState(null)

    // Alert function
    const ShowAlert=(message,type)=>{
      Setalert({
        msg:message,
        type:type
      })
    }

  // Dark Mode function
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#09092b"
      ShowAlert("Dark mode has been enabled","success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      ShowAlert("Light mode has been enabled","success")
    }
  }




  return (
    <>
      <Navbar brandname="TextUtils2" about="About" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/>  default props */}
      <Alert alert={alert} />
      <div className="container">
        <TextForm ShowAlert={ShowAlert} heading="Enter the text to Analyse" mode={mode}   />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
