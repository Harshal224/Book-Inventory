import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetail';


function App() {
  return (
  <>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
  </>
  )
}

export default App
