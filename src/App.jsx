
import Gallery from "./gallery"
import Contact from "./contact"
import Home from "./home"
import About from "./about"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/gallery/:category" element={<Gallery />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
)
}

export default App