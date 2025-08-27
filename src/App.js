
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [switchText, setSwitchText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setSwitchText('Enable Light Mode');
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextFormate - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextFormate is Amazing Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextFormate Now';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setSwitchText('Enable Dark Mode');
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextFormate - Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextFormate" mode={mode} toggleMode={toggleMode} switchText={switchText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/textformate" element={<TextForm showAlert={showAlert} heading="Try TextFormate - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
