import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/dashboard/:username" 
          element={<Dashboard />} 
        />

        <Route
          path="/compare"
          element={<Compare />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;