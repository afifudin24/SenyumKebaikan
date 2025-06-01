import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import Register from './pages/Register';
function App() {
  return (
    <div className="font-primary">
      {/* <nav className="mb-4 flex gap-4 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
      </Routes>
    </div>
  );
}
export default App;