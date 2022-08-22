import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, AnimalList, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AnimalList/>}/>
        <Route path="/category/:categoryId" element={<AnimalList/>}/>
        <Route path="*" element={<AnimalList/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
