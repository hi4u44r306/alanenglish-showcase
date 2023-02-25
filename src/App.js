import './App.css';
import Home from './Pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact element={<Home />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
