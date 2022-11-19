
import react, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



function App() {
  const [mode, setmode]=useState('light');
  const[alert,setalert]=useState(null);

   const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setalert(null);

    },1500)
  }

  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled","success");
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is Enabled","success");
    }
  }


  return (
  <>
   
   <Navbar title="TextUtils" abouttext="about" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container">
   
    
    <Textform heading="Enter Text Here To Analyse" showAlert={showAlert} mode={mode}/>
    </div>
  
   </>   
  );
}

export default App;
