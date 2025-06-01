import React, { useState } from 'react';
import logo from '../assets/logo.png';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartSimple, faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS,   ArcElement, CategoryScale, LinearScale, PointElement, LineElement,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { color } from 'chart.js/helpers';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import Grafik from '../components/Grafik';
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [namaError, setNamaError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showChart, setShowChart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
const toggleMenu = () => {
  setShowMenu(!showMenu);
};
const toggleChart = () => {
  setShowChart(!showChart);
};
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    // Reset error
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setNamaError('');
    if (!email) {
      setEmailError('Email tidak boleh kosong');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Format email tidak valid');
      valid = false;
    }

    if(!nama){
      setNamaError('Nama tidak boleh kosong');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password tidak boleh kosong');
      valid = false;
    }

    if(!confirmPassword){
      setConfirmPasswordError('Konfirmasi password harus diisi')
      valid = false
    }

    if(confirmPassword && password && confirmPassword !== password){
      setConfirmPasswordError('Konfirmasi password tidak sesuai')
      valid = false
    }

    if (!valid) return;
    // Jika lolos validasi
    if(valid) {
      setPasswordError('');
      setConfirmPasswordError('');
      setEmailError('');
      setNamaError('');
      toast.success('Register Berhasil!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="flex  py-5 2xl:w-10/12 mx-auto overflow-x-hidden  items-center w-full gap-2  min-h-screen  justify-center px-5">
      <button
  onClick={toggleMenu}
  className="md:hidden fixed top-4 right-4 z-50 bg-white text-primary hover:bg-primary hover:text-white p-2 rounded-md shadow"
>
  {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faChartSimple} />}
</button>
      <div className="px-4  w-12/12 md:w-6/12 ">
        <div className='md:w-8/12 w-10/12  h-full mx-auto'>
        
              <div className="md:mb-6 md-3 text-center">
                  <img className='w-24 mb-2 mx-auto' src={logo} alt="" />
          <h1 className="2xl:text-4xl md:text-2xl text-xl font-semibold text-primary">Selamat datang <br /> di senyum kebaikan</h1>
          <p className="text-sm md:text-base text-primary font-light 2xl:text-[20px] mt-2">Buat Akun</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="2xl:mb-4 mb-2">
            <label className="block text-sm font-medium text-primary">Nama</label>
            <input
              type="text"
              className="mt-2 p-2 w-full  font-secondary border  border-gray-300 text-sm rounded-md"
              placeholder="Masukkan nama anda"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
           
            />
          </div>
           {namaError && <p className="text-red-500 text-sm mt-1">{namaError}</p>}
          <div className="2xl:mb-4 mb-2">
            <label className="block text-sm font-medium text-primary">Email</label>
            <input
              type="email"
              className="mt-2 p-2 w-full  font-secondary border  border-gray-300 text-sm rounded-md"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
           
            />
          </div>
           {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          <div className="2xl:mb-4 mb-2">
            <label className="block text-sm font-medium text-primary">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? 'text' : 'password'}
                className="p-2 w-full font-secondary border text-sm border-gray-300 rounded-md"
                placeholder="Masukkan password anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </button>
            </div>
             {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

            <div className="2xl:mb-4 mb-2">
            <label className="block text-sm font-medium text-primary">Ulangi Password</label>
            <div className="relative mt-2">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="p-2 w-full font-secondary border text-sm border-gray-300 rounded-md"
                placeholder="Ulangi Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
             
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={toggleConfirmPassword}
              >
                {showConfirmPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </button>
            </div>
             {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
          </div>
          <div className='flex justify-end'>
 
</div>
          <div className="flex justify-between items-center">
            <button type="submit" className="cursor-pointer text-xs md:text-sm bg-primary w-full text-white py-2 my-3 px-4 rounded-md hover:text-primary hover:bg-secondary">
              Buat Akun
            </button>
          </div>
        </form>
        
    
        </div>
        </div>
      
       <Grafik showMenu={showMenu} toggleChart={toggleChart} showChart={showChart}/>
    </div>
  );
};

export default Register;