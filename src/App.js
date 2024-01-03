import react ,{ useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='Black';
      showAlert("Dark mode has been enalbed","success");
      document.title="Textutil - dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enalbed","success"); 
      document.title="Textutil - light mode";
    }
  }
  return(
    <>
      {/* <Navbar title="textutil" about="about us"/> */}
      {/* {<Navbar/>} */}
      <Navbar title="textutil" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> 
      <div className="container my-3" mode={mode}>
      <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below:" mode={mode} /> 
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
