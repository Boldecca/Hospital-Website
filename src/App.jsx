// Import React Router for navigation between pages
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import our components
import Navbar from "./components/Navbar"

// Import our pages
import Home from "./components/Home"
import About from "./components/About"
import Doctors from "./components/Doctors"
import Services from "./components/Services"
import Contact from "./components/Contact"

// This is the main App component - it wraps everything
function App() {
  return (
    // BrowserRouter enables routing in our app
    <BrowserRouter>
      {/* Navbar shows on every page */}
      <Navbar />

      {/* Routes define which component shows for each URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
