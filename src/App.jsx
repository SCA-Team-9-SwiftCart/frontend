import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
    </Router>
    <ToastContainer/>
    </>
  )
}

export default App
