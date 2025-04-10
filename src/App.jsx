import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import "./styles/HeaderStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  </div>
}

export default App
