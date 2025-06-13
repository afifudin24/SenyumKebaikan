import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import logo from '../assets/logo.png';
import google from '../assets/google.png'
import fb from '../assets/fb.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartSimple, faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS,   ArcElement, CategoryScale, LinearScale, PointElement, LineElement,  BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
   const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showChart, setShowChart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [users, setUsers] = useState([
    { email: 'admin@gmail.com', password: 'password1', role: 'admin', isVolunteer: false },
    { username: 'user@gmail.com', password: 'password2', role: 'user', isVolunteer : true },
    // { username: 'user3', password: 'password3', role: 'volunteer' },
  ]);
const toggleMenu = () => {
  setShowMenu(!showMenu);
};
const toggleChart = () => {
  setShowChart(!showChart);
};
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
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
    if (!email) {
      setEmailError('Email tidak boleh kosong');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Format email tidak valid');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password tidak boleh kosong');
      valid = false;
    }
    // cek ada user tidak berdasarkan username dan password dari variabel users
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!valid) return;
    if (user) {
      toast.success('Login Berhasil!');
       localStorage.setItem('user', JSON.stringify(user));
       localStorage.setItem('isLogin', true);
      if(user.role === 'admin'){
        navigate('/');
        // set ke localstorage

      } else if(user.role === 'user' && user.isVolunteer === true){
        navigate('/dashboardvolunteer');
        // set ke localstorage
      }
    } else {
      toast.error('Login Gagal!');
    }
    // Jika lolos validasi
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="flex  py-5 2xl:w-10/12 mx-auto overflow-x-hidden md:items-center items-center w-full gap-2  h-screen  justify-center px-5">
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
          <p className="text-sm md:text-base text-primary font-light 2xl:text-[20px] mt-2">Login Ke Akun Anda</p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <div className='flex justify-end'>
  <Link to="/forgotpassword" className="text-xs md:text-sm text-primary hover:underline">
    Lupa Sandi?
  </Link>
</div>
          <div className="flex justify-between items-center">
            <button type="submit" className="cursor-pointer text-xs md:text-sm bg-primary w-full text-white py-2 my-3 px-4 rounded-md hover:text-primary hover:bg-secondary">
              Masuk
            </button>
          </div>
        </form>
        
        <div class="flex items-center justify-center my-3 md:my-6">
  <hr class="flex-grow border-t border-gray-300"/>
  <span class="mx-4 text-gray-600">atau</span>
  <hr class="flex-grow border-t border-gray-300"/>
</div>
        <div className="flex justify-center items-center mt-3 text-sm md:mt-6 space-x-4">
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
          <span className='font-light'>Belum punya akun? </span>
          <a href="/register" className="text-primary font-semibold hover:underline">Register</a>
        </div>
        </div>
        </div>
      
        <div
  className={`bg-primary w-full overflow-y-auto md:overflow-y-hidden md:w-6/12  px-2 2xl:py-10 py-3 text-white rounded-lg transition-transform duration-500 ease-in-out 
    md:static h-full md:translate-x-0
    fixed top-0 left-0 z-40
    ${showMenu ? 'translate-x-0' : '-translate-x-full'}
  `}
>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      {/* Kartu Donasi Uang */}
          <div className="px-4 py-2 h-auto rounded-xl shadow-lg bg-secondary">
            <div className='flex justify-between items-center mb-2 '>
        <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi uang</h3>
        <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
            </div>
        <p className="text-xl text-center font-bold text-primary mb-4"><span className='align-super'>Rp</span> 196.000,00</p>
        <p className="text-xs text-center text-green-600">  <span className='text-accent'><FontAwesomeIcon icon={faChartLine} />  +25%</span> dari bulan lalu</p>
      </div>
      {/* Kartu Donasi Barang */}
      <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
      <div className='flex justify-between items-center mb-2 '>
        <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi Barang</h3>
        <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
            </div>
        <p className="text-xl text-center font-bold text-primary mb-4">17 Item</p>
        <p className="text-xs text-center text-green-600"> <span className='text-accent'> <FontAwesomeIcon icon={faChartLine} /> +25% </span> dari bulan lalu</p>
      </div>
      {/* Kartu Donasi Terakhir */}
      <div className="bg-green-50 px-4 py-2  h-auto rounded-xl shadow-lg">
      <div className='flex justify-between items-center mb-2 '>
        <h3 className="text-sm font-semibold  text-primary font-secondary">Donasi Terakhir</h3>
        <FontAwesomeIcon className='text-primary' icon={faEllipsis} />
            </div>
        <p className="text-lg text-center font-bold text-primary mb-4">15 Maret 2025</p>
        <a href="#" className="text-xs text-accent text-center mx-auto block hover:underline">Lihat Detail</a>
      </div>
        </div>
        <div className='2xl:mt-2 mt-1 py-1 px-5 relative'>
          <DonasiChart />
          <div className='text-end'>
          <button onClick={toggleChart} className='bg-accent cursor-pointer text-white py-2 my-2 px-4 text-xs rounded-md hover:text-primary hover:bg-secondary'>Tampilkan Campaign</button>
          </div>
         <div
  className={`absolute bg-white text-primary rounded-xl shadow-2xl p-5 bottom-0 right-0 transition-all duration-500 transform ${
    showChart
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-10 pointer-events-none'
  }`}
>
    <div className='flex my-1 items-center justify-between '>
  <p className="text-center  text-xs 2xl:text-sm font-secondary">
    Campaign yang Didukung
  </p>
  <div onClick={toggleChart} className='rounded-xl hover:bg-secondary hover:text-primary transition-all duration-75 cursor-pointer w-8 h-8 flex items-center justify-center bg-accent text-white'>
      <FontAwesomeIcon icon={faTimes} />
  </div>
    </div>
  <hr className="mb-3 text-accent" />
  <CampaignChart />
</div>
        </div>
        <div className='text-center 2xl:mt-12 mt-5'>
          <h3 className='font-semibold text-lg 2xl:text-2xl'>Transaparansi Donasi dalam Genggaman Anda</h3>
          <p className='mt-2 text-sm font-light 2xl:text-xl'>Sistem donasi berbasis blockchain untuk akuntabilitas dan keterbukaan penuh</p>
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
      <h3 className="text-white 2xl:text-xl text:lg mb-4">Donasi Bulan Ini</h3>
      <div className='2xl:hidden block'>
      <Bar data={data} options={options} height={120}/>
      </div>
      <div className='2xl:block hidden'>
      <Bar data={data} options={options} className='hidden 2xl:block' height={200}/>
      </div>
    </div>
  );
};
const CampaignChart = () => {
  const data = {
    // labels: ['Bantuan Pendidikan', 'Donasi Barang', 'Bantuan Pendidikan'],
    datasets: [
      {
        data: [40, 25, 35], // persentase
        backgroundColor: ['#c6f6d5', '#1a202c', '#68d391'], // warna sesuai gambar
        borderWidth: 0,
      },
    ],
  };
const options = {
  cutout: '70%', // lubang tengah donat
  plugins: {
    legend: {
      display: true,
      position: 'center',
      labels: {
        color: '#333',
       
        font: {
          size: 12
        }
      }
    },
   datalabels: {
  color: '#68B984', // warna teks
  backgroundColor: '#fff', // warna latar belakang label
  borderRadius: 999, // untuk membulatkan hingga tampak seperti lingkaran
  padding: 10, // jarak teks dengan tepi
  shadow : {
    color: '#68B984',
    offset: {
      x: 2,
      y: 2
    }
  },
  font: {
    weight: 'bold',
    size: 14
  },
  formatter: (value, context) => {
    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    const percentage = ((value / total) * 100).toFixed(0);
    return `${percentage}%`;
  },
  anchor: 'center',
  align: 'center',
  display: 'auto'
}
  }
};
  return (
    <div className="w-auto h-40 gap-3 flex items-center mx-auto">
      <div className='h-full relative'>
      <Doughnut className=' w-full text-center mx-auto' data={data} options={options} />
      <div className="absolute font-secondary text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center text-primary">
        <p className="text-xs">Total Campaign</p>
        <p className="text-2xl font-bold">5</p>
      </div>
      </div>
      {/* Legend Manual */}
      <div className="text-sm space-y-2  ">
        <div className="flex items-center gap-2 text-primary font-secondary">
          <span className="w-4 h-4 rounded-full  bg-[#c6f6d5] font-secondary"></span> Bantuan Pendidikan
        </div>
        <div className="flex items-center gap-2 text-primary font-secondary">
          <span className="w-4 h-4 rounded-full bg-[#1a202c]"></span> Donasi Barang
        </div>
        <div className="flex items-center gap-2 text-primary font-secondary">
          <span className="w-4 h-4 rounded-full bg-[#94c4a7]"></span> Bantuan Pendidikan
        </div>
      </div>
    </div>
  );
};
export default Login;