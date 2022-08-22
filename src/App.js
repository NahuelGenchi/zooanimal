import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, AnimalList, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/zooanimal" element={<AnimalList/>}/>
        <Route path="/zooanimal/category/:categoryId" element={<AnimalList/>}/>
        <Route path="*" element={<AnimalList/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
