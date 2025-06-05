import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Home from './pages/guest/Home';
import About from './pages/About';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CreateNewPassword from './pages/CreateNewPassword';
import Register from './pages/Register';
import Donasi from './pages/guest/Donasi';
import DetailDonasi from './pages/guest/DetailDonasi';
import DetailDonasiBarang from './pages/guest/DetailDonasiBarang';
import PantauDonasi from './pages/guest/PantauDonasi';
import RingkasanDonasi from './pages/guest/RingkasanDonasi';
function App() {
  return (
    <div className="font-primary">
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      {/* <nav className="mb-4 flex gap-4 text-blue-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/donasi/detaildonasi" element={<DetailDonasi />} />
        <Route path="/donasi/detaildonasibarang" element={<DetailDonasiBarang />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />

        {/* pantau donasi */}
        <Route path="/pantaudonasi" element={<PantauDonasi />} />
        <Route path='/pantaudonasi/ringkasandonasi' element={<RingkasanDonasi />} />
      </Routes>
    </div>
  );
}
export default App;