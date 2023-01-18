import React from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employees from "./pages/Employees/Employees";
function App() {

   

   return (
<>

<Router>
   <Routes>
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Employees" element={<Employees/>} />
   </Routes>
</Router>
</>
   );

}

export default App;