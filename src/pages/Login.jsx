import React, { useState } from 'react';
import logo from '../assets/logo.png';
import google from '../assets/google.png'
import fb from '../assets/fb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex  py-5 2xl:w-10/12 mx-auto  w-full gap-2  h-screen items-center justify-center px-5">
      <div className="p-4 w-6/12 ">
        <div className='w-8/12 mx-auto'>

        
              <div className="mb-6 text-center">
                  <img className='w-80 mx-auto' src={logo} alt="" />
          <h1 className="text-4xl font-semibold text-primary">Selamat datang <br /> di senyum kebaikan</h1>
          <p className="text-sm text-primary font-light text-[20px] mt-2">Login Ke Akun Anda</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-primary">Email</label>
            <input
              type="email"
              className="mt-2 p-2 w-full border  border-gray-300 rounded-md"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-primary">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? 'text' : 'password'}
                className="p-2 w-full border border-gray-300 rounded-md"
                placeholder="Masukkan password anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </button>
            </div>
          </div>
          <div className='flex justify-end'>
            <a href="#" className="text-sm text-primary  hover:underline">Lupa Sandi?</a>

          </div>

          <div className="flex justify-between items-center">
            <button type="submit" className="bg-primary w-full text-white py-2 my-2 px-4 rounded-md hover:text-primary hover:bg-secondary">
              Masuk
            </button>
          </div>
        </form>
        
        <div class="flex items-center justify-center my-6">
  <hr class="flex-grow border-t border-gray-300"/>
  <span class="mx-4 text-gray-600">atau</span>
  <hr class="flex-grow border-t border-gray-300"/>
</div>

        <div className="flex justify-center items-center mt-6 space-x-4">
          <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-md hover:bg-gray-100">
            <img src={fb} alt="Google" className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-md hover:bg-gray-100">
            <img src={google} alt="Facebook" className="w-5 h-5 mr-2" />
            Facebook
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-primary">
          <span className='font-light'>Apakah anda memiliki account? </span>
          <a href="/register" className="text-primary font-semibold hover:underline">Register</a>
        </div>
        </div>
        </div>
      

          <div className='bg-primary w-6/12 h-full px-2 py-10 text-white rounded-lg'>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {/* Kartu Donasi Uang */}
          <div className="px-4 py-2 h-auto rounded-xl shadow-lg bg-secondary">
            <div className='flex justify-between items-center mb-2 '>
        <h3 className="text-sm font-semibold  text-primary ">Donasi uang</h3>
        <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
            </div>
        <p className="text-xl text-center font-bold text-primary mb-4"><span className='align-super'>Rp</span> 196.000,00</p>
        <p className="text-xs text-center text-green-600"> <span className='text-accent'>+25%</span> dari bulan lalu</p>
      </div>

      {/* Kartu Donasi Barang */}
      <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
      <div className='flex justify-between items-center mb-2 '>
        <h3 className="text-sm font-semibold  text-primary ">Donasi Barang</h3>
        <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
            </div>
        <p className="text-xl text-center font-bold text-primary mb-4">17 Item</p>
        <p className="text-xs text-center text-green-600">+25% dari bulan lalu</p>
      </div>

      {/* Kartu Donasi Terakhir */}
      <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
      <div className='flex justify-between items-center mb-2 '>
        <h3 className="text-sm font-semibold  text-primary ">Donasi Terakhir</h3>
        <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
            </div>
        <p className="text-lg text-center font-bold text-primary mb-4">15 Maret 2025</p>
        <a href="#" className="text-xs text-accent text-center mx-auto block hover:underline">Lihat Detail</a>
      </div>
        </div>
        <div className='mt-2 py-1 px-5'>
          <DonasiChart />
          <div className='text-end'>
          <button className='bg-accent  text-white py-2 my-2 px-4 text-xs rounded-md hover:text-primary hover:bg-secondary'>Tampilkan Campaign</button>

          </div>

        </div>
        <div className='text-center mt-12'>
          <h3 className='font-semibold text-xl 2xl:text-2xl'>Transaparansi Donasi dalam Genggaman Anda</h3>
          <p className='mt-2 text-lg font-light 2xl:text-xl'>Sistem donasi berbasis blockchain untuk akuntabilitas dan keterbukaan penuh</p>
        </div>
          </div>
    </div>
  );
};


const DonasiChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', '25', '28', '29', '30'],
    datasets: [
      {
        label: 'Donasi Uang (Ribuan)',
        data: [100000, 90000, 120000, 130000, 80000, 110000, 95000, 105000, 140000, 130000, 110000, 100000],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(207, 253, 225, 1)',
        yAxisID: 'y1', // Menggunakan sumbu Y pertama
      },
      {
        label: 'Donasi Barang (pcs)',
        data: [50, 60, 70, 110, 80, 90, 100, 130, 140, 120, 110, 90],
        borderColor: 'rgba(99, 234, 155, 1)',
        
        backgroundColor: 'rgba(104, 185, 132, 1)',
        yAxisID: 'y2', // Menggunakan sumbu Y kedua
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y1: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value / 1000 + 'k'; // Menampilkan angka dalam ribuan
          },
        },
        title: {
          display: true,
          text: 'Donasi Uang (Ribuan)',
          color  : 'rgba(34, 197, 94, 1)',
        },
      },
      y2: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Menyesuaikan step size untuk sumbu Y kedua (pcs)
        },
        title: {
          display: true,
          color: 'rgba(99, 234, 155, 1)',
          text: 'Donasi Barang (pcs)',
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
      <h3 className="text-white text-xl mb-4">Donasi Bulan Ini</h3>
      <Bar data={data} options={options} />
    </div>
  );
};
export default Login;
