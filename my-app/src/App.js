
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>
<Navbar brandname="TextUtils2" about="About"/>
{/* <Navbar/>  default props */}
  <div className="container">
  <TextForm  heading="Enter the text to Analyse"/>
  </div>
</>
  );
}

export default App;
