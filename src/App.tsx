import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Build from './components/build/Build';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
      </Routes>

    </>
  )
}

export default App
