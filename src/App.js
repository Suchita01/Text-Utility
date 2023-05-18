import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
   setAlert({
    msg: message,
    type: type,
   })
   setTimeout(() => {
    setAlert(null);
   },1500);

  }
  
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-danger')
  // }
    const toggleMode = () =>{
  // const toggleMode = (cls) =>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has ben enabled", "success");
      // document.title ='TextUtils - Light Mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has ben enabled", "success");
      // document.title ='TextUtils - Dark Mode';
    }
   
  }
  return (
<>
{/*<Navbar/>*/}
{/*<Navbar title = "TextUtils" aboutText ="About TextUtils"/>*/}
<Router>
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-5">
      <Switch>
        {/* /users ---> component 1
        /users/home ---> component 2 */}
      <Route exact path="/about">
        <About mode={mode}/>
      </Route>
      <Route exact path="/">
        <TextForm showAlert={showAlert} heading = "Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
      </Route>
      </Switch>
</div>
</Router>
</>
  );
}

export default App;



