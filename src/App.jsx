import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Api from './api/Api'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <UserStorage>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;