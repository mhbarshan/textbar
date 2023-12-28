import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";



function App() {




  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#091417'
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled","success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (massage,type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  return (
    <>
    <Navbar title='TextBar' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={ <Textfrom showAlert={showAlert} mode={mode} heading="Write/Paste your text here"/> } />
        <Route path="/about" element={ <About mode={mode}/> } />
      </Routes>
    {/*  */}
    
      
    </div> 
    <Footer mode={mode}/>
    </>
  );
}

export default App;
